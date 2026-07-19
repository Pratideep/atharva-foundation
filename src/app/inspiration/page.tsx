export const metadata = {
  title: "Inspiration | Atharva Foundation",
  description: "Quotes and teachings from Dr. B.R. Ambedkar on education, human dignity, and social upliftment.",
}

const quotes = [
  {
    text: "Cultivation of mind should be the ultimate aim of human existence.",
    source: "Dr. B.R. Ambedkar",
  },
  {
    text: "Education is something which ought to be brought within the reach of everyone.",
    source: "Dr. B.R. Ambedkar",
  },
  {
    text: "Men are mortal. So are ideas. An idea needs propagation as much as a plant needs watering. Otherwise both will wither and die.",
    source: "Dr. B.R. Ambedkar",
  },
  {
    text: "I measure the progress of a community by the degree of progress which women have achieved.",
    source: "Dr. B.R. Ambedkar",
  },
  {
    text: "We must stand on our own feet and fight as best as we can for our rights.",
    source: "Dr. B.R. Ambedkar",
  },
  {
    text: "A great man is different from an eminent one in that he is ready to be the servant of the society.",
    source: "Dr. B.R. Ambedkar",
  }
];

export default function InspirationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">Our Inspiration</h1>
          <p className="text-xl text-foreground/80 font-sans leading-relaxed max-w-2xl mx-auto">
            The Atharva Foundation is deeply guided by the principles of education, dignity, and equality championed by Dr. B.R. Ambedkar.
          </p>
        </div>
      </section>

      {/* Quotes Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quotes.map((quote, index) => (
              <div 
                key={index} 
                className="bg-white p-10 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow relative"
              >
                <svg className="w-10 h-10 text-primary/10 absolute top-8 left-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <blockquote className="relative z-10 font-serif text-2xl text-foreground/90 italic leading-snug mt-6 mb-6">
                  "{quote.text}"
                </blockquote>
                <div className="relative z-10 flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-secondary"></div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                    {quote.source}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
