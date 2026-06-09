import { getCollection, type CollectionEntry } from 'astro:content';
import type { CategoryId } from './categories';

export type Article = CollectionEntry<'articles'>;

const isProd = import.meta.env.PROD;

/** All non-draft articles (drafts hidden in production builds). */
export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('articles');
  return all.filter((a) => !(a.data.draft && isProd));
}

export async function getArticlesByCategory(category: CategoryId): Promise<Article[]> {
  const all = await getArticles();
  return all
    .filter((a) => a.data.category === category)
    .sort(
      (a, b) =>
        (a.data.subsystem ?? '').localeCompare(b.data.subsystem ?? '') ||
        a.data.order - b.data.order ||
        a.data.title.localeCompare(b.data.title),
    );
}

/** Group a category's articles by their subsystem heading. */
export function groupBySubsystem(articles: Article[]): { name: string; items: Article[] }[] {
  const map = new Map<string, Article[]>();
  for (const a of articles) {
    const key = a.data.subsystem ?? 'General';
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(a);
  }
  return [...map.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([name, items]) => ({ name, items }));
}

export async function getCategoryCounts(): Promise<Record<string, number>> {
  const all = await getArticles();
  const counts: Record<string, number> = {};
  for (const a of all) counts[a.data.category] = (counts[a.data.category] ?? 0) + 1;
  return counts;
}
