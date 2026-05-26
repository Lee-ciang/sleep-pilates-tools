import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sleep-pilates-tools.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sleep-calculator`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
  url: `${baseUrl}/sleep-debt-calculator`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
},
  ];
}