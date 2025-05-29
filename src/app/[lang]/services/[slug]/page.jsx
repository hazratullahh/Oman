// src/app/[lang]/services/[slug]/page.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getAllServices,
  getServiceBySlug,
  serviceSlugs,
} from "@/lib/servicesData";

export async function generateStaticParams() {
  // Ensure generateStaticParams also considers both languages if you have a middleware
  // that adds the 'lang' param. Otherwise, you'll need to generate for each lang here too.
  const locales = ["en", "ar"]; // Assuming your supported locales
  let params = [];
  locales.forEach((lang) => {
    serviceSlugs.forEach((slug) => {
      params.push({ lang, slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { slug, lang } = params;
  const service = getServiceBySlug(slug, lang);

  const defaultTitle = "Service Not Found | TAS-HEEL";
  const defaultDescription = "We couldn't find the service you requested.";

  if (!service) {
    return {
      title: defaultTitle,
      description: defaultDescription,
    };
  }

  const title = `${service.title} | TAS-HEEL`;
  const description =
    service.description1.replace(/\*\*/g, "").slice(0, 157).trim() + "...";
  const url = `https://fqg.com/${lang}/services/${service.slug}`; // Include lang in URL
  const imageUrl = `https://fqg.com${service.image}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "fqg",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${service.title} – fqg`,
        },
      ],
      locale: lang === "ar" ? "ar_AR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

const Page = async ({ params }) => {
  const { slug, lang } = params;

  const service = getServiceBySlug(slug, lang);
  const isArabic = lang === "ar";

  const serviceNotFoundTitle = isArabic
    ? "الخدمة غير موجودة"
    : "Service Not Found"; // Added basic translation for not found
  const serviceNotFoundMessage = isArabic
    ? "لم نتمكن من العثور على الخدمة التي طلبتها."
    : "We couldn't find the service you requested.";
  const backButtonText = isArabic ? "رجوع" : "Back";

  if (!service) {
    return (
      <section className={`py-20 text-center ${isArabic ? "rtl" : "ltr"}`}>
        <h1 className="text-2xl font-bold text-white">
          {serviceNotFoundTitle}
        </h1>
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
            isArabic ? "text-right" : "text-left"
          }`}
        >
          {/* Back Button */}
          <div
            className={`w-full max-w-3xl mb-8 ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {/* Crucial Change: Include the currentLocale in the href */}
            <Link
              href={`/${lang}/#service`} // Dynamically set the locale for the back link
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

          <h1 className="text-3xl font-extrabold text-white mb-6">
            {service.title}
          </h1>
          <div className="relative w-full h-64 mb-8">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
          <div
            className={`prose prose-invert text-white ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <p className="py-5 text-justify text-lg md:text-xl font-sans">
              {service.description1.replace(/\*\*/g, "")}
            </p>
            {service.description2 && (
              <p className="py-5 text-justify text-lg md:text-xl font-sans">
                {service.description2.replace(/\*\*/g, "")}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
