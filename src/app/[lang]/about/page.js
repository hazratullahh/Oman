// src/app/[lang]/about/page.js
import { getDictionary } from "@/lib/i18n"; // Import getDictionary
import { MissionVision } from "@/app/components/VisionMission";
import { WhoWeAreSection } from "@/app/components/WhoWeAreSection";

export const metadata = {
  title: "About Us | YourBrand",
  description:
    "Learn how YourBrand transforms life and business in the Oman—making every interaction simple, every process predictable, and every outcome successful.",
  openGraph: {
    title: "About Us | YourBrand",
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
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | YourBrand",
    description:
      "Discover YourBrand’s mission & vision to transform life and business in the Oman with simple, predictable, successful processes.",
    images: ["https://yourdomain.com/twitter-about.jpg"],
  },
};

// Change `Page` to an async function to receive `params`
const Page = async ({ params }) => {
  const resolvedParams = await params;
  const dictionary = await getDictionary(resolvedParams.lang); // Fetch the dictionary

  return (
    <>
      {/* Pass dictionary and currentLocale to WhoWeAreSection */}
      <WhoWeAreSection
        dictionary={dictionary}
        currentLocale={resolvedParams.lang}
      />
      {/* Pass dictionary and currentLocale to MissionVision */}
      <MissionVision
        dictionary={dictionary}
        currentLocale={resolvedParams.lang}
      />
    </>
  );
};

export default Page;
