import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Our Programs | Atharva Foundation",
  description: "Explore our programs supporting students with sickle cell disease and cancer, and individuals with mental disabilities.",
}

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Our Programs</h1>
          <p className="text-xl text-primary-foreground/90 font-sans leading-relaxed">
            Targeted support to ease the financial burden on families so they can focus on care, education, and healing.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-24">
            
            {/* Scholarships */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] bg-muted rounded-2xl overflow-hidden border">
                <Image
                  src="/scholarships-bg.jpeg"
                  alt="Empowering Rural Classrooms - Scholarships Program"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
                  Education & Health
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground">Scholarship Program</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  A diagnosis shouldn't mean the end of an education. We provide financial scholarships for students facing sickle cell disease or cancer, helping them pay for tuition, books, and educational supplies.
                </p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex gap-3"><span className="text-primary font-bold">✓</span> Direct tuition assistance</li>
                  <li className="flex gap-3"><span className="text-primary font-bold">✓</span> Support from primary school through college</li>
                  <li className="flex gap-3"><span className="text-primary font-bold">✓</span> Minimizing financial stress for parents</li>
                </ul>
                <div className="pt-4 flex gap-4">
                  <Button asChild>
                    <Link href="/programs/scholarships">Learn More</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/apply">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="hidden md:block w-full h-px bg-border"></div>

            {/* Support */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 md:order-1 order-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary/10 text-secondary">
                  Care & Dignity
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground">Mental Disability Support</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  Individuals with mental disabilities deserve a life of dignity, inclusion, and specialized care. We offer support ranging from basic care packages to funding for specialized therapies.
                </p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex gap-3"><span className="text-secondary font-bold">✓</span> Care packages and essential supplies</li>
                  <li className="flex gap-3"><span className="text-secondary font-bold">✓</span> Financial aid for specialized therapies</li>
                  <li className="flex gap-3"><span className="text-secondary font-bold">✓</span> Respite support for primary caregivers</li>
                </ul>
                <div className="pt-4">
                  <Button variant="secondary" asChild>
                    <Link href="/programs/support">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] bg-muted rounded-2xl overflow-hidden border md:order-2 order-1">
                <Image
                  src="/support-bg.jpeg"
                  alt="Dignified Care & Play - Mental Disability Support"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
