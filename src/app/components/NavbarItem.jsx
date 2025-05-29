// src/components/NavbarItem.jsx (or wherever your NavbarItem component is located)
"use client";

import { Home, User, Contact, FileText, MailQuestion } from "lucide-react";
import { Navbar } from "@/app/components/ui/Navbar";

export function NavbarItem({ dictionary, currentLocale }) {
  // All URLs must be constructed with the currentLocale
  const navItems = [
    { name: "Home", url: `/${currentLocale}`, icon: Home }, // Home page for the current locale
    { name: "About", url: `/${currentLocale}/about`, icon: User }, // Localized About page
    // For hash links, still include the locale prefix for consistency
    { name: "Services", url: `/${currentLocale}/#services`, icon: FileText },
    { name: "Contact", url: `/${currentLocale}/contact`, icon: Contact }, // Localized Contact page
    { name: "FAQ", url: `/${currentLocale}/faq`, icon: MailQuestion }, // Localized FAQ page
  ];

  return (
    <Navbar
      items={navItems}
      dictionary={dictionary}
      currentLocale={currentLocale}
    />
  );
}
