"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HeroBackgroundSlider from "./HeroBackgroundSlider";
import HeroContent from "./HeroContent";
import HeroImageSlider from "./HeroImageSlider";
import StatsCardsSection from "./StatsCardsSection";

export default function HeroSection({ dictionary, currentLocale }) {
  const heroImages = [
    {
      src: "/images/hero/hero-1.jpg",
      alt: "web development",
    },
    {
      src: "/images/hero/hero-2.jpg",
      alt: "mobile development",
    },
    {
      src: "/images/hero/hero-3.jpg",
      alt: "Id Card",
    },
    {
      src: "/images/hero/hero-4.jpg",
      alt: "Id Card",
    },
    {
      src: "/images/hero/hero-5.jpg",
      alt: "cars transfer",
    },
    {
      src: "/images/hero/hero-6.jpg",
      alt: "update id card",
    },
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto-slide effect for background and foreground image sliders
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-black">
      {/* Full-bleed Background Image Slider */}
      <AnimatePresence initial={false}>
        <HeroBackgroundSlider
          key={heroImages[currentSlideIndex].src} // Key is important for AnimatePresence
          image={heroImages[currentSlideIndex]}
        />
      </AnimatePresence>

      {/* Main Content Container - sits on top of the background */}
      <div
        className=" z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start
                   px-6 py-24  md:px-8
                   min-h-[calc(100vh_+_10rem)] sm:min-h-[calc(100vh_+_8rem)] lg:min-h-[calc(100vh_+_6rem)]"
      >
        {/* Left Side: Hero Content */}
        <HeroContent dictionary={dictionary} currentLocale={currentLocale} />

        {/* Right Side: Overlapping Image Slider */}
        <div className="py-8 sm:py-0">
          <HeroImageSlider
            heroImages={heroImages}
            currentSlideIndex={currentSlideIndex}
            setCurrentSlideIndex={setCurrentSlideIndex}
          />
        </div>
      </div>

      {/* Stats Cards Section - positioned to overlap the bottom of the hero */}
      {/* <div className="pb-8 sm:py-0">
        <StatsCardsSection
          dictionary={dictionary}
          currentLocale={currentLocale}
        />
      </div> */}
    </main>
  );
}
