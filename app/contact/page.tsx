import { Hammer } from "lucide-react"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"
import { JobRequestForm } from "@/components/job-request-form"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Hammer className="h-8 w-8 text-amber-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              <Link href="/">BrickedUp Masonry</Link>
            </h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link
              href="/services"
              className="text-gray-600 hover:text-gray-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 rounded-sm"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-600 hover:text-gray-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 rounded-sm"
            >
              Portfolio
            </Link>
            <Link
              href="/contact#portal"
              className="text-gray-600 hover:text-gray-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 rounded-sm"
            >
              Job Request
            </Link>
            <Link
              href="/contact"
              className="text-amber-600 font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 rounded-sm"
            >
              Contact
            </Link>
          </div>
          <MobileMenu />
        </nav>
      </header>

      <main>
        {/* Job Request Portal Section */}
        <section id="portal" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-4">Request a Quote</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Fill out the form below to tell us about your project. Please be as detailed as possible. We'll get back
              to you within 2 business days.
            </p>
            <JobRequestForm />
          </div>
        </section>

        {/* Quick Message Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-md mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-2xl font-bold mb-4">BrickedUp Masonry</h4>
          <p className="mb-2">Serving the greater area with pride and quality.</p>
          <p className="mb-4">
            <strong>Phone:</strong>{" "}
            <a
              href="tel:555-123-4567"
              className="hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-amber-500 rounded-sm"
            >
              (555) 123-4567
            </a>
          </p>
          <p className="mb-6">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@elitemasonrydemo.com"
              className="hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-amber-500 rounded-sm"
            >
              contact@elitemasonrydemo.com
            </a>
          </p>
          <p className="text-gray-400 text-sm">&copy; 2025 BrickedUp Masonry. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
