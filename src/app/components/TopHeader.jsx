// src/components/TopHeader.jsx
"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { cn } from "@/lib/utils"; // Assuming you have this utility for conditional classes

export function TopHeader() {
  return (
    <div className="bg-gray-800 text-gray-300 py-2 text-xs md:text-sm relative z-50">
      <div className="max-w-[90%] mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Contact Info (Left/Top on Mobile) */}
        {/* Adjusted gap and text size for mobile */}
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-1 text-xs sm:text-sm mb-1 sm:mb-0">
          <Link
            href="mailto:youremail.gmail.com"
            className="flex items-center gap-1 hover:text-white transition-colors whitespace-nowrap"
          >
            <Mail size={14} className="text-green-400" />{" "}
            {/* Smaller icon for mobile */}
            <span>youremail.gmail.com</span>
          </Link>
          {/* Separators hidden on very small screens, shown from sm */}
          <span className="hidden sm:inline-block text-gray-600">|</span>

          <Link
            href="tel:+96899726225"
            className="flex items-center gap-1 hover:text-white transition-colors whitespace-nowrap"
          >
            <Phone size={14} className="text-red-400" />{" "}
            {/* Smaller icon for mobile */}
            <span>+96 899 726 225</span>
          </Link>
          <span className="hidden sm:inline-block text-gray-600">|</span>

          <span className="flex items-center gap-1 whitespace-nowrap">
            <MapPin size={14} className="text-blue-400" />{" "}
            {/* Smaller icon for mobile */}
            <span>Oman - Al Buraimi</span>
          </span>
        </div>

        {/* Social Media (Right/Bottom on Mobile) */}
        {/* Adjusted spacing for mobile */}
        <div className="flex items-center gap-3 md:gap-4 mt-2 sm:mt-0 text-base">
          <Link
            href="https://www.facebook.com/profile.php?id=61576596532114"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500 transition-colors"
          >
            <FaFacebook size={16} /> {/* Standard icon size */}
          </Link>
          <Link
            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedinIn size={16} />
          </Link>
          <Link
            href="https://www.instagram.com/tasheelalburaimi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400  transition-colors"
          >
            <FaInstagram size={16} />
          </Link>
          <Link
            className="hover:text-green-400 transform hover:scale-125 transition-all duration-200 ease-in-out"
            href="https://wa.me/96899726225"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp"
          >
            <FaWhatsapp />
          </Link>
          <Link
            className="hover:text-blue-400 transform hover:scale-125 transition-all duration-200 ease-in-out"
            href="https://t.me/+971526540233"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <FaTelegram />
          </Link>
        </div>
      </div>
    </div>
  );
}
