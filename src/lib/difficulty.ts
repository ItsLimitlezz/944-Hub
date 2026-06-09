// Difficulty levels for repair articles + their display styling.
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export const DIFFICULTY: Record<
  Difficulty,
  { label: string; text: string; dot: string; bg: string; help: string }
> = {
  beginner: {
    label: 'Beginner',
    text: 'text-emerald-400',
    dot: 'bg-emerald-400',
    bg: 'bg-emerald-400/10',
    help: 'Basic hand tools and a few hours — friendly for first-timers.',
  },
  intermediate: {
    label: 'Intermediate',
    text: 'text-amber-400',
    dot: 'bg-amber-400',
    bg: 'bg-amber-400/10',
    help: 'Some mechanical experience and specialty tools may be needed.',
  },
  advanced: {
    label: 'Advanced',
    text: 'text-red-400',
    dot: 'bg-red-400',
    bg: 'bg-red-400/10',
    help: 'A major job — significant skill, special tools, and time required.',
  },
};
