import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = new URL("https://ecoglobal-fuyouhin.co.jp");

    return [
        {
            url: new URL("/", base).toString(),
            changeFrequency: "weekly",
            priority: 1,
            alternates: {
                languages: {
                    en: `${base}/en`,
                    vi: `${base}/vi`,
                    ja: `${base}/ja`,
                },
            },
        },
        {
            url: new URL("/company", base).toString(),
            changeFrequency: "monthly",
            priority: 0.6,
            alternates: {
                languages: {
                    en: `${base}/en`,
                    vi: `${base}/vi`,
                    ja: `${base}/ja`,
                },
            },
        },
        {
            url: new URL("/privacy", base).toString(),
            changeFrequency: "yearly",
            priority: 0.4,
            alternates: {
                languages: {
                    en: `${base}/en`,
                    vi: `${base}/vi`,
                    ja: `${base}/ja`,
                },
            },
        },
        {
            url: new URL("/contact", base).toString(),
            changeFrequency: "monthly",
            priority: 0.7,
            alternates: {
                languages: {
                    en: `${base}/en`,
                    vi: `${base}/vi`,
                    ja: `${base}/ja`,
                },
            },
        },
        {
            url: new URL("/work", base).toString(),
            changeFrequency: "monthly",
            priority: 0.5,
            alternates: {
                languages: {
                    en: `${base}/en`,
                    vi: `${base}/vi`,
                    ja: `${base}/ja`,
                },
            },
        },
    ];
}


