export interface BlogPost {
  id: string;
  title: string;
  category: 'Construction' | 'Home Improvement' | 'Architecture' | 'Renovation' | 'Sustainability' | 'Building Tips' | 'Company Updates';
  date: string;
  readTime: string;
  author: string;
  image: string;
  summary: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'key-considerations-house-extensions',
    title: 'Key Architectural & Structural Considerations for Rear House Extensions',
    category: 'Architecture',
    date: 'September 12, 2026',
    readTime: '6 Min Read',
    author: '[AUTHOR PLACEHOLDER: TECHNICAL DIRECTOR]',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    summary: 'Planning a rear extension requires balancing spatial flow, structural load-bearing beam design, natural daylighting, and local planning permissions.',
    content: [
      'Adding a rear extension to a domestic property is one of the most effective ways to create expansive open-plan kitchen and living environments without moving home.',
      '1. Structural Beam Engineering: Removing rear structural walls requires installing heavy steel RSJ beams to support the upper levels. Working with qualified engineers ensures proper padstone load distribution.',
      '2. Natural Daylighting Solutions: Incorporating structural glass lanterns or floor-to-ceiling bi-fold glass doors prevents deep-plan kitchen areas from feeling dark.',
      '3. Thermal Performance & Insulation: Modern Building Regulations mandate strict U-values for walls, floors, and glass elements to minimize energy loss.'
    ]
  },
  {
    id: 'sustainable-building-materials-2026',
    title: 'Modern Sustainable Building Materials in Domestic Residential Construction',
    category: 'Sustainability',
    date: 'August 28, 2026',
    readTime: '8 Min Read',
    author: '[AUTHOR PLACEHOLDER: SUSTAINABILITY LEAD]',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
    summary: 'Discover how air-source heat pumps, high-density wood fibre insulation, and reclaimed bricks reduce lifetime residential carbon emissions.',
    content: [
      'Sustainable residential construction goes beyond basic solar panels. True sustainability begins with embodied carbon in building materials.',
      '1. High-Performance Thermal Envelopes: Continuous external insulation barriers eliminate cold bridging in cavity walls.',
      '2. Low-Carbon Concrete & Reclaimed Bricks: Using recycled blast-furnace slag concrete sub-bases reduces initial foundation embodied carbon.',
      '3. Renewable Heating Integration: Pair air-source heat pumps with low-temperature underfloor heating networks.'
    ]
  },
  {
    id: 'managing-load-bearing-wall-removals',
    title: 'Managing Structural Load-Bearing Wall Removals Safely',
    category: 'Construction',
    date: 'August 14, 2026',
    readTime: '5 Min Read',
    author: '[AUTHOR PLACEHOLDER: SENIOR STRUCTURAL ENGINEER]',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    summary: 'Step-by-step technical guide to temporary propping, steel RSJ calculations, and Building Control inspections during open-plan renovations.',
    content: [
      'Creating open-plan domestic spaces often involves removing internal load-bearing spine walls. Safety and precision are paramount.',
      '1. Temporary Propping Strategy: Using hydraulic needles and Acrow props ensures load transfer during wall demolition.',
      '2. RSJ Beam Installation: Heavy steel gantry beams must rest on engineered reinforced concrete padstones.',
      '3. Building Control Sign-Off: Independent inspectors inspect beam seatings prior to fire-protective plasterboarding.'
    ]
  },
  {
    id: 'loft-conversion-types-guide',
    title: 'Dormer vs Mansard Loft Conversions: Which Fits Your Property?',
    category: 'Renovation',
    date: 'July 30, 2026',
    readTime: '7 Min Read',
    author: '[AUTHOR PLACEHOLDER: PROJECT MANAGER]',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    summary: 'Compare headroom, planning requirements, structural work, and cost profiles between Dormer, Mansard, and Velux loft conversions.',
    content: [
      'Converting unused roof space is an efficient method for adding luxury master bedrooms or home offices.',
      '1. Dormer Conversions: Vertical wall extensions built off existing roof slopes, providing maximum usable floor area.',
      '2. Mansard Conversions: Altering the main roof angle to 72 degrees, creating an aesthetic top-floor story ideal for period homes.',
      '3. Velux Rooflight Conversions: Retaining original roof lines with minimal structural alterations for rapid delivery.'
    ]
  }
];
