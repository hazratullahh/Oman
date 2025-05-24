import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

function Feature() {
  return (
    <section className="bg-gray-950">
      <div className="w-full mx-auto max-w-[85%] py-20">
        <h1 className="text-gray-50 text-lg md:text-4xl font-bold mb-2">Our Services</h1>
        <p className="text-gray-50 text-md md:text-xl w-full md:w-[70%] mb-8 overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsum eos doloribus neque voluptas cons!
        </p>
        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
}

export { Feature };