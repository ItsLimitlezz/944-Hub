import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Article content lives as Markdown files under src/content/articles/<category>/<slug>.md
// Body images are stored in /public/articles/<slug>/ and referenced with absolute paths,
// so contributors can drop in screenshots without touching the build pipeline.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    // One of the six repair-manual systems, or a "beyond the manual" section.
    category: z.enum([
      'engine',
      'fuel-ignition',
      'electrical',
      'body',
      'transmission-clutch',
      'brakes-suspension',
      'troubleshooting',
      'maintenance',
      'reference',
    ]),
    // Sub-grouping within a category, e.g. "Brakes", "Timing Belt", "Cooling System".
    subsystem: z.string().optional(),
    // How involved the job is, so readers know what to expect.
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('intermediate'),
    // Tool ids (see src/data/tools.ts) needed for this procedure.
    tools: z.array(z.string()).default([]),
    // Who wrote / sourced this article. Drives the red attribution badge.
    author: z.enum(['CG', 'FFP', 'community']).default('FFP'),
    // Optional human-readable contributor name (esp. for community authors).
    authorName: z.string().optional(),
    // Original source URL, shown as a "View original" link for ported articles.
    sourceUrl: z.string().url().optional(),
    description: z.string().optional(),
    // Original Clark's Garage page code, e.g. "BRAKE-01" — handy for cross-reference.
    code: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { articles };
