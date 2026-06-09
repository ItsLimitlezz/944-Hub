// Category metadata: drives the home grid, nav, and category pages.
// The first six are the core repair-manual systems; the rest are the
// "beyond the manual" sections.
export type CategoryId =
  | 'engine'
  | 'fuel-ignition'
  | 'electrical'
  | 'body'
  | 'transmission-clutch'
  | 'brakes-suspension'
  | 'troubleshooting'
  | 'maintenance'
  | 'reference';

export interface Category {
  id: CategoryId;
  name: string;
  short: string;
  blurb: string;
  /** Inline SVG icon path data (24x24 viewBox, stroke-based). */
  icon: string;
  /** Whether this is one of the six core shop-manual systems. */
  manual: boolean;
}

// Simple, recognizable line icons (Lucide-style 24x24 stroke paths).
const ICONS = {
  engine:
    'M5 12h2l1-2h4l1 2h3a2 2 0 0 1 2 2v1h2v3h-2v1a2 2 0 0 1-2 2H8l-3-3H3v-4h2zM9 6h6M12 6V4',
  fuel: 'M14 3v18M5 21h9M5 21V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2M14 8h2.5a2 2 0 0 1 2 2v7a1.5 1.5 0 0 0 3 0V9l-3-3',
  electrical: 'M13 2 4 14h7l-1 8 9-12h-7z',
  body: 'M3 13l2-5a3 3 0 0 1 2.8-2h8.4A3 3 0 0 1 19 8l2 5M3 13h18M3 13v4h3M21 13v4h-3M7 17h10M6.5 17a1.5 1.5 0 1 0 0 .01M17.5 17a1.5 1.5 0 1 0 0 .01',
  transmission:
    'M7 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM7 4v3M7 13v3M4 10H1M13 10h-3M9.2 7.8 11 6M5 13l-1.8 1.8M5 7 3.2 5.2M9.2 12.2 11 14M16 8h5M16 12h5M16 16h5',
  brakes:
    'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M2 12h2M20 12h2',
  troubleshoot:
    'M9 2a4 4 0 0 1 4 4c0 1.5-.8 2.3-1.5 3-.5.5-.8 1-.8 2M11 16h.01M5 11l-2 2 2 2M19 13l2-2-2-2',
  maintenance:
    'M14.7 6.3a4 4 0 0 0-5.4 5.3L3 18l3 3 6.4-6.3a4 4 0 0 0 5.3-5.4l-2.6 2.6-2.3-.4-.4-2.3z',
  reference:
    'M4 4v16a1 1 0 0 0 1 1h14M8 4v13M4 8h4M8 7l4-2 8 3v11l-8-3-4 2',
};

export const CATEGORIES: Category[] = [
  {
    id: 'engine',
    name: 'Engine',
    short: 'Engine',
    blurb: 'Timing belts, cylinder head, cooling, lubrication, exhaust and internals.',
    icon: ICONS.engine,
    manual: true,
  },
  {
    id: 'fuel-ignition',
    name: 'Fuel & Ignition',
    short: 'Fuel & Ignition',
    blurb: 'Fuel delivery, DME engine management, ignition, air intake and tuning.',
    icon: ICONS.fuel,
    manual: true,
  },
  {
    id: 'electrical',
    name: 'Electrical',
    short: 'Electrical',
    blurb: 'Wiring, lighting, gauges, sensors, relays and troubleshooting circuits.',
    icon: ICONS.electrical,
    manual: true,
  },
  {
    id: 'body',
    name: 'Body',
    short: 'Body',
    blurb: 'Exterior, interior, sunroof, climate control, trim and rust repair.',
    icon: ICONS.body,
    manual: true,
  },
  {
    id: 'transmission-clutch',
    name: 'Transmission & Clutch',
    short: 'Trans & Clutch',
    blurb: 'Manual and automatic transaxles, clutch, torque tube and shifting.',
    icon: ICONS.transmission,
    manual: true,
  },
  {
    id: 'brakes-suspension',
    name: 'Brakes & Suspension',
    short: 'Brakes & Susp.',
    blurb: 'Brakes, bleeding, struts, bushings, alignment, steering and wheels.',
    icon: ICONS.brakes,
    manual: true,
  },
  {
    id: 'troubleshooting',
    name: 'Troubleshooting',
    short: 'Troubleshooting',
    blurb: 'Symptom-first diagnostic guides for common 944 problems.',
    icon: ICONS.troubleshoot,
    manual: false,
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    short: 'Maintenance',
    blurb: 'Routine service schedules, fluids and preventive care.',
    icon: ICONS.maintenance,
    manual: false,
  },
  {
    id: 'reference',
    name: 'Reference',
    short: 'Reference',
    blurb: 'Torque specs, bolt charts, diagrams and quick-reference data.',
    icon: ICONS.reference,
    manual: false,
  },
];

export const MANUAL_CATEGORIES = CATEGORIES.filter((c) => c.manual);
export const EXTRA_CATEGORIES = CATEGORIES.filter((c) => !c.manual);

export function getCategory(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}
