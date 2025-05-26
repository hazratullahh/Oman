"use client"

import { Home, User, Contact, FileText, MailQuestion,  } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarMobile() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Services', url: '#services', icon: FileText },
    { name: 'Contact', url: '/contact', icon: Contact },
    { name: 'FAQ', url: '/faq', icon: MailQuestion }
  ]

  return <NavBar items={navItems} />
}