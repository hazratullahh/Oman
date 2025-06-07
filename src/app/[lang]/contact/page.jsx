// src/app/[lang]/page.js
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { getDictionary } from "@/lib/i18n";
import ScrollToHash from "@/app/components/ScrollToHash";
import Form from "@/app/components/contactForm";
import Image from "next/image";
import LocationMap from "@/app/components/MapLocation";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { cn } from "@/lib/utils";

export const runtime    = "edge";    // Edge function
export const revalidate = 3600;      // ISR: revalidate every hour

export async function generateMetadata({ params }) {
  const { lang }       = await params;
  const dict           = await getDictionary(lang);
  const baseUrl        = new URL("https://tasheelom.com");
  const pageUrl        = `${baseUrl}/${lang}/contact`;
  const ogImageUrl     = `${baseUrl}/og-image.jpg`;
  const twitterImgUrl  = `${baseUrl}/twitter-image.jpg`;
  const keywordsArr    = lang === "ar"
    ? [
        "اتصل بنا","تسهيل عمان","خدمة العملاء","دعم العملاء",
        "عنوان تسهيل عمان","هاتف تسهيل عمان","بريد إلكتروني",
        "نموذج الاتصال","خدمات عمان"
      ]
    : [
        "Contact Us","Tasheel Oman","Customer Support","Help Center",
        "Address","Phone Number","Email","Contact Form","Oman Services"
      ];

  return {
    metadataBase: baseUrl,
    title:        dict.contact_meta_title,
    description:  dict.contact_meta_description,
    keywords:     keywordsArr.join(", "),
    alternates: {
      canonical: pageUrl,
      languages: {
        en: `${baseUrl}/en/contact`,
        ar: `${baseUrl}/ar/contact`,
      },
    },
    authors: [{ name: "Tasheelom Team" }],
    robots: { index: true, follow: true, "max-snippet": -1 },
    icons: {
      icon:     "/favicon.ico",
      shortcut: "/favicon.ico",
      apple:    "/apple-touch-icon.png",
    },
    openGraph: {
      title:       dict.contact_meta_title_og,
      description: dict.contact_meta_description_og,
      url:         pageUrl,
      siteName:    "Tasheelom",
      images: [
        { url: ogImageUrl, width: 1200, height: 630, alt: dict.contact_meta_image_alt }
      ],
      locale: lang === "ar" ? "ar_AR" : "en_US",
      type:   "website",
    },
    twitter: {
      card:        "summary_large_image",
      title:       dict.contact_meta_title_twitter,
      description: dict.contact_meta_description_twitter,
      images:      [twitterImgUrl],
    },
    other: [
      // Font loading hints
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
    ],
  };
}

export function generateViewport() {
  return {
    viewport:   "width=device-width, initial-scale=1",
    themeColor: "#5bbad5",
  };
}

export default async function ContactPage({ params }) {
  const { lang }         = await params;
  const dict             = await getDictionary(lang);
  const isArabic         = lang === "ar";

  // LocalBusiness JSON-LD
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type":    "LocalBusiness",
    name:       "Tasheelom",
    image:      "https://tasheelom.com/favicon.ico",
    "@id":      "https://tasheelom.com/#company",
    url:        "https://tasheelom.com/",
    telephone:  "+968-99726225",
    address: {
      "@type":           "PostalAddress",
      streetAddress:    "Your Street Address Here",
      addressLocality:  "Muscat",
      addressRegion:    "Muscat",
      postalCode:       "12345",
      addressCountry:   "OM"
    },
    geo: {
      "@type":        "GeoCoordinates",
      latitude:       23.5859,
      longitude:      58.4059
    },
    openingHoursSpecification: [
      {
        "@type":      "OpeningHoursSpecification",
        dayOfWeek:    ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        opens:        "08:00",
        closes:       "17:00"
      }
    ],
    sameAs: [
      "https://www.facebook.com/tasheelom",
      "https://twitter.com/tasheelom"
    ]
  };

  return (
    <>
      {/* Inject LocalBusiness structured data into the head */}
      <Script
        id="local-business-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />

      <ScrollToHash />

      <section
        className={cn(
          "min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden py-12 md:pt-28",
          isArabic ? "text-right" : "text-left"
        )}
      >
        <div className="m-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image & Quick Contact */}
            <div className="relative group rounded-2xl overflow-hidden">
              <Image
                src="/images/contact2.jpg"
                width={1080}
                height={1080}
                alt={dict.contact_image_alt || "Contact Us"}
                className="w-full h-full object-cover transition filter group-hover:grayscale-0"
                priority
              />
              <h3
                className={cn(
                  "absolute top-8 font-manrope text-4xl font-bold text-gray-50",
                  isArabic ? "right-8" : "left-8"
                )}
              >
                {dict.contact_us_heading}
              </h3>
              <div className="absolute bottom-0 w-full p-6 bg-gray-800/50 backdrop-blur-lg rounded-b-2xl">
                <div className="flex items-center mb-4">
                  <FaPhoneAlt color="#fff" />
                  <a
                    href="tel:+96899726225"
                    className="ml-4 text-white text-lg"
                  >
                    +968 9972 6225
                  </a>
                </div>
                <div className="flex items-center">
                  <IoIosMail color="#fff" size={20} />
                  <a
                    href="mailto:support@tasheelom.com"
                    className="ml-4 text-white text-lg"
                  >
                    support@tasheelom.com
                  </a>
                </div>
                {/* Plain-text address for crawlers */}
                <address className="mt-4 not-italic text-gray-200">
                  123 Business St., Muscat, Oman
                </address>
              </div>
            </div>

            {/* Contact Form */}
            <Suspense fallback={<div className="text-center text-gray-400">Loading form…</div>}>
              <Form dictionary={dict} currentLocale={lang} />
            </Suspense>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="mt-16">
          <LocationMap dictionary={dict} currentLocale={lang} />
        </div>
      </section>
    </>
  );
}
