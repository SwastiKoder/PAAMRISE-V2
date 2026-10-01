import * as Accordion from '@radix-ui/react-accordion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { faqs } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function FAQSection() {
  const [value, setValue] = useState('')

  return (
    <section className="bg-ink-950 py-32 border-b border-white/5" id="faq">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <ScrollReveal>
            <div className="sticky top-32">
              <h2 className="font-display text-[7rem] md:text-[9rem] text-white/5 leading-none font-bold select-none pointer-events-none mb-4 -ml-4 tracking-tighter">
                MOA
              </h2>
              <div className="relative -mt-16 md:-mt-20 ml-2">
                <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">
                  Regulatory & Procurement Clarity
                </p>
                <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                  Statutory & Operational FAQs.
                </h3>
                <p className="text-mist-700 font-body text-base md:text-lg leading-relaxed max-w-sm">
                  Everything you need to know regarding our incorporation under Form INC-33, tender eligibility, electrical contracting scope, and joint venture frameworks.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="relative z-10 w-full mt-6 lg:mt-24">
            <Accordion.Root 
              type="single" 
              collapsible 
              className="w-full flex flex-col"
              value={value}
              onValueChange={setValue}
            >
              {faqs.map((faq, index) => (
                <Accordion.Item 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-white/10 overflow-hidden"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger 
                      className="group font-body text-base md:text-lg py-6 flex justify-between items-center w-full text-left focus:outline-none transition-colors"
                      data-cursor="hover"
                    >
                      <span className={`tracking-tight pr-6 transition-colors duration-300 ${value === `item-${index}` ? 'text-signal font-semibold' : 'text-mist-100 group-hover:text-white'}`}>
                        {faq.q}
                      </span>
                      <div className="shrink-0 text-mist-700 transition-transform duration-300 group-hover:text-white">
                        {value === `item-${index}` ? <Minus size={18} className="text-signal"/> : <Plus size={18} />}
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content asChild forceMount>
                    <AnimatePresence initial={false}>
                      {value === `item-${index}` && (
                        <motion.div
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: 'auto', marginBottom: 24, marginTop: -4 },
                            collapsed: { opacity: 0, height: 0, marginBottom: 0, marginTop: 0 }
                          }}
                          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden"
                        >
                          <p className="text-mist-500 text-sm md:text-base leading-relaxed pr-6 bg-ink-900/50 p-4 rounded-lg border-l-2 border-signal">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
