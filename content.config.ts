import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**/*.md",
      schema: z.object({
        title: z.string(),
        breadcrumbTitle: z.string().optional(),
        description: z.string(),
        date: z.string(),
        image: z.string().optional(),
        tags: z.array(z.string()),
        published: z.boolean().default(true),
        featured: z.boolean().default(false),
      }),
    }),
  },
});
