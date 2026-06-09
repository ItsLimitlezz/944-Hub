// Catalog of replacement parts & consumables. Articles reference these by `id`
// in frontmatter (`parts: [...]`); the /parts catalog also filters them by
// system, kind and fitment. Buy links are added manually (real vendor URLs).

import type { CategoryId } from '../lib/categories';
import type { ModelId } from './models';

export interface BuyLink {
  label: string;
  url: string;
}

export type PartKind = 'maintenance' | 'replacement';

export interface Part {
  id: string;
  name: string;
  /** Manufacturer / OEM part number, shown as a badge. */
  partNumber?: string;
  /** Fitment / usage note. */
  note?: string;
  /** Which subsystem this belongs to (one of the six manual systems). */
  system: CategoryId;
  /** Maintenance/consumable vs replacement component. */
  kind: PartKind;
  /** Variants this fits — ['all'] for universal, else specific model ids. */
  fitment: (ModelId | 'all')[];
  /** Optional link to a 3D-printable model (Printables, Thingiverse, etc.). */
  printable?: BuyLink;
  buy: BuyLink[];
}

export const PARTS: Part[] = [
  // ── Engine — maintenance / consumables ───────────────────
  {
    id: 'oil-filter',
    name: 'Engine Oil Filter',
    partNumber: 'Mann W 719/22',
    note: 'Spin-on oil filter for the 944. Verify fitment for your specific year and variant.',
    system: 'engine',
    kind: 'maintenance',
    fitment: ['all'],
    buy: [
      { label: 'Amazon.ca', url: 'https://amzn.to/4v65trA' },
      {
        label: 'NAPA Canada',
        url: 'https://www.napacanada.com/en/p/MANW71922?srsltid=AfmBOorM6gv_vl9nUXz9RnuV2IXU0AhfP9-Pq84mmejK_wf_xDs1XIRt',
      },
    ],
  },
  {
    id: 'engine-oil-castrol-gtx-classic-20w50',
    name: 'Castrol GTX Classic 20W-50 (5 L)',
    note: 'A 20W-50 mineral oil well suited to the 944 engine — a sensible choice for higher-mileage motors and warmer climates. Confirm grade and spec for your build.',
    system: 'engine',
    kind: 'maintenance',
    fitment: ['all'],
    buy: [
      {
        label: 'Amazon.ca',
        url: 'https://www.amazon.ca/Castrol-GTX-Classic-20W-50-Motor/dp/B0BZDPJN2K?crid=2D0X4NNVPI1D6&dib=eyJ2IjoiMSJ9.oaHdvmQuFrL4qd7xd8alIWGjZOwfu1iZVc4leyNhYwU1yQETvA-llBizrPrZzPR3oVEtY_3UG-Jp65OywzcskfHzY4jzxxbLylg8ELAvPQetN9rfdP6vVZ7QSd49sChfl8BAafU8h71U7I2qHcWJRR-TkiGiCDDzinRKIRE2Pg-edk2NCw6K4BcSI_ov-TYAIRTarpZ3YwI5a7KZBJDi8Ax6d1JdlpHknKFEgvjCSYSU_i5XUesHXw1882tDigPcuEUKSYBbDPen_7G0sZpo_ECGk-F8iLJ_g6XmrX8wmnQ.j9vC5y1UblBFWBvyQQPHhBqA1TOtL2LaAprTuy2in2A&dib_tag=se&keywords=20w50&qid=1781037337&sprefix=20w%2Caps%2C194&sr=8-5&linkCode=ll2&tag=ffp03a-20&linkId=0074effdec926699d7bf8684ec8607ef&ref_=as_li_ss_tl',
      },
    ],
  },
  {
    id: 'engine-oil-millers-classic-sport-20w50',
    name: 'Millers Oils Classic Sport High Performance 20W-50',
    note: 'A high-performance 20W-50 engine oil formulated for classic engines. Confirm grade and spec for your build.',
    system: 'engine',
    kind: 'maintenance',
    fitment: ['all'],
    buy: [{ label: 'Ultraray Motorsports', url: 'https://ultraraymotorsports.com/product/classic-high-performance-20w50-nt/' }],
  },
  {
    id: 'serpentine-belt-ac',
    name: 'Accessory Drive Belt — with A/C',
    partNumber: '999 192 206 50',
    note: 'Alternator / accessory drive belt for cars equipped with air conditioning.',
    system: 'engine',
    kind: 'maintenance',
    fitment: ['all'],
    buy: [
      {
        label: 'Amazon.ca',
        url: 'https://www.amazon.ca/gp/product/B0CT2HXXVT?smid=A30WUG2ZDGM0XM&th=1&linkCode=ll2&tag=ffp03a-20&linkId=18bb310b00ef9bcf6bcf217bc372b7b6&ref_=as_li_ss_tl',
      },
      { label: 'Pelican Parts', url: 'https://www.pelicanparts.com/More_Info/99919220650.htm?pn=999-192-206-50-M21&bc=c&SVSVSI=0753' },
    ],
  },
  {
    id: 'serpentine-belt-no-ac',
    name: 'Accessory Drive Belt — without A/C',
    partNumber: '999 192 204 50',
    note: 'Alternator / accessory drive belt for cars without air conditioning.',
    system: 'engine',
    kind: 'maintenance',
    fitment: ['all'],
    buy: [
      { label: 'Amazon.ca', url: 'https://amzn.to/4dZjDEP' },
      { label: 'Pelican Parts', url: 'https://www.pelicanparts.com/More_Info/99919220450.htm?pn=999-192-204-50-M21&bc=c&SVSVSI=0753' },
    ],
  },

  // ── Brakes — maintenance / consumables ───────────────────
  {
    id: 'brake-fluid-millers-300-plus',
    name: 'Millers Oils Racing Brake Fluid 300 Plus',
    note: 'High-temperature racing brake fluid with a very high dry boiling point — well suited to track and spirited street use. Also works for bleeding the clutch hydraulics. Renew regularly, as it is hygroscopic.',
    system: 'brakes-suspension',
    kind: 'maintenance',
    fitment: ['all'],
    buy: [{ label: 'Ultraray Motorsports', url: 'https://ultraraymotorsports.com/product/racing-brake-fluid-300-plus/' }],
  },

  // ── Transmission & clutch — replacement ──────────────────
  {
    id: 'clutch-kit-944-turbo',
    name: 'Sachs Clutch Kit — 944 Turbo (951)',
    partNumber: '951 116 911 00',
    note: 'Stock Sachs clutch kit for the 944 Turbo. Includes the 951 pressure plate (951-116-023-01), 951 stock sprung disc (951-116-011-15) and 951 release bearing (951-116-082-01).',
    system: 'transmission-clutch',
    kind: 'replacement',
    fitment: ['944turbo'],
    buy: [{ label: 'Lindsey Racing', url: 'https://www.lindseyracing.com/LR/Porsche/951-116-911-00.html' }],
  },
  {
    id: 'clutch-kit-944-na',
    name: 'Sachs Clutch Kit — 944 8V / 924S / 944S / 944S2',
    partNumber: '944 116 911 01',
    note: 'Stock Sachs clutch kit for the 944 8V normally-aspirated (through 1989), 924S, 944S and 944S2. Includes the sprung-hub disc, pressure plate and release bearing.',
    system: 'transmission-clutch',
    kind: 'replacement',
    fitment: ['944', '924s', '944s', '944s2'],
    buy: [{ label: 'Lindsey Racing', url: 'https://www.lindseyracing.com/LR/Porsche/944-116-911-01.html' }],
  },

  // ── Body / interior — replacement (3D-printable example) ──
  {
    id: 'dash-vent-louvers',
    name: 'Center Dash Vent Louvers',
    note: 'The brittle center-dash air-vent louvers crack with age and the OEM part is often unavailable. Several community 3D-printable replacements exist.',
    system: 'body',
    kind: 'replacement',
    fitment: ['all'],
    printable: { label: 'Printables', url: 'https://www.printables.com/search/models?q=porsche%20944%20dash%20vent' },
    buy: [{ label: 'Pelican Parts', url: 'https://www.pelicanparts.com/Porsche/944/Porsche-944-Parts.htm' }],
  },
];

const BY_ID = new Map(PARTS.map((p) => [p.id, p]));
export function getPart(id: string): Part | undefined {
  return BY_ID.get(id);
}
export const PART_IDS = PARTS.map((p) => p.id);
