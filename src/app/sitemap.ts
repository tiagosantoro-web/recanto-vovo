import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.siteUrl}/`,
      // Data da geração do site: avisa o Google quando houve atualização.
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${site.siteUrl}/opengraph-image.png`],
    },
  ];
}
