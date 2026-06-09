// Porsche 944 family variants, used by the parts catalog selector to filter
// fitment. A part's `fitment` is either ['all'] or a list of these ids.
export type ModelId = '944' | '944s' | '944s2' | '944turbo' | '924s';

export interface CarModel {
  id: ModelId;
  name: string;
  years: string;
  blurb: string;
}

export const MODELS: CarModel[] = [
  { id: '944', name: '944 (8V)', years: '1983–1989', blurb: '2.5L / 2.7L 8-valve normally aspirated' },
  { id: '944s', name: '944 S (16V)', years: '1987–1988', blurb: '2.5L 16-valve normally aspirated' },
  { id: '944s2', name: '944 S2', years: '1989–1991', blurb: '3.0L 16-valve normally aspirated' },
  { id: '944turbo', name: '944 Turbo (951)', years: '1986–1991', blurb: '2.5L turbocharged' },
  { id: '924s', name: '924 S', years: '1987–1988', blurb: '2.5L 8-valve (944 running gear)' },
];

const BY_ID = new Map(MODELS.map((m) => [m.id, m]));
export function getModel(id: string): CarModel | undefined {
  return BY_ID.get(id as ModelId);
}
