// about/page.js
import { getDictionary } from "@/lib/i18n"; // Import getDictionary
import { MissionVision } from "@/components/VisionMission"; // Corrected typo here if needed
import { WhoWeAreSection } from "@/components/WhoWeAreSection";

export async function generateMetadata({ params }) {
  // Resolve params and fetch localized dictionary entries
  const resolvedParams = await params;
  const { lang } = resolvedParams;
  const dictionary = await getDictionary(lang);

  // Base URLs for the About Us page and social images
  const baseUrl = `https://tasheelom.com/${lang}/about`;
  const ogImageUrl = `https://tasheelom.com/og-image.jpg`;
  const twitterImageUrl = `https://tasheelom.com/twitter-image.jpg`;

  // SEO keywords tailored to the About Us page (Arabic vs. English)
  const keywords =
    lang === "ar"
      ? [
          "من نحن",
          "تسهيل عمان",
          "عن الشركة",
          "رؤية تسهيل",
          "رسالة تسهيل",
          "قيم تسهيل عمان",
          "فريق تسهيل",
          "خدمات الأعمال في عمان",
          "تسهيل تخليص معاملات",
        ]
      : [
          "About Us",
          "Tasheel Oman",
          "Company Overview",
          "Our Mission",
          "Our Vision",
          "Company Values",
          "Oman Business Services",
          "PRO Oman",
          "Team Tasheel",
          "Tasheel Transaction Processing",
        ];

  return {
    // Document <title> and <meta name="description">
    title: dictionary.about_meta_title,
    description:
      "Learn how Tasheel transforms life and business in Oman—making every interaction simple, every process predictable, and every outcome successful.",

    // Meta keywords
    keywords,

    // Favicon and related icons
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },

    // Open Graph metadata for social sharing
    openGraph: {
      title: dictionary.about_meta_title,
      description:
        "Discover Tasheel’s mission and vision: empowering clients in Oman with innovative solutions, personalized support, and unwavering dedication.",
      url: baseUrl,
      siteName: "tasheelom",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: dictionary.about_meta_title,
        },
      ],
      locale: lang === "ar" ? "ar_AE" : "en_US",
      type: "website",
    },

    // Twitter card metadata
    twitter: {
      card: "summary_large_image",
      title: dictionary.about_meta_title,
      description:
        "Discover Tasheel’s mission & vision to transform life and business in Oman with simple, predictable, successful processes.",
      images: [twitterImageUrl],
    },
  };
}


// The Page component already awaits params, so no change needed there.
const Page = async ({ params }) => {
  const resolvedParams = await params;
  const dictionary = await getDictionary(resolvedParams.lang);

  return (
    <>
      <WhoWeAreSection
        dictionary={dictionary}
        currentLocale={resolvedParams.lang}
      />
      <MissionVision
        dictionary={dictionary}
        currentLocale={resolvedParams.lang}
      />
    </>
  );
};

export default Page;
