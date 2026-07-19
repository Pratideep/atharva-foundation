"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn, Heart, Calendar } from "lucide-react"

interface GalleryItem {
  src: string
  title: string
  category: string
  description: string
  date: string
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const galleryItems: GalleryItem[] = [
    {
      src: "/gallery/doctor-visit-toy-car.jpeg",
      title: "Dignified Care & Play",
      category: "Mental Disability Support",
      description: "Dr. Artha visiting a child with Down Syndrome in a local orphanage, sharing a warm moment with a toy car.",
      date: "July 2026"
    },
    {
      src: "/gallery/doctor-visit-coloring.jpeg",
      title: "Interactive Learning & Coloring",
      category: "Mental Disability Support",
      description: "Encouraging cognitive development and learning with drawing activities in the orphanage playroom.",
      date: "July 2026"
    },
    {
      src: "/gallery/doctor-visit-checkup.jpeg",
      title: "Playful Health Checkups",
      category: "Mental Disability Support",
      description: "Dr. Artha using a toy stethoscope kit to conduct playful checks, building trust and comfort.",
      date: "July 2026"
    },
    {
      src: "/gallery/doctor-visit-checkup-2.jpeg",
      title: "Dignified Pediatric Checkup",
      category: "Mental Disability Support",
      description: "Dr. Artha smiling warmly and examining a little Indian orphan girl using pediatric equipment in the playroom.",
      date: "July 2026"
    },

    {
      src: "/gallery/scholarships-class.jpeg",
      title: "Empowering Rural Classrooms",
      category: "Scholarships Program",
      description: "A student in her government school classroom, receiving financial assistance to continue studying despite health battles.",
      date: "June 2026"
    },
    {
      src: "/gallery/atharva-tribute.jpeg",
      title: "In Loving Memory of Atharva",
      category: "Foundation Legacy",
      description: "The portrait photo of Atharva Gaikwad, whose legacy of bravery inspires every program we run.",
      date: "Memorial Archive"
    },
    {
      src: "/gallery/founder-artha.jpeg",
      title: "Founder Artha Gaikwad",
      category: "Leadership",
      description: "Artha Sidharth Gaikwad, founder of the Atharva Foundation, working to turn grief into hope.",
      date: "July 2026"
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  } as const

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-24 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -top-20 -left-20 pointer-events-none"></div>
      <div className="absolute w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -bottom-20 -right-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Title Block */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
            Our Gallery
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-black text-[#0F172A] tracking-tight">
            Moments of Care & Hope
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-sans">
            A visual archive of our efforts on the ground, supporting children in schools and orphanages across India.
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image wrapper */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/95 backdrop-blur-sm rounded-full shadow-lg text-primary transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Info block */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-primary">
                  <span className="bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10">
                    {item.category}
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1 font-sans">
                    <Calendar className="w-3.5 h-3.5" /> {item.date}
                  </span>
                </div>
                <h3 className="font-sans text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 font-sans">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl border border-white/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">

                {/* Left side: Image */}
                <div className="lg:col-span-8 bg-slate-950 flex items-center justify-center aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Right side: Meta descriptions */}
                <div className="lg:col-span-4 p-8 flex flex-col justify-between bg-white relative">
                  {/* Close icon */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="space-y-6 pt-6">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10">
                        {selectedImage.category}
                      </span>
                      <h2 className="font-serif text-3xl font-bold text-foreground pt-2">
                        {selectedImage.title}
                      </h2>
                    </div>

                    <p className="text-base text-muted-foreground leading-relaxed font-sans">
                      {selectedImage.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-6 mt-8 flex items-center justify-between text-xs text-muted-foreground font-sans">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      Captured: {selectedImage.date}
                    </span>
                    <span className="flex items-center gap-1 text-primary">
                      <Heart className="w-4 h-4 fill-primary/10" />
                      Atharva Foundation
                    </span>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
