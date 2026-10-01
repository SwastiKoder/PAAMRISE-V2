import ScrollReveal from '../ui/ScrollReveal'

export default function BlogPreview() {
  const posts = [
    { 
      title: 'Government e-Marketplace (GeM) & Public Procurement: Strategies for High-Value Rate Contracts', 
      cat: 'Tenders & Procurement', 
      readTime: '6 min', 
      date: 'MOA 3(a).3' 
    },
    { 
      title: 'Modernizing 33kV/11kV Substation Systems: CEA Standards, Safety Relays & Industrial Automation', 
      cat: 'Electrical Engineering', 
      readTime: '8 min', 
      date: 'MOA 3(a).5' 
    },
    { 
      title: 'Integrated Facility Operations & Civic Utilities: Best Practices in Campus Mechanized Sanitation', 
      cat: 'Civic Support & Facilities', 
      readTime: '5 min', 
      date: 'MOA 3(a).4' 
    }
  ]

  return (
    <section className="bg-ink-900 py-32" id="blog">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">
              Industry Briefings & Insights
            </p>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Engineering & Policy Perspectives.
            </h2>
          </div>
          <a 
            href="#contact" 
            className="font-mono text-xs text-mist-700 hover:text-white transition-colors border-b border-transparent hover:border-signal pb-1 group flex items-center gap-1" 
            data-cursor="hover"
          >
            <span>Request Technical Whitepapers</span>
            <span className="text-signal inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div 
                className="block bg-ink-800/90 border border-white/10 p-8 h-full rounded-xl group transition-all duration-500 hover:border-signal/40 hover:-translate-y-1.5 hover:bg-ink-800 relative overflow-hidden flex flex-col justify-between" 
                data-cursor="hover"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-signal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-block border border-signal/30 text-signal font-mono text-[11px] px-3 py-1 rounded-full bg-signal/10">
                      {post.cat}
                    </span>
                    <span className="font-mono text-[10px] text-mist-700 bg-white/5 px-2 py-0.5 rounded">
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-xl lg:text-2xl font-medium leading-[1.3] mb-6 tracking-tight text-white group-hover:text-signal transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between font-mono text-xs text-mist-700">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-signal"></div>
                      <span>{post.readTime} read</span>
                    </div>
                    
                    <span className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-signal font-semibold">
                      Explore Topic &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
