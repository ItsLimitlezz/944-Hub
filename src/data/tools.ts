// Catalog of Porsche 944 service tools. Articles reference these by `id` in
// their frontmatter (`tools: [...]`), which powers the "Tools you'll need"
// panel on each article and the "Used in" links on the Tools page.
//
// `buy` links are vendor *search* URLs by default (functional, but not affiliate
// or specific-product). Swap in exact product/affiliate links anytime.

export type ToolSection = 'special' | 'general' | 'diagnostic';

export interface BuyLink {
  label: string;
  url: string;
}

export interface Tool {
  id: string;
  name: string;
  /** Badge text — OEM / part number(s), e.g. "P229 / 9201". */
  oem?: string;
  section: ToolSection;
  description: string;
  /** Budget / workaround note. */
  alternative?: string;
  buy: BuyLink[];
}

export const TOOL_SECTIONS: { id: ToolSection; name: string; blurb: string }[] = [
  { id: 'special', name: 'Essential Special Tools', blurb: 'Job-specific tools you really do need to do it right.' },
  { id: 'general', name: 'Recommended General Tools', blurb: 'Workshop staples used across many 944 procedures.' },
  { id: 'diagnostic', name: 'Diagnostic Equipment', blurb: 'For reading codes, live data and electrical testing.' },
];

// Vendor search-link helpers.
const amazon = (q: string): BuyLink => ({ label: 'Amazon', url: `https://www.amazon.com/s?k=${encodeURIComponent(q)}` });
const ebay = (q: string): BuyLink => ({ label: 'eBay', url: `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(q)}` });
const pelican = (q: string): BuyLink => ({ label: 'Pelican Parts', url: `https://www.pelicanparts.com/searchindex/Search.htm?search=${encodeURIComponent(q)}` });

export const TOOLS: Tool[] = [
  // ── Essential special tools ──────────────────────────────
  {
    id: 'camshaft-holding-tool',
    name: 'Camshaft Holding Tool',
    oem: 'P229 / 9201',
    section: 'special',
    description: 'Holds the camshaft sprocket during timing belt tensioner adjustment.',
    alternative: 'VW/Audi camshaft sprocket holder (tool is shared across the VAG family).',
    buy: [ebay('Porsche 944 camshaft holding tool 9201'), amazon('camshaft sprocket holding tool VW Audi')],
  },
  {
    id: 'timing-belt-locking-tool',
    name: 'Timing Belt Locking Tool',
    oem: 'Porsche 9216',
    section: 'special',
    description: 'Locks the crankshaft at TDC #1 via the flywheel ring gear.',
    alternative: 'Generic TDC locking pin with an adapter plate.',
    buy: [ebay('Porsche 944 flywheel lock 9216'), amazon('944 flywheel locking tool')],
  },
  {
    id: 'harmonic-balancer-holding-tool',
    name: 'Harmonic Balancer Holding Tool',
    oem: 'P238',
    section: 'special',
    description: 'Prevents crankshaft rotation while loosening the center bolt.',
    alternative: 'A universal 4-pin flywheel holder can be adapted.',
    buy: [ebay('Porsche 944 harmonic balancer holding tool'), amazon('crankshaft pulley holding tool')],
  },
  {
    id: 'balance-shaft-locking-tool',
    name: 'Balance Shaft Locking Tool',
    oem: 'Porsche 9219',
    section: 'special',
    description: 'Locks both balance shafts simultaneously during belt replacement.',
    alternative: 'Drill bits of the correct diameter (6 mm) through the access holes is a documented workaround.',
    buy: [ebay('Porsche 944 balance shaft locking tool 9219'), pelican('944 balance shaft tool')],
  },
  {
    id: 'dme-diagnostic-adapter',
    name: 'DME Diagnostic Adapter',
    oem: 'VAG 1669 / KTS 500',
    section: 'special',
    description: "Reads fault codes from the 944's DME ECU (pre-OBD2).",
    alternative: 'Third-party adapters from specialized vendors; or Durametric software with a Porsche cable.',
    buy: [amazon('Porsche DME diagnostic adapter pre-OBD2'), ebay('Porsche 944 DME fault code reader')],
  },

  // ── Recommended general tools ────────────────────────────
  {
    id: 'torque-wrench-small',
    name: 'Torque Wrench — 10–130 Nm',
    oem: 'Various',
    section: 'general',
    description: 'Engine fasteners, suspension components and brake hardware.',
    alternative: 'Any calibrated click-type torque wrench in this range.',
    buy: [amazon('1/2 drive click torque wrench 10-130 Nm')],
  },
  {
    id: 'torque-wrench-large',
    name: 'Torque Wrench — 200–400 Nm',
    oem: 'Various',
    section: 'general',
    description: 'Crankshaft center bolt (≈130 Nm + angle) and rear axle nut (350 Nm).',
    alternative: '½" drive torque wrench with a ½"-to-¾" adapter for large sockets.',
    buy: [amazon('3/4 drive torque wrench 200-400 Nm')],
  },
  {
    id: 'fuel-pressure-gauge',
    name: 'Fuel Pressure Gauge — 0–6 bar',
    oem: 'Bosch / OTC',
    section: 'general',
    description: 'Diagnose LH-Jetronic fuel pressure faults.',
    alternative: 'A fuel pressure tester kit with a Bosch thread adapter.',
    buy: [amazon('fuel pressure gauge 0-6 bar Bosch')],
  },
  {
    id: 'coolant-pressure-tester',
    name: 'Coolant Pressure Tester',
    oem: 'Various',
    section: 'general',
    description: 'Pressure-test the cooling system for leaks and head gasket diagnosis.',
    alternative: 'AutoZone loaner tool (free) accepts standard cap adapters.',
    buy: [amazon('coolant pressure tester kit')],
  },
  {
    id: 'spring-compressor',
    name: 'Spring Compressor — MacPherson',
    oem: 'Various',
    section: 'general',
    description: 'Safely compress the strut spring for cartridge replacement.',
    alternative: 'Rent from a local parts store. DO NOT use C-clamp style compressors.',
    buy: [amazon('MacPherson strut spring compressor')],
  },
  {
    id: 'oil-filter-wrench',
    name: 'Oil Filter Wrench',
    oem: 'Cap / cup style',
    section: 'general',
    description: "Cleanly removes the spin-on oil filter — a cup/cap-style wrench that grips the filter's end flutes works best in the 944's tight space.",
    alternative: 'A strap or three-jaw wrench also works; match the size to your filter.',
    buy: [
      { label: 'Amazon.ca', url: 'https://amzn.to/43pUU6l' },
      { label: 'Pelican Parts', url: 'https://www.pelicanparts.com/More_Info/PEL006653SCH01A.htm?pn=PEL-006653SCH01A&bc=c&SVSVSI=0753' },
    ],
  },

  // ── Diagnostic equipment ─────────────────────────────────
  {
    id: 'durametric',
    name: 'Durametric Diagnostic Software',
    oem: 'Durametric / Foxwell NT630+',
    section: 'diagnostic',
    description: 'OBD fault-code reading, live data and actuator tests for the pre-1996 944.',
    alternative: 'Foxwell NT630 Plus supports Porsche-specific OBD1 protocols.',
    buy: [{ label: 'durametric.com', url: 'https://www.durametric.com/' }, amazon('Foxwell NT630 Plus')],
  },
  {
    id: 'multimeter',
    name: 'Digital Multimeter (4000+ count)',
    oem: 'Fluke 117 / Klein MM400',
    section: 'diagnostic',
    description: 'Sensor testing, resistance checks and voltage-drop testing.',
    alternative: 'Any 4000+ count auto-ranging DMM with a min/max hold function.',
    buy: [amazon('Fluke 117 multimeter'), amazon('Klein MM400 multimeter')],
  },
  {
    id: 'oscilloscope',
    name: 'Oscilloscope / Lab Scope',
    oem: 'Hantek 6022BE / PC-based',
    section: 'diagnostic',
    description: 'Injector waveforms, cam/crank sensor patterns and ignition primary traces.',
    alternative: 'PC-based USB scopes start under $100 and are fully capable.',
    buy: [amazon('Hantek 6022BE USB oscilloscope')],
  },
];

const BY_ID = new Map(TOOLS.map((t) => [t.id, t]));
export function getTool(id: string): Tool | undefined {
  return BY_ID.get(id);
}
export const TOOL_IDS = TOOLS.map((t) => t.id);
