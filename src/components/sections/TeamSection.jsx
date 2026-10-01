import { Shield, Award, UserCheck, Briefcase } from 'lucide-react'
import { team, companyDetails } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function TeamSection() {
  const PixelAvatar = ({ colors }) => {
    // 4x4 grid of pixels
    const pattern = [
      0,0,1,0,
      0,1,1,0,
      1,0,1,1,
      0,1,0,0
    ]
    
    return (
      <div className="w-full aspect-square grid grid-cols-4 grid-rows-4 gap-0 mb-6 rounded-lg overflow-hidden border border-white/10 shadow-inner">
        {pattern.map((val, i) => (
          <div key={i} style={{ backgroundColor: val ? colors[0] : colors[1] }}></div>
        ))}
      </div>
    )
  }

  return (
    <section className="bg-ink-900 py-32 border-t border-white/5" id="governance">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <ScrollReveal className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-ink-800 border border-signal/20 px-3.5 py-1.5 rounded-full font-mono text-xs text-signal mb-4">
            <Shield size={14} />
            <span>Corporate Governance & Promoters</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Institutional Leadership.
          </h2>
          <p className="font-body text-mist-700 text-lg max-w-xl">
            Led by dedicated promoters and technical directors committed to statutory compliance, field engineering excellence, and public sector accountability.
          </p>
        </ScrollReveal>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <div className="group h-[400px] w-full [perspective:1000px] cursor-pointer">
                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* Front Face */}
                  <div className="absolute inset-0 bg-ink-800/90 border border-white/10 p-6 md:p-8 flex flex-col justify-between rounded-xl [backface-visibility:hidden] shadow-lg">
                    <div>
                      <PixelAvatar colors={member.colors} />
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-white">{member.name}</h3>
                      <p className="font-mono text-xs text-signal mt-1 font-semibold">{member.role}</p>
                    </div>
                    <div className="pt-4 border-t border-white/5 font-mono text-[11px] text-mist-700">
                      {member.credentials}
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 bg-signal border border-signal p-8 flex flex-col justify-between text-ink-950 rounded-xl [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl">
                    <div>
                      <span className="font-mono text-xs uppercase font-bold tracking-wider text-ink-950/70 block mb-4">
                        Directive
                      </span>
                      <p className="font-body text-lg sm:text-xl font-medium leading-relaxed">
                        "{member.quote}"
                      </p>
                    </div>
                    <div className="pt-6 border-t border-ink-950/20 font-mono text-xs font-semibold">
                      {member.role}
                    </div>
                  </div>
                  
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Statutory Governance Note Box */}
        <div className="bg-ink-950 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-signal uppercase tracking-wider font-semibold">
              Statutory Witness & CA Certification
            </span>
            <p className="font-body text-white text-base">
              Signed and legally attested before <span className="text-signal font-semibold">{companyDetails.statutoryWitness}</span> under the Companies Act 2013.
            </p>
            <p className="font-mono text-xs text-mist-700">
              Registered Office: {companyDetails.registeredOffice}
            </p>
          </div>
          <a
            href="#moa-objects"
            className="shrink-0 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs px-5 py-3 rounded-lg transition-colors"
          >
            Review e-MOA Filing &rarr;
          </a>
        </div>

      </div>
    </section>
  )
}
