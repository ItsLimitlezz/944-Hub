// Global site + sponsor configuration. Edit here to rebrand.
export const SITE = {
  name: '944 Hub',
  tagline: 'The open-source Porsche 944 repair manual',
  description:
    'A community-driven, open-source repair and knowledge base for the Porsche 944, 944 Turbo, 924S and 968 — sponsored by FormFactor Performance.',
  sponsor: {
    name: 'FormFactor Performance',
    short: 'FFP',
    url: 'https://formfactorperformance.com',
  },
  github: 'https://github.com/ItsLimitlezz/944-Hub',
  discord: 'https://discord.gg/qyCxuHBV',
  // Affiliate disclosure (FTC). `short` = footer/inline note, `full` = expanded.
  affiliate: {
    short: 'Some product links are affiliate links — we may earn a commission at no extra cost to you.',
    full: 'As an Amazon Associate and through other vendor programs, FormFactor Performance earns from qualifying purchases made via some of the outbound product links on this site — at no extra cost to you. This helps keep 944 Hub free and open. We only link to parts and tools we believe are relevant; always verify fitment before buying.',
  },
} as const;

// Attribution sources → the small red badge shown on every article.
export type AuthorKey = 'CG' | 'FFP' | 'community';

export const AUTHORS: Record<
  AuthorKey,
  { label: string; full: string; url?: string; title: string }
> = {
  CG: {
    label: 'CG',
    full: "Clark's Garage",
    url: 'https://www.clarks-garage.com',
    title: "Legacy reference material from Clark's Garage",
  },
  FFP: {
    label: 'FFP',
    full: 'FormFactor Performance',
    url: 'https://formfactorperformance.com',
    title: 'Original content by FormFactor Performance',
  },
  community: {
    label: 'CC',
    full: 'Community Contributor',
    title: 'Contributed by the 944 Hub community',
  },
};
