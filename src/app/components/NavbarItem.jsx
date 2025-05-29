// src/components/NavbarItem.jsx
"use client";

import { Home, User, Contact, FileText, MailQuestion } from "lucide-react";
import { Navbar } from "@/app/components/ui/Navbar"; // Note: this path might need to be relative depending on your actual structure

export function NavbarItem({ dictionary, currentLocale }) {
  // All URLs must be constructed with the currentLocale
  // The 'name' property now corresponds to the dictionary key
  const navItems = [
    { key: "menu_home", url: `/${currentLocale}`, icon: Home },
    { key: "menu_about", url: `/${currentLocale}/about`, icon: User },
    {
      key: "menu_services",
      url: `/${currentLocale}/#services`,
      icon: FileText,
    },
    { key: "menu_contact", url: `/${currentLocale}/contact`, icon: Contact },
    { key: "menu_faq", url: `/${currentLocale}/faq`, icon: MailQuestion },
  ];

  return (
    <Navbar
      items={navItems}
      dictionary={dictionary} // Pass dictionary to Navbar
      currentLocale={currentLocale}
    />
  );
}
