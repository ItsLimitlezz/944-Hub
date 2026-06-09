// Catalog of replacement parts & consumables. Articles reference these by `id`
// in frontmatter (`parts: [...]`), rendering a "Parts & consumables" section
// with real where-to-buy links. Mirrors src/data/tools.ts.

export interface BuyLink {
  label: string;
  url: string;
}

export interface Part {
  id: string;
  name: string;
  /** Manufacturer / OEM part number, shown as a badge. */
  partNumber?: string;
  /** Fitment / usage note. */
  note?: string;
  buy: BuyLink[];
}

export const PARTS: Part[] = [
  {
    id: 'oil-filter',
    name: 'Engine Oil Filter',
    partNumber: 'Mann W 719/22',
    note: 'Spin-on oil filter for the 944. Verify fitment for your specific year and variant.',
    buy: [
      { label: 'Amazon.ca', url: 'https://amzn.to/4v65trA' },
      {
        label: 'NAPA Canada',
        url: 'https://www.napacanada.com/en/p/MANW71922?srsltid=AfmBOorM6gv_vl9nUXz9RnuV2IXU0AhfP9-Pq84mmejK_wf_xDs1XIRt',
      },
    ],
  },
];

const BY_ID = new Map(PARTS.map((p) => [p.id, p]));
export function getPart(id: string): Part | undefined {
  return BY_ID.get(id);
}
export const PART_IDS = PARTS.map((p) => p.id);
