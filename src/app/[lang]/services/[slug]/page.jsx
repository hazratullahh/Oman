import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getServiceBySlug, serviceSlugs } from "@/lib/servicesData";
import PackageCard from "@/components/PackageCard";

export async function generateStaticParams() {
  const locales = ["en", "ar"];
  let params = [];
  locales.forEach((lang) => {
    serviceSlugs.forEach((slug) => {
      params.push({ lang, slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { slug, lang } = await params;
  const service = getServiceBySlug(slug, lang);

  const defaultTitle = "Service Not Found | TAS-HEEL";
  const defaultDescription = "We couldn't find the service you requested.";

  if (!service) {
    return {
      title: defaultTitle,
      description: defaultDescription,
      // Provide basic favicon if desired
      icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
      },
    };
  }

  // Page title & description
  const title = service.title;
  const description =
    service.metaDescription ||
    service.description1.replace(/\*\*/g, "").slice(0, 157).trim() + "...";

  // Construct URL and image paths
  const url = `https://tasheelom.com/${lang}/services/${service.slug}`;
  const imageUrl = `https://tasheelom.com/${service.image}`;

  // Keywords: use `service.keywords` if provided, otherwise fall back to title + defaults
  const keywords = service.keywords && service.keywords.length
    ? service.keywords
    : [
        service.title,
        "Tasheel Oman",
        "Oman Business Services",
        "PRO Oman",
        "Transaction Processing",
      ];

  return {
    // <title> and <meta name="description">
    title,
    description,

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
      title,
      description,
      url,
      siteName: "tasheelom",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${service.title} – tasheelom`,
        },
      ],
      locale: lang === "ar" ? "ar_AR" : "en_US",
      type: "website",
    },

    // Twitter card metadata
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

const Page = async ({ params }) => {
  const { slug, lang } = await params;

  const service = getServiceBySlug(slug, lang);
  const isArabic = lang === "ar";

  const serviceNotFoundTitle = isArabic
    ? "الخدمة غير موجودة"
    : "Service Not Found";
  const serviceNotFoundMessage = isArabic
    ? "لم نتمكن من العثور على الخدمة التي طلبتها."
    : "We couldn't find the service you requested.";
  const backButtonText = isArabic ? "رجوع" : "Back";
  const packagesTitle = isArabic ? "باقاتنا" : "Our Packages";

  if (!service) {
    return (
      <section className={`py-20 text-center ${isArabic ? "rtl" : "ltr"}`}>
        <h2 className="text-2xl font-bold text-white">
          {serviceNotFoundTitle}
        </h2>
        <p className="mt-4 text-gray-400">{serviceNotFoundMessage}</p>
      </section>
    );
  }

  return (
    <>
      <section
        className={`bg-gradient-to-b from-gray-900 via-gray-950 to-black py-12 md:pt-10 ${
          isArabic ? "rtl" : "ltr"
        }`}
      >
        <div
          className={`max-w-3xl mx-auto px-4 ${
            // Kept max-w-3xl for main content
            isArabic ? "text-right" : "text-left"
          }`}
        >
          {/* Back Button */}
          <div
            className={`w-full max-w-3xl mb-8 ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <Link
              href={`/${lang}/#services`}
              className={`inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded ${
                isArabic ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>{backButtonText}</span>
            </Link>
          </div>

          <h6 className="text-3xl font-extrabold text-white mb-6">
            {service.title}
          </h6>
          <div className="relative w-full h-64 mb-8">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
          {/* Main service description */}
          <div
            className={`prose prose-invert text-white ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <p className="py-5 text-justify text-lg md:text-xl font-sans">
              {service.description1.replace(/\*\*/g, "")}
            </p>
          </div>
        </div>{" "}
        {service.packages && service.packages.length > 0 && (
          <div className="mt-16 mx-auto px-4 max-w-7xl">
            {" "}
            {/* Wider container for packages */}
            <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
              {packagesTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-8 items-start">
              {" "}
              {/* Use items-start to align tops */}
              {service.packages.map((pkg, index) => (
                <PackageCard
                  key={index}
                  packageName={pkg.name}
                  price={pkg.price}
                  features={pkg.features}
                  isArabic={isArabic}
                  isRecommended={
                    (service.packages.length === 3 && index === 1) ||
                    (service.packages.length === 2 && index === 1)
                  }
                />
              ))}
            </div>
          </div>
        )}
        {!service.packages ||
          (service.packages.length === 0 && service.description2 && (
            <div
              className={`prose prose-invert text-white mt-8 max-w-3xl mx-auto px-4 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              <p className="py-5 text-justify text-lg md:text-xl font-sans">
                {service.description2.replace(/\*\*/g, "")}
              </p>
            </div>
          ))}
      </section>{" "}
    </>
  );
};

export default Page;
