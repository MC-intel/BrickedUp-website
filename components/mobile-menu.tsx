"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <button onClick={toggleMenu} className="md:hidden flex items-center" aria-label="Toggle mobile menu">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <Link
            href="/services"
            onClick={closeMenu}
            className="block py-2 px-4 text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            onClick={closeMenu}
            className="block py-2 px-4 text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
          >
            Portfolio
          </Link>
          <Link
            href="/contact#portal"
            onClick={closeMenu}
            className="block py-2 px-4 text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
          >
            Job Request
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block py-2 px-4 text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
          >
            Contact
          </Link>
        </div>
      )}
    </>
  )
}
