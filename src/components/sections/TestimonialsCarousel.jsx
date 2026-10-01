import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, ShieldCheck } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'

export default function TestimonialsCarousel() {
  const testimonials = [
    { 
      quote: "PAAMRISE executed the 33/11kV electrical feeder upgrade with complete adherence to CEA safety standards and on-schedule grid synchronization.", 
      author: "Superintending Engineer", 
      company: "State Power Infrastructure Project" 
    },
    { 
      quote: "Bulk material supply across 6 district stores was completed with 100% batch testing and zero delivery discrepancies under our public procurement order.", 
      author: "Chief Procurement Officer", 
      company: "Regional PSU Supply Division" 
    },
    { 
      quote: "Their comprehensive facility management and round-the-clock power maintenance have kept our 450,000 sq.ft administrative campus running seamlessly.", 
      author: "Estate & Operations Director", 
      company: "Higher Education & Research Campus" 
    },
    { 
      quote: "From solar micro-grid erection to emergency electrical AMC, the PAAMRISE engineering team responds with exceptional speed and technical rigor.", 
      author: "General Manager (Works)", 
      company: "Industrial Engineering Corporation" 
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-ink-950 py-32 overflow-hidden relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative min-h-[400px] flex flex-col justify-center">
        
        {/* Giant decorative quote */}
        <div className="absolute top-0 left-4 font-display text-[15rem] md:text-[25rem] text-signal/5 leading-none pointer-events-none select-none -translate-y-12">
          "
        </div>

        <div className="relative z-10 w-full md:w-5/6 mx-auto text-center" data-cursor="text">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <h3 className="font-display text-2xl sm:text-4xl md:text-5xl leading-tight mb-10 text-white font-medium">
                "{testimonials[currentIndex].quote}"
              </h3>
              
              <div>
                <p className="font-mono text-signal uppercase tracking-widest text-xs sm:text-sm font-semibold mb-1">
                  {testimonials[currentIndex].author}
                </p>
                <p className="font-body text-mist-700 text-sm">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex gap-4">
            <MagneticButton onClick={prev} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-signal/50 transition-colors">
              <ChevronLeft size={20} />
            </MagneticButton>
            <MagneticButton onClick={next} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-signal/50 transition-colors">
              <ChevronRight size={20} />
            </MagneticButton>
          </div>
          
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-signal w-8' : 'bg-white/20 hover:bg-white/40 w-2'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
