export const metadata = {
  title: "About Us | Atharva Foundation",
  description: "Learn about the mission, vision, and team behind the Atharva Foundation.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary/5 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">About the Foundation</h1>
          <p className="text-xl text-foreground/80 font-sans leading-relaxed">
            Committed to education, dignity, and care for those who need it most.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed">
                To provide critical financial and emotional support to students suffering from sickle cell disease or cancer, ensuring their education continues uninterrupted. Simultaneously, we strive to uplift individuals with mental disabilities by providing necessary care, resources, and advocating for their dignity and independence.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-foreground/80 leading-relaxed">
                A world where every individual, regardless of their medical diagnosis or mental capacity, is treated with immense compassion, has access to quality education, and is empowered to live a life of dignity and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Founder's Message</h2>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
            <blockquote className="prose prose-stone prose-lg max-w-none text-foreground/80 italic mb-8">
              <p>
                "When we lost Atharva, the world felt incredibly dark. But as time passed, we realized that the best way to honor his brave spirit was not to dwell only in sorrow, but to become a source of light for others walking a similar, painful path."
              </p>
              <p>
                "Through the Atharva Foundation, we want to ensure that sickness does not rob a child of their education, and that those living with mental disabilities are not left behind by society. We believe in care, we believe in dignity, and most importantly, we believe in hope."
              </p>
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-border flex-shrink-0 relative">
                <img
                  src="/artha.jpeg"
                  alt="Artha Sidharth Gaikwad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-lg text-foreground">Artha Sidharth Gaikwad</div>
                <div className="text-muted-foreground">Founder & Managing Trustee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Registration Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Trust & Registration</h2>
          <p className="text-foreground/80 mb-8 leading-relaxed">
            The Atharva Foundation is a registered charitable trust in India. We operate with complete transparency and are committed to ensuring that every donation reaches those who truly need it.
          </p>
          
          <div className="inline-flex flex-col sm:flex-row gap-6 bg-muted/50 p-6 rounded-xl border">
            <div className="px-6 py-2">
              <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Trust Reg. No</div>
              <div className="font-mono font-medium text-foreground">[Pending Details]</div>
            </div>
            <div className="hidden sm:block w-px bg-border"></div>
            <div className="px-6 py-2">
              <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">80G / 12A Status</div>
              <div className="font-mono font-medium text-foreground">Exempted / Applied</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
