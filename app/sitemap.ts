import type { MetadataRoute } from "next";
import { allTools } from "@/app/toolData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sleep-pilates-tools.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...allTools.map((tool) => ({
      url: `${baseUrl}${tool.href}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
