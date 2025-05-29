// src/components/LanguageSwitcher.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaGlobe, FaCaretDown, FaCheck } from "react-icons/fa"; // Globe icon, dropdown arrow, checkmark
import { FaFlagUsa, FaFlag } from "react-icons/fa6"; // Using fa6 for more specific flags if available, or just fa
import { RiFlag2Fill } from "react-icons/ri"; // General flag if specific country flags aren't suitable or available

const locales = [
  { code: "en", name: "English", icon: FaFlagUsa }, // Using USA flag for English
  { code: "ar", name: "العربية", icon: RiFlag2Fill }, // Using a generic flag for Arabic, consider a specific country flag if appropriate (e.g., FaFlagSa for Saudi Arabia if that fits your context, or FaFlagUae for UAE)
];

export default function LanguageSwitcher({ currentLocale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const getLocalizedPath = (newLocale) => {
    const pathSegments = pathname.split("/");
    const originalPath =
      pathSegments.length > 2 ? pathSegments.slice(2).join("/") : "";
    return `/${newLocale}${originalPath ? `/${originalPath}` : ""}`;
  };

  const handleLocaleChange = (newLocale) => {
    if (newLocale === currentLocale) {
      setIsOpen(false); // Close dropdown even if already selected
      return;
    }
    router.push(getLocalizedPath(newLocale));
    setIsOpen(false); // Close dropdown after selection
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

  const CurrentLocaleIcon =
    locales.find((lang) => lang.code === currentLocale)?.icon || FaGlobe; // Fallback to globe icon

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Select Language"
      >
        <CurrentLocaleIcon className="text-lg" />
        <span className="font-semibold uppercase">{currentLocale}</span>{" "}
        {/* Show current locale code */}
        <FaCaretDown
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-md shadow-lg py-1 z-50">
          {locales.map((lang) => {
            const LangIcon = lang.icon;
            return (
              <button
                key={lang.code}
                onClick={() => handleLocaleChange(lang.code)}
                className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white text-sm transition-colors duration-200"
                role="menuitem"
              >
                <div className="flex items-center gap-2">
                  <LangIcon className="text-lg" />
                  <span>{lang.name}</span>
                </div>
                {currentLocale === lang.code && (
                  <FaCheck className="text-blue-500" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
