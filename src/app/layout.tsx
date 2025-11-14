import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ecoglobal-fuyouhin.co.jp"),
  keywords: ["不用品回収", "エコグロバル", "不用品"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://ecoglobal-fuyouhin.co.jp/",
    siteName: "不用品回収エコ・グローバル",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};
const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  weight: ["400", "500", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root level,
// a layout file is required, even if it's just passing through its children.
export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body
        className={`${roboto.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "不用品回収エコ・グローバル",
              url: "https://ecoglobal-fuyouhin.co.jp/",
              telephone: "+81-477-234-143",
              address: {
                "@type": "PostalAddress",
                streetAddress: "栄町6丁目473番地の12号",
                addressLocality: "松戸市",
                addressRegion: "千葉県",
                postalCode: "271-0062",
                addressCountry: "JP",
              },
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
