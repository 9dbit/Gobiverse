import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/about"),
      lastModified: new Date("2026-08-20"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/editorial-policy"),
      lastModified: new Date("2026-08-20"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
