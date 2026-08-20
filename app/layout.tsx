import type { Metadata } from "next";
import { JsonLd } from "@/components/structured-data";
import { SiteChrome } from "@/components/site-chrome";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Gobiverse — Main Lebih Cerdas",
    template: "%s | Gobiverse",
  },
  description: siteConfig.description,
  icons: {
    icon: "/assets/gobiverse/icons/favicon.ico",
    apple: "/assets/gobiverse/icons/gobiverse-emblem-192.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Gobiverse",
    url: absoluteUrl("/"),
    images: [
      {
        url: "/assets/gobiverse/web/gobiverse-editorial-fallback-square.webp",
        width: 1200,
        height: 1200,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": absoluteUrl("/#organization"),
                name: siteConfig.name,
                url: absoluteUrl("/"),
                logo: absoluteUrl("/assets/gobiverse/icons/gobiverse-emblem-512.png"),
                description: siteConfig.description,
              },
              {
                "@type": "WebSite",
                "@id": absoluteUrl("/#website"),
                name: siteConfig.name,
                url: absoluteUrl("/"),
                inLanguage: "id-ID",
                publisher: { "@id": absoluteUrl("/#organization") },
              },
            ],
          }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
