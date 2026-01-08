import { Card, CardContent } from "../../components/ui/card"
import { Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { PageHero } from "../../components/page-hero"

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
    <div className="min-h-screen bg-warm-white">
      <Header currentPage="portfolio" />

      <main>
        <PageHero
          title="Our Portfolio"
          description="Browse our gallery of completed masonry projects showcasing our craftsmanship."
        />

        <div className="industrial-divider" />

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover-lift border-2 border-transparent hover:border-brick transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden group">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.alt}
                      width={400}
                      height={250}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-white">
                    <h5 className="font-bold text-xl mb-2 text-charcoal">{item.title}</h5>
                    <p className="text-steel leading-relaxed">{item.description}</p>
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
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Like What You See?</h3>
            <p className="text-steel mb-8 max-w-xl mx-auto">
              Let us bring the same quality craftsmanship to your next project.
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

      <Footer />
    </div>
  )
}
