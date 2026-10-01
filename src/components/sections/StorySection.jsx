import { motion } from 'framer-motion'
import { Scale, Zap, Building2, CheckCircle2 } from 'lucide-react'

export default function StorySection() {
  const chapters = [
    {
      num: '01',
      title: 'A diversified charter for India’s growth.',
      p1: 'Modern infrastructure and enterprise cannot function in silos. Reliable electrical power, transparent public procurement, resilient supply chains, and digital commerce are interconnected pillars of state and national progress.',
      p2: 'PAAMRISE (OPC) PRIVATE LIMITED was conceived to bridge this multi-sector divide — unifying heavy electrical engineering, tender execution, public utility services, and digital marketplace operations under one disciplined corporate umbrella.',
      align: 'left'
    },
    {
      num: '02',
      title: 'Anchored by the Companies Act & MCA Form INC-33.',
      p1: 'Our operational scope is governed by an e-Memorandum of Association pursuant to Schedule I (Sections 4 & 5) of the Companies Act, 2013, filed with the Ministry of Corporate Affairs in the State of Odisha.',
      p2: 'With an authorized capital of ₹15,00,000 and 6 primary object clauses, our legal framework provides the statutory authority and financial resilience to bid for government tenders, execute EPC contracts, and deliver wholesale supply chains.',
      align: 'right'
    },
    {
      num: '03',
      title: '19 Ancillary Powers driving full turnkey capability.',
      p1: 'Beyond primary objects, Clause 3(b) of our MOA empowers PAAMRISE with 19 statutory ancillary capabilities — including nationwide branch & warehouse networks, joint ventures, testing labs, quality certifications, and financial mechanisms.',
      p2: 'Whether modernizing 33kV substations, supplying bulk industrial goods to PSUs, or operating municipal facility management, PAAMRISE delivers uncompromising engineering standards and institutional accountability.',
      align: 'center'
    }
  ]

  const Art01 = () => (
    <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center pointer-events-none">
      <div className="absolute w-64 h-64 bg-signal mix-blend-difference rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute w-44 h-44 bg-ember/30 rounded-2xl rotate-12 border border-ember/40"></div>
      <div className="absolute w-52 h-52 bg-ink-800/80 rounded-xl border border-white/10 flex flex-col justify-between p-6">
        <div className="flex justify-between items-center text-xs font-mono text-signal">
          <span>MCA INC-33</span>
          <Scale size={18} />
        </div>
        <div>
          <span className="font-display text-xl font-bold text-white block">Table A e-MOA</span>
          <span className="text-xs text-mist-700 font-mono">Odisha · Share Capital ₹15L</span>
        </div>
      </div>
      <div className="absolute inset-0 border border-white/5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
    </div>
  )

  const Art02 = () => (
    <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center pointer-events-none group">
      <div className="w-1.5 h-3/4 bg-white/10 mx-3"></div>
      <div className="w-16 h-3/5 bg-gradient-to-t from-signal/40 to-signal/90 rounded-sm mx-3 flex items-center justify-center text-ink-950 font-bold font-mono text-xs shadow-[0_0_20px_rgba(232,255,71,0.2)]">
        6 PILLARS
      </div>
      <div className="w-1.5 h-2/3 bg-white/10 mx-3"></div>
      <div className="w-1.5 h-1/3 bg-white/10 mx-3"></div>
      <div className="w-10 h-10 bg-ember rounded-full mx-4 absolute right-1/4 top-1/4 flex items-center justify-center text-white shadow-lg animate-bounce">
        <Zap size={18} />
      </div>
    </div>
  )

  return (
    <section className="bg-ink-950 py-32 md:py-48 relative overflow-hidden text-mist-100" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col pt-12">
        {chapters.map((chapter, i) => (
          <div key={i} className="mb-24 md:mb-48 relative last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center ${chapter.align === 'right' ? 'md:flex-row-reverse' : ''} ${chapter.align === 'center' ? 'md:grid-cols-1 md:w-4/5 mx-auto text-center' : ''}`}
            >
              
              {/* Text Side */}
              <div className={`relative z-10 ${chapter.align === 'right' ? 'md:col-start-2 md:row-start-1' : ''}`}>
                <div className="absolute -top-16 md:-top-32 -left-8 md:-left-16 font-display text-[15rem] md:text-[20rem] text-white/[0.02] leading-none select-none pointer-events-none font-bold">
                  {chapter.num}
                </div>
                
                <span className="font-mono text-xs uppercase tracking-widest text-signal block mb-3">
                  Strategic Foundation · Pillar {chapter.num}
                </span>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-8">
                  {chapter.title}
                </h2>
                
                <div className={`flex flex-col gap-6 text-mist-700 text-lg leading-relaxed ${chapter.align === 'center' ? 'items-center' : ''}`}>
                  <p>{chapter.p1}</p>
                  <p>{chapter.p2}</p>
                </div>

                {chapter.align === 'center' && (
                  <div className="mt-12 flex flex-wrap justify-center gap-4">
                    <a href="#moa-objects" className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-signal hover:text-white transition-colors border border-signal/30 px-6 py-3 rounded-full hover:bg-signal/10" data-cursor="hover">
                      Review All 6 MOA Objects →
                    </a>
                  </div>
                )}
              </div>

              {/* Visual Side */}
              {chapter.align !== 'center' && (
                <div className={`relative z-0 ${chapter.align === 'right' ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  {i === 0 ? <Art01 /> : <Art02 />}
                </div>
              )}

            </motion.div>

            {/* Chapter dividers */}
            {i < chapters.length - 1 && (
              <div className="my-24 md:my-48 relative flex justify-center items-center">
                <hr className="w-full border-white/5 absolute" />
                <span className="bg-ink-950 px-4 font-mono text-xs text-white/30 relative">
                  Pillar {chapters[i+1].num} · MOA Architecture
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
