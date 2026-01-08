import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { PageHero } from "../../components/page-hero"
import { JobRequestForm } from "../../components/job-request-form"
import { ContactForm } from "../../components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Header currentPage="contact" />

      <main>
        <PageHero
          title="Contact Us"
          description="Ready to start your project? Get in touch with our team today."
        />

        <div className="industrial-divider" />

        {/* Job Request Portal Section */}
        <section id="portal" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Request a Quote</h3>
              <div className="w-24 h-1 bg-orange mx-auto mb-4" />
              <p className="text-steel max-w-2xl mx-auto">
                Fill out the form below to tell us about your project. Please be as detailed as possible.
                We&apos;ll get back to you within 2 business days.
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

      <Footer />
    </div>
  )
}
