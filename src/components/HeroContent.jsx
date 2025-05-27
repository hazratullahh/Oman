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

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center text-center lg:text-left text-white drop-shadow-lg">
      <motion.h1
        className="text-3xl capitalize sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight font-[Inter,Poppins,sans-serif] bg-clip-text  bg-gradient-to-r text-white"
        variants={fadeInSlideUp}
        initial="hidden"
        animate="visible"
      >
        Set up your <span className="text-red-400">business</span>
        <br className="hidden sm:inline" />
        investment With
        <motion.span
          className="relative inline-block text-green-300 bg-clip-text bg-gradient-to-r from-green-300 to-green-500"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Expert!
          <span className="absolute left-0 bottom-0 h-2 bg-green-500 w-full rounded-full transform -translate-y-1 opacity-60"></span>
        </motion.span>
      </motion.h1>

      <motion.p
        className="mt-6 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed text-gray-100 font-[Inter,sans-serif]"
        variants={fadeInSlideUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        To transform life and business in Oman by making every interaction
        simple, every process predictable, and every outcome successful.
        Empowering clients with innovative solutions and personalized support.
      </motion.p>

      <motion.div
        className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
        variants={buttonFadeIn}
        initial="hidden"
        animate="visible"
      >
        <Link href="/contact">
          <motion.button
            aria-label="Contact us"
            className="flex items-center justify-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-green-500 to-red-500 text-white font-bold rounded-full shadow-md hover:from-green-600 hover:to-red-600 transition-all duration-300 transform hover:scale-3d cursor-pointer active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
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
          aria-label="Explore our services"
          className="flex items-center justify-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-white via-green-100 to-red-100 text-red-600 font-semibold rounded-full shadow-inner hover:from-white hover:via-green-200 hover:to-red-200 hover:text-red-500 transition-all duration-300 transform hover:scale-3d cursor-pointer active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-200 text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Our Technology Services
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5"
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
