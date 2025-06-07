// app/[lang]/layout.js
import Script from "next/script"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import Footer from "@/app/components/Footer"
import { NavbarItem } from "@/app/components/NavbarItem"
import { TopHeader } from "@/app/components/TopHeader"
import HideElfsight from "@/app/components/HideElfsight"
import WhatsappChat from "@/app/components/WhatsappChat"

import { getDictionary } from "@/lib/i18n"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

function getDirection(lang) {
  return lang === "ar" ? "rtl" : "ltr"
}

// 1️⃣ Metadata (title, description, keywords, icons, OG, Twitter, alternates, canonical)
export async function generateMetadata({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const siteUrl = `https://tasheelom.com/${lang}`

  return {
    title: dict.home_page_meta_title,
    description: dict.home_page_meta_description,
    keywords: dict.home_page_meta_keywords,       // you can pull in a comma-separated string
    robots: "index, follow",
    metadataBase: new URL("https://tasheelom.com"),
    alternates: {
      canonical: siteUrl,
      languages: {
        en: "https://tasheelom.com/en",
        ar: "https://tasheelom.com/ar",
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
      title: dict.social_share_title,
      description: dict.social_share_description,
      url: siteUrl,
      siteName: "Tasheelom",
      images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630, alt: "Tasheelom Services" }],
      locale: lang === "ar" ? "ar_AR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.social_share_title,
      description: dict.social_share_description,
      images: [`${siteUrl}/twitter-image.jpg`],
    },
    other: [
      {
        rel: "search",
        type: "application/opensearchdescription+xml",
        title: "Search Tasheelom",
        url: "/opensearch.xml",
      },
      {
        rel: "sitemap",
        type: "application/xml",
        url: "/sitemap.xml",
      },
    ],
  }
}

// 2️⃣ Viewport & theme
export function generateViewport() {
  return {
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#ffffff",
    colorScheme: "light dark",
  }
}

// 3️⃣ Root layout
export default async function RootLayout({ children, params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const siteUrl = `https://tasheelom.com/${lang}`

  // JSON-LD snippets omitted for brevity (keep yours as-is)…

  return (
    <html lang={lang} dir={getDirection(lang)}>
      <head>
        {/* Preconnect / Preload */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" as="image" href="/images/hero/hero-1.jpg" />

        {/* Favicons & Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#5bbad5" />

        {/* SEO basics */}
        <link rel="canonical" href={siteUrl} />
        <meta name="author" content="Tasheelom Team" />
        {/* Meta description comes from generateMetadata */}

        {/* International */}
        <link rel="alternate" href="https://tasheelom.com/en" hrefLang="en" />
        <link rel="alternate" href="https://tasheelom.com/ar" hrefLang="ar" />
        <link rel="alternate" href="https://tasheelom.com" hrefLang="x-default" />

        {/* Inline critical CSS */}
        <style dangerouslySetInnerHTML={{ __html: `/* YOUR CRITICAL CSS HERE */` }} />

        {/* JSON-LD structured data */}
        {/* …your JSON-LD scripts here… */}

        {/* ── CCAGEN global script ── */}
        <Script
          id="ccagen"
          strategy="afterInteractive"
          src="https://example.com/path/to/ccagen.js"
        />
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

        {/* Real-user performance monitoring */}
        <SpeedInsights />
      </body>
    </html>
  )
}
