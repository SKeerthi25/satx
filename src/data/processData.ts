export interface ProcessStep {
  number: string;
  title: string;
  shortSummary: string;
  detailedDescription: string;
  keyDeliverables: string[];
  durationEstimate: string;
  iconName: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Initial Consultation',
    shortSummary: 'Understand the client’s vision, project scope, budget parameters, and site requirements.',
    detailedDescription: 'Our team meets directly with you to outline your objectives, review architectural concepts or ideas, discuss spatial requirements, establish initial budget guardrails, and answer early technical questions.',
    keyDeliverables: ['Project Needs Assessment', 'Initial Scope Outline', 'Preliminary Feasibility Advice'],
    durationEstimate: '1 – 2 Weeks',
    iconName: 'MessageSquare'
  },
  {
    number: '02',
    title: 'Site Assessment',
    shortSummary: 'Comprehensive technical review of existing structural conditions, access, and ground levels.',
    detailedDescription: 'We conduct a thorough site survey to inspect structural integrity, sub-surface ground conditions, utility connection points, party wall boundaries, access restrictions, and environmental site factors.',
    keyDeliverables: ['Site Survey Report', 'Structural & Access Risk Log', 'Utility Connection Audit'],
    durationEstimate: '1 Week',
    iconName: 'Search'
  },
  {
    number: '03',
    title: 'Planning & Design Coordination',
    shortSummary: 'Develop architectural approach, engineering calculations, and planning submission strategy.',
    detailedDescription: 'Collaborating closely with structural engineers, architects, and local authority planning officers to ensure design drawings conform strictly to UK Building Regulations and local planning permissions.',
    keyDeliverables: ['Structural Calculations', 'Building Regulations Approval Package', 'Planning Permission Alignment'],
    durationEstimate: '3 – 6 Weeks',
    iconName: 'Compass'
  },
  {
    number: '04',
    title: 'Cost Planning & Fixed Quote',
    shortSummary: 'Prepare a transparent, itemised Bill of Quantities and comprehensive contract quotation.',
    detailedDescription: 'We produce an un-ambiguous, transparent cost breakdown detailing every phase of material procurement, trade labor, scaffolding, waste management, and contingency allowances with no hidden extras.',
    keyDeliverables: ['Itemised Bill of Quantities', 'Fixed-Price Formal Quote', 'JCT / FMB Standard Construction Contract'],
    durationEstimate: '1 – 2 Weeks',
    iconName: 'Calculator'
  },
  {
    number: '05',
    title: 'Site Preparation & Procurement',
    shortSummary: 'Organise materials, specialized workforce, scaffolding, and site welfare setup.',
    detailedDescription: 'Prior to breaking ground, we erect secure site hoarding, establish welfare facilities, schedule material deliveries to match build milestones, and assign a dedicated Senior Site Manager.',
    keyDeliverables: ['Site Welfare & Safety Setup', 'Material Schedule Procurement', 'Dedicated Site Manager Assigned'],
    durationEstimate: '2 Weeks',
    iconName: 'PackageCheck'
  },
  {
    number: '06',
    title: 'Construction Execution',
    shortSummary: 'Execute the project according to strict technical standards, safety, and milestone schedules.',
    detailedDescription: 'Our skilled builders and tradesmen execute foundations, superstructure, roofing, first-fix electrical/plumbing, plastering, and second-fix finishing under daily site supervision and weekly progress reports.',
    keyDeliverables: ['Weekly Client Progress Reports', 'Milestone Inspections', 'Strict Site Safety Compliance'],
    durationEstimate: 'Project Dependent',
    iconName: 'Hammer'
  },
  {
    number: '07',
    title: 'Quality Inspection & Testing',
    shortSummary: 'Thorough multi-point quality check, pressure testing, and building control sign-offs.',
    detailedDescription: 'We conduct exhaustive snagging checks, electrical safety testing (EICR), gas safe certification, plumbing pressure tests, and coordinate final sign-offs with independent Building Control Inspectors.',
    keyDeliverables: ['Comprehensive Snag-Free Audit', 'Building Control Completion Certificate', 'EICR & Gas Safety Documentation'],
    durationEstimate: '1 – 2 Weeks',
    iconName: 'CheckCircle2'
  },
  {
    number: '08',
    title: 'Completion & Handover',
    shortSummary: 'Final walkthrough, handover of O&M manuals, warranties, and aftercare onboarding.',
    detailedDescription: 'We accompany you on a comprehensive final walkthrough, handover all keys, present your Operation & Maintenance manual, explain heating/smart controls, and activate your structural warranty.',
    keyDeliverables: ['Master Key Handover', 'Complete O&M Property Pack', '10-Year Warranty & Aftercare Plan'],
    durationEstimate: '1 Day',
    iconName: 'Key'
  }
];
