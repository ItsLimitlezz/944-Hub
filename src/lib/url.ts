// Prefix a root-absolute path with the configured base (e.g. "/944-Hub/" on
// GitHub Pages, "/" on a custom domain). External URLs and anchors pass through.
// `import.meta.env.BASE_URL` is set by `base` in astro.config and always ends
// with a trailing slash.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return BASE + path || '/';
}
