// Maps catalog illustrations ↔ sections of the 944/968 Torque Reference.
// The mapping lives in src/data/torque-map.json (also used by the script that
// injects per-generation catalog links into the torque article).
import map from '../data/torque-map.json';

export const TORQUE_ARTICLE = '/manual/reference/torque-reference';

const SECTION_TO_ILLUS = map as Record<string, string[]>;

// Match github-slugger (Astro's default heading-id generator): remove special
// chars, then replace each whitespace char with a hyphen (no collapsing).
function anchor(heading: string): string {
  return heading
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s/g, '-');
}

export interface TorqueSection {
  heading: string;
  anchor: string;
  url: string;
}

// Illustration id → torque sections that cover its fasteners.
const ILLUS_TO_SECTIONS = new Map<string, TorqueSection[]>();
for (const [heading, ids] of Object.entries(SECTION_TO_ILLUS)) {
  const section: TorqueSection = { heading, anchor: anchor(heading), url: `${TORQUE_ARTICLE}#${anchor(heading)}` };
  for (const id of ids) {
    if (!ILLUS_TO_SECTIONS.has(id)) ILLUS_TO_SECTIONS.set(id, []);
    ILLUS_TO_SECTIONS.get(id)!.push(section);
  }
}

export function getTorqueSectionsForIllus(id: string): TorqueSection[] {
  return ILLUS_TO_SECTIONS.get(id) ?? [];
}
