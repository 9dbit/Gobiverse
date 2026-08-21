import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/about", "/editorial-policy"],
        disallow: ["/", "/games/", "/tools/", "/tournaments", "/gear"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
