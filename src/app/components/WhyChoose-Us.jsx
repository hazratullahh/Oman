// src/app/components/ui/WhyChooseUS.jsx
import { WhyChooseSection } from "./ui/WhyChooseSection";
// Import your dictionary utility

export async function WhyChooseUS({ dictionary, currentLocale }) {
  const whyChooseUsData = dictionary.why_choose_us; // Access the why_choose_us data from the dictionary

  // Static image paths (not part of translation)
  const featuresWithImages = whyChooseUsData.features.map((feature, index) => ({
    ...feature,
    image: `/images/choose/choose-${index + 1}.jpg`, // Construct image path dynamically
  }));

  return (
    <WhyChooseSection
      features={featuresWithImages} // Pass the features with images
      title={whyChooseUsData.title}
      subtitle={whyChooseUsData.subtitle}
      autoPlayInterval={4000}
      imageHeight="h-[500px]"
      currentLocale={currentLocale}
    />
  );
}
