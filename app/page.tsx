import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Phone, Mail, Hammer, Star, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "../components/contact-form"
import { MobileMenu } from "../components/mobile-menu"
import { Footer } from "../components/footer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel"

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
            <Link href="#services" className="text-gray-300 hover:text-orange transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-300 hover:text-orange transition-colors duration-300 font-medium">
              Portfolio
            </Link>
            <Link href="#testimonials" className="text-gray-300 hover:text-orange transition-colors duration-300 font-medium">
              Reviews
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
        {/* Orange accent line */}
        <div className="h-1 bg-gradient-to-r from-brick via-orange to-brick" />
      </header>

      <main>
        {/* Hero Section with Brick Pattern */}
        <section className="brick-pattern relative py-24 md:py-32 overflow-hidden">
          {/* Scaffolding decorative corners */}
          <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-orange opacity-60" />
          <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-orange opacity-60" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-orange opacity-60" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-orange opacity-60" />

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                Expert Masonry
                <span className="block text-orange-light">&amp; Timeless Craftsmanship</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Building solid foundations and beautiful structures that last a lifetime.
              <span className="block mt-2 text-orange-light font-semibold">Quality work. Honest prices. Lasting results.</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-300">
              <Button
                asChild
                size="lg"
                className="bg-orange hover:bg-orange-light text-white font-bold py-4 px-8 text-lg transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                <a href="tel:555-123-4567">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us: (555) 123-4567
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-charcoal font-bold py-4 px-8 text-lg transition-all duration-300 w-full sm:w-auto"
              >
                <a href="mailto:contact@elitemasonrydemo.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Get a Free Quote
                </a>
              </Button>
            </div>
          </div>

          {/* Bottom fade gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-warm-white to-transparent" />
        </section>

        {/* Industrial Divider */}
        <div className="industrial-divider" />

        {/* Quick Message Section */}
        <section className="py-20 bg-light-grey">
          <div className="container mx-auto px-6">
            <div className="max-w-lg mx-auto">
              <div className="text-center mb-8 animate-fade-in-up">
                <h3 className="text-3xl font-bold text-charcoal mb-2">Get In Touch</h3>
                <p className="text-steel">Send us a quick message and we'll get back to you promptly.</p>
              </div>
              <div className="animate-scale-in animation-delay-200">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Divider */}
        <div className="industrial-divider" />

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Our Services</h3>
              <div className="w-24 h-1 bg-orange mx-auto mb-4" />
              <p className="text-steel max-w-2xl mx-auto">Professional masonry services delivered with skill and pride</p>
            </div>
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

        {/* Industrial Divider */}
        <div className="industrial-divider" />

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-light-grey">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Our Work</h3>
              <div className="w-24 h-1 bg-orange mx-auto mb-4" />
              <p className="text-steel max-w-2xl mx-auto">Browse our portfolio of completed masonry projects</p>
            </div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {portfolioItems.map((item) => (
                  <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden hover-lift h-full flex flex-col border-2 border-transparent hover:border-brick transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.alt}
                          width={400}
                          height={250}
                          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardContent className="p-5 flex-grow bg-white">
                        <h5 className="font-bold text-lg mb-2 text-charcoal">{item.title}</h5>
                        <p className="text-steel text-sm leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 bg-brick hover:bg-brick-light text-white border-none shadow-lg" />
              <CarouselNext className="absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 bg-brick hover:bg-brick-light text-white border-none shadow-lg" />
            </Carousel>
          </div>
        </section>

        {/* Industrial Divider */}
        <div className="industrial-divider" />

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">What Our Clients Say</h3>
              <div className="w-24 h-1 bg-orange mx-auto mb-4" />
              <p className="text-steel max-w-2xl mx-auto">Real feedback from satisfied customers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-8 bg-gradient-to-br from-white to-light-grey border-l-4 border-brick hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-orange fill-current" />
                    ))}
                  </div>
                  <blockquote className="relative">
                    <span className="absolute -top-2 -left-2 text-6xl text-brick/20 font-serif">"</span>
                    <p className="text-charcoal mb-6 italic leading-relaxed pl-6">{testimonial.quote}</p>
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-brick rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.author.charAt(0)}
                    </div>
                    <p className="font-bold text-charcoal">{testimonial.author}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer variant="full" />
    </div>
  )
}
