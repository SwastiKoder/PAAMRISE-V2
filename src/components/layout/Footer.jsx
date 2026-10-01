import { Shield, Mail, Phone, MapPin, CheckCircle, FileText, ExternalLink } from 'lucide-react'
import { companyDetails, moaObjects } from '../../data/content'

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-white/10 pt-24 pb-12" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Col 1: Corporate Identity & MCA Form INC-33 (5 cols) */}
          <div className="lg:col-span-4 border-r-0 lg:border-r lg:border-white/5 pr-0 lg:pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-signal to-amber-400 flex items-center justify-center font-display font-black text-ink-950 text-xl">
                P
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-white">
                  {companyDetails.shortName}
                </span>
                <span className="block font-mono text-[10px] text-signal uppercase tracking-wider">
                  (OPC) PRIVATE LIMITED
                </span>
              </div>
            </div>

            <p className="text-mist-700 text-sm mb-6 leading-relaxed">
              Incorporated under the Companies Act, 2013 pursuant to Schedule I (Sections 4 & 5). A unified multi-sector enterprise empowering electrical infrastructure, government public procurement, civic utilities, and digital commerce.
            </p>

            <div className="space-y-2 text-xs font-mono text-mist-900 bg-ink-900/60 p-4 rounded-lg border border-white/5">
              <div className="flex justify-between">
                <span>MCA Form:</span>
                <span className="text-white">e-MOA INC-33</span>
              </div>
              <div className="flex justify-between">
                <span>State of Reg:</span>
                <span className="text-signal">{companyDetails.stateOfRegistration}</span>
              </div>
              <div className="flex justify-between">
                <span>Authorized Capital:</span>
                <span className="text-white">₹15,00,000 (1.5L Shares)</span>
              </div>
              <div className="flex justify-between">
                <span>Promoter / Director:</span>
                <span className="text-white">{companyDetails.promoterDirector}</span>
              </div>
            </div>
          </div>

          {/* Col 2: MOA Business Divisions (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">
              MOA Divisions [Clause 3(a)]
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-mist-500">
              <li>
                <a href="#moa-objects" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Electrical & Power Systems</span>
                  <span className="font-mono text-[10px] text-signal opacity-60 group-hover:opacity-100">3(a).5</span>
                </a>
              </li>
              <li>
                <a href="#moa-objects" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Govt Tenders & Public EPC</span>
                  <span className="font-mono text-[10px] text-signal opacity-60 group-hover:opacity-100">3(a).3</span>
                </a>
              </li>
              <li>
                <a href="#moa-objects" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Public Utilities & Facility</span>
                  <span className="font-mono text-[10px] text-signal opacity-60 group-hover:opacity-100">3(a).4</span>
                </a>
              </li>
              <li>
                <a href="#moa-objects" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Wholesale & Trading Supply</span>
                  <span className="font-mono text-[10px] text-signal opacity-60 group-hover:opacity-100">3(a).2</span>
                </a>
              </li>
              <li>
                <a href="#moa-objects" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>E-Commerce & Digital Market</span>
                  <span className="font-mono text-[10px] text-signal opacity-60 group-hover:opacity-100">3(a).1</span>
                </a>
              </li>
              <li>
                <a href="#moa-objects" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Cloud & Enterprise Tech</span>
                  <span className="font-mono text-[10px] text-signal opacity-60 group-hover:opacity-100">3(a).6</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory & Corporate Governance (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">
              Governance
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-mist-500">
              <li><a href="#governance" className="hover:text-white transition-colors">Board & Leadership</a></li>
              <li><a href="#governance" className="hover:text-white transition-colors">Statutory Compliance</a></li>
              <li><a href="#moa-objects" className="hover:text-white transition-colors">Ancillary Powers 3(b)</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Contracting Frameworks</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Tender FAQs</a></li>
            </ul>
          </div>

          {/* Col 4: Registered Office & Tender Desk (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">
              Registered Office & Tenders
            </h4>
            <div className="flex flex-col gap-4 text-sm text-mist-500">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-signal shrink-0 mt-0.5" />
                <address className="not-italic text-xs leading-relaxed text-mist-500">
                  {companyDetails.registeredOffice}
                </address>
              </div>

              <div className="pt-2 border-t border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-signal" />
                  <a href={`mailto:${companyDetails.email}`} className="text-xs hover:text-white transition-colors">
                    {companyDetails.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FileText size={14} className="text-ember" />
                  <a href={`mailto:${companyDetails.tenderEmail}`} className="text-xs hover:text-white transition-colors">
                    {companyDetails.tenderEmail}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-signal" />
                  <a href={`tel:${companyDetails.phone}`} className="text-xs hover:text-white transition-colors">
                    {companyDetails.phone}
                  </a>
                </div>
              </div>

              <div className="mt-2 p-3 bg-white/[0.02] border border-white/5 rounded text-[11px] font-mono text-mist-700">
                Official MCA SRN: <br/>
                <span className="text-white font-semibold">{companyDetails.cinSrn}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal Notices & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-mist-900">
          <p>© {new Date().getFullYear()} {companyDetails.legalName}. All rights reserved under the Companies Act, 2013.</p>
          <div className="flex flex-wrap items-center gap-4 text-mist-700">
            <span>Form INC-33 Compliant</span>
            <span>·</span>
            <span>State of Odisha</span>
            <span>·</span>
            <a href="#moa-objects" className="hover:text-white transition-colors">Table A e-MOA</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
