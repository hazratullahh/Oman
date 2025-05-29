import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/app/components/ui/feature-section-with-hover-effects";

function Feature() {
  return (
    <section className="bg-gray-950">
      <div className="w-full mx-auto max-w-[85%] py-20">
        <h1 className="text-gray-50 text-lg md:text-4xl font-bold mb-2">
          Our Services
        </h1>
        <p className="text-gray-50 text-md md:text-xl w-full md:w-[80%] mb-4 overflow-hidden">
          We offer a comprehensive suite of services to better assist you.
          Starting with setting standards of excellence in more efficient ways
          and helping you streamline procedures.
        </p>
        <p className="text-gray-50 text-md md:text-xl w-full md:w-[70%] mb-4 overflow-hidden">
          We can combine any of our products and services to create a package
          tailored to your business. This eliminates unnecessary complexity and
          cost to get you where you want to go—whatever your starting point
        </p>
        <p className="text-gray-50 text-md md:text-xl w-full md:w-[70%] mb-8 overflow-hidden">
          Take look to our Completing all government transactions and
          web development…
        </p>
        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
}

export { Feature };
