import { defineCollection, z } from 'astro:content';

const letters = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    dek: z.string().optional(),
    coverLabel: z.string().optional(),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const thread = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    draft: z.boolean().default(false),
  }),
});

const models = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    dek: z.string().optional(),
    file: z.string().optional(),
    coverLabel: z.string().optional(),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { letters, thread, models };
