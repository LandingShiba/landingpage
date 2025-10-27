import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = new URL("https://ecoglobal-fuyouhin.co.jp");

    return [
        {
            url: new URL("/", base).toString(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: new URL("/company", base).toString(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: new URL("/privacy", base).toString(),
            changeFrequency: "yearly",
            priority: 0.4,
        },
        {
            url: new URL("/contact", base).toString(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: new URL("/work", base).toString(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
    ];
}


