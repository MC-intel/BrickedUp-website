interface PageHeroProps {
  title: string
  description: string
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="brick-pattern py-16 relative">
      <div className="absolute top-4 left-4 w-12 h-12 border-l-4 border-t-4 border-orange opacity-60" />
      <div className="absolute top-4 right-4 w-12 h-12 border-r-4 border-t-4 border-orange opacity-60" />
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">{title}</h2>
        <p className="text-gray-200 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          {description}
        </p>
      </div>
    </section>
  )
}
