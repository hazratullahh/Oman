// src/components/LanguageSwitcher.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image"; // Import the Image component
import { FaGlobe, FaCaretDown, FaCheck } from "react-icons/fa";

const locales = [
  { code: "en", name: "English", icon: "/images/us.png" }, // Using USA flag for English
  { code: "ar", name: "العربية", icon: "/images/su.png" }, // Using Saudi Arabia flag for Arabic, corrected extension
];

export default function LanguageSwitcher({ currentLocale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const getLocalizedPath = (newLocale) => {
    const pathSegments = pathname.split("/");
    // Find the current locale in the path and remove it, or just keep the path
    const filteredSegments = pathSegments.filter(
      (segment) => !locales.some((locale) => locale.code === segment)
    );
    const originalPath =
      filteredSegments.length > 1 ? filteredSegments.slice(1).join("/") : "";
    return `/${newLocale}${originalPath ? `/${originalPath}` : ""}`;
  };

  const handleLocaleChange = (newLocale) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }
    router.push(getLocalizedPath(newLocale));
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Find the current locale's icon path
  const currentLocaleIconPath =
    locales.find((lang) => lang.code === currentLocale)?.icon || null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Select Language"
      >
        {currentLocaleIconPath ? (
          <Image
            src={currentLocaleIconPath}
            alt={`${currentLocale} flag`}
            width={20}
            height={15}
            className="rounded-sm"
          />
        ) : (
          <FaGlobe className="text-lg" />
        )}
        <span className="font-semibold uppercase">{currentLocale}</span>
        <FaCaretDown
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-md shadow-lg py-1 z-50">
          {locales.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLocaleChange(lang.code)}
              className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white text-sm transition-colors duration-200"
              role="menuitem"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={lang.icon}
                  alt={`${lang.name} flag`}
                  width={20}
                  height={15}
                  className="rounded-sm"
                />
                <span>{lang.name}</span>
              </div>
              {currentLocale === lang.code && (
                <FaCheck className="text-blue-500" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
