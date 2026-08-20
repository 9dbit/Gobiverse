import { publicEnvironment } from "./env";

export const siteConfig = {
  name: "Gobiverse",
  description:
    "Gaming intelligence Indonesia untuk strategi, turnamen, dan gear yang lebih jelas.",
  url: publicEnvironment.NEXT_PUBLIC_SITE_URL,
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

const defaultOpenGraphImage = {
  url: "/assets/gobiverse/web/gobiverse-editorial-fallback-square.webp",
  width: 1200,
  height: 1200,
};

export function createPageMetadata({
  path,
  title,
  description,
  robots,
}: {
  path: string;
  title: string;
  description: string;
  robots?: typeof demoRobots;
}) {
  return {
    title,
    description,
    ...(robots ? { robots } : {}),
    alternates: { canonical: path },
    openGraph: {
      type: "website" as const,
      locale: "id_ID",
      siteName: siteConfig.name,
      title,
      description,
      url: absoluteUrl(path),
      images: [defaultOpenGraphImage],
    },
  };
}

export const demoRobots = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
    "max-image-preview": "none" as const,
  },
};
