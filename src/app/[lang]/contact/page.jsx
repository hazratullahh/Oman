import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Form from "@/app/components/contactForm";
import Image from "next/image";
import LocationMap from "@/app/components/MapLocation";

export const metadata = {
  title: "Contact Us | YourBrand",
  description:
    "Get in touch with YourBrand. Whether you have questions about our services, need support, or want to discuss a project, our team is here to help you succeed in the Oman.",
  openGraph: {
    title: "Contact Us | YourBrand",
    description:
      "Reach out to YourBrand for expert guidance in business setup, PRO services, visa assistance and more. We're ready to support your growth in the Oman.",
    url: "https://yourdomain.com/contact",
    siteName: "YourBrand",
    images: [
      {
        url: "https://yourdomain.com/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "YourBrand Contact Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | YourBrand",
    description:
      "Need assistance? Contact YourBrand for personalized business solutions, PRO support, and more in the Oman.",
    images: ["https://yourdomain.com/twitter-contact.jpg"],
  },
};

const Page = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden py-12 md:pt-28">
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
                  alt="image description"
                />
                <h1 className="font-manrope text-gray-50 text-4xl font-bold leading-10 absolute top-11 left-11">
                  Contact us
                </h1>

                <div className="absolute bottom-0 w-full lg:p-11 p-5 backdrop-filter">
                  <div className="bg-gray-600/15 backdrop-blur-2xl rounded-lg p-6 block">
                    <div className="flex items-center mb-6">
                      <FaPhoneAlt color="white" />
                      <a
                        href="tel:470-601-1911"
                        className="text-white text-base lg:text-lg font-normal leading-6 ml-5"
                      >
                        +96 899 726 225
                      </a>
                    </div>
                    <div className="flex items-center">
                      <IoIosMail color="white" />
                      <a
                        href="mailto:contact@filingform.com"
                        className="text-white text-base lg:text-lg font-normal leading-6 ml-5"
                      >
                        contact@manzoor.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>

      <LocationMap />
    </section>
  );
};

export default Page;
