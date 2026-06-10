// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ── Deployment target ────────────────────────────────────────────────
// GitHub Pages project site → https://itslimitlezz.github.io/944-Hub/
// To move to a custom domain later: set BASE = '/', SITE to your domain,
// and add a public/CNAME file (see README → Deployment).
const BASE = process.env.PAGES_BASE ?? '/944-Hub';
const SITE = process.env.PAGES_SITE ?? 'https://itslimitlezz.github.io';
const basePrefix = BASE.replace(/\/$/, '');

/**
 * Rehype plugin: prefix every root-absolute href/src in rendered Markdown with
 * the base path, so the 177 ported articles' internal links and images keep
 * working under a project subpath — without baking the base into the content.
 */
function rehypeBasePaths() {
  if (!basePrefix) return () => {};
  /** @param {any} node */
  const walk = (node) => {
    if (node.type === 'element' && node.properties) {
      for (const attr of ['href', 'src']) {
        const v = node.properties[attr];
        if (typeof v === 'string' && v.startsWith('/') && !v.startsWith('//')) {
          node.properties[attr] = basePrefix + v;
        }
      }
    }
    if (node.children) node.children.forEach(walk);
  };
  return (/** @type {any} */ tree) => walk(tree);
}

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  // Preload pages on hover (McMaster-Carr style) so clicks feel instant — the
  // HTML is already fetched by the time you click.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  // All article images are static files under /public, so no optimization
  // service (sharp) is required.
  image: { service: passthroughImageService() },
  markdown: { rehypePlugins: [rehypeBasePaths] },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
