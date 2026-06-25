import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().default("Surya Foods Editorial"),
    tags: z.array(z.string()).default([]),
    category: z
      .enum(["Industry Insights", "Company News", "Rice Knowledge", "Export Guide"])
      .default("Industry Insights"),
  }),
});

export const collections = { blog };
