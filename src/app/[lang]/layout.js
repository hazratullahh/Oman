// app/[lang]/layout.js
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/app/components/Footer";
import { NavbarItem } from "@/app/components/NavbarItem";
import { TopHeader } from "@/app/components/TopHeader";
import HideElfsight from "@/app/components/HideElfsight";
import WhatsappChat from "@/app/components/WhatsappChat";

import { getDictionary } from "@/lib/i18n";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

function getDirection(lang) {
  return lang === "ar" ? "rtl" : "ltr";
}

// 1️⃣ Metadata for Next.js (title, description, keywords, icons, OG, Twitter, alternates, canonical)
export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const siteUrl = `https://tasheelom.com/${lang}`;
  const ogImage = `${siteUrl}/og-image.jpg`;
  const twImage = `${siteUrl}/twitter-image.jpg`;

  const brandVariations = [
    "Tasheelom", "Tas-heelom", "Taseelom", "Tasheel.com", "Tasheel.om",
    "Tashilom", "Tashelom", "Tasheel"
  ];
  const baseKeywords = lang === "ar"
    ? ["تسهيل عمان", "فتح سجل تجاري عمان", "بطاقة الهوية الاماراتية", "خدمات PRO عمان"]
    : ["Oman business setup", "Emirati ID services", "PRO Oman", "Oman company registration"];

  return {
    title: dict.home_page_meta_title || "TAS-HEEL | Your Oman Business & PRO Partner",
    description: dict.home_page_meta_description ||
      "Transforming life & business in Oman with fast, compliant, and reliable PRO, visa, and company setup services.",
    keywords: [...baseKeywords, ...brandVariations].join(", "),
    robots: "index, follow",
    metadataBase: new URL("https://tasheelom.com"),
    alternates: {
      canonical: siteUrl,
      languages: {
        en: `https://tasheelom.com/en`,
        ar: `https://tasheelom.com/ar`,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      other: [
        { rel: "manifest", url: "/site.webmanifest" },
        { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
    },
    openGraph: {
      title: dict.social_share_title || "TAS-HEEL | Business & PRO Partner",
      description: dict.social_share_description ||
        "Expert PRO, visa & company formation services in Oman—simple, predictable, successful.",
      url: siteUrl,
      siteName: "Tasheelom",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Tasheelom Services" }],
      locale: lang === "ar" ? "ar_AR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.social_share_title || "TAS-HEEL | Business & PRO Partner",
      description: dict.social_share_description ||
        "Expert PRO, visa & company formation services in Oman—fast, compliant, reliable.",
      images: [twImage],
    },
    other: [
      {
        rel: "search",
        type: "application/opensearchdescription+xml",
        title: "Search Tasheelom",
        url: "/opensearch.xml",
      },
    ],
  };
}

// 2️⃣ Viewport & theme settings
export function generateViewport() {
  return {
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#ffffff",
    colorScheme: "light dark",
  };
}

// 3️⃣ Root layout component
export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const siteUrl = `https://tasheelom.com/${lang}`;

  // ── JSON-LD: WebPage ──
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: siteUrl,
    name: dict.home_page_meta_title,
    description: dict.home_page_meta_description,
    inLanguage: lang === "ar" ? "ar" : "en"
  };

  // ── JSON-LD: Organization with typos ─
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tasheelom",
    alternateName: [
      "Tasheelom", "Tas-heelom", "Taseelom", "Tasheel.com", "Tasheel.om",
      "Tashilom", "Tashelom", "Tasheel"
    ],
    url: siteUrl,
    logo: { "@type": "ImageObject", url: "https://tasheelom.com/favicon.ico" },
    sameAs: [
      "https://www.facebook.com/tasheelom",
      "https://twitter.com/tasheelom"
    ],
  };

  // ── JSON-LD: WebSite with sitelinks & search box ──
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://tasheelom.com/",
    name: "Tasheelom",
    hasPart: [
      { "@type": "SiteNavigationElement", name: "Home", url: `https://tasheelom.com/${lang}` },
      { "@type": "SiteNavigationElement", name: "Services", url: `https://tasheelom.com/${lang}/services` },
      { "@type": "SiteNavigationElement", name: "About", url: `https://tasheelom.com/${lang}/about` },
      { "@type": "SiteNavigationElement", name: "Contact", url: `https://tasheelom.com/${lang}/contact` },
      { "@type": "SiteNavigationElement", name: "FAQ", url: `https://tasheelom.com/${lang}/faq` },
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: `https://tasheelom.com/${lang}/search?query={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // ── JSON-LD: BreadcrumbList ──
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "About", item: `${siteUrl}/about` },
      { "@type": "ListItem", position: 4, name: "Contact", item: `${siteUrl}/contact` },
      { "@type": "ListItem", position: 5, name: "FAQ", item: `${siteUrl}/faq` },
    ],
  };

  return (
    <html lang={lang} dir={getDirection(lang)}>
      <head>
        {/* ── Performance & preload ── */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" as="image" href="/images/hero/hero-1.jpg" />

        {/* ── Favicons, manifest & theme color ── */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#5bbad5" />

        {/* ── Canonical & author ── */}
        <link rel="canonical" href={siteUrl} />
        <meta name="author" content="Tasheelom Team" />

        {/* ── International targeting ── */}
        <link rel="alternate" href="https://tasheelom.com/en" hrefLang="en" />
        <link rel="alternate" href="https://tasheelom.com/ar" hrefLang="ar" />
        <link rel="alternate" href="https://tasheelom.com" hrefLang="x-default" />

        {/* ── Inline critical CSS ── */}
        <style dangerouslySetInnerHTML={{
          __html: `
          /* YOUR CRITICAL CSS HERE */
        ` }} />

        {/* ── JSON-LD structured data ── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>
          <HideElfsight />
          <TopHeader dictionary={dict} currentLocale={lang} />
          <nav aria-label="Main">
            <NavbarItem dictionary={dict} currentLocale={lang} />
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <Footer dictionary={dict} currentLocale={lang} />
          <WhatsappChat dictionary={dict} currentLocale={lang} />
        </footer>

        {/* ── Real-user performance monitoring ── */}
        <SpeedInsights />
      </body>
    </html>
  );
}
