import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, FileCheck, ArrowRight } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import { companyDetails } from '../../data/content'

export default function CTASection() {
  return (
    <section className="relative min-h-[90vh] bg-ink-950 flex flex-col justify-center items-center overflow-hidden py-32 border-t border-white/5" id="cta">
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 opacity-60 z-0"></div>
      <div className="grain absolute inset-0 z-0 mix-blend-overlay opacity-30"></div>
      
      {/* Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(232,255,71,0.07),transparent)] z-0 rounded-full blur-[60px] pointer-events-none"></div>

      {/* Floating ambient shapes */}
      <motion.div 
        animate={{ y: [0, -80, 0], x: [0, 40, 0] }} 
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute -top-20 left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-signal rounded-full opacity-[0.03] blur-3xl z-0"
      />
      <motion.div 
        animate={{ y: [0, 80, 0], x: [0, -40, 0] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
        className="absolute -bottom-40 right-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-ember rounded-full opacity-[0.03] blur-3xl z-0"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-ink-800/80 border border-signal/30 text-signal font-mono text-xs px-4 py-1.5 rounded-full mb-8"
        >
          <FileCheck size={14} />
          <span>Statutory Bidding & Commercial Enquiries</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] mb-8 flex flex-col"
          data-cursor="hover"
        >
          <span className="text-white">Partner with</span>
          <span className="text-signal">PAAMRISE.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-mist-500 font-body text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed"
        >
          Ready to invite bids, award rate contracts, execute electrical EPC works, or establish a joint venture under our MOA charter?
        </motion.p>

        {/* Action Buttons & Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-6 w-full"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton 
              onClick={() => {
                window.location.href = `mailto:${companyDetails.tenderEmail}?subject=Tender%20RFQ%20Submission%20-%20PAAMRISE`
              }}
              className="px-10 py-5 text-base sm:text-lg font-display font-semibold bg-signal text-ink-950 rounded-full hover:shadow-[0_0_40px_rgba(232,255,71,0.35)] transition-all group overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-3">
                Submit Tender / RFQ Document
                <ArrowRight size={18} />
              </span>
            </MagneticButton>

            <a 
              href={`tel:${companyDetails.phone}`}
              className="px-8 py-5 text-base sm:text-lg font-display font-medium border border-white/20 text-white rounded-full hover:border-signal/50 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <Phone size={18} className="text-signal" />
              <span>Call Tender Desk</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 font-mono text-xs text-mist-700">
            <a href={`mailto:${companyDetails.email}`} className="hover:text-signal transition-colors underline underline-offset-4">
              {companyDetails.email}
            </a>
            <span>·</span>
            <a href={`mailto:${companyDetails.tenderEmail}`} className="hover:text-signal transition-colors underline underline-offset-4">
              {companyDetails.tenderEmail}
            </a>
          </div>
        </motion.div>

        {/* Corporate Status Footer Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-8 text-xs font-mono text-mist-900"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>MCA INC-33 e-MOA Registered</span>
          </div>
          <div>Authorized Capital: ₹15,00,000</div>
          <div>Bhubaneswar, Odisha — 751019</div>
        </motion.div>

      </div>
    </section>
  )
}
