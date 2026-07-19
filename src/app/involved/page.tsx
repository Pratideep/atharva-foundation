import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: "Get Involved | Atharva Foundation",
  description: "Volunteer, partner, or fundraise with the Atharva Foundation.",
}

export default function InvolvedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary/5 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Get Involved</h1>
          <p className="text-xl text-foreground/80 font-sans leading-relaxed">
            It takes a community to build hope. Join us in making a difference.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm border text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Volunteer</h3>
              <p className="text-foreground/80 mb-6 text-sm">Offer your time and skills for event organization, administrative help, or community outreach.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border text-center">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Corporate CSR</h3>
              <p className="text-foreground/80 mb-6 text-sm">Partner with us as part of your company's Corporate Social Responsibility mandate to maximize impact.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Fundraise</h3>
              <p className="text-foreground/80 mb-6 text-sm">Host a community event, a birthday fundraiser, or a school initiative in support of our programs.</p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="max-w-2xl mx-auto bg-muted/20 p-8 md:p-10 rounded-3xl border">
            <h2 className="font-serif text-3xl font-bold text-center mb-8">Start the Conversation</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input required placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input required placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input required type="email" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">I am interested in:</label>
                <select className="flex h-10 w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" required>
                  <option value="">Select an option...</option>
                  <option value="volunteer">Volunteering my time/skills</option>
                  <option value="csr">Corporate CSR Partnership</option>
                  <option value="fundraise">Organizing a fundraiser</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message / Additional Details</label>
                <textarea 
                  className="flex min-h-[120px] w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                  placeholder="Tell us a little bit about yourself or your organization..."
                  required
                />
              </div>

              <Button type="submit" className="w-full h-12 text-lg">Send Inquiry</Button>
            </form>
          </div>

        </div>
      </section>
    </div>
  )
}
