// src/app/components/StatsCardsSection.jsx
"use client";

import { motion } from "framer-motion";
import StatsCard from "./StatsCard";

const statsStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export default function StatsCardsSection({ dictionary }) {
  // Accept dictionary prop
  return (
    <motion.div
      className="relative z-30 -top-1 w-full max-w-7xl px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 justify-items-center -mt-20 sm:-mt-28 lg:-mt-36 pt-10"
      variants={statsStagger}
      initial="hidden"
      animate="visible"
    >
      <StatsCard
        title={dictionary.stats_happy_clients}
        value="120"
        suffix="+"
        color="blue"
      />
      <StatsCard
        title={dictionary.stats_projects_completed} // Use dictionary for title
        value="350"
        suffix="+"
        color="emerald"
      />
      <StatsCard
        title={dictionary.stats_regions_served}
        value="15"
        suffix="+"
        color="orange"
      />
    </motion.div>
  );
}
