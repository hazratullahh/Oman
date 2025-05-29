"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const slideVariants = {
  hidden: {
    x: 0,
    y: 0,
    scale: 0,
    opacity: 0,
    zIndex: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 20,
      stiffness: 300,
    },
  },
  prev: {
    x: "-180px",
    y: "20px",
    scale: 0.85,
    opacity: 0.8,
    zIndex: 2,
    boxShadow: "0 18px 36px -10px rgba(0, 0, 0, 0.4)",
    border: "8px solid #F8FAFC",
    width: "300px",
    height: "480px",
    transition: { type: "spring", stiffness: 80, damping: 12, duration: 1.5 },
  },
  current: {
    x: "0px",
    y: "0px",
    scale: 1,
    opacity: 1,
    zIndex: 3,
    boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.6)",
    border: "12px solid #F8FAFC",
    width: "350px",
    height: "550px",
    transition: { type: "spring", stiffness: 80, damping: 12, duration: 1.5 },
  },
  next: {
    x: "180px",
    y: "-20px",
    scale: 0.85,
    opacity: 0.8,
    zIndex: 2,
    boxShadow: "0 18px 36px -10px rgba(0, 0, 0, 0.4)",
    border: "8px solid #F8FAFC",
    width: "300px",
    height: "480px",
    transition: { type: "spring", stiffness: 80, damping: 12, duration: 1.5 },
  },
};

export default function HeroImageSlider({
  heroImages,
  currentSlideIndex,
  setCurrentSlideIndex,
}) {
  return (
    <motion.div
      className="relative  flex justify-center items-center h-[350px] md:h-[550px] lg:h-[650px] w-full mt-16 lg:mt-0"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    >
      <div className="relative w-full h-full flex justify-center items-center">
        {heroImages.map((image, index) => {
          let positionState;

          if (index === currentSlideIndex) {
            positionState = "current";
          } else if (
            index ===
            (currentSlideIndex - 1 + heroImages.length) % heroImages.length
          ) {
            positionState = "prev";
          } else if (index === (currentSlideIndex + 1) % heroImages.length) {
            positionState = "next";
          } else {
            positionState = "hidden";
          }

          return (
            <motion.div
              key={image.src}
              className="absolute rounded-3xl overflow-hidden flex items-center justify-center cursor-pointer"
              variants={slideVariants}
              initial="hidden"
              animate={positionState}
              onClick={() => setCurrentSlideIndex(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover" // Apply object-fit using a Tailwind CSS class
                priority={positionState === "current"}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Pagination dots for navigation */}
      <div className="absolute bottom-6 flex gap-3 z-30">
        {heroImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlideIndex
                ? "bg-red-500 scale-125"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
            onClick={() => setCurrentSlideIndex(index)}
          />
        ))}
      </div>
    </motion.div>
  );
}
