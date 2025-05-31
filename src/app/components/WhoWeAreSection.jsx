// src/app/components/WhoWeAreSection.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Assuming you have cn utility

export function WhoWeAreSection({ dictionary, currentLocale }) {
  // Accept props
  // stagger container: each direct child will animate in sequence
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // simple fade-up variant
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const isArabic = currentLocale === "ar";

  return (
    <motion.div
      className={cn(
        "bg-gradient-to-bl from-gray-900 via-gray-950 to-gray-800 overflow-hidden",
        isArabic ? "text-right" : "text-left" // Apply text alignment based on locale
      )}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={fadeUp}>
        <div className="px-6 pb-5 mx-auto max-w-7xl pt-16 sm:pt-16 lg:px-4 lg:pt-24">
          <motion.div
            className="max-w-2xl mx-auto gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
            variants={fadeUp}
          >
            {/* Left text block */}
            <motion.div
              className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl"
              variants={fadeUp}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-50 text-balance sm:text-6xl">
                {dictionary.who_we_are_heading}{" "}
                {/* Use dictionary for heading */}
                <span className="font-serif">!</span>
              </h1>
              <p className="relative mt-6 text-lg leading-8 text-gray-100 sm:max-w-md lg:max-w-xl text-justify">
                {dictionary.who_we_are_paragraph1}{" "}
                {/* Use dictionary for paragraph 1 */}
              </p>
              <p className="relative mt-8 text-lg leading-8 text-gray-100 sm:max-w-md lg:max-w-xl text-justify">
                {dictionary.who_we_are_paragraph2}{" "}
                {/* Use dictionary for paragraph 2 */}
              </p>
            </motion.div>

            {/* Right images block (no changes needed here for translation) */}
            <motion.div
              className="flex justify-end gap-8 mt-14 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
              variants={fadeUp}
            >
              <motion.div
                className="flex-none pt-32 ml-auto space-y-8 w-44 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
                variants={fadeUp}
              >
                <div className="relative">
                  <Image
                    alt="ok"
                    loading="lazy"
                    width={720}
                    height={490}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    src="/images/team/1.jpg"
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </motion.div>

              <motion.div
                className="flex-none mr-auto space-y-8 w-44 sm:mr-0 sm:pt-52 lg:pt-36"
                variants={fadeUp}
              >
                <div className="relative">
                  <Image
                    alt="ok"
                    loading="lazy"
                    width={720}
                    height={479}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    src="/images/team/2.jpg"
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image
                    alt="Teacher"
                    loading="lazy"
                    width={720}
                    height={479}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    src="/images/team/4.jpg"
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </motion.div>

              <motion.div
                className="flex-none pt-32 space-y-8 w-44 sm:pt-0"
                variants={fadeUp}
              >
                <div className="relative">
                  <Image
                    alt="Schoolg"
                    loading="lazy"
                    width={720}
                    height={480}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    src="/images/team/5.jpg"
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image
                    alt="Teacher"
                    loading="lazy"
                    width={480}
                    height={720}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    src="/images/team/3.avif"
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
