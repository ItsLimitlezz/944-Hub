// FormFactor Performance product links, keyed by normalized part number
// (spaces removed, uppercased). When a catalog part matches, the visual catalog
// shows a blue "FFP" buy link in place of the generic find links.
export interface FFPProduct {
  url: string;
}

export const FFP_PRODUCTS: Record<string, FFPProduct> = {
  // Ignition cable support bracket (924 / 944) — part 944 609 217 00
  '94460921700': { url: 'https://formfactorperformance.com/products/ignition-cable-support-bracket-porsche-924-944' },
  // Door handle seal — part 171 837 211 A
  '171837211A': { url: 'https://formfactorperformance.com/products/porsche-door-handle-seal-171-937-211-a' },
};

export function getFFP(pn: string): FFPProduct | undefined {
  return FFP_PRODUCTS[pn.replace(/\s+/g, '').toUpperCase()];
}
