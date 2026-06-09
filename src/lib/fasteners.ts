// Builds a deduped fastener index from the factory catalog data, mapping each
// Porsche fastener to its ISO/DIN standard so people can source generic
// equivalents. Also provides a curated standards reference.
import { CATALOGS } from './catalog';

export type FastenerType = 'Bolt' | 'Screw' | 'Nut' | 'Washer' | 'Stud';

export const FASTENER_TYPES: FastenerType[] = ['Bolt', 'Screw', 'Nut', 'Washer', 'Stud'];

interface Rule {
  re: RegExp;
  type: FastenerType;
  standard: string;
}

// Order matters: most specific first. Descriptions come from the factory catalog.
const RULES: Rule[] = [
  { re: /wheel bolt/i, type: 'Bolt', standard: 'Porsche ball-seat (special)' },
  { re: /wheel nut/i, type: 'Nut', standard: 'Porsche ball-seat (special)' },
  { re: /socket.?head|hex.?socket|allen|cap screw|cheese.?head|cylinder.?screw/i, type: 'Bolt', standard: 'DIN 912 · ISO 4762 (socket cap)' },
  { re: /hexagon.?head bolt|hex bolt|hexagon.?head screw|hexagon screw/i, type: 'Bolt', standard: 'DIN 931/933 · ISO 4014/4017 (hex)' },
  { re: /countersunk|counter.?sunk|flat.?head|csk/i, type: 'Screw', standard: 'DIN 965 · ISO 7046 (countersunk)' },
  { re: /tapping screw|sheet.?metal screw|self.?tapping|oval.?head sheet/i, type: 'Screw', standard: 'DIN 7981 · ISO 1481 (self-tapping)' },
  { re: /pan.?head|fillister|round.?head|oval.?head|raised.?head|lens.?head/i, type: 'Screw', standard: 'DIN 7985 · ISO 7045 (pan head)' },
  { re: /lock.?nut|self.?locking|nyloc|stop nut/i, type: 'Nut', standard: 'DIN 985 · ISO 10511 (lock nut)' },
  { re: /cap nut|domed nut|acorn/i, type: 'Nut', standard: 'DIN 1587 (cap nut)' },
  { re: /speed nut|spring nut|clip nut|cage nut/i, type: 'Nut', standard: 'sheet-metal clip nut' },
  { re: /hexagon nut|hex nut|\bnut\b/i, type: 'Nut', standard: 'DIN 934 · ISO 4032 (hex nut)' },
  { re: /spring washer|lock washer|spring ring/i, type: 'Washer', standard: 'DIN 127 (spring lock)' },
  { re: /concave washer|conical washer|cup washer|dished/i, type: 'Washer', standard: 'conical (special)' },
  { re: /sealing ring|seal ring|seal washer|gasket ring/i, type: 'Washer', standard: 'DIN 7603 (sealing washer)' },
  { re: /\bwasher\b/i, type: 'Washer', standard: 'DIN 125 · ISO 7089 (flat)' },
  { re: /\bstud\b|threaded pin|set.?screw|grub screw/i, type: 'Stud', standard: 'DIN 938/939 (stud)' },
  { re: /\bbolt\b/i, type: 'Bolt', standard: 'DIN 931/933 · ISO 4014/4017 (hex)' },
  { re: /\bscrew\b/i, type: 'Screw', standard: 'machine screw' },
];

const EXCLUDE = /plug|grommet|bush|clamp|bracket|union|nipple|\brivet\b|insert|cable|hose|pipe|valve|cover|sleeve|spacer|housing|flange|shaft/i;

export function classifyFastener(desc: string): { type: FastenerType; standard: string } | null {
  if (EXCLUDE.test(desc)) return null;
  for (const r of RULES) {
    if (r.re.test(desc)) return { type: r.type, standard: r.standard };
  }
  return null;
}

export interface Fastener {
  pn: string;
  type: FastenerType;
  standard: string;
  desc: string;
  spec?: string;
  /** Thread diameter key for filtering, e.g. "M8". */
  sizeKey: string;
  /** Porsche Norm (DIN/ISO standard) part — the N-numbers. */
  isNorm: boolean;
  uses: { catalog: string; id: string; title: string }[];
}

function sizeKeyOf(spec?: string): string {
  const m = spec?.match(/^M(\d{1,2})/);
  return m ? `M${m[1]}` : '';
}

export function getFasteners(): Fastener[] {
  const map = new Map<string, Fastener>();
  for (const c of CATALOGS) {
    for (const ill of c.illustrations) {
      for (const p of ill.parts) {
        const cls = classifyFastener(p.desc);
        if (!cls) continue;
        let f = map.get(p.pn);
        if (!f) {
          f = { pn: p.pn, type: cls.type, standard: cls.standard, desc: p.desc,
                spec: p.spec, sizeKey: sizeKeyOf(p.spec), isNorm: p.pn.startsWith('N '), uses: [] };
          map.set(p.pn, f);
        }
        if (p.spec && !f.spec) {
          f.spec = p.spec;
          f.sizeKey = sizeKeyOf(p.spec);
        }
        if (f.uses.length < 12 && !f.uses.some((u) => u.id === ill.id && u.catalog === c.slug)) {
          f.uses.push({ catalog: c.slug, id: ill.id, title: ill.title });
        }
      }
    }
  }
  const typeOrder = Object.fromEntries(FASTENER_TYPES.map((t, i) => [t, i]));
  return [...map.values()].sort(
    (a, b) =>
      typeOrder[a.type] - typeOrder[b.type] ||
      (parseInt(a.sizeKey.slice(1) || '99') - parseInt(b.sizeKey.slice(1) || '99')) ||
      a.pn.localeCompare(b.pn),
  );
}

// Curated ISO/DIN reference for the explainer section.
export const STANDARDS: { std: string; name: string; note: string }[] = [
  { std: 'DIN 933 / ISO 4017', name: 'Hex head bolt — fully threaded', note: 'The everyday hex bolt; thread runs the whole length.' },
  { std: 'DIN 931 / ISO 4014', name: 'Hex head bolt — partial thread', note: 'Hex bolt with a smooth shank under the head.' },
  { std: 'DIN 912 / ISO 4762', name: 'Socket head cap screw (Allen)', note: 'Cylindrical head with a hex socket; very common on the 944.' },
  { std: 'DIN 7985 / ISO 7045', name: 'Pan head screw (cross)', note: 'Rounded head, Phillips/Pozi drive — trim and brackets.' },
  { std: 'DIN 965 / ISO 7046', name: 'Countersunk (flat) head', note: 'Sits flush; cross or socket drive.' },
  { std: 'DIN 7981 / ISO 1481', name: 'Self-tapping screw', note: 'Cuts its own thread into sheet metal/plastic.' },
  { std: 'DIN 934 / ISO 4032', name: 'Hex nut', note: 'Standard six-sided nut.' },
  { std: 'DIN 985 / ISO 10511', name: 'Nyloc lock nut', note: 'Nylon insert resists loosening.' },
  { std: 'DIN 125 / ISO 7089', name: 'Flat washer', note: 'Spreads clamping load.' },
  { std: 'DIN 127', name: 'Spring (split) lock washer', note: 'Adds tension to resist backing off.' },
];

// Thread pitch + common wrench sizes (coarse). Porsche also uses fine pitches —
// always confirm against the catalog spec.
export const THREADS: { size: string; pitch: string; hex: string }[] = [
  { size: 'M5', pitch: '0.80', hex: '8 mm' },
  { size: 'M6', pitch: '1.00', hex: '10 mm' },
  { size: 'M7', pitch: '1.00', hex: '11 mm' },
  { size: 'M8', pitch: '1.25', hex: '13 mm' },
  { size: 'M10', pitch: '1.50', hex: '17 mm' },
  { size: 'M12', pitch: '1.75', hex: '19 mm' },
  { size: 'M14', pitch: '2.00', hex: '22 mm' },
];
