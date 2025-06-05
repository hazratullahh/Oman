// src/app/[lang]/page.js
import { Feature } from "@/app/components/Feature";
import HeroSection from "@/app/components/HeroSection";
import InfiniteScrollImages from "@/app/components/InfiniteScrollImages ";
import ScrollToHash from "@/app/components/ScrollToHash";
import { Testimonials } from "@/app/components/Testimonials";
import { WhyChooseUS } from "@/app/components/WhyChoose-Us";
import { testimonials } from "@/lib/utils";
import { getDictionary } from "@/lib/i18n";
import StatsCardsSection from "@/components/StatsCardsSection";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const url = `https://tasheelom.com/${lang}`;
  const imageUrl = `https://tasheelom.com/og-image.jpg`;
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
    title: dictionary.home_page_meta_title,
    description: dictionary.home_page_meta_description,
    keywords: keywords,
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: dictionary.social_share_title,
      description: dictionary.social_share_description,
      url,
      siteName: "tasheelom",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: dictionary.social_share_title,
        },
      ],
      locale: lang === "ar" ? "ar_AR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.social_share_title,
      description: dictionary.social_share_description,
      images: [imageUrl],
    },
  };
}

export default async function Home({ params }) {
  const resolvedParams = await params;

  const dictionary = await getDictionary(resolvedParams.lang);

  return (
    <>
      <ScrollToHash />
      <HeroSection
        dictionary={dictionary}
        currentLocale={resolvedParams.lang}
      />
      <div id="services">
        {" "}
        {/* Corrected ID to "services" */}
        <Feature dictionary={dictionary} currentLocale={resolvedParams.lang} />
      </div>
      <WhyChooseUS
        dictionary={dictionary}
        currentLocale={resolvedParams.lang}
      />
      <InfiniteScrollImages
        dictionary={dictionary}
        currentLocale={resolvedParams.lang}
      />
      <div className="py-10 bg-gradient-to-t from-gray-800 via-gray-750 to-black mx-auto text-center">
        <StatsCardsSection
          dictionary={dictionary}
          currentLocale={resolvedParams.lang}
        />
      </div>
      <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black h-[40rem] flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <Testimonials
          items={testimonials}
          direction="right"
          speed="slow"
          dictionary={dictionary}
          currentLocale={resolvedParams.lang}
        />
      </div>
    </>
  );
}
