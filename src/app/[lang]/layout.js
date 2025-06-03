import { SpeedInsights } from "@vercel/speed-insights/next"
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
  const resolvedParams = await params;
  const dictionary = await getDictionary(resolvedParams.lang);

  const defaultUrl = "https://tasheelom.com/";
  const defaultOgImage = "https://tasheelom.com/og-image.jpg"; // A generic fallback OG image
  const defaultTwitterImage = "https://tasheelom.com/twitter-image.jpg";
  const keywords =
    resolvedParams.lang === "ar"
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
          "investment in Saudi Arabia", // Again, consider relevance.
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
    keywords: keywords,
    openGraph: {
      title:
        dictionary.social_share_title || "TAS-HEEL | Business & PRO Partner",
      description:
        dictionary.social_share_description ||
        "Transforming life and business in Oman with simple, predictable, and successful processes. Expert PRO, visa, company setup, and more.",
      url: defaultUrl,
      siteName: "TAS-HEEL",
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt:
            dictionary.social_share_title ||
            "TAS-HEEL - Oman Business Services", // Use social share title or generic alt
        },
      ],
      locale: resolvedParams.lang === "ar" ? "ar_AR" : "en_US", // Consistent locale format
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      // Use the new dictionary keys for Twitter
      title:
        dictionary.social_share_title || "TAS-HEEL | Business & PRO Partner",
      description:
        dictionary.social_share_description ||
        "Transforming life and business in Oman with simple, predictable, and successful processes. Expert PRO, visa, company setup, and more.",
      images: [defaultTwitterImage], // Use generic fallback image
    },
  };
}

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const dictionary = await getDictionary(resolvedParams.lang);

  return (
    <html lang={resolvedParams.lang} dir={dir(resolvedParams.lang)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HideElfsight />
        <TopHeader
          dictionary={dictionary}
          currentLocale={resolvedParams.lang}
        />
        <NavbarItem
          dictionary={dictionary}
          currentLocale={resolvedParams.lang}
        />
        {children}
        <Footer dictionary={dictionary} currentLocale={resolvedParams.lang} />
        {/* Add the WhatsappChat component here */}
        <WhatsappChat
          dictionary={dictionary}
          currentLocale={resolvedParams.lang}
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
