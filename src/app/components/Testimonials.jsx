// src/app/components/Testimonials.jsx
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import ElfsightGoogleReviews from "./ElfsightGoogleReviews";

export const Testimonials = ({
  items,
  dictionary,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  currentLocale,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const isArabic = currentLocale === "ar";

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <>
      <div
        className={`flex flex-col items-center gap-1 px-4 md:pt-8 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight text-gray-50">
          {dictionary.testimonials_heading}{" "}
        </h2>
        <p className="text-md max-w-[700px] font-medium text-muted-foreground sm:text-xl mb-12 text-gray-50">
          {dictionary.testimonials_subheading}{" "}
        </p>
      </div>
      <div className=" flex flex-col items-center bg-gradient-to-b from-gray-200 via-gray-300 to-slate-100 rounded-3xl justify-center relative overflow-hidden">
        {/* Your previous Testimonials component is replaced by the Elfsight widget */}
        <ElfsightGoogleReviews />
      </div>
      {/* <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden",
          "ltr", // Ensures this container and its children are LTR
          "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              // Explicitly set text-left and direction-ltr for each item
              className={cn(
                "relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-700 bg-[linear-gradient(180deg,#232326,#1A1A1D)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]",
                "text-left ltr" // <--- ADD THIS HERE for the entire list item
              )}
              key={item.name + idx}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 text-sm leading-[1.6] font-normal text-gray-50 dark:text-gray-100 ltr text-left">
                  {" "}
                  {item.quote}
                </span>
                <div
                  className={cn(
                    "relative z-20 mt-6 flex flex-row items-center",
                    "ltr" // <--- Add LTR here if the flex direction inside should be LTR
                  )}
                >
                  <span
                    className={cn(
                      "flex flex-col gap-1",
                      "ltr text-left" // <--- Add LTR and text-left here for name/title
                    )}
                  >
                    <span className="text-sm leading-[1.6] font-normal text-gray-50 dark:text-gray-400 ltr text-left">
                      {" "}
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] font-normal text-gray-50 dark:text-gray-400 ltr text-left">
                      {" "}
=                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
};
