import MarqueeText from '../ui/MarqueeText'

export default function LogoCloud() {
  const sectors1 = [
    'Central Ministries', 'State Power Utilities', 'Public Sector Undertakings (PSUs)', 
    'GeM Portal Procurement', 'Municipal Corporations', 'Indian Railways', 
    'Defence Establishments', 'Autonomous Institutions'
  ]
  const sectors2 = [
    'Industrial Electrification', 'Solar Power Grids', 'EV Infrastructure', 
    'Integrated Facility Networks', 'Bulk Supply Stockists', 'Commercial Campuses',
    'Smart City Missions', 'Wholesale Marketplaces'
  ]

  const SectorPill = ({ name }) => (
    <span className="font-display text-2xl md:text-3xl font-semibold text-white/30 hover:text-signal transition-colors duration-300 px-6 cursor-default">
      {name}
    </span>
  )

  const mapped1 = sectors1.map(c => <SectorPill key={c} name={c} />)
  const mapped2 = sectors2.map(c => <SectorPill key={c} name={c} />)

  return (
    <section className="bg-ink-900 py-20 pb-28 border-b border-white/5 relative overflow-hidden group">
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 text-center">
        <p className="font-mono text-xs text-signal uppercase tracking-widest">
          Public Procurement, EPC & Enterprise Sectors Authorized Under Clause 3(a)
        </p>
      </div>
      
      {/* Marquee groups */}
      <div className="flex flex-col gap-8 sm:group-hover:[&>div>div]:[animation-play-state:paused] transition-all">
        <MarqueeText items={mapped1} direction="forward" />
        <MarqueeText items={mapped2} direction="reverse" />
      </div>

      {/* Fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-ink-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-ink-900 to-transparent z-10 pointer-events-none"></div>
    </section>
  )
}
