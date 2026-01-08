import { Card, CardContent } from "@/components/ui/card"
import { Hammer, Phone, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"

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
      <Header currentPage="services" />

      <main>
        <PageHero
          title="Our Services"
          description="Professional masonry services delivered with skill, precision, and pride."
        />

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

      <Footer />
    </div>
  )
}
