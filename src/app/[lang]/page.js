// src/app/[lang]/page.js
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getDictionary } from "@/lib/i18n";
import ScrollToHash from "@/app/components/ScrollToHash";
import HeroSection from "@/app/components/HeroSection";
import { Feature } from "@/app/components/Feature";
import { testimonials } from "@/lib/utils";

// Dynamically load non-critical, heavy components with correct export mapping
const WhyChooseUS = dynamic(
  () =>
    import("@/app/components/WhyChoose-Us").then((mod) => mod.WhyChooseUS),
  { suspense: true }
);
const InfiniteScrollImages = dynamic(
  () =>
    import("@/app/components/InfiniteScrollImages ").then(
      (mod) => mod.default
    ),
  { suspense: true }
);
const StatsCardsSection = dynamic(
  () =>
    import("@/components/StatsCardsSection").then((mod) => mod.default),
  { suspense: true }
);
const Testimonials = dynamic(
  () =>
    import("@/app/components/Testimonials").then((mod) => mod.Testimonials),
  { suspense: true }
);

// Edge + ISR
export const runtime = "edge";
export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const baseUrl = new URL("https://tasheelom.com");
  const pageUrl = `${baseUrl}/${lang}`;
  const ogImage = `${baseUrl}/og-image.jpg`;

  const keywords = (
    lang === "ar"
      ? ["سجل عمان","بطاقة اماراتية","فتح سجل تجاري عمان","خدمات PRO عمان","تسهيل عمان"]
      : ["Oman company registration","Emirati ID card","open commercial register Oman","PRO Oman","Tasheelom"]
  ).join(", ");

  return {
    metadataBase: baseUrl,
    title: dict.home_page_meta_title,
    description: dict.home_page_meta_description,
    keywords,
    alternates: {
      canonical: pageUrl,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
    authors: [{ name: "Tasheelom Team" }],
    robots: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: dict.social_share_title,
      description: dict.social_share_description,
      url: pageUrl,
      siteName: "Tasheelom",
      images: [{ url: ogImage, width: 1200, height: 630, alt: dict.social_share_title }],
      locale: lang === "ar" ? "ar_AR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.social_share_title,
      description: dict.social_share_description,
      images: [ogImage],
    },
    other: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "preload", as: "image", href: "/images/hero/hero-1.jpg" },
      {
        rel: "search",
        type: "application/opensearchdescription+xml",
        title: "Search Tasheelom",
        url: "/opensearch.xml",
      },
    ],
  };
}

export function generateViewport() {
  return {
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#5bbad5",
  };
}

export default async function Home({ params }) {
  const { lang } = await params; // required await
  const dict = await getDictionary(lang);

  return (
    <>
      <ScrollToHash />

      {/* Critical: SSR’d */}
      <HeroSection dictionary={dict} currentLocale={lang} />
      <section id="services">
        <Feature dictionary={dict} currentLocale={lang} />
      </section>

      {/* Lazy-loaded */}
      <Suspense fallback={<div>Loading WhyChooseUS…</div>}>
        <WhyChooseUS dictionary={dict} currentLocale={lang} />
      </Suspense>

      <Suspense fallback={<div>Loading images…</div>}>
        <InfiniteScrollImages dictionary={dict} currentLocale={lang} />
      </Suspense>

      <div className="py-10 bg-gradient-to-t from-gray-800 via-gray-750 to-black text-center">
        <Suspense fallback={<div>Loading stats…</div>}>
          <StatsCardsSection dictionary={dict} currentLocale={lang} />
        </Suspense>
      </div>

      <Suspense fallback={<div>Loading testimonials…</div>}>
        <Testimonials
          items={testimonials}
          direction="right"
          speed="slow"
          dictionary={dict}
          currentLocale={lang}
        />
      </Suspense>
    </>
  );
}
