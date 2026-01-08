import { Hammer, Phone, Mail } from "lucide-react"
import Link from "next/link"

interface FooterProps {
  variant?: "full" | "simple"
}

export function Footer({ variant = "simple" }: FooterProps) {
  if (variant === "full") {
    return (
      <footer className="bg-charcoal text-white">
        <div className="h-1 bg-gradient-to-r from-brick via-orange to-brick" />
        <div className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-orange p-2 rounded">
                    <Hammer className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">BrickedUp Masonry</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Serving the greater area with pride and quality craftsmanship for over 20 years.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-orange">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services" className="text-gray-400 hover:text-orange transition-colors duration-300">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="text-gray-400 hover:text-orange transition-colors duration-300">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-orange transition-colors duration-300">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-orange">Contact Information</h4>
                <div className="space-y-3">
                  <a
                    href="tel:555-123-4567"
                    className="flex items-center space-x-3 text-gray-400 hover:text-orange transition-colors duration-300"
                  >
                    <Phone className="h-5 w-5 text-orange" />
                    <span>(555) 123-4567</span>
                  </a>
                  <a
                    href="mailto:contact@elitemasonrydemo.com"
                    className="flex items-center space-x-3 text-gray-400 hover:text-orange transition-colors duration-300"
                  >
                    <Mail className="h-5 w-5 text-orange" />
                    <span>contact@elitemasonrydemo.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} BrickedUp Masonry. All Rights Reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="#facebook" className="text-gray-500 hover:text-orange transition-colors duration-300 font-medium">
                  Facebook
                </Link>
                <Link href="#instagram" className="text-gray-500 hover:text-orange transition-colors duration-300 font-medium">
                  Instagram
                </Link>
                <Link href="#threads" className="text-gray-500 hover:text-orange transition-colors duration-300 font-medium">
                  Threads
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  // Simple footer variant
  return (
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
            <a
              href="tel:555-123-4567"
              className="flex items-center space-x-2 text-gray-400 hover:text-orange transition-colors duration-300"
            >
              <Phone className="h-5 w-5 text-orange" />
              <span>(555) 123-4567</span>
            </a>
            <a
              href="mailto:contact@elitemasonrydemo.com"
              className="flex items-center space-x-2 text-gray-400 hover:text-orange transition-colors duration-300"
            >
              <Mail className="h-5 w-5 text-orange" />
              <span>contact@elitemasonrydemo.com</span>
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BrickedUp Masonry. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
