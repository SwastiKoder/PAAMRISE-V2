import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, ShieldCheck, Scale, Zap, ArrowRight } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import AnimatedCounter from '../ui/AnimatedCounter'
import { companyDetails } from '../../data/content'

export default function Hero() {
  const containerRef = useRef(null)
  const blobRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blobRef.current) return
      const { clientX, clientY } = e
      blobRef.current.style.transform = `translate(${clientX - 400}px, ${clientY - 400}px)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const line1 = "ENGINEERING".split(' ')
  const line2 = "INFRASTRUCTURE.".split(' ')
  const line3 = "POWERING COMMERCE.".split(' ')
  
  let wordIndex = 0

  const renderWords = (words, stroke = false) => {
    return words.map((word, i) => {
      const currentDelay = (wordIndex++) * 0.07
      return (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: currentDelay, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`inline-block mr-[1.5vw] ${stroke ? 'text-stroke opacity-90' : 'text-white'}`}
          style={{ transformOrigin: "bottom center" }}
        >
          {word}
        </motion.span>
      )
    })
  }

  return (
    <section ref={containerRef} className="relative min-h-screen bg-ink-950 overflow-hidden flex flex-col justify-center pt-24 pb-20">
      
      {/* Dynamic Backgrounds */}
      <div 
        ref={blobRef} 
        className="absolute top-0 left-0 w-[700px] h-[700px] bg-signal/10 rounded-full blur-[140px] pointer-events-none transition-transform duration-1000 ease-out z-0"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0"></div>
      <div className="grain absolute inset-0 z-[1]"></div>

      <motion.div style={{ opacity, scale, y }} className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start mt-6 sm:mt-12">
        
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <div className="bg-ink-800/90 border border-signal/30 text-signal font-mono text-xs px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(232,255,71,0.15)]">
            <span className="w-2 h-2 bg-signal rounded-full animate-pulse-slow"></span>
            <span>{companyDetails.legalName}</span>
          </div>

          <div className="bg-ink-900 border border-white/10 text-mist-700 font-mono text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Scale size={13} className="text-white/60" />
            <span>Form INC-33 e-MOA · State of Odisha</span>
          </div>
        </motion.div>

        {/* Headlines */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.92] tracking-tight mb-8 w-full perspective-1000" data-cursor="hover">
          <div className="overflow-visible pb-1">{renderWords(line1)}</div>
          <div className="overflow-visible pb-1">{renderWords(line2, true)}</div>
          <div className="overflow-visible pb-1 text-signal">{renderWords(line3)}</div>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-body text-mist-500 text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed"
          data-cursor="text"
        >
          A statutory multi-sector corporation incorporated under the Companies Act, 2013. Powering <span className="text-white font-medium">electrical contracting & substations</span>, <span className="text-white font-medium">government tenders & public procurement</span>, <span className="text-white font-medium">civic utilities</span>, and <span className="text-white font-medium">digital commerce</span> across India.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <MagneticButton 
            onClick={() => {
              const el = document.getElementById('moa-objects')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-signal text-ink-950 font-display font-semibold px-8 py-4 rounded-full text-base sm:text-lg hover:shadow-[0_0_30px_rgba(232,255,71,0.35)] transition-all flex items-center gap-2"
          >
            <span>Explore MOA Objects</span>
            <ArrowRight size={18} />
          </MagneticButton>
          
          <button 
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="border border-white/20 text-mist-100 hover:text-white hover:border-signal/50 hover:bg-white/5 font-display font-medium px-8 py-4 rounded-full text-base sm:text-lg transition-all" 
            data-cursor="hover"
          >
            Tenders & RFQ Cell
          </button>
        </motion.div>

      </motion.div>

      {/* Corporate Metadata Badge - Floating Right */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-28 right-8 md:right-24 w-36 h-36 hidden lg:flex items-center justify-center opacity-70 z-10 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" width="120" height="120">
          <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
          <text className="font-mono text-[8.5px] fill-white/80 tracking-widest uppercase">
            <textPath href="#circlePath">PAAMRISE · MCA INC-33 · ODISHA · EPC & COMMERCE · </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Bottom Counter Bar */}
      <div className="absolute bottom-8 left-6 md:left-12 z-20 hidden md:flex items-center gap-8 bg-ink-900/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl">
        <div className="flex flex-col">
          <span className="font-display text-2xl font-bold text-signal"><AnimatedCounter end={6} /> Primary</span>
          <span className="font-mono text-[10px] text-mist-900 uppercase tracking-wider">MOA Sectors</span>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="flex flex-col">
          <span className="font-display text-2xl font-bold text-white"><AnimatedCounter end={15} prefix="₹" suffix="L" /></span>
          <span className="font-mono text-[10px] text-mist-900 uppercase tracking-wider">Auth Capital</span>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="flex flex-col">
          <span className="font-display text-2xl font-bold text-emerald-400">100%</span>
          <span className="font-mono text-[10px] text-mist-900 uppercase tracking-wider">Statutory Compliant</span>
        </div>
      </div>

      {/* Down indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 z-20 cursor-pointer"
        onClick={() => {
          const el = document.getElementById('moa-objects')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <ChevronDown size={24} />
      </motion.div>

    </section>
  )
}
