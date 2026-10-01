import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import MagneticButton from '../ui/MagneticButton'
import { Menu, X, Shield, Phone, Mail } from 'lucide-react'
import { companyDetails } from '../../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80)
  })

  const navLinks = [
    { label: 'MOA Objects', href: '#moa-objects' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Projects & EPC', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Governance', href: '#governance' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-xl bg-ink-950/90 border-b border-white/10 py-3.5 shadow-2xl' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* PAAMRISE Logo & Corporate Tag */}
          <a href="#" className="flex items-center gap-3 cursor-pointer z-50 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-signal via-amber-400 to-ember flex items-center justify-center font-display font-black text-ink-950 text-xl tracking-tighter shadow-[0_0_20px_rgba(232,255,71,0.3)]">
              P
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-signal transition-colors">
                  {companyDetails.shortName}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider bg-white/10 text-mist-500 border border-white/10 px-1.5 py-0.5 rounded">
                  (OPC) PVT LTD
                </span>
              </div>
              <span className="font-mono text-[10px] text-mist-900 tracking-wider">
                e-MOA INC-33 · Odisha
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="font-body text-sm text-mist-700 hover:text-white transition-colors relative group py-1"
                data-cursor="hover"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-[2px] bg-signal w-0 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#contact"
              className="text-xs font-mono text-mist-700 hover:text-signal flex items-center gap-1.5 transition-colors"
            >
              <Phone size={13} />
              <span>{companyDetails.phone}</span>
            </a>
            <MagneticButton 
              onClick={() => {
                const el = document.getElementById('contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-5 py-2.5 rounded-full border border-signal/60 bg-signal/10 text-signal text-xs font-mono tracking-wider hover:bg-signal hover:text-ink-950 transition-all font-semibold"
              data-cursor="hover"
            >
              TENDER / RFQ ENQUIRY
            </MagneticButton>
          </div>

          {/* Mobile menu trigger */}
          <button 
            className="lg:hidden z-50 text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink-950 z-40 flex flex-col justify-center px-8"
          >
            <div className="mb-8">
              <span className="font-mono text-xs text-signal uppercase tracking-widest">
                {companyDetails.legalName}
              </span>
              <p className="text-mist-700 text-xs mt-1">MCA Form No. INC-33 · State of Odisha</p>
            </div>
            <nav className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="font-display text-4xl text-white hover:text-signal transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-2 text-xs font-mono text-mist-700">
              <p>Email: {companyDetails.email}</p>
              <p>Registered Office: Bhubaneswar, Odisha 751019</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
