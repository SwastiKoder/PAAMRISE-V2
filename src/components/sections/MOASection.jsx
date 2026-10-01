import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FileText, ShieldCheck, CheckCircle2, ChevronRight, 
  ExternalLink, Building, Landmark, Scale, Zap, ShoppingCart, 
  PackageCheck, Briefcase, Building2, Cpu 
} from 'lucide-react'
import { moaObjects, companyDetails } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

const iconMap = {
  ShoppingCart,
  PackageCheck,
  Briefcase,
  Building2,
  Zap,
  Cpu
}

export default function MOASection() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const activeObject = moaObjects[selectedIdx]
  const Icon = iconMap[activeObject.icon] || FileText

  return (
    <section className="bg-ink-900 py-32 border-t border-b border-white/5 relative overflow-hidden" id="moa-objects">
      {/* Background glow and subtle geometry */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-signal/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-ember/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Badge & Title */}
        <ScrollReveal className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-ink-800 border border-signal/20 px-4 py-1.5 rounded-full font-mono text-xs text-signal mb-6">
            <Scale size={14} />
            <span>Schedule I · Sections 4 & 5 · Companies Act, 2013</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Statutory Memorandum <br />
            <span className="text-signal">of Association (e-MOA)</span>
          </h2>
          <p className="font-body text-mist-700 text-lg md:text-xl leading-relaxed">
            Registered with the Ministry of Corporate Affairs under Form INC-33. Below are the official objects to be pursued by PAAMRISE (OPC) PRIVATE LIMITED upon incorporation.
          </p>
        </ScrollReveal>

        {/* Corporate Legal Fact Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-ink-950/80 border border-white/10 rounded-xl mb-16 backdrop-blur-md">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] text-mist-900 uppercase tracking-wider">Company Name</span>
            <span className="font-display text-sm md:text-base font-semibold text-white">{companyDetails.legalName}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] text-mist-900 uppercase tracking-wider">State of Registration</span>
            <span className="font-display text-sm md:text-base font-semibold text-signal">{companyDetails.stateOfRegistration}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] text-mist-900 uppercase tracking-wider">Authorized Capital</span>
            <span className="font-display text-sm md:text-base font-semibold text-white">{companyDetails.authorizedCapital}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] text-mist-900 uppercase tracking-wider">Statutory Form</span>
            <span className="font-display text-sm md:text-base font-semibold text-ember">MCA Form No. INC-33</span>
          </div>
        </div>

        {/* Interactive MOA Clause Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Navigation list of 6 clauses */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <p className="font-mono text-xs text-mist-900 uppercase tracking-widest mb-2">
              Select Clause 3(a) Object:
            </p>
            {moaObjects.map((obj, i) => {
              const ItemIcon = iconMap[obj.icon] || FileText
              const isSelected = selectedIdx === i
              return (
                <button
                  key={obj.clause}
                  onClick={() => setSelectedIdx(i)}
                  className={`text-left p-5 rounded-lg border transition-all duration-300 flex items-start gap-4 group ${
                    isSelected 
                      ? 'bg-ink-800 border-signal shadow-[0_0_25px_rgba(232,255,71,0.08)]' 
                      : 'bg-ink-950/60 border-white/5 hover:border-white/20 hover:bg-ink-800/50'
                  }`}
                  data-cursor="hover"
                >
                  <div className={`p-2.5 rounded-md shrink-0 transition-colors ${
                    isSelected ? 'bg-signal text-ink-950' : 'bg-white/5 text-mist-700 group-hover:text-white'
                  }`}>
                    <ItemIcon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs text-signal font-semibold">Clause {obj.clause}</span>
                      <span className="font-mono text-[10px] text-mist-900 bg-white/5 px-2 py-0.5 rounded">
                        {obj.category}
                      </span>
                    </div>
                    <h3 className={`font-display text-base font-medium truncate ${isSelected ? 'text-white' : 'text-mist-500 group-hover:text-mist-100'}`}>
                      {obj.title}
                    </h3>
                  </div>
                  <ChevronRight size={18} className={`shrink-0 transition-transform ${isSelected ? 'text-signal translate-x-1' : 'text-mist-900 opacity-40'}`} />
                </button>
              )
            })}
          </div>

          {/* Right Column: Full Clause Statutory Text & Execution Highlights */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeObject.clause}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-ink-950 border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden"
              >
                {/* Top Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-signal/10 border border-signal/30 flex items-center justify-center text-signal">
                      <Icon size={24} />
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-signal font-semibold">
                        MOA Object {activeObject.clause}
                      </span>
                      <h4 className="font-display text-2xl font-bold text-white">
                        {activeObject.title}
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-full">
                    <CheckCircle2 size={14} />
                    <span>MCA Legally Ratified</span>
                  </div>
                </div>

                {/* Official Statutory Text Quote */}
                <div className="mb-8">
                  <span className="font-mono text-xs text-mist-900 uppercase tracking-widest block mb-3">
                    Official e-MOA Legal Text:
                  </span>
                  <div className="bg-ink-900/90 border-l-2 border-signal p-6 rounded-r-lg text-mist-100 font-body text-base md:text-lg leading-relaxed italic">
                    "{activeObject.officialText}"
                  </div>
                </div>

                {/* Key Deliverables & Capabilities */}
                <div>
                  <span className="font-mono text-xs text-mist-900 uppercase tracking-widest block mb-4">
                    Key Execution & Operational Pillars:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {activeObject.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/5 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-signal" />
                        <span className="text-sm font-medium text-mist-100">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ancillary Matters clause note */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-mist-900">
                  <span>Backed by 19 Ancillary Matters in MOA Clause 3(b)</span>
                  <a href="#contact" className="text-signal hover:underline inline-flex items-center gap-1">
                    Enquire for this Division &rarr;
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}
