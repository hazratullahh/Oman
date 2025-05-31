import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Form from "@/app/components/contactForm";
import Image from "next/image";
import LocationMap from "@/app/components/MapLocation";
import { getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export async function generateMetadata({ params }) {
  // Await params here before using its properties
  const resolvedParams = await params;
  const dictionary = await getDictionary(resolvedParams.lang);

  return {
    title: dictionary.contact_meta_title, // Use translated title
    description: dictionary.contact_meta_description, // Use translated description
    openGraph: {
      title: dictionary.contact_meta_title_og, // Use translated Open Graph title
      description: dictionary.contact_meta_description_og, // Use translated Open Graph description
      url: "https://yourdomain.com/contact",
      siteName: "YourBrand",
      images: [
        {
          url: "https://yourdomain.com/og-contact.jpg",
          width: 1200,
          height: 630,
          alt: dictionary.contact_meta_image_alt, // Use translated image alt
        },
      ],
      locale: resolvedParams.lang === "ar" ? "ar_AE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.contact_meta_title_twitter, // Use translated Twitter title
      description: dictionary.contact_meta_description_twitter, // Use translated Twitter description
      images: ["https://yourdomain.com/twitter-contact.jpg"],
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
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <Image
                  className="transition-all duration-300 cursor-pointer filter hover:grayscale-0 w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-gray-100"
                  src="/images/contact.png"
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
                  <div className="bg-gray-600/15 backdrop-blur-2xl rounded-lg p-6 block">
                    <div
                      className={cn(
                        "flex items-center mb-6",
                        isArabic ? "flex-row-reverse" : "flex-row"
                      )}
                    >
                      <FaPhoneAlt color="white" />
                      <a
                        href="tel:+96899726225"
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
                      <IoIosMail color="white" />
                      <a
                        href="mailto:contact@manzoor.com"
                        className={cn(
                          "text-white text-base lg:text-lg font-normal leading-6",
                          isArabic ? "mr-5" : "ml-5"
                        )}
                      >
                        contact@manzoor.com
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
