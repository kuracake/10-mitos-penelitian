import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const myths = defineCollection({
  loader: glob({
    base: './src/content/myths',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    mythNumber: z.number(),
    category: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  myths,
};