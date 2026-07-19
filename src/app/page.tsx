"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { Heart, ArrowRight } from "lucide-react"

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <div ref={ref} className="py-6 md:py-0 flex flex-col items-center">
      <div className="text-5xl md:text-6xl font-serif font-extrabold mb-3 tracking-tight text-primary flex items-center justify-center">
        {inView ? <CountUp end={value} duration={2.5} /> : "0"}{suffix}
      </div>
      <div className="text-muted-foreground text-xs md:text-sm font-semibold uppercase tracking-widest">{label}</div>
    </div>
  )
}

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  } as const

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 overflow-hidden flex items-center justify-center">
        {/* Animated ambient background blobs */}
        <div className="ambient-blob w-[450px] h-[450px] bg-primary/10 top-0 left-[-10%] animate-float"></div>
        <div className="ambient-blob w-[500px] h-[500px] bg-secondary/8 top-[20%] right-[-10%] animate-float-delayed"></div>

        <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-xs md:text-sm font-semibold tracking-wider uppercase border border-primary/10 shadow-sm"
            >
              <Heart className="w-4 h-4 fill-secondary stroke-secondary" /> Atharva Sidharth Gaikwad Foundation
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl md:text-8xl font-black tracking-tight leading-[1.05] text-foreground"
            >
              Where <span className="text-gradient-primary">Care</span> Meets <span className="text-gradient-secondary">Hope</span>.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans font-normal"
            >
              Honoring Atharva's memory by providing scholarships to students battling sickness, and supporting those with mental disabilities on their journey to independence.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button size="lg" asChild className="w-full sm:w-auto text-base px-8 py-6 rounded-full bg-gradient-to-r from-primary to-sky-500 text-white border-0 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer font-sans font-semibold">
                <Link href="/apply">Apply for Scholarship</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-base px-8 py-6 rounded-full border-2 border-border hover:bg-muted/40 transition-all duration-200 font-sans font-semibold">
                <Link href="/donate">Support Our Mission</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white border-y border-border/60 text-foreground relative z-10 shadow-sm">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-border/80">
            <StatItem value={50} suffix="+" label="Scholarships Awarded" />
            <StatItem value={100} suffix="+" label="Families Supported" />
            <StatItem value={50} suffix="L+" label="Funds Disbursed (INR)" />
          </div>
        </div>
      </section>

      {/* Atharva's Full Story Section */}
      <section className="py-28 relative bg-gradient-to-b from-background to-muted/20 border-b border-border/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Tribute Image Container */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative max-w-[270px] mx-auto w-full glass-card rounded-3xl overflow-hidden border border-border/80 shadow-md"
            >
              <img
                src="/atharva-bg.jpeg"
                alt="Atharva Sidharth Gaikwad"
                className="w-full h-auto block"
              />
            </motion.div>

            {/* Detailed Narrative */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-black text-secondary leading-tight">Atharva's Story</h2>
              <p className="text-xl font-serif text-primary italic leading-relaxed border-l-4 border-primary pl-4">
                "A life short in years, but eternal in impact."
              </p>
              
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed font-sans">
                <div>
                  <h4 className="font-bold text-text-primary text-lg mb-1">A Bright Spark</h4>
                  <p>
                    Atharva was a child full of light. Known for his infectious smile and boundless curiosity, he brought joy to everyone around him. Like many children his age, he had dreams, favorite games, and an imagination that knew no bounds. He was deeply loved by his parents, family, and friends.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-lg mb-1">The Journey</h4>
                  <p>
                    The diagnosis came just after his grand 5th birthday, turning a celebration of life into a battle for it. It was then that his family learned he had cancer, changing their lives forever. The ensuing journey was filled with hospital visits, treatments, and immense challenges. Yet, through it all, Atharva remained incredibly sweet—everyone who met him loved him, and he was so gentle that even birds would fly down to play with him. He showed a resilience and bravery that inspired everyone who knew him, fighting courageously without ever losing his sweet nature, until he passed away at the tender age of 13.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-lg mb-1">A Legacy of Care and Hope</h4>
                  <p>
                    Losing a child is a pain that never truly heals. But from that heartbreak, his family decided to build something beautiful. The Atharva Foundation was created so that Atharva's journey would not just be a story of loss, but a continuous story of love, care, and support for others facing similar uphill battles. Today, through scholarships and support, his light continues to touch lives.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder's Corner Snippet */}
      <section className="py-24 relative bg-white border-b border-border/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left text column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:order-1 order-2"
            >
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3.5 py-1 rounded-full border border-primary/10">
                Founder's Message
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-secondary leading-tight">
                Turning Grief into Hope
              </h2>
              <blockquote className="border-l-4 border-primary pl-4 italic text-lg md:text-xl text-muted-foreground leading-relaxed font-sans">
                "When we lost Atharva, the world felt dark. But we realized that the best way to honor his brave spirit was not to dwell only in sorrow, but to become a source of light for others walking a similar, painful path."
              </blockquote>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans">
                As Atharva's sister and founder of the organization, Artha Sidharth Gaikwad started this foundation to ensure that sickness does not rob a child of their education, and that those living with mental disabilities are not left behind.
              </p>
              <div className="pt-2">
                <Button variant="link" asChild className="p-0 h-auto text-lg text-primary hover:text-primary/80 transition-colors font-semibold gap-2">
                  <Link href="/about">
                    About Our Founder <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right image column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative max-w-[270px] mx-auto w-full glass-card rounded-3xl overflow-hidden border border-border/80 shadow-md lg:order-2 order-1"
            >
              <img
                src="/artha.jpeg"
                alt="Artha Sidharth Gaikwad"
                className="w-full h-auto block"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-28 bg-muted/30 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20 space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-black text-foreground">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated to easing the financial burden on families so they can focus on care, education, and healing.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {/* Program 1 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="transition-all duration-300"
            >
              <Card className="glass-card h-full flex flex-col justify-between border-0 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/50">
                    <img
                      src="/scholarships-bg.jpeg"
                      alt="Scholarships Program"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-2xl font-bold mb-2 text-primary tracking-tight">Scholarships</CardTitle>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed font-sans">
                      Financial assistance for students diagnosed with sickle cell disease or cancer to help them continue their education without interruption.
                    </CardDescription>
                  </CardHeader>
                </div>
                <CardFooter className="p-8 pt-0">
                  <Button variant="ghost" className="text-primary hover:text-primary/95 hover:bg-primary/5 rounded-full font-semibold px-4 -ml-4 gap-2 cursor-pointer" asChild>
                    <Link href="/programs/scholarships">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Program 2 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="transition-all duration-300"
            >
              <Card className="glass-card h-full flex flex-col justify-between border-0 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/50">
                    <img
                      src="/support-bg.jpeg"
                      alt="Mental Disability Support"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-2xl font-bold mb-2 text-secondary tracking-tight">Mental Disability Support</CardTitle>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed font-sans">
                      Providing care packages, therapy access, and financial support for individuals living with mental disabilities and their families.
                    </CardDescription>
                  </CardHeader>
                </div>
                <CardFooter className="p-8 pt-0">
                  <Button variant="ghost" className="text-secondary hover:text-secondary/95 hover:bg-secondary/5 rounded-full font-semibold px-4 -ml-4 gap-2 cursor-pointer" asChild>
                    <Link href="/programs/support">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Quote Section */}
      <section className="py-28 bg-background relative overflow-hidden flex items-center justify-center">
        {/* Soft blob */}
        <div className="ambient-blob w-[400px] h-[400px] bg-accent/20 bottom-[-10%] left-[30%] animate-float"></div>

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <svg className="w-16 h-16 text-primary/20 mx-auto mb-10" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <blockquote className="font-serif text-3xl md:text-5xl text-foreground font-medium italic leading-tight mb-8">
            "Cultivation of mind should be the ultimate aim of human existence."
          </blockquote>
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
            — Dr. B.R. Ambedkar
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-b from-background to-accent/20 border-t border-border/60 text-center relative z-10">
        <div className="container mx-auto px-6 max-w-4xl space-y-8">
          <h2 className="font-serif text-4xl md:text-6xl font-black tracking-tight leading-tight text-foreground">Join Us in Making a Difference</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you want to contribute financially, volunteer your time, or partner with us corporately, your support brings hope to those who need it most.
          </p>
          <div className="pt-4">
            <Button size="lg" asChild className="rounded-full px-8 py-6 text-base font-semibold bg-gradient-to-r from-primary to-sky-500 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <Link href="/involved">Get Involved Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
