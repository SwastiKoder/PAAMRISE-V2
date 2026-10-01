import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ScrollReveal from '../ui/ScrollReveal'
import { executionTimeline } from '../../data/content'

export default function ProcessTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  })

  // We draw the vertical line from top to bottom
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  const StepItem = ({ step, index }) => {
    const { ref, inView } = useInView({ threshold: 0.5 })
    
    return (
      <div ref={ref} className="min-h-[75vh] flex items-center relative py-20" id={`process-step-${index}`}>
        {/* Animated Dot indicator */}
        <div 
          className="absolute left-0 w-8 h-8 -translate-x-1/2 flex items-center justify-center z-10 group cursor-pointer" 
          onClick={() => {
            const el = document.getElementById(`process-step-${index}`)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <motion.div 
            className="w-4 h-4 rounded-full border-2 transition-colors duration-500"
            animate={{ 
              borderColor: inView ? '#e8ff47' : 'rgba(255,255,255,0.2)',
              backgroundColor: inView ? '#e8ff47' : '#080812'
            }}
          />
          <span className="absolute left-8 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity text-mist-900">Stage</span>
        </div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: '-20%' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="pl-16 md:pl-24 relative w-full max-w-2xl"
        >
          {/* Faded Background Number */}
          <div className="absolute -top-12 md:-top-20 left-12 md:left-16 font-display text-[8rem] md:text-[12rem] text-white/5 font-bold leading-none select-none pointer-events-none">
            0{index + 1}
          </div>

          <div className="relative z-10">
            <span className="inline-block border border-signal/30 text-signal bg-ink-950 font-mono text-xs px-3 py-1 rounded-full mb-6">
              {step.duration}
            </span>
            <h3 className={`font-display text-3xl md:text-5xl font-semibold mb-4 tracking-tight transition-colors duration-500 ${inView ? 'text-white' : 'text-mist-500'}`}>
              {step.title}
            </h3>
            <p className={`font-body text-lg md:text-xl mb-6 transition-colors duration-500 ${inView ? 'text-signal' : 'text-mist-700'}`}>
              "{step.tagline}"
            </p>
            <p className="text-mist-700 text-base md:text-lg leading-relaxed max-w-lg">
              {step.desc}
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <section ref={containerRef} className="bg-ink-900 relative border-t border-white/5" id="process">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16">
        <ScrollReveal>
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">
            Execution Lifecycle
          </p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4">
            From Tender to Handover.
          </h2>
          <p className="font-body text-mist-700 text-lg max-w-xl">
            Our disciplined engineering and procurement process ensures zero-defect statutory compliance, on-time grid sync, and dependable long-term operations.
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative w-full flex">
        
        {/* Vertical Timeline container - sticky */}
        <div className="w-px bg-white/5 absolute top-0 bottom-0 left-6 md:left-12 opacity-50"></div>
        
        {/* The active animated line */}
        <div className="sticky top-0 h-screen w-px left-6 md:left-12 flex-shrink-0 z-0">
          <motion.div 
            className="absolute top-0 w-[3px] -ml-[1px] bg-gradient-to-b from-signal/10 via-signal to-signal/10 origin-top shadow-[0_0_15px_rgba(232,255,71,0.5)]"
            style={{ scaleY, height: "100vh" }}
          />
        </div>

        {/* Steps contents */}
        <div className="flex-1 pb-32">
          {executionTimeline.map((step, index) => (
            <StepItem key={index} step={step} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
