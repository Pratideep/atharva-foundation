import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-gradient-to-b from-background to-muted/40 font-sans">
      <div className="container mx-auto px-6 py-16 md:px-12 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-primary tracking-tight">Atharva Foundation</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Where Care Meets Hope. Honoring Atharva's legacy by supporting families and children battling cancer or sickle cell, and assisting individuals with mental disabilities.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/80">Explore</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/story", label: "Atharva's Story" },
                { href: "/programs", label: "Our Programs" },
                { href: "/gallery", label: "Gallery" }
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/80">Get Involved</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/donate", label: "Donate" },
                { href: "/apply", label: "Apply for Scholarship" },
                { href: "/involved", label: "Volunteer" }
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/80">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span>info@atharvafoundation.org</span>
              </li>
              <li className="flex items-center gap-2">
                <span>+91 90218 33853</span>
              </li>
              <li className="flex items-center gap-2">
                <span>Nagpur, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-border/60 pt-8 md:flex-row gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Atharva Foundation. All rights reserved. Registered Charitable Trust (80G/12A Exempted).
          </p>
          <div className="flex space-x-6">
            <span className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
