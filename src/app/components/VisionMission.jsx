// src/app/components/VisionMission.jsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have cn utility

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export function MissionVision({ dictionary, currentLocale }) {
  // Accept props
  const isArabic = currentLocale === "ar";

  return (
    <section
      className={cn(
        "overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black",
        isArabic ? "text-right" : "text-left" // Apply text alignment
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-50">
          {dictionary.mission_vision_heading} {/* Use dictionary for heading */}
        </h2>
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
          {/* Mission */}
          <motion.div
            className="flex-1 max-w-lg space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-semibold text-white">
              {dictionary.our_mission_heading} {/* Use dictionary */}
            </h3>
            <p className="text-lg text-gray-50 leading-relaxed">
              {dictionary.our_mission_paragraph} {/* Use dictionary */}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="flex-1 max-w-lg space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-semibold text-white">
              {dictionary.our_vision_heading} {/* Use dictionary */}
            </h3>
            <p className="text-lg text-gray-50 leading-relaxed">
              {dictionary.our_vision_paragraph} {/* Use dictionary */}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
