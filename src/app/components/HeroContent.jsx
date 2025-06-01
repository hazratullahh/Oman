// src/app/components/HeroContent.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInSlideUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut", type: "spring", damping: 20 },
  },
};

const buttonFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.4,
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function HeroContent({ dictionary, currentLocale }) {
  const isArabic = currentLocale === "ar";

  return (
    <div
      className={`flex flex-col justify-center text-white drop-shadow-lg ${
        isArabic ? "text-center lg:text-right" : "text-center lg:text-left" // Conditional text alignment
      }`}
    >
      <motion.h1
        className={`text-3xl capitalize sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight font-[Inter,Poppins,sans-serif] bg-clip-text bg-gradient-to-r text-white ${
          isArabic ? "arabic-rtl-text" : "" // Add a custom class for Arabic specific adjustments if needed
        }`}
        variants={fadeInSlideUp}
        initial="hidden"
        animate="visible"
      >
        {/* Conditional rendering for heading parts based on language */}
        {isArabic ? (
          <>
            {dictionary.hero_heading_part1}
            <span className="text-red-400">
              {dictionary.hero_heading_part2}
            </span>
            {dictionary.hero_heading_part3}
            <br className="hidden sm:inline" />

            <motion.span
              className="relative inline-block text-green-300 bg-clip-text bg-gradient-to-r from-green-300 to-green-500"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {dictionary.hero_heading_part4}
              <span className="absolute left-0 bottom-0 h-2 bg-green-500 w-full rounded-full transform -translate-y-1 opacity-60"></span>
            </motion.span>
          </>
        ) : (
          <>
            {dictionary.hero_heading_part1}
            <span className="text-red-400">
              {dictionary.hero_heading_part2}
            </span>
            <br className="hidden sm:inline" />
            {dictionary.hero_heading_part3}
            <motion.span
              className="relative inline-block text-green-300 bg-clip-text bg-gradient-to-r from-green-300 to-green-500"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {dictionary.hero_heading_part4}
              <span className="absolute left-0 bottom-0 h-2 bg-green-500 w-full rounded-full transform -translate-y-1 opacity-60"></span>
            </motion.span>
          </>
        )}
      </motion.h1>

      <motion.p
        className={`mt-6 text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed text-gray-100 font-[Inter,sans-serif] ${
          isArabic ? "lg:mr-0 lg:ml-auto" : "lg:mx-0" // Adjust margin for RTL alignment if needed
        }`}
        variants={fadeInSlideUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        {dictionary.hero_description}
      </motion.p>

      <motion.div
        className={`mt-12 flex flex-col gap-6 justify-center ${
          isArabic
            ? "sm:flex-row-reverse lg:justify-end"
            : "sm:flex-row lg:justify-start" // Reverse flex direction and justify for RTL
        }`}
        variants={buttonFadeIn}
        initial="hidden"
        animate="visible"
      >
        <Link href="/contact">
          <motion.button
            aria-label={dictionary.hero_contact_us_button}
            className="flex items-center justify-center w-full gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-green-500 to-red-500 text-white font-bold rounded-full shadow-md hover:from-green-600 hover:to-red-600 transition-all duration-300 transform hover:scale-3d cursor-pointer active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {dictionary.hero_contact_us_button}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-4 h-4 sm:w-5 sm:h-5 ${
                isArabic ? "order-first ml-2" : "order-last mr-2" // Icon order and margin for RTL
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </motion.button>
        </Link>

        <motion.a
          href="https://www.manzoorify.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={dictionary.hero_tech_services_button}
          className="flex items-center justify-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-white via-green-100 to-red-100 text-red-600 font-semibold rounded-full shadow-inner hover:from-white hover:via-green-200 hover:to-red-200 hover:text-red-500 transition-all duration-300 transform hover:scale-3d cursor-pointer active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-200 text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {dictionary.hero_tech_services_button}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`w-4 h-4 sm:w-5 sm:h-5 ${
              isArabic ? "order-first ml-2" : "order-last mr-2" // Icon order and margin for RTL
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
}
