import { MetadataRoute } from "next";
import { caseStudiesData } from "@/data/case-studies";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyRoutes = caseStudiesData.map((study) => ({
    url: `${siteUrl}/case-studies/${study.projectSlug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...caseStudyRoutes,
  ];
}
