// Loads the extracted factory parts catalogs (src/data/catalog/*.json) produced
// by scripts/extract_catalog.py.
export interface CatalogPart {
  pos: string;
  pn: string;
  desc: string;
}
export interface Illustration {
  id: string;
  group: string;
  groupName: string;
  title: string;
  image: string | null;
  parts: CatalogPart[];
}
export interface Catalog {
  slug: string;
  label: string;
  model: string;
  illustrations: Illustration[];
}

const modules = import.meta.glob<{ default: Catalog }>('../data/catalog/*.json', { eager: true });
export const CATALOGS: Catalog[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => a.slug.localeCompare(b.slug));

export function getCatalog(slug: string): Catalog | undefined {
  return CATALOGS.find((c) => c.slug === slug);
}

export interface IllustrationRef extends Illustration {
  catalogSlug: string;
  catalogLabel: string;
}

export function allIllustrations(): IllustrationRef[] {
  return CATALOGS.flatMap((c) =>
    c.illustrations.map((i) => ({ ...i, catalogSlug: c.slug, catalogLabel: c.label })),
  );
}

/** Normalize a part number for matching (strip spaces). */
export function normPN(pn: string): string {
  return pn.replace(/\s+/g, '');
}

// The ten Porsche main groups, with icons for the catalog browser.
export const MAIN_GROUPS: { id: string; name: string; icon: string }[] = [
  { id: '1', name: 'Engine', icon: 'M5 12h2l1-2h4l1 2h3a2 2 0 0 1 2 2v1h2v3h-2v1a2 2 0 0 1-2 2H8l-3-3H3v-4h2zM9 6h6M12 6V4' },
  { id: '2', name: 'Fuel & Exhaust', icon: 'M14 3v18M5 21h9M5 21V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2M14 8h2.5a2 2 0 0 1 2 2v7a1.5 1.5 0 0 0 3 0V9l-3-3' },
  { id: '3', name: 'Transmission & Clutch', icon: 'M7 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM7 4v3M7 13v3M4 10H1M13 10h-3M16 8h5M16 12h5M16 16h5' },
  { id: '4', name: 'Front Suspension', icon: 'M3 13l2-5a3 3 0 0 1 2.8-2h8.4A3 3 0 0 1 19 8l2 5M3 13h18M6.5 17a1.5 1.5 0 1 0 0 .01M17.5 17a1.5 1.5 0 1 0 0 .01' },
  { id: '5', name: 'Rear Suspension', icon: 'M3 13l2-5a3 3 0 0 1 2.8-2h8.4A3 3 0 0 1 19 8l2 5M3 13h18M6.5 17a1.5 1.5 0 1 0 0 .01M17.5 17a1.5 1.5 0 1 0 0 .01' },
  { id: '6', name: 'Wheels & Brakes', icon: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M2 12h2M20 12h2' },
  { id: '7', name: 'Steering & Controls', icon: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM12 2v5M5 19l4-5M19 19l-4-5' },
  { id: '8', name: 'Body & Interior', icon: 'M4 4v16a1 1 0 0 0 1 1h14M8 4v13M4 8h4' },
  { id: '9', name: 'Electrical', icon: 'M13 2 4 14h7l-1 8 9-12h-7z' },
  { id: '0', name: 'Accessories', icon: 'M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' },
];
