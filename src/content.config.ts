import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    color: z.string().optional(),
    hero: z.string().optional(),
    blob: z.string().optional(),
    screenshots: z.array(z.string()).optional(),
  }),
});

export const collections = { caseStudies };
