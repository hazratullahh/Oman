"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function StatsCard({ title, value, suffix, color }) {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseFloat(value.replace(/[^\d.]/g, ""));
      const duration = 2000;
      const incrementTime = 50;

      const steps = duration / incrementTime;
      const increment = (end - start) / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        start += increment;
        currentStep++;
        if (currentStep <= steps) {
          setCurrentValue(Math.min(Math.floor(start), end));
        } else {
          setCurrentValue(end);
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    } else {
      setCurrentValue(0);
    }
  }, [isInView, value]);

  const displayValue = (num) => {
    if (suffix === "M+") {
      if (value.includes("M+")) {
        return `${(num / 1000000).toFixed(0)}M+`;
      }
    }
    return `${num}${suffix}`;
  };

  return (
    <motion.div
      ref={ref}
      // Increased 'min-w' to 'min-w-80' for significantly more horizontal space.
      // Adjusted padding for better fit with the new, wider dimensions.
      className={`relative px-10 py-6 sm:px-12 sm:py-8 rounded-2xl shadow-xl backdrop-blur-lg flex flex-col items-center justify-center text-center transform transition-transform duration-500 ease-out border border-neutral-800 h-36 min-w-80`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        scale: 1.03,
        boxShadow: `0 0 40px -5px rgba(var(--color-${color}-rgb), 0.6)`,
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: `linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
        "--color-blue-rgb": "37, 99, 235",
        "--color-emerald-rgb": "16, 185, 129",
        "--color-orange-rgb": "249, 115, 22",
      }}
    >
      <motion.span
        className={`text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent`}
        style={{
          backgroundImage: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`,
          "--tw-gradient-from": `var(--color-${color}-300, #ADD8E6)`,
          "--tw-gradient-to": `var(--color-${color}-500, #4682B4)`,
        }}
      >
        {displayValue(currentValue)}
      </motion.span>
      <p className="mt-2 text-base md:text-lg text-gray-200 font-semibold">
        {title}
      </p>
    </motion.div>
  );
}
