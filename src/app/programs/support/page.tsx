import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Mental Disability Support | Atharva Foundation",
  description: "Support programs for individuals living with mental disabilities.",
}

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-secondary/5 py-16 md:py-24 border-b border-secondary/20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-6">Mental Disability Support</h1>
          <p className="text-xl text-foreground/80 font-sans leading-relaxed">
            Championing dignity, care, and inclusion for every individual.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl prose prose-stone prose-lg max-w-none">
          <h2 className="font-serif text-3xl font-bold text-foreground">Overview</h2>
          <p>
            Living with a mental disability—or caring for someone who does—comes with unique, daily challenges. The Atharva Foundation is committed to providing tangible support to ease these challenges, promoting a life of dignity, comfort, and inclusion.
          </p>
          
          <div className="my-10 p-8 border-l-4 border-secondary bg-secondary/5 rounded-r-2xl">
            <p className="italic text-foreground/90 m-0">
              "We measure our society's compassion by how we treat our most vulnerable. Our goal is to ensure no family feels they have to face these challenges alone."
            </p>
          </div>

          <h3 className="font-serif text-2xl font-bold text-foreground mt-10">How We Help</h3>
          
          <h4>Care & Dignity Packages</h4>
          <p>
            We regularly distribute care packages containing essential items, specialized sensory tools, and comfort aids designed specifically for individuals with various cognitive and developmental disabilities.
          </p>

          <h4>Therapy & Intervention Grants</h4>
          <p>
            Access to consistent occupational therapy, speech therapy, and behavioral intervention can be financially draining. We provide grants to families to help subsidize the cost of these crucial therapies.
          </p>

          <h4>Caregiver Support</h4>
          <p>
            We recognize that primary caregivers (usually parents) carry an immense emotional and physical load. We periodically organize respite support and community gatherings to provide caregivers a network of shared experience and relief.
          </p>

          <h3 className="font-serif text-2xl font-bold text-foreground mt-10">Requesting Support</h3>
          <p>
            If you or a family you know could benefit from our support programs, please reach out to us. We evaluate requests on a rolling basis.
          </p>

          <div className="mt-12 p-8 bg-muted/50 rounded-2xl border text-center">
            <h4 className="font-serif text-xl font-bold mb-4">Get in Touch</h4>
            <p className="mb-6">Contact our support coordinators to learn more about availability and how to register a beneficiary.</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
