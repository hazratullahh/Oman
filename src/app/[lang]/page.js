// src/app/[lang]/page.js
import { Feature } from "@/app/components/Feature";
import HeroSection from "@/app/components/HeroSection";
import InfiniteScrollImages from "@/app/components/InfiniteScrollImages ";
import ScrollToHash from "@/app/components/ScrollToHash";
import { Testimonials } from "@/app/components/Testimonials";
import { WhyChooseUS } from "@/app/components/WhyChoose-Us";
import { testimonials } from "@/lib/utils";
import { getDictionary } from "@/lib/i18n"; // Make sure this import path is correct 

export default async function Home({ params }) {
  const resolvedParams = await params;

  const dictionary = await getDictionary(resolvedParams.lang); // Use resolvedParams.lang

  return (
    <>
      <ScrollToHash />
      {/* CORRECTED LINE: Pass resolvedParams.lang as currentLocale */}
      <HeroSection
        dictionary={dictionary}
        currentLocale={resolvedParams.lang}
      />
      <div id="services">
        <Feature dictionary={dictionary} currentLocale={resolvedParams.lang} />
      </div>
      <WhyChooseUS
        dictionary={dictionary}
        currentLocale={resolvedParams.lang}
      />
      <InfiniteScrollImages
        dictionary={dictionary}
        currentLocale={resolvedParams.lang}
      />
      <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black h-[40rem] flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <Testimonials
          items={testimonials}
          direction="right"
          speed="slow"
          dictionary={dictionary}
          currentLocale={resolvedParams.lang}
        />
      </div>
    </>
  );
}
