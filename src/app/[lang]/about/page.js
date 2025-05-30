import { getDictionary } from "@/lib/i18n"; // Import getDictionary
import { MissionVision } from "@/components/VisionMission"; // Corrected typo here if needed
import { WhoWeAreSection } from "@/components/WhoWeAreSection";

export async function generateMetadata({ params }) {
  // Await params here before using its properties
  const resolvedParams = await params;
  const dictionary = await getDictionary(resolvedParams.lang);

  return {
    title: dictionary.about_meta_title,
    description:
      "Learn how YourBrand transforms life and business in the Oman—making every interaction simple, every process predictable, and every outcome successful.",
    openGraph: {
      title: dictionary.about_meta_title,
      description:
        "Discover YourBrand’s mission and vision: empowering clients in the Oman with innovative solutions, personalized support, and unwavering dedication.",
      url: "https://yourdomain.com/about",
      siteName: "YourBrand",
      images: [
        {
          url: "https://yourdomain.com/og-about.jpg",
          width: 1200,
          height: 630,
          alt: "YourBrand About Us",
        },
      ],
      // Use resolvedParams.lang here
      locale: resolvedParams.lang === "ar" ? "ar_AE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.about_meta_title,
      description:
        "Discover YourBrand’s mission & vision to transform life and business in the Oman with simple, predictable, successful processes.",
      images: ["https://yourdomain.com/twitter-about.jpg"],
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
