"use client"

import { Hammer, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"

interface HeaderProps {
  currentPage?: "home" | "services" | "portfolio" | "contact"
}

export function Header({ currentPage }: HeaderProps) {
  const navLinks = [
    { href: "/services", label: "Services", page: "services" as const },
    { href: "/portfolio", label: "Portfolio", page: "portfolio" as const },
    { href: "/contact", label: "Contact", page: "contact" as const },
  ]

  return (
    <header className="bg-charcoal shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-orange p-2 rounded">
            <Hammer className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">
            <Link href="/" className="hover:text-orange transition-colors duration-300">
              BrickedUp Masonry
            </Link>
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                currentPage === link.page
                  ? "text-orange font-semibold"
                  : "text-gray-300 hover:text-orange transition-colors duration-300 font-medium"
              }
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-orange hover:bg-orange-light text-white font-bold">
            <a href="tel:555-123-4567">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </Button>
        </div>
        <MobileMenu />
      </nav>
      <div className="h-1 bg-gradient-to-r from-brick via-orange to-brick" />
    </header>
  )
}
