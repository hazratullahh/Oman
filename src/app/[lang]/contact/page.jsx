import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Form from "@/app/components/contactForm";
import Image from "next/image";
import LocationMap from "@/app/components/MapLocation";
import { getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export async function generateMetadata({ params }) {
  // Resolve parameters and fetch localized strings
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  // Base URLs for this Contact Us page
  const baseUrl = `https://tasheelom.com/${lang}/contact`;
  const ogImageUrl = `https://tasheelom.com/og-image.jpg`;
  const twitterImageUrl = `https://tasheelom.com/twitter-image.jpg`;

  // SEO keywords tailored for the Contact Us page (Arabic vs. English)
  const keywords =
    lang === "ar"
      ? [
          "اتصل بنا",
          "تسهيل عمان",
          "خدمة العملاء",
          "دعم العملاء",
          "عنوان تسهيل عمان",
          "هاتف تسهيل عمان",
          "بريد إلكتروني",
          "نموذج الاتصال",
          "خدمات عمان",
        ]
      : [
          "Contact Us",
          "Tasheel Oman",
          "Customer Support",
          "Help Center",
          "Address",
          "Phone Number",
          "Email",
          "Contact Form",
          "Oman Services",
        ];

  return {
    // <title> and <meta name="description">
    title: dictionary.contact_meta_title,
    description: dictionary.contact_meta_description,

    // <meta name="keywords">
    keywords,

    // Favicon and related icons
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },

    // Open Graph metadata for social sharing
    openGraph: {
      title: dictionary.contact_meta_title_og,
      description: dictionary.contact_meta_description_og,
      url: baseUrl,
      siteName: "tasheelom",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: dictionary.contact_meta_image_alt,
        },
      ],
      locale: lang === "ar" ? "ar_AE" : "en_US",
      type: "website",
    },

    // Twitter card metadata
    twitter: {
      card: "summary_large_image",
      title: dictionary.contact_meta_title_twitter,
      description: dictionary.contact_meta_description_twitter,
      images: [twitterImageUrl],
    },
  };
}


const Page = async ({ params }) => {
  const resolvedParams = await params;
  const dictionary = await getDictionary(resolvedParams.lang);
  const isArabic = resolvedParams.lang === "ar";

  return (
    <section
      className={cn(
        "min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden py-12 md:pt-28",
        isArabic ? "text-right" : "text-left"
      )}
    >
      <div className="m-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 grid-cols-1">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <Image
                  className="transition-all duration-300 cursor-pointer filter hover:grayscale-0 w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-gray-100"
                  src="/images/contact2.jpg"
                  width={1080}
                  height={1080}
                  alt="image description" // Consider translating this alt text if needed
                />
                <h1
                  className={cn(
                    "font-manrope text-gray-50 text-4xl font-bold leading-10 absolute top-11",
                    isArabic ? "right-11" : "left-11"
                  )}
                >
                  {dictionary.contact_us_heading}
                </h1>

                <div className="absolute bottom-0 w-full lg:p-11 p-5 backdrop-filter">
                  <div
                    dir={isArabic ? "ltr" : "ltr"}
                    className="bg-gray-600/15 backdrop-blur-2xl rounded-lg p-6 block"
                  >
                    <div
                      className={cn(
                        "flex items-center mb-6",
                        isArabic ? "flex-row-reverse" : "flex-row"
                      )}
                    >
                      <FaPhoneAlt color="white" />
                      <a
                        href="https://wa.me/96899726225"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Whatsapp"
                        className={cn(
                          "text-white text-base lg:text-lg font-normal leading-6",
                          isArabic ? "mr-5" : "ml-5"
                        )}
                      >
                        +96 899 726 225
                      </a>
                    </div>
                    <div
                      className={cn(
                        "flex items-center",
                        isArabic ? "flex-row-reverse" : "flex-row"
                      )}
                    >
                      <IoIosMail size={20} color="white" />
                      <a
                        href="mailto:support@tasheelom.com"
                        className={cn(
                          "text-white text-base lg:text-lg font-normal leading-6",
                          isArabic ? "mr-5" : "ml-5"
                        )}
                      >
                        support@tasheelom.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Form dictionary={dictionary} currentLocale={resolvedParams.lang} />
        </div>
      </div>

      <LocationMap
        dictionary={dictionary}
        currentLocale={resolvedParams.lang}
      />
    </section>
  );
};

export default Page;
