// Vendor product links for catalog parts, keyed by normalized part number
// (spaces removed, uppercased). When a catalog part matches, the visual catalog
// shows the vendor's buy link(s) in place of the generic find links.
export type Vendor = 'FFP' | '944online';

export interface VendorLink {
  vendor: Vendor;
  url: string;
}

// Per-vendor badge styling. FFP uses the FormFactor teal (brand colour).
export const VENDOR_STYLE: Record<Vendor, { label: string; class: string }> = {
  FFP: { label: 'FFP', class: 'border-guards/50 bg-guards/15 text-guards-light hover:border-guards hover:bg-guards/25' },
  '944online': { label: '944online', class: 'border-amber-400/50 bg-amber-400/10 text-amber-300 hover:border-amber-400 hover:bg-amber-400/20' },
};

const ONLINE944 = (slug: string): VendorLink => ({
  vendor: '944online',
  url: `https://944online.com/${slug}/`,
});

export const VENDOR_LINKS: Record<string, VendorLink[]> = {
  // ── FormFactor Performance ──
  '94460921700': [{ vendor: 'FFP', url: 'https://formfactorperformance.com/products/ignition-cable-support-bracket-porsche-924-944' }],
  '171837211A': [{ vendor: 'FFP', url: 'https://formfactorperformance.com/products/porsche-door-handle-seal-171-937-211-a' }],

  // ── 944online ──
  '99918172240': [ONLINE944('windshield-washer-hose')],
  // Steering rack banjo bolt (small) — four numbers, one product
  '99913401802': [ONLINE944('porsche-steering-rack-banjo-bolt-small')],
  '99913403202': [ONLINE944('porsche-steering-rack-banjo-bolt-small')],
  N0210532: [ONLINE944('porsche-steering-rack-banjo-bolt-small')],
  // Oil pressure relief valve o-rings — upper (82-95) and 87-95
  '99970714640': [ONLINE944('oil-pressure-relief-valve-o-ring-upper-82-95')],
  '99970714440': [ONLINE944('oil-pressure-relief-valve-o-ring-87-95')],
  '99911326840': [ONLINE944('early-front-crank-seal-38-x-55-x-7-82-to-84-ish-check-the-size')],
  '99911342641': [ONLINE944('rear-main-seal-924s-944-951-944s-944s2-968')],
  '99916602702': [ONLINE944('parking-brake-cable-securing-clip-924s-951-968-all-82-to-95')],
  '99918115250': [ONLINE944('vacuum-hose-to-j-boot')],
  '99992400340': [ONLINE944('brake-pedal-bushing-1706026025')],
  '99992400240': [ONLINE944('bushing-for-clutch-pedal-clevis')],
  '99992400140': [ONLINE944('bushing-for-clutch-power-spring')],
  '99905302001': [ONLINE944('rear-wheel-bearing-85-2-to-95-all-924s-944-951-968-all')],
  '99951201202': [ONLINE944('pressure-plate-bolt-944-turbo-set-of-all-9-86-to-91')],
  '99951002902': [ONLINE944('cam-holdown-bolt-944s-944s2-968-all-twin-cam-cars')],
  '99923035602': [ONLINE944('nipple-for-updated-turbo-water-hose')],
  '99970338800': [ONLINE944('fuel-rail-cover-rubber-mount')],
  '99911328240': [ONLINE944('upper-balance-shaft-seal')],
  '99905909800': [ONLINE944('inner-wheel-bearing')],
  '99918200336': [ONLINE944('lug-nut-all-924s-944-951-968-928-911')],
  '99953101402': [ONLINE944('cruise-control-servo-bushing-sleeve')],
  '99959197540': [ONLINE944('fuel-line-clamp-insert-944-951-968-85-2-to-95')],
};

export function getVendorLinks(pn: string): VendorLink[] {
  return VENDOR_LINKS[pn.replace(/\s+/g, '').toUpperCase()] ?? [];
}
