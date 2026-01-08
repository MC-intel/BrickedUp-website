import { Card, CardContent } from "@/components/ui/card"
import { Hammer, Phone, Mail, ChevronRight } from "lucide-react"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      name: "Brickwork",
      description: "From new constructions to intricate repairs, we handle all types of bricklaying with precision.",
    },
    {
      name: "Stonework",
      description:
        "Custom stone patios, retaining walls, and beautiful veneers that add natural elegance to your property.",
    },
    {
      name: "Chimney Repair",
      description: "Expert chimney inspections, repairs, and rebuilding to ensure safety and functionality.",
    },
    {
      name: "Patios & Walkways",
      description: "Creating durable and stunning outdoor living spaces with pavers, flagstone, and more.",
    },
    {
      name: "Tuckpointing",
      description: "Preserving the integrity and appearance of your masonry by repairing mortar joints.",
    },
    {
      name: "Foundation Repair",
      description: "Addressing cracks and structural issues to ensure your building's foundation is secure.",
    },
  ]

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
            <Link href="/services" className="text-orange font-semibold">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-orange transition-colors duration-300 font-medium">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-orange transition-colors duration-300 font-medium">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">Our Services</h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Professional masonry services delivered with skill, precision, and pride.
            </p>
          </div>
        </section>

        <div className="industrial-divider" />

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group rustic-card hover-lift cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-brick/10 p-3 rounded-lg group-hover:bg-brick transition-colors duration-300">
                        <Hammer className="h-6 w-6 text-brick group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2 text-charcoal group-hover:text-brick transition-colors duration-300">
                          {service.name}
                        </h4>
                        <p className="text-steel leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-brick opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold">Learn more</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="industrial-divider" />

        {/* CTA Section */}
        <section className="py-16 bg-light-grey">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Ready to Get Started?</h3>
            <p className="text-steel mb-8 max-w-xl mx-auto">
              Contact us today for a free consultation and quote on your masonry project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-brick hover:bg-brick-light text-white font-bold">
                <a href="tel:555-123-4567">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (555) 123-4567
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-brick text-brick hover:bg-brick hover:text-white font-bold">
                <Link href="/contact">
                  Request a Quote
                </Link>
              </Button>
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
