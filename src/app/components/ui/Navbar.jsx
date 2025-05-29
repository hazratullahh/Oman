// src/app/components/ui/Navbar.jsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ContactBtn } from "../ContactButton";
import LanguageSwitcher from "../LanguageSwitcher";

export function Navbar({ items, className, dictionary, currentLocale }) {
  // Active tab should probably use the `key` now, or a derived value
  const [activeTab, setActiveTab] = useState(items[0].key); // Initialize with the key of the first item
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top gradient background with logo (desktop) */}
      <div className="bg-gradient-to-t pl-0   md:pl-10 from-gray-900 via-gray-950 to-950">
        <div className="flex justify-between max-w-7xl mx-auto items-center ">
          <div className="max-w-[85%] ">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                className="rounded w-40 hidden md:flex"
                width={1000}
                height={1000}
              />
            </Link>
          </div>
          <div className="">
            <LanguageSwitcher currentLocale={currentLocale} />
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="bg-gradient-to-t from-gray-900 via-gray-950 to-950">
        <div className="max-w-[85%] mx-auto">
          <div className="md:hidden flex items-center justify-between">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                className="rounded w-40"
                width={1000}
                height={1000}
              />
            </Link>
            {/* Use dictionary for the Contact Us button */}
            <ContactBtn
              path="/contact"
              name={dictionary.menu_contact_us_button}
            />
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <div
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-100 transition-all duration-300",
          isMobile ? "bottom-5 mb-2" : isScrolled ? "top-5" : "top-14",
          className
        )}
      >
        <div className="flex items-center gap-3 bg-background border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.key; // Compare with item.key now

            return (
              <Link
                key={item.key} // Use item.key for the unique key prop
                href={item.url}
                onClick={() => setActiveTab(item.key)} // Set active tab by key
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary"
                )}
              >
                {/* Use the dictionary to get the translated name */}
                <span className="hidden md:inline">{dictionary[item.key]}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
