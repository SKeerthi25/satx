export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'New Builds' | 'Extensions' | 'Renovations' | 'Pricing' | 'Planning' | 'Construction' | 'Materials' | 'Project Timelines' | 'Aftercare';
}

export const FAQ_ITEMS: FAQItem[] = [
  // General
  {
    category: 'General',
    question: 'What types of domestic building projects does SATX LTD specialize in?',
    answer: 'SATX LTD specializes in complete domestic building and residential construction services. This includes bespoke new build homes, structural house extensions, full home renovations, loft conversions, property refurbishments, and high-end interior finishing.'
  },
  {
    category: 'General',
    question: 'Is SATX LTD fully insured for residential construction work?',
    answer: 'Yes. SATX LTD maintains comprehensive Public Liability Insurance and Contractors All Risk Coverage across all operational sites. Specific policy limits and insurance certificates are provided in our formal contract documentation.'
  },

  // New Builds
  {
    category: 'New Builds',
    question: 'Can SATX LTD handle the complete turnkey build from foundation to handover?',
    answer: 'Absolutely. We offer complete turnkey main contractor solutions managing groundworks, structural masonry or timber frame, roofing, first and second-fix trades, utility connections, and interior finishing through to final Building Control sign-off.'
  },
  {
    category: 'New Builds',
    question: 'Do you work with our appointed architect or provide design coordination?',
    answer: 'We regularly work alongside client-appointed architects, structural engineers, and interior designers. Alternatively, we can coordinate with our trusted architectural partners to assist with design development and planning approvals.'
  },

  // Extensions
  {
    category: 'Extensions',
    question: 'Do I need planning permission for a house extension?',
    answer: 'Many single-storey rear and side extensions fall under Permitted Development rights depending on size and property type. However, double-storey extensions or properties in Conservation Areas typically require formal planning permission. We assist in reviewing planning constraints early in the consultation.'
  },
  {
    category: 'Extensions',
    question: 'Can we remain living in our home during a rear extension project?',
    answer: 'In most cases, yes. We erect temporary dust-sealed partition screens and secure site access to isolate the living areas from the construction zone until the final knock-through stage.'
  },

  // Renovations
  {
    category: 'Renovations',
    question: 'How do you handle load-bearing wall removals during home renovations?',
    answer: 'Load-bearing wall removals require structural engineer calculations to specify the exact RSJ (Rolled Steel Joist) beam size. SATX LTD manages structural propping, steel installation, and Building Control inspection sign-offs.'
  },

  // Pricing
  {
    category: 'Pricing',
    question: 'How are project quotes calculated and are prices fixed?',
    answer: 'We provide detailed, itemised fixed-price quotations based on clear architectural drawings and material specifications. Provided the project scope does not change, our contract quote remains fixed with zero hidden fees.'
  },
  {
    category: 'Pricing',
    question: 'What is your standard payment schedule structure?',
    answer: 'Payments are broken down into staged valuation milestones based on completed on-site progress (e.g. Foundations Complete, Superstructure Water-Tight, First Fix Complete). We do not request large upfront lump sums.'
  },

  // Planning
  {
    category: 'Planning',
    question: 'Who manages Building Regulations inspections and sign-offs?',
    answer: 'SATX LTD coordinates directly with local authority Building Control or approved independent inspectors. We arrange statutory site inspections at key construction stages (excavation, damp proofing, structural steels, insulation, completion).'
  },

  // Construction
  {
    category: 'Construction',
    question: 'How is site safety maintained during ongoing construction?',
    answer: 'Every site is managed under strict Health & Safety protocols overseen by our Senior Site Manager. We enforce mandatory PPE, secure site perimeter fencing, daily risk assessments, and clean site policies.'
  },

  // Materials
  {
    category: 'Materials',
    question: 'How are construction materials selected and tested for quality?',
    answer: 'We source high-grade materials from established, accredited suppliers. All structural timber, steelwork, bricks, and insulation comply with relevant British & European Standards (BS/EN) with certified performance data.'
  },

  // Project Timelines
  {
    category: 'Project Timelines',
    question: 'What happens if unforeseen weather or ground conditions delay work?',
    answer: 'Our project schedules incorporate realistic weather buffers. If adverse weather or unexpected ground anomalies arise, your Site Manager will notify you immediately and implement mitigation plans to protect the project timeline.'
  },

  // Aftercare
  {
    category: 'Aftercare',
    question: 'What warranty and aftercare support does SATX LTD provide?',
    answer: 'Upon completion, we provide a formal Handover Pack including Operation & Maintenance manuals, manufacturer appliance warranties, structural warranties, and a dedicated 12-month defects liability aftercare period.'
  }
];
