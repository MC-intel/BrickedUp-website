"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center text-white hover:text-orange transition-colors duration-300"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-charcoal/95 z-50 md:hidden animate-fade-in">
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={closeMenu}
                className="text-white hover:text-orange transition-colors duration-300"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex-1 flex flex-col items-center justify-center space-y-8 px-6">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-3xl font-bold text-white hover:text-orange transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={closeMenu}
                className="text-3xl font-bold text-white hover:text-orange transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                onClick={closeMenu}
                className="text-3xl font-bold text-white hover:text-orange transition-colors duration-300"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-3xl font-bold text-white hover:text-orange transition-colors duration-300"
              >
                Contact
              </Link>

              {/* CTA Button */}
              <a
                href="tel:555-123-4567"
                onClick={closeMenu}
                className="mt-8 inline-flex items-center gap-2 bg-orange hover:bg-orange-light text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
                Call (555) 123-4567
              </a>
            </nav>

            {/* Bottom accent */}
            <div className="h-1 bg-gradient-to-r from-brick via-orange to-brick" />
          </div>
        </div>
      )}
    </>
  )
}
