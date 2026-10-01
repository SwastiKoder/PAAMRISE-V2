import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'

export default function TechStack() {
  const arsenal = [
    { 
      cat: 'Electrical & Power Systems', 
      items: ['33kV/11kV Substations', 'LT/HT Switchgear', 'Distribution Transformers', 'Relay Calibrations', 'High-Voltage Cabling', 'Power Factor Correction'] 
    },
    { 
      cat: 'Renewable & Green Energy', 
      items: ['Rooftop & Ground Solar PV', 'Smart Inverters', 'EV Charging Infra', 'BESS Storage', 'Energy Conservation (3b.18)'] 
    },
    { 
      cat: 'Public Utilities & Civic Works', 
      items: ['Mechanized Sanitation', 'Integrated Facility Mgmt', 'Trained Manpower Logistics', 'CCTV & Surveillance', 'Fire Safety Alarms'] 
    },
    { 
      cat: 'Public Procurement & Tenders', 
      items: ['GeM Government Portal', 'State e-Procurement', 'Rate Contracts', 'CPPP Tender Bidding', 'Statutory CEA Compliances'] 
    },
    { 
      cat: 'Digital Platforms & Supply Chain', 
      items: ['B2B/B2C E-Commerce (3a.1)', 'Cloud Inventory ERP', 'Fulfillment Systems', 'Payment Gateways', 'Logistics Fleet Tracking'] 
    }
  ]

  return (
    <section className="bg-ink-900 py-32 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-16">
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">
            Technical & Operational Arsenal
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Engineered for Precision.
          </h2>
          <p className="text-mist-700 font-body text-lg max-w-xl">
            From high-tension electrical equipment to digital supply chain software, our capabilities span hardware, field engineering, and cloud platforms.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8">
          {arsenal.map((category) => (
            <div key={category.cat} className="flex flex-col">
              <h3 className="font-mono text-xs text-signal uppercase tracking-wider mb-6 border-b border-white/10 pb-4 font-semibold">
                {category.cat}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.04, backgroundColor: '#e8ff47', color: '#04040a', borderColor: '#e8ff47' }}
                    className="font-mono text-xs px-3.5 py-2 rounded-lg border border-white/10 text-mist-500 bg-ink-950/60 cursor-default transition-all"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
