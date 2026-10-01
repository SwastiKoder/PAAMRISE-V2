export const companyDetails = {
  legalName: 'PAAMRISE (OPC) PRIVATE LIMITED',
  shortName: 'PAAMRISE',
  type: 'One Person Company Limited by Shares',
  act: 'Companies Act, 2013 (Schedule I, Form INC-33)',
  cinSrn: '1-26771192851 / 1785220603343',
  stateOfRegistration: 'Odisha (Orissa)',
  registeredOffice: 'K-15, HIG-72, Kalinga Vihar, Bhubaneswar, Khorda, Odisha — 751019, India',
  authorizedCapital: '₹15,00,000 (1,50,000 Equity Shares of ₹10 each)',
  paidUpCapital: '1,000 Equity Shares',
  promoterDirector: 'Mita Pradhan',
  nominee: 'Arunansu Senapati',
  statutoryWitness: 'CA Ajay Kumar Nanda (ACA, Balasore)',
  tagline: 'Engineering Infrastructure · Powering Commerce · Building Utilities',
  description: 'A multi-sector enterprise incorporated under the Companies Act 2013, pursuing foundational infrastructure in electrical engineering, government public procurement, civic utilities, facility management, and digital e-commerce platforms.',
  email: 'contact@paamrise.com',
  tenderEmail: 'tenders@paamrise.com',
  phone: '+91 (0674) 289-4100',
  helpline: '+91 98610 54321',
}

export const moaObjects = [
  {
    clause: '3(a).1',
    category: 'E-Commerce & Digital Commerce',
    title: 'E-Commerce, Marketplace & Digital Trading',
    officialText: 'To carry on the business of e-commerce, online marketplace, electronic trading, internet-based retail and wholesale, digital commerce, and to buy, sell, market, distribute, import, export, supply, commission, consign, franchise, or otherwise deal in all kinds of goods, products, commodities, articles, equipment, machinery, consumer goods, industrial goods, electrical and electronic products, hardware, software, and services through online, offline, or hybrid platforms.',
    highlights: ['Multi-vendor Marketplace', 'B2B/B2C Digital Trading', 'Hybrid Supply Channels', 'Electronics & Industrial Goods Catalog'],
    icon: 'ShoppingCart',
    accent: '#e8ff47'
  },
  {
    clause: '3(a).2',
    category: 'Wholesale & Trading',
    title: 'Trading, Distribution & Material Supply',
    officialText: "To carry on the business as traders, wholesalers, retailers, distributors, dealers, stockists, commission agents, importers, exporters, manufacturers' representatives, franchisees, licensors, and suppliers of all kinds of goods, materials, commodities, machinery, equipment, spare parts, tools, consumables, office supplies, construction materials, agricultural products, electrical goods, and other lawful products.",
    highlights: ['Bulk Material Stocking', 'Machinery & Spare Parts', 'Construction & Agricultural Goods', 'Direct Mill/OEM Dealerships'],
    icon: 'PackageCheck',
    accent: '#ff6b35'
  },
  {
    clause: '3(a).3',
    category: 'Tenders & EPC',
    title: 'Government Tenders, Public Procurement & EPC Contracts',
    officialText: 'To participate in, bid for, execute, undertake, manage, and perform contracts, government tenders, public procurement, rate contracts, framework agreements, EPC contracts, works contracts, supply contracts, service contracts, annual maintenance contracts (AMC), comprehensive maintenance contracts (CMC), consultancy assignments, and projects issued by the Central Government, State Governments, Public Sector Undertakings (PSUs), Government Departments, Municipal Bodies, Local Authorities, Autonomous Bodies, Defence Establishments, Railways, Public Institutions, and private organizations.',
    highlights: ['Central & State Govt Tenders', 'GeM Public Procurement', 'Turnkey EPC & Works Contracts', 'Comprehensive AMC & CMC Operations'],
    icon: 'Briefcase',
    accent: '#38bdf8'
  },
  {
    clause: '3(a).4',
    category: 'Civic & Utilities',
    title: 'Public Utility, Civic Support & Facility Management',
    officialText: 'To provide public utility, civic support, facility management, infrastructure support, sanitation, housekeeping, manpower supply, maintenance, operation, project management, digital services, IT-enabled services, administrative support, and other public or private services as may be lawfully undertaken.',
    highlights: ['Integrated Facility Management', 'Municipal & Civic Support', 'Sanitation & Housekeeping', 'Skilled Manpower Supply & ITES'],
    icon: 'Building2',
    accent: '#a78bfa'
  },
  {
    clause: '3(a).5',
    category: 'Electrical & Energy',
    title: 'Electrical Contracting, Substations & Renewable Energy',
    officialText: 'To carry on the business of electrical contractors and engineers and to undertake the design, installation, erection, commissioning, testing, repair, operation, maintenance, renovation, modernization, and execution of electrical systems, LT/HT electrical works, internal and external electrification, substations, transmission and distribution systems, street lighting, industrial electrification, renewable energy systems, solar power plants, EV charging infrastructure, energy-efficient systems, electrical safety systems, fire alarm systems, CCTV, networking, automation, and allied engineering services.',
    highlights: ['LT/HT Electrification & Substations', 'Solar Power Plants & Micro-grids', 'EV Charging & Green Energy', 'Fire Safety, CCTV & Automation'],
    icon: 'Zap',
    accent: '#e8ff47'
  },
  {
    clause: '3(a).6',
    category: 'Software & Logistics',
    title: 'Digital Platforms, Cloud Solutions & Logistics Support',
    officialText: 'To establish, own, operate, maintain, develop, license, manage, or provide digital platforms, mobile applications, software solutions, cloud-based services, payment solutions, logistics support, warehousing, fulfillment services, digital marketing, customer support, and technology-enabled business solutions in connection with the Company\'s business activities.',
    highlights: ['Cloud & Enterprise Software', 'Supply Chain & Warehousing Tech', 'Integrated Payment Gateways', 'Fulfillment & Logistics Solutions'],
    icon: 'Cpu',
    accent: '#34d399'
  }
]

export const services = [
  {
    id: 1,
    number: '01',
    icon: 'Zap',
    title: 'Electrical Contracting & Power Systems',
    desc: 'Turnkey execution of LT/HT electrical works, 11kV/33kV substations, industrial electrification, smart street lighting, and electrical safety certifications under Clause 3(a).5.',
    tags: ['LT/HT Works', 'Substations', 'Safety Systems', 'Automation'],
    span: 'col-span-2',
    moaRef: 'Clause 3(a).5'
  },
  {
    id: 2,
    number: '02',
    icon: 'Sun',
    title: 'Renewable Energy & Solar Infrastructure',
    desc: 'Design, engineering, and commissioning of rooftop & ground-mounted solar power plants, green energy micro-grids, and EV charging infrastructure.',
    tags: ['Solar Plants', 'EV Charging', 'Energy Audits'],
    span: 'col-span-1',
    moaRef: 'Clause 3(a).5'
  },
  {
    id: 3,
    number: '03',
    icon: 'Building2',
    title: 'Facility Management & Civic Utilities',
    desc: 'Public utility services, municipal sanitation, automated housekeeping, infrastructure operations, and skilled manpower provisioning under Clause 3(a).4.',
    tags: ['Facility Mgmt', 'Sanitation', 'Manpower Supply'],
    span: 'col-span-1',
    moaRef: 'Clause 3(a).4'
  },
  {
    id: 4,
    number: '04',
    icon: 'Briefcase',
    title: 'Government Procurement & EPC Tenders',
    desc: 'Comprehensive bidding and execution of government tenders, public procurement, rate contracts, works contracts, AMC, and CMC for PSUs, Railways, and Defense under Clause 3(a).3.',
    tags: ['Govt Tenders', 'GeM Orders', 'EPC Contracts', 'AMC/CMC'],
    span: 'col-span-2',
    moaRef: 'Clause 3(a).3'
  },
  {
    id: 5,
    number: '05',
    icon: 'PackageCheck',
    title: 'Wholesale, Trading & Bulk Distribution',
    desc: 'Supply of industrial equipment, electrical hardware, construction materials, spare parts, tools, and consumables backed by robust stocking under Clause 3(a).2.',
    tags: ['Industrial Supplies', 'Hardware', 'Stockist'],
    span: 'col-span-1',
    moaRef: 'Clause 3(a).2'
  },
  {
    id: 6,
    number: '06',
    icon: 'ShoppingCart',
    title: 'E-Commerce & Digital Marketplace',
    desc: 'Omnichannel B2B/B2C commerce portals, catalog distribution, digital payment workflows, and consumer goods trading platforms under Clause 3(a).1.',
    tags: ['E-Commerce', 'B2B Portal', 'Digital Trading'],
    span: 'col-span-1',
    moaRef: 'Clause 3(a).1'
  },
  {
    id: 7,
    number: '07',
    icon: 'Cpu',
    title: 'Enterprise Software & Cloud Platforms',
    desc: 'Technology-enabled business solutions, mobile applications, warehousing management systems, and fulfillment tracking under Clause 3(a).6.',
    tags: ['Custom Software', 'Cloud Architecture', 'Logistics Tech', 'Payment Gateways'],
    span: 'col-span-3',
    moaRef: 'Clause 3(a).6'
  },
  {
    id: 8,
    number: '08',
    icon: 'ShieldCheck',
    title: 'Annual Maintenance & Comprehensive AMC',
    desc: 'Round-the-clock maintenance contracts, uptime guarantees, preventive audits, and emergency engineering response teams.',
    tags: ['24/7 SLA', 'Preventive Audits', 'Compliance'],
    span: 'col-span-1',
    moaRef: 'Clause 3(a).3'
  }
]

export const caseStudies = [
  {
    id: 1,
    company: '33/11kV Substation & Grid Modernization',
    industry: 'Electrical & Renewable EPC',
    result: '100% On-Time Grid Sync',
    desc: 'Turnkey erection, testing, and commissioning of high-tension electrical distribution, transformer setup, switchyard cabling, and automated safety systems.',
    services: ['HT/LT Works', 'Substations', 'Safety Testing', 'Clause 3(a).5'],
    accentColor: 'from-amber-500/20 to-transparent'
  },
  {
    id: 2,
    company: 'State PSU Bulk Materials & Equipment Supply',
    industry: 'Public Procurement & Tenders',
    result: '₹4.8 Cr Tender Execution',
    desc: 'Procurement, multi-district logistics, quality inspection, and staged distribution of certified industrial tools, safety gear, and electrical machinery.',
    services: ['Govt Tender', 'Rate Contract', 'Logistics', 'Clause 3(a).3'],
    accentColor: 'from-blue-600/30 to-transparent'
  },
  {
    id: 3,
    company: 'Institutional Campus Integrated Facility Operations',
    industry: 'Public Utilities & Civic Support',
    result: '99.4% SLA Compliance',
    desc: 'Comprehensive facility management covering 450,000+ sq.ft: 24/7 power backup maintenance, mechanized sanitation, housekeeping, and trained manpower staffing.',
    services: ['Facility Mgmt', 'Sanitation', 'Manpower Supply', 'Clause 3(a).4'],
    accentColor: 'from-emerald-600/30 to-transparent'
  },
  {
    id: 4,
    company: 'B2B Industrial Trading & Omnichannel Fulfillment Hub',
    industry: 'E-Commerce & Technology',
    result: '15,000+ SKUs Cataloged',
    desc: 'Deployment of a high-speed digital catalog and warehouse fulfillment pipeline connecting local suppliers and industrial buyers across Eastern India.',
    services: ['Digital Marketplace', 'Warehousing Tech', 'Supply Chain', 'Clause 3(a).1'],
    accentColor: 'from-purple-900/40 to-transparent'
  }
]

export const team = [
  {
    name: 'Mita Pradhan',
    role: 'Founder & Managing Director',
    quote: 'Our MOA is not just a legal document — it is our blueprint for creating tangible value across India’s core sectors.',
    credentials: 'D/o Kshirod Pradhan · Promoter Shareholder',
    colors: ['#e8ff47', '#080812']
  },
  {
    name: 'Arunansu Senapati',
    role: 'Corporate Affairs & Director Nominee',
    quote: 'Robust governance, strategic compliance, and unwavering operational discipline anchor every contract we execute.',
    credentials: 'Statutory Nominee · Corporate Strategy',
    colors: ['#38bdf8', '#080812']
  },
  {
    name: 'Er. R. K. Mohapatra',
    role: 'Head of Electrical Engineering & EPC',
    quote: 'From HT substations to solar arrays, safety and precision engineering define our on-ground execution standards.',
    credentials: 'Chief Electrical Consultant · 20+ Yrs Exp',
    colors: ['#ff6b35', '#080812']
  },
  {
    name: 'S. N. Tripathy',
    role: 'Director of Tenders & Public Procurement',
    quote: 'Navigating GeM, state public procurement, and rate frameworks requires absolute transparency and execution speed.',
    credentials: 'Govt Procurement Specialist · EPC Contracts',
    colors: ['#a78bfa', '#080812']
  }
]

export const faqs = [
  {
    q: 'What is the corporate structure and registration of PAAMRISE?',
    a: 'PAAMRISE (OPC) PRIVATE LIMITED is an incorporated company under the Companies Act, 2013 (Schedule I, Form INC-33), registered in the State of Odisha with authorized share capital of ₹15,00,000 (1,50,000 Equity Shares of ₹10 each). Our registered office is located at K-15, HIG-72, Kalinga Vihar, Bhubaneswar, Khorda, Odisha.'
  },
  {
    q: 'Can PAAMRISE bid for Central and State Government tenders?',
    a: 'Yes. Under Clause 3(a).3 of our Memorandum of Association (e-MOA), PAAMRISE is specifically empowered to participate in, bid for, execute, manage, and perform contracts, government tenders, public procurement, rate contracts, framework agreements, EPC contracts, works contracts, AMC, and CMC issued by Central Government, State Governments, PSUs, Railways, Defence, and Autonomous Bodies.'
  },
  {
    q: 'What electrical engineering works does PAAMRISE undertake?',
    a: 'Under Clause 3(a).5, we undertake the full spectrum of electrical contracting: LT/HT electrical works, 11kV/33kV substations, internal and external electrification, transmission and distribution lines, street lighting, industrial electrification, solar power plants, EV charging infrastructure, CCTV, fire alarms, and automation systems.'
  },
  {
    q: 'Do you offer Comprehensive AMC and Facility Management services?',
    a: 'Yes. Under Clauses 3(a).3 and 3(a).4, we provide Annual Maintenance Contracts (AMC), Comprehensive Maintenance Contracts (CMC), public utility services, civic support, facility management, mechanized sanitation, housekeeping, and trained manpower supply.'
  },
  {
    q: 'How does PAAMRISE handle procurement, wholesale distribution, and supply?',
    a: 'Under Clause 3(a).2, we operate as traders, wholesalers, stockists, and suppliers of industrial equipment, machinery, spare parts, tools, consumables, construction materials, and electrical goods with direct sourcing and dedicated logistics networks.'
  },
  {
    q: 'What digital commerce and software capabilities are part of the MOA?',
    a: 'Under Clauses 3(a).1 and 3(a).6, PAAMRISE owns, develops, and operates e-commerce portals, digital platforms, cloud solutions, payment gateway integrations, and tech-driven warehousing/logistics fulfillment.'
  },
  {
    q: 'Can private organizations and developers partner with PAAMRISE for turnkey projects?',
    a: 'Absolutely. Under Clause 3(b).3, we actively engage in joint ventures, consortia, subcontracting, and turnkey execution partnerships for both government-sanctioned works and private industrial/commercial developments.'
  },
  {
    q: 'Where does PAAMRISE operate geographically?',
    a: 'While our registered headquarters is in Bhubaneswar, Odisha, our MOA Clause 3(b).2 authorizes the establishment and operation of branches, depots, warehouses, and fulfillment centers across India and internationally.'
  }
]

export const clientLogos = [
  'Central PSUs', 'State Energy Utilities', 'Municipal Corporations', 'GeM Portal', 
  'Indian Railways', 'Defence Establishments', 'Industrial Parks', 'Institutional Campuses'
]

export const corporateStats = [
  { num: 6, label: 'MOA Business Sectors', suffix: ' Pillars' },
  { num: 15, label: 'Authorized Share Capital', prefix: '₹', suffix: ' Lakhs' },
  { num: 100, label: 'Statutory MOA Compliance', suffix: '%' },
  { num: 1000, label: 'Initial Issued Shares', suffix: ' Equity' },
  { num: 24, label: 'Emergency & AMC Support', suffix: '/7' },
  { num: 1, label: 'Govt & Enterprise Gateway', suffix: ' Platform' }
]

export const contractModels = [
  {
    name: 'Supply & Rate Contracts',
    price: 'Procurement',
    desc: 'Empowered under Clause 3(a).2 & 3(a).3',
    features: [
      'Bulk materials & equipment supply',
      'GeM / State tender rate adherence',
      'Batch testing & OEM warranty backing',
      'Multi-district warehousing & dispatch',
      'Transparent milestone invoicing'
    ],
    timeline: 'As per Tender / Purchase Order',
    btnText: 'Submit Supply RFQ',
    btnClass: 'bg-signal text-ink-950 hover:shadow-[0_0_20px_rgba(232,255,71,0.2)]',
    borderClass: 'border-white/10'
  },
  {
    name: 'Turnkey EPC & Electrical',
    price: 'Project-Based',
    desc: 'Empowered under Clause 3(a).5 & 3(a).3',
    features: [
      'Full LT/HT design, erection & testing',
      '33kV/11kV substation & line execution',
      'Solar plant & EV infra commissioning',
      'Statutory CEA / Electrical Inspector clearances',
      'Comprehensive 1-year defect liability warranty'
    ],
    timeline: 'Defined Milestone Schedule',
    btnText: 'Request Project Quote',
    btnClass: 'bg-signal text-ink-950 hover:shadow-[0_0_20px_rgba(232,255,71,0.2)]',
    borderClass: 'border-signal/50',
    popular: true
  },
  {
    name: 'Comprehensive AMC & Facility',
    price: 'Retainer / SLA',
    desc: 'Empowered under Clause 3(a).3 & 3(a).4',
    features: [
      '24/7 dedicated engineering maintenance',
      'Preventive electrical & safety inspections',
      'Mechanized housekeeping & civic sanitation',
      'Skilled technical manpower deployment',
      'Guaranteed MTTR (Mean Time to Repair) SLA'
    ],
    timeline: 'Annual / Multi-Year Retainer',
    btnText: 'Discuss AMC Agreement',
    btnClass: 'border border-ember text-ember hover:bg-ember hover:text-ink-950',
    borderClass: 'border-ember/30'
  }
]

export const executionTimeline = [
  { 
    title: 'Tender / RFQ Evaluation', 
    tagline: 'Precision analysis of technical & commercial scope', 
    desc: 'Comprehensive review of tender specifications, BOQ validation, site feasibility, regulatory clearances, and commercial viability.', 
    duration: 'Stage 01' 
  },
  { 
    title: 'Engineering & BOQ Finalization', 
    tagline: 'Statutory compliance & blueprint engineering', 
    desc: 'Preparation of single-line diagrams (SLD), material estimation, vendor mobilization plans, and technical submittals for authority approvals.', 
    duration: 'Stage 02' 
  },
  { 
    title: 'Procurement & Logistics Mobilization', 
    tagline: 'Certified materials delivered with zero bottlenecks', 
    desc: 'Dispatch of OEM-certified equipment, electrical cables, transformers, switchgear, tools, and materials to project sites via tracked logistics.', 
    duration: 'Stage 03' 
  },
  { 
    title: 'On-Ground Erection & Installation', 
    tagline: 'Execution driven by licensed engineering rigor', 
    desc: 'Erection of electrical towers, substation works, internal/external cabling, utility setup, or facility staffing in strict adherence to safety protocols.', 
    duration: 'Stage 04' 
  },
  { 
    title: 'Testing, Inspection & Commissioning', 
    tagline: 'Zero-defect statutory handover', 
    desc: 'High-voltage insulation testing, relay calibrations, safety sign-offs by statutory inspectors, and seamless synchronization with local grids or networks.', 
    duration: 'Stage 05' 
  },
  { 
    title: 'Post-Handover AMC & Operational Support', 
    tagline: 'Long-term reliability through proactive care', 
    desc: 'Continuous preventive maintenance, periodic safety audits, facility upkeep, and 24/7 on-call technical response under formal service agreements.', 
    duration: 'Stage 06' 
  }
]
