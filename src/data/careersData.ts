export interface JobListing {
  id: string;
  title: string;
  department: 'Site Management' | 'Trades & Skilled Craft' | 'Quantity Surveying' | 'Office & Operations';
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export const CAREER_LISTINGS: JobListing[] = [
  {
    id: 'senior-site-manager',
    title: 'Senior Residential Site Manager',
    department: 'Site Management',
    location: '[LOCATION PLACEHOLDER: SURREY / LONDON]',
    type: 'Full-time',
    experience: '5+ Years in Domestic Building',
    summary: 'Oversee high-end domestic new builds and extensions, managing trades, health & safety, and client milestone delivery.',
    responsibilities: [
      'Supervise daily site operations and trade contractor coordination.',
      'Enforce strict site Health & Safety, RAMS, and PPE compliance.',
      'Conduct weekly progress updates and quality assurance snag checks.',
      'Manage material call-offs and site deliveries.'
    ],
    requirements: [
      'SMSTS & CSCS Black/Gold Card qualification.',
      'Proven track record delivering domestic residential projects.',
      'Strong structural background and trade interface knowledge.'
    ]
  },
  {
    id: 'quantity-surveyor',
    title: 'Domestic Quantity Surveyor',
    department: 'Quantity Surveying',
    location: '[LOCATION PLACEHOLDER: HEAD OFFICE]',
    type: 'Full-time',
    experience: '3+ Years',
    summary: 'Manage project cost planning, Bill of Quantities preparation, trade valuations, and procurement schedules.',
    responsibilities: [
      'Prepare detailed itemised valuations and tender costings.',
      'Manage subcontractor payments and variation agreements.',
      'Produce monthly financial reporting for senior management.'
    ],
    requirements: [
      'BSc in Quantity Surveying or equivalent experience.',
      'Proficiency in JCT domestic building contracts.',
      'High numerical accuracy and negotiation skills.'
    ]
  },
  {
    id: 'master-bricklayer',
    title: 'Master Bricklayer / Mason',
    department: 'Trades & Skilled Craft',
    location: '[LOCATION PLACEHOLDER: REGIONAL SITES]',
    type: 'Full-time',
    experience: '4+ Years',
    summary: 'Execute high-precision facing brickwork, stone masonry, cavity wall construction, and period pointing.',
    responsibilities: [
      'Construct high-spec facing brickwork and architectural blockwork.',
      'Perform lime mortar pointing and heritage restoration.',
      'Ensure strict dimensional accuracy and clean mortar joints.'
    ],
    requirements: [
      'NVQ Level 2/3 in Trowel Occupations.',
      'Valid CSCS Skilled Worker Card.',
      'High attention to brick bond pattern alignment.'
    ]
  }
];
