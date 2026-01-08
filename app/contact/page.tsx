import { Hammer, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"
import { JobRequestForm } from "@/components/job-request-form"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <header className="bg-charcoal shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-orange p-2 rounded">
              <Hammer className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">
              <Link href="/" className="hover:text-orange transition-colors duration-300">BrickedUp Masonry</Link>
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-300 hover:text-orange transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-orange transition-colors duration-300 font-medium">
              Portfolio
            </Link>
            <Link href="/contact" className="text-orange font-semibold">
              Contact
            </Link>
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

      <main>
        {/* Page Hero */}
        <section className="brick-pattern py-16 relative">
          <div className="absolute top-4 left-4 w-12 h-12 border-l-4 border-t-4 border-orange opacity-60" />
          <div className="absolute top-4 right-4 w-12 h-12 border-r-4 border-t-4 border-orange opacity-60" />
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">Contact Us</h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Ready to start your project? Get in touch with our team today.
            </p>
          </div>
        </section>

        <div className="industrial-divider" />

        {/* Job Request Portal Section */}
        <section id="portal" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Request a Quote</h3>
              <div className="w-24 h-1 bg-orange mx-auto mb-4" />
              <p className="text-steel max-w-2xl mx-auto">
                Fill out the form below to tell us about your project. Please be as detailed as possible.
                We'll get back to you within 2 business days.
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <JobRequestForm />
            </div>
          </div>
        </section>

        <div className="industrial-divider" />

        {/* Quick Message Section */}
        <section className="py-20 bg-light-grey">
          <div className="container mx-auto px-6">
            <div className="max-w-lg mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-charcoal mb-2">Quick Message</h3>
                <p className="text-steel">Have a quick question? Send us a message.</p>
              </div>
              <div className="animate-scale-in">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-white">
        <div className="h-1 bg-gradient-to-r from-brick via-orange to-brick" />
        <div className="py-12">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-orange p-2 rounded">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold">BrickedUp Masonry</h4>
            </div>
            <p className="text-gray-400 mb-6">Serving the greater area with pride and quality.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <a href="tel:555-123-4567" className="flex items-center space-x-2 text-gray-400 hover:text-orange transition-colors duration-300">
                <Phone className="h-5 w-5 text-orange" />
                <span>(555) 123-4567</span>
              </a>
              <a href="mailto:contact@elitemasonrydemo.com" className="flex items-center space-x-2 text-gray-400 hover:text-orange transition-colors duration-300">
                <Mail className="h-5 w-5 text-orange" />
                <span>contact@elitemasonrydemo.com</span>
              </a>
            </div>
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} BrickedUp Masonry. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
