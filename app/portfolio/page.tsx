import { Card, CardContent } from "@/components/ui/card"
import { Hammer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "Stone Fireplace",
      description: "A stunning modern brick fireplace, perfect for contemporary homes.",
      image: "/images/stone-fireplace.jpg",
      alt: "Modern stone fireplace with natural stone surround",
    },
    {
      id: 2,
      title: "Brick Patio",
      description: "Spacious custom stone patio for outdoor living.",
      image: "/images/brick-patio.jpg",
      alt: "Custom brick patio with outdoor furniture",
    },
    {
      id: 3,
      title: "Retaining Wall",
      description: "Sturdy and aesthetic brick retaining wall.",
      image: "/images/retaining-wall.jpg",
      alt: "Professional brick retaining wall with landscaping",
    },
    {
      id: 4,
      title: "Outdoor Kitchen",
      description: "Deluxe outdoor kitchen with brick and stone finish.",
      image: "/images/outdoor-kitchen.jpg",
      alt: "Outdoor brick kitchen with grill and countertops",
    },
    {
      id: 5,
      title: "Chimney Restoration",
      description: "Expert repair of a tall brick chimney.",
      image: "/images/chimney-restoration.jpg",
      alt: "Restored brick chimney on residential home",
    },
    {
      id: 6,
      title: "Walkway & Steps",
      description: "Beautifully crafted stone walkway and front steps.",
      image: "/images/walkway-steps.jpg",
      alt: "Stone walkway and steps leading to home entrance",
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
              className="text-gray-600 hover:text-gray-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 rounded-sm"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-amber-600 font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 rounded-sm"
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
        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-12">Our Work</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <Card key={item.id} className="bg-gray-50 overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h5 className="font-bold text-lg mb-2">{item.title}</h5>
                    <p className="text-gray-600">{item.description}</p>
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
