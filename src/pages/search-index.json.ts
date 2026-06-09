import type { APIRoute } from 'astro';
import { getArticles } from '../lib/content';
import { getCategory } from '../lib/categories';
import { withBase } from '../lib/url';

// Lightweight client-side search index (title + metadata only).
export const GET: APIRoute = async () => {
  const articles = await getArticles();
  const index = articles.map((a) => ({
    title: a.data.title,
    category: a.data.category,
    categoryName: getCategory(a.data.category)?.name ?? a.data.category,
    subsystem: a.data.subsystem ?? '',
    author: a.data.author,
    difficulty: a.data.difficulty,
    code: a.data.code ?? '',
    url: withBase(`/manual/${a.data.category}/${a.id.split('/').pop()}`),
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
