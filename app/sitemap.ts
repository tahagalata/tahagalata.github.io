import type { MetadataRoute } from "next";

// Required for `output: "export"`.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tahagalata.com",
      lastModified: new Date("2026-09-20"),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
