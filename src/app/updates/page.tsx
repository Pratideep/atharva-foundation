import Link from "next/link"

export const metadata = {
  title: "Updates & Stories | Atharva Foundation",
  description: "Read the latest news, stories, and milestones from the Atharva Foundation.",
}

const mockPosts = [
  {
    id: 1,
    title: "Welcoming Our First Batch of Scholarship Recipients",
    date: "August 15, 2026",
    category: "Announcements",
    excerpt: "We are thrilled to announce that we have successfully disbursed our first round of educational scholarships to 15 incredible students.",
    color: "bg-primary/10 text-primary"
  },
  {
    id: 2,
    title: "Rohan's Journey to Recovery and College",
    date: "July 28, 2026",
    category: "Student Stories",
    excerpt: "Read about Rohan, a courageous young man who beat pediatric cancer and is now pursuing his dream of becoming an engineer.",
    color: "bg-secondary/10 text-secondary"
  },
  {
    id: 3,
    title: "Annual Caregiver Support Meetup in Mumbai",
    date: "June 10, 2026",
    category: "Events",
    excerpt: "Over 50 families joined us for a day of community, shared experiences, and respite at our first caregiver support meetup.",
    color: "bg-muted text-muted-foreground"
  },
  {
    id: 4,
    title: "Partnering with Local Clinics for Early Detection",
    date: "May 22, 2026",
    category: "Milestones",
    excerpt: "A new initiative aimed at spreading awareness and supporting early detection of sickle cell disease in rural areas.",
    color: "bg-primary/10 text-primary"
  }
]

export default function UpdatesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/10">
      <section className="bg-white py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Updates & Stories</h1>
          <p className="text-xl text-foreground/80 font-sans leading-relaxed">
            News, milestones, and inspiring stories from our community.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-border/50 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                <div className="aspect-[16/9] bg-muted/50 flex items-center justify-center text-muted-foreground overflow-hidden">
                  {/* Image Placeholder */}
                  <span className="opacity-50">Image Placeholder</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${post.color}`}>
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <Link href="#" className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1">
                    Read More 
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-6 py-3 rounded-full border bg-white hover:bg-muted transition-colors font-medium text-sm">
              Load More Updates
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
