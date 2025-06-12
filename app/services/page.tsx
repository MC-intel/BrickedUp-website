import { Card, CardContent } from "@/components/ui/card"
import { Hammer } from "lucide-react"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

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
              className="text-amber-600 font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 rounded-sm"
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
              className="text-gray-600 hover:text-gray-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 rounded-sm"
            >
              Contact
            </Link>
          </div>
          <MobileMenu />
        </nav>
      </header>

      <main>
        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-gray-100 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-semibold mb-2">{service.name}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
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
