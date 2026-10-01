import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { services } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function ServicesGrid() {
  return (
    <section className="bg-ink-900 py-32 relative border-t border-white/5" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <p className="font-mono text-xs text-signal uppercase tracking-widest">
              Operational Scope · e-MOA Capabilities
            </p>
            <span className="font-mono text-xs text-mist-700 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              Form INC-33 Compliant
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            Engineered for Impact.<br/>
            <span className="text-signal">Statutorily Empowered.</span>
          </h2>
          <p className="text-mist-500 font-body text-lg max-w-2xl mb-16">
            Explore our multidisciplinary operational divisions spanning power engineering, public sector procurement, facility services, and digital distribution.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(280px,auto)]">
          {services.map((service, i) => {
            const IconComponent = LucideIcons[service.icon] || LucideIcons.Circle
            const isLarge = service.span === 'col-span-2' || service.span === 'col-span-3'
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`${service.span} bg-ink-800/90 border border-white/10 p-8 relative overflow-hidden group hover:border-signal/50 hover:scale-[1.01] transition-all duration-500 hover:bg-ink-800 flex flex-col justify-between rounded-xl`}
                data-cursor="hover"
              >
                {/* Background glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-signal/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 mb-8">
                  <div className="flex justify-between items-start w-full mb-6">
                    <span className="font-mono text-xs text-signal font-semibold bg-signal/10 border border-signal/20 px-2.5 py-1 rounded">
                      {service.moaRef}
                    </span>
                    <div className="text-mist-700 group-hover:text-signal group-hover:scale-110 transition-all duration-300 p-2 rounded-lg bg-white/5">
                      <IconComponent size={26} strokeWidth={1.75} />
                    </div>
                  </div>
                  
                  <h3 className={`font-display font-medium text-white ${isLarge ? 'text-2xl lg:text-3xl' : 'text-xl'} mb-3`}>
                    {service.title}
                  </h3>
                  <p className="text-mist-700 text-sm leading-relaxed max-w-sm">
                    {service.desc}
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                  {service.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] md:text-xs text-mist-500 bg-ink-950/80 border border-white/10 px-3 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover arrow slide-in */}
                <div className="absolute right-8 bottom-8 flex items-center gap-2 text-signal font-mono text-xs translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <span>Scope of Work</span> &rarr;
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
