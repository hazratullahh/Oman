"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // Import cn utility if not already

export default function FaqClient({ faqData, currentLang }) {
  const [openIndex, setOpenIndex] = useState(null);
  const isArabic = currentLang === "ar";

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl space-y-4">
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;
        // Dynamically select question and answer based on current language
        const question = isArabic ? item.question_ar : item.question_en;
        const answer = isArabic ? item.answer_ar : item.answer_en;

        return (
          <div
            key={index}
            className="border border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
              className={cn(
                "w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-indigo-500",
                isArabic ? "flex-row-reverse" : "" // Reverse order for RTL
              )}
            >
              <span className="text-lg font-medium">{question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-indigo-400 text-2xl font-bold select-none"
                aria-hidden="true"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={cn(
                    "px-6 pb-6 text-gray-300 overflow-hidden",
                    isArabic ? "text-right" : "text-left" // Align answer text
                  )}
                >
                  <p className="m-auto mt-5">{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
