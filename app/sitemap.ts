import { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/blog/", priority: 0.9, changeFrequency: "weekly" as const },
    {
      path: "/best-iptv-providers-norway/",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/norsk-iptv/",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/chromecast-iptv/",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
  ];

  return routes.map((route) => ({
    url: canonicalUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
