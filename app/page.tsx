import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Hammer, Home, Wrench, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BrickedUpMasonry() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-stone-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Hammer className="h-8 w-8 text-orange-500" />
              <h1 className="text-2xl font-bold">BrickedUp Masonry</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#services" className="hover:text-orange-500 transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="hover:text-orange-500 transition-colors">
                Portfolio
              </Link>
              <Link href="#contact" className="hover:text-orange-500 transition-colors">
                Job Request
              </Link>
              <Link href="#contact" className="hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-stone-900 to-stone-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Expert Masonry & Timeless Craftsmanship</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Building solid foundations and beautiful structures that last a lifetime.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-orange-500" />
              <span className="text-lg">Call Us: (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-orange-500" />
              <span className="text-lg">Email: contact@elitemasonrydemo.com</span>
            </div>
          </div>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
            Get Free Quote
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-stone-800">Residential Masonry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Custom stonework, brick patios, fireplaces, and outdoor living spaces for your home.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-stone-800">Restoration & Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert restoration of historic masonry, chimney repairs, and structural reinforcement.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Hammer className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-stone-800">Custom Stonework</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Retaining walls, walkways, outdoor kitchens, and architectural stone features.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">Our Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Modern brick fireplace project"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2 text-stone-800">Stone Fireplace</h3>
                <p className="text-gray-600">A stunning modern brick fireplace, perfect for contemporary homes.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Custom stone patio project"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2 text-stone-800">Brick Patio</h3>
                <p className="text-gray-600">Spacious custom stone patio for outdoor living.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Brick retaining wall project"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2 text-stone-800">Retaining Wall</h3>
                <p className="text-gray-600">Sturdy and aesthetic brick retaining wall.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Outdoor brick kitchen project"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2 text-stone-800">Outdoor Kitchen</h3>
                <p className="text-gray-600">Deluxe outdoor kitchen with brick and stone finish.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Chimney repair project"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2 text-stone-800">Chimney Restoration</h3>
                <p className="text-gray-600">Expert repair of a tall brick chimney.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Stone walkway and steps project"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2 text-stone-800">Walkway & Steps</h3>
                <p className="text-gray-600">Beautifully crafted stone walkway and front steps.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                {
                  '"Exceptional craftsmanship! The team transformed our backyard with a beautiful stone patio. Highly recommend!"'
                }
              </p>
              <p className="font-semibold text-stone-800">- Sarah Johnson</p>
            </Card>

            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                {'"Professional, reliable, and skilled. Our fireplace restoration exceeded expectations. Thank you!"'}
              </p>
              <p className="font-semibold text-stone-800">- Mike Thompson</p>
            </Card>

            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                {'"Outstanding work on our retaining wall. Quality materials and expert installation. Very satisfied!"'}
              </p>
              <p className="font-semibold text-stone-800">- Lisa Davis</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">Send a Quick Message</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-stone-700">
                      First Name:
                    </Label>
                    <Input id="firstName" placeholder="Enter your first name..." className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-stone-700">
                      Last Name:
                    </Label>
                    <Input id="lastName" placeholder="Enter your last name..." className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-stone-700">
                    Your Message:
                  </Label>
                  <Textarea id="message" placeholder="Enter your message here..." rows={6} className="mt-1" />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg">
                  Send Email
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Hammer className="h-8 w-8 text-orange-500" />
                <h3 className="text-2xl font-bold">BrickedUp Masonry</h3>
              </div>
              <p className="text-gray-300 mb-4">Serving the greater area with pride and quality.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span>Phone: (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-orange-500" />
                  <span>Email: contact@elitemasonrydemo.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 BrickedUp Masonry. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
