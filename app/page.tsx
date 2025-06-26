import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Hammer, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { MobileMenu } from "@/components/mobile-menu"

export default function HomePage() {
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

  const testimonials = [
    {
      quote:
        "Exceptional craftsmanship! The team transformed our backyard with a beautiful stone patio. Highly recommend!",
      author: "Sarah Johnson",
    },
    {
      quote: "Professional, reliable, and skilled. Our fireplace restoration exceeded expectations. Thank you!",
      author: "Mike Thompson",
    },
    {
      quote: "Outstanding work on our retaining wall. Quality materials and expert installation. Very satisfied!",
      author: "Lisa Davis",
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
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-stone-900 to-stone-700 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Expert Masonry & Timeless Craftsmanship</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Building solid foundations and beautiful structures that last a lifetime.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Button
                asChild
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 w-full md:w-auto"
              >
                <a href="tel:555-123-4567">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us: (555) 123-4567
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 w-full md:w-auto"
              >
                <a href="mailto:contact@elitemasonrydemo.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email: contact@elitemasonrydemo.com
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-semibold mb-2 text-amber-700">{service.name}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-12">Our Work</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 bg-amber-50">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold text-amber-700 text-right">- {testimonial.author}</p>
                </Card>
              ))}
            </div>
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
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Hammer className="h-8 w-8 text-amber-500" />
                <h3 className="text-2xl font-bold">BrickedUp Masonry</h3>
              </div>
              <p className="text-gray-300 mb-4">Serving the greater area with pride and quality.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-amber-500" />
                  <span>Phone: (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-amber-500" />
                  <span>Email: contact@elitemasonrydemo.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2025 BrickedUp Masonry. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#facebook" className="text-gray-400 hover:text-white transition duration-300">
                Facebook
              </Link>
              <Link href="#instagram" className="text-gray-400 hover:text-white transition duration-300">
                Instagram
              </Link>
              <Link href="#threads" className="text-gray-400 hover:text-white transition duration-300">
                Threads
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
