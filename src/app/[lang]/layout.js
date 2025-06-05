// app/layout.js

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import { NavbarItem } from "@/app/components/NavbarItem";
import { TopHeader } from "@/app/components/TopHeader";
import { getDictionary } from "@/lib/i18n";
import { dir } from "i18next";
import HideElfsight from "@/components/HideElfsight";
import WhatsappChat from "@/components/WhatsappChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const siteUrl = `https://tasheelom.com/${lang}`;
  const defaultOgImage = `${siteUrl}/og-image.jpg`;
  const defaultTwitterImage = `${siteUrl}/twitter-image.jpg`;

  const keywords =
    lang === "ar"
      ? [
          "سجل عمان",
          "بطاقة اماراتية",
          "استثمار في السعودية",
          "تصميم مواقع",
          "تسهيل عمان",
          "خطوات اصدار بطاقة الهوية الاماراتية",
          "فتح سجل تجاري في عمان",
          "بطاقة الهوية الاماراتية",
          "تسهيل تخليص معاملات",
          "تسهيل",
          "عمان",
          "خدمات أعمال عمان",
          "PRO عمان",
        ]
      : [
          "Oman company registration",
          "Emirati ID card",
          "investment in Saudi Arabia",
          "web design",
          "Tas-Heel Oman",
          "steps to issue Emirati ID card",
          "open commercial register in Oman",
          "Emirati ID card",
          "Tas-Heel transaction processing",
          "Tas-Heel",
          "Oman",
          "Oman business services",
          "PRO Oman",
        ];

  return {
    title:
      dictionary.home_page_meta_title ||
      "TAS-HEEL | Your Oman Business & PRO Partner",
    description:
      dictionary.home_page_meta_description ||
      "To transform life and business in Oman by making every interaction simple, every process predictable, and every outcome successful. Empowering clients with innovative solutions and personalized support.",
    keywords,
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title:
        dictionary.social_share_title || "TAS-HEEL | Business & PRO Partner",
      description:
        dictionary.social_share_description ||
        "Transforming life and business in Oman with simple, predictable, and successful processes. Expert PRO, visa, company setup, and more.",
      url: siteUrl,
      siteName: "tasheelom",
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt:
            dictionary.social_share_title ||
            "TAS-HEEL - Oman Business Services",
        },
      ],
      locale: lang === "ar" ? "ar_AR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        dictionary.social_share_title || "TAS-HEEL | Business & PRO Partner",
      description:
        dictionary.social_share_description ||
        "Transforming life and business in Oman with simple, predictable, and successful processes. Expert PRO, visa, company setup, and more.",
      images: [defaultTwitterImage],
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  // Construct JSON-LD object for Organization and Site Navigation
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": `https://tasheelom.com/${lang}`,
    "name": "Tasheelom",
    "description":
      dictionary.home_page_meta_description ||
      "To transform life and business in Oman by making every interaction simple, every process predictable, and every outcome successful.",
    "publisher": {
      "@type": "Organization",
      "name": "Tasheelom",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tasheelom.com/favicon.ico"
      }
    },
    "hasPart": [
      {
        "@type": "SiteNavigationElement",
        "name": lang === "ar" ? "الرئيسية" : "Home",
        "url": `https://tasheelom.com/${lang}`
      },
      {
        "@type": "SiteNavigationElement",
        "name": lang === "ar" ? "من نحن" : "About",
        "url": `https://tasheelom.com/${lang}/about`
      },
      {
        "@type": "SiteNavigationElement",
        "name": lang === "ar" ? "خدماتنا" : "Services",
        "url": `https://tasheelom.com/${lang}/services`
      },
      {
        "@type": "SiteNavigationElement",
        "name": lang === "ar" ? "الأسئلة الشائعة" : "FAQ",
        "url": `https://tasheelom.com/${lang}/faq`
      },
      {
        "@type": "SiteNavigationElement",
        "name": lang === "ar" ? "اتصل بنا" : "Contact",
        "url": `https://tasheelom.com/${lang}/contact`
      }
    ]
  };

  return (
    <html lang={lang} dir={dir(lang)}>
      <head>
        {/* JSON-LD Structured Data for Organization & Site Navigation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HideElfsight />
        <TopHeader dictionary={dictionary} currentLocale={lang} />
        <NavbarItem dictionary={dictionary} currentLocale={lang} />
        {children}
        <Footer dictionary={dictionary} currentLocale={lang} />
        <WhatsappChat dictionary={dictionary} currentLocale={lang} />
        <SpeedInsights />
      </body>
    </html>
  );
}
