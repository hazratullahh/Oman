// src/app/components/Feature.jsx
import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/app/components/ui/feature-section-with-hover-effects";

// Feature component accepts dictionary and currentLocale
function Feature({ dictionary, currentLocale }) {
  const isArabic = currentLocale === "ar"; // Determine if the current locale is Arabic

  return (
    <section className="bg-gray-950">
      <div
        className={`w-full mx-auto max-w-[85%] py-20 ${
          isArabic ? "text-right" : "text-left" // Base text alignment for the whole div
        }`}
      >
        <h3 className="text-gray-50 text-lg md:text-4xl font-bold mb-2">
          {dictionary.feature_title}
        </h3>
        <p
          className={`text-gray-50 text-md md:text-xl w-full md:w-[80%] mb-4 overflow-hidden ${
            isArabic ? "mr-0 ml-auto" : "ml-0 mr-auto" // Corrected: push to right for AR, left for EN
          }`}
        >
          {dictionary.feature_paragraph1}
        </p>
        <p
          className={`text-gray-50 text-md md:text-xl w-full md:w-[70%] mb-4 overflow-hidden ${
            isArabic ? "mr-0 ml-auto" : "ml-0 mr-auto" // Corrected: push to right for AR, left for EN
          }`}
        >
          {dictionary.feature_paragraph2}
        </p>
        <p
          className={`text-gray-50 text-md md:text-xl w-full md:w-[70%] mb-8 overflow-hidden ${
            isArabic ? "mr-0 ml-auto" : "ml-0 mr-auto" // Corrected: push to right for AR, left for EN
          }`}
        >
          {dictionary.feature_paragraph3}
        </p>
        <FeaturesSectionWithHoverEffects
          dictionary={dictionary}
          currentLocale={currentLocale}
        />
      </div>
    </section>
  );
}

export { Feature };
