import { Check, ShieldCheck } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import ScrollReveal from '../ui/ScrollReveal'
import { contractModels } from '../../data/content'

export default function PricingSection() {
  return (
    <section className="bg-ink-950 py-32" id="pricing">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">
            Statutory Engagement Frameworks
          </p>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-white">
            Structured Contracting.<br/>
            <span className="text-signal">Statutory Transparency.</span>
          </h2>
          <p className="text-mist-700 max-w-xl mx-auto font-body text-lg">
            Whether for government rate contracts, turnkey EPC works, or multi-year comprehensive AMC agreements, our models adhere strictly to public procurement and corporate guidelines.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {contractModels.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div 
                className={`relative bg-ink-900 border ${plan.borderClass} p-8 md:p-10 rounded-2xl flex flex-col h-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${plan.popular ? 'scale-100 md:scale-105 z-10 shadow-2xl' : 'z-0'}`}
                data-cursor="hover"
              >
                {plan.popular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2">
                    <span className="bg-signal text-ink-950 font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-md">
                      Key EPC Division
                    </span>
                  </div>
                )}
                
                <h3 className="font-display text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="font-display text-3xl sm:text-4xl font-bold text-signal mb-2">{plan.price}</div>
                <p className="font-mono text-xs text-mist-700 mb-6 pb-6 border-b border-white/5">{plan.desc}</p>
                
                <ul className="flex flex-col gap-3.5 mb-8 flex-grow">
                  {plan.features.map(feat => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check className="text-signal mt-0.5 shrink-0" size={16} strokeWidth={3} />
                      <span className="text-sm text-mist-500">{feat}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3 mt-4 pt-4 border-t border-white/5 border-dashed">
                    <span className="text-signal mt-0.5 shrink-0 font-mono text-xs">&rarr;</span>
                    <span className="text-xs font-mono text-mist-700">Timeline: {plan.timeline}</span>
                  </li>
                </ul>

                <MagneticButton 
                  onClick={() => {
                    const el = document.getElementById('contact')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`w-full py-4 rounded-full font-display font-medium text-base transition-all ${plan.btnClass}`}
                >
                  {plan.btnText}
                </MagneticButton>
                
                <p className="font-mono text-[10px] text-mist-900 text-center mt-5">
                  Backed by Clause 3(b) legal execution provisions
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
