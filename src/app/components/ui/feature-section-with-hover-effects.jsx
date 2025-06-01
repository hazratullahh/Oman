// src/app/components/FeaturesSectionWithHoverEffects.jsx
"use client";

import { cn, limitString } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import Link from "next/link";
import { getAllServices } from "@/lib/servicesData";

// Helper to map slugs to icons, as icons are JSX and can't be in JSON
const serviceIcons = {
  "obtaining-an-emirates-id": <IconHeart />,
  "renewing-an-emirates-id": <IconAdjustmentsBolt />,
  "opening-companies-in-oman": <IconHelp />,
  "transferring-commercial-records-saudi-investment": <IconRouteAltLeft />,
  "completing-omani-residency": <IconCloud />,
  "transferring-ownership-commercial-record": <IconCurrencyDollar />,
  "updating-commercial-records": <IconEaseInOut />,
  "renewing-commercial-records": <IconTerminal2 />,
  "transferring-car-ownership": <IconTerminal2 />,
  "authenticating-documents-omani-Oman-foreign-affairs": <IconTerminal2 />,
  "web-app-development": <IconTerminal2 />,
  "graphic-design": <IconTerminal2 />,
  "mobile-app-development": <IconTerminal2 />,
  "mvp-development-business": <IconTerminal2 />,
};

export function FeaturesSectionWithHoverEffects({ dictionary, currentLocale }) {
  const allServices = getAllServices(currentLocale);
  const isArabic = currentLocale === "ar";
  const totalServices = allServices.length;

  return (
    <div
      className={`md:z-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative py-10 max-w-7xl mx-auto ${
        isArabic ? "rtl" : "ltr"
      }`}
    >
      {allServices.map((feature, index) => (
        <Feature
          key={feature.id}
          title={feature.title}
          description={feature.id === 5 ? "" : feature.description1}
          slug={feature.slug}
          icon={serviceIcons[feature.slug]}
          index={index}
          isArabic={isArabic}
          totalServices={totalServices}
          currentLocale={currentLocale}
        />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  slug,
  icon,
  index,
  isArabic,
  totalServices,
  currentLocale,
}) => {
  return (
    <Link href={`/${currentLocale}/services/${slug}`}>
      <div
        className={cn(
          "flex flex-col py-10 relative group/feature dark:border-neutral-800",
          "border-b border-r",
          index % 4 === 0 && "lg:border-l",
          index >= 0 && index <= 3 && "lg:border-t",
          index % 4 === 3 ? "lg:border-r-0" : "",
          index >= (Math.ceil(totalServices / 4) - 1) * 4
            ? "lg:border-b-0"
            : "",
          isArabic ? "text-right" : "text-left"
        )}
      >
        {/* Background hover effect */}
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />

        <div className="mb-4 relative z-10 px-10 text-neutral-50 dark:text-neutral-400">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div
            className={cn(
              "absolute inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-white transition-all duration-200 origin-center",
              isArabic
                ? "right-0 rounded-tl-full rounded-bl-full rounded-tr-none rounded-br-none"
                : "left-0"
            )}
          />
          <span
            className={cn(
              "inline-block text-neutral-50 dark:text-neutral-100",
              isArabic
                ? "group-hover/feature:-translate-x-2"
                : "group-hover/feature:translate-x-2"
            )}
          >
            {title}
          </span>
        </div>
        {/* The description paragraph will now be empty for ID 5 */}
        <p className="text-sm text-neutral-100 dark:text-neutral-300 max-w-xs relative z-10 px-10">
          {limitString(description, 65)}
        </p>
      </div>
    </Link>
  );
};
