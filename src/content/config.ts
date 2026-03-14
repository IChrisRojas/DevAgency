import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const services = defineCollection({
  loader: file("src/content/services/services.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string(),
  }),
});

const projects = defineCollection({
  loader: file("src/content/projects/projects.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    imageWebP: z.string().optional(),
    imagePosition: z.string().optional(),
    imageObjectFit: z.string().optional(),
    tags: z.array(z.string()),
    link: z.string().optional(),
  }),
});

export const collections = { services, projects };
