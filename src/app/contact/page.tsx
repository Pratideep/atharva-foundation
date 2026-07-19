import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: "Contact Us | Atharva Foundation",
  description: "Get in touch with the Atharva Foundation for any inquiries.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-muted/30 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-foreground/80 font-sans leading-relaxed">
            We'd love to hear from you. Please reach out with any questions, feedback, or support requests.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-8">Our Information</h2>
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Email Us</h4>
                      <p className="text-muted-foreground mb-1">For general inquiries and support.</p>
                      <a href="mailto:info@atharvafoundation.org" className="text-primary hover:underline font-medium">info@atharvafoundation.org</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Call Us</h4>
                      <p className="text-muted-foreground mb-1">Contact Person: Aartha Gaikwad</p>
                      <a href="tel:+919021833853" className="text-primary hover:underline font-medium">+91 90218 33853</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Office Address</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Atharva Foundation<br />
                        Plot No 20, Rajgruh Nagar Road,<br />
                        Near Savya Convent, Baba Deep Nagar,<br />
                        Nagpur, Maharashtra, India
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-muted rounded-xl border flex items-center justify-center text-muted-foreground overflow-hidden relative">
                 {/* This would be an iframe embed in production */}
                 <div className="absolute inset-0 bg-[url('https://maps.gstatic.com/mapfiles/transparent.png')] opacity-10"></div>
                 <span>Map Integration Placeholder</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border/50">
              <h2 className="font-serif text-2xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Name</label>
                  <Input required placeholder="Name" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input required type="email" placeholder="Email" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input required placeholder="How can we help you?" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea 
                    className="flex min-h-[150px] w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    placeholder="Write your message here..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full h-12 text-lg">Send Message</Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
