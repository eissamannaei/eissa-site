import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

export const dynamic = "force-static";

const BASE = "https://eissaalmannaei.ae";
const paths = ["", "/work", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    paths.map((p) => ({
      url: `${BASE}/${locale}${p}`,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
  );
}
