export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  projectType: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
}

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 'test-1',
    name: '[CLIENT NAME PLACEHOLDER]',
    role: 'Private Homeowner',
    projectType: 'New Build House',
    location: '[LOCATION PLACEHOLDER: SURREY]',
    rating: 5,
    review: 'SATX LTD delivered our new build home with an exceptional standard of craftsmanship and structural detail. Their site management was methodical, transparent, and kept us informed through every phase from excavation to final handover.',
    date: '2025',
    verified: true
  },
  {
    id: 'test-2',
    name: '[CLIENT NAME PLACEHOLDER]',
    role: 'Domestic Client',
    projectType: 'Glass & Brick Rear Extension',
    location: '[LOCATION PLACEHOLDER: LONDON]',
    rating: 5,
    review: 'The structural steel knock-through and rear extension executed by SATX LTD exceeded our highest expectations. The site was kept clean and secure throughout, and the brick matching with our Victorian house is flawless.',
    date: '2025',
    verified: true
  },
  {
    id: 'test-3',
    name: '[CLIENT NAME PLACEHOLDER]',
    role: 'Property Owner',
    projectType: 'Full House Renovation',
    location: '[LOCATION PLACEHOLDER: BATH]',
    rating: 5,
    review: 'Renovating a period property requires deep understanding of structural nuances and council regulations. SATX LTD managed the entire building control process with total professionalism.',
    date: '2024',
    verified: true
  },
  {
    id: 'test-4',
    name: '[CLIENT NAME PLACEHOLDER]',
    role: 'Homeowner',
    projectType: 'Mansard Loft Conversion',
    location: '[LOCATION PLACEHOLDER: KENT]',
    rating: 5,
    review: 'From initial site assessment to final plastering and bathroom fitting, SATX LTD demonstrated precision and dependability. The new master suite has completely transformed how we use our home.',
    date: '2024',
    verified: true
  }
];
