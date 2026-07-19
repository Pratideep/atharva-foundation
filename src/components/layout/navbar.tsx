"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Only hide on mobile (width < 1024px)
      if (window.innerWidth >= 1024) {
        setIsVisible(true)
        return
      }

      const currentScrollY = window.scrollY
      
      // If we scroll down and are past a threshold (80px), hide navbar.
      // If we scroll up, show navbar.
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  const navItems = [
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/dashboard", label: "Admin Portal" },
    { href: "/gallery", label: "Gallery" },
    { href: "/inspiration", label: "Inspiration" },
    { href: "/contact", label: "Contact" }
  ]

  const showNavbar = isVisible || isOpen

  return (
    <header className={`sticky top-0 z-50 w-full glass-navbar transition-all duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-primary transition-colors group-hover:text-primary/90">
              Atharva<span className="font-sans font-normal text-foreground/80"> Foundation</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center lg:gap-4 xl:gap-6 text-[13px] xl:text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-1 text-foreground/75 hover:text-primary transition-colors duration-200 group font-sans font-medium"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Action CTAs & Mobile Burger Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="outline" asChild className="hidden lg:inline-flex rounded-full px-4 xl:px-5 text-xs xl:text-sm border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 font-sans">
            <Link href="/apply">Apply for Scholarship</Link>
          </Button>
          <Button asChild className="rounded-full px-5 xl:px-6 text-xs xl:text-sm shadow-sm hover:shadow-md bg-gradient-to-r from-primary to-sky-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-white font-medium border-0 cursor-pointer">
            <Link href="/donate">Donate</Link>
          </Button>

          {/* Mobile Toggler */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 rounded-lg hover:bg-slate-100 text-slate-700 lg:hidden cursor-pointer focus:outline-none transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar/Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-20 z-40 bg-slate-900/10 backdrop-blur-xs lg:hidden"
            />
            {/* Dropdown Menu Container */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-20 left-0 w-full bg-white border-b border-border shadow-md z-45 lg:hidden flex flex-col p-6 space-y-4 font-sans"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold text-text-primary/95 hover:text-primary transition-colors py-1.5 border-b border-slate-50 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-3">
                <Button variant="outline" asChild className="rounded-full px-5 text-sm border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 w-full text-center">
                  <Link href="/apply" onClick={() => setIsOpen(false)}>Apply for Scholarship</Link>
                </Button>
                <Button asChild className="rounded-full px-6 text-sm shadow-sm hover:shadow-md bg-gradient-to-r from-primary to-sky-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-white font-medium border-0 cursor-pointer w-full text-center">
                  <Link href="/donate" onClick={() => setIsOpen(false)}>Donate</Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
