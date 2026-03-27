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
    services: defineCollection({
      type: "data",
      source: "services/*.yml",
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        icon: z.string(),
        shortDescription: z.string(),
        price: z.number().nullable(),
        priceType: z.enum(["fixed", "hourly", "negotiable"]),
        fullDescription: z.string(),
        included: z.array(
          z.object({
            name: z.string(),
            price: z.number(),
          }),
        ),
        extras: z.array(
          z.object({
            name: z.string(),
            price: z.number(),
          }),
        ),
        relatedPosts: z.array(z.string()),
      }),
    }),
  },
});
