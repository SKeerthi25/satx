export interface ProjectItem {
  id: string;
  title: string;
  category: 'New Builds' | 'Extensions' | 'Renovations' | 'Refurbishments' | 'Interiors' | 'External Works';
  location: string;
  completionYear: string;
  duration: string;
  shortDesc: string;
  fullOverview: string;
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  duringImage?: string;
  gallery: string[];
  challenge: string;
  solution: string;
  scopeOfWork: string[];
  materialsUsed: string[];
  keyHighlights: string[];
}

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'oakwood-contemporary-residence',
    title: 'Oakwood Contemporary Residence',
    category: 'New Builds',
    location: '[LOCATION PLACEHOLDER: SURREY]',
    completionYear: '2025',
    duration: '14 Months',
    shortDesc: 'A flagship 5-bedroom modern architectural new build featuring cantilevered steel structure, triple-glazed floor-to-ceiling glass, and air-source heat pump integration.',
    fullOverview: 'SATX LTD was appointed as the principal main contractor for this turnkey luxury residential new build. Built on a sloping plot requiring deep raft foundations and retaining walls, the project combines modern architectural aesthetics with zero-carbon building practices.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    duringImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Managing complex ground conditions with a 3.5m gradient drop while preserving adjacent mature protected trees and strict local council planning boundaries.',
    solution: 'Engineered a specialized bored-pile retaining wall matrix combined with a reinforced concrete ground slab, allowing rapid superstructure steel erection without soil displacement.',
    scopeOfWork: [
      'Site clearing & deep foundation piling',
      'Structural steel frame erection & blockwork masonry',
      'Slimline aluminium curtain wall glazier installation',
      'Underfloor heating & Mechanical Ventilation with Heat Recovery (MVHR)',
      'Bespoke kitchen joinery and micro-cement bathroom wetrooms'
    ],
    materialsUsed: [
      'Hand-selected Belgian Facing Bricks',
      'Architectural Grade Structural Steelwork',
      'Triple Glazed Low-E Solar Control Glass',
      'Natural Cedar Cladding Boards',
      'Polished Concrete & Engineered Oak Flooring'
    ],
    keyHighlights: [
      'A++ Energy Rating achieved with zero thermal bridging',
      'Completed 3 weeks ahead of initial schedule',
      'Zero lost-time safety incidents recorded'
    ]
  },
  {
    id: 'victorian-rear-extension-transformation',
    title: 'Victorian Glass & Brick Rear Extension',
    category: 'Extensions',
    location: '[LOCATION PLACEHOLDER: LONDON]',
    completionYear: '2025',
    duration: '6 Months',
    shortDesc: 'A dramatic single-storey open-plan kitchen and living space extension connecting a classic Victorian home with a landscaped rear terrace.',
    fullOverview: 'This project transformed a cramped, dark rear kitchen into a luminous 65 sqm open-plan architectural pavilion. We knocked through load-bearing masonry walls to insert heavy structural steel beams supporting the existing upper floors while creating seamless level threshold access to the garden.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    duringImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Safely supporting 3 storeys of Victorian masonry during the removal of internal load-bearing spine walls.',
    solution: 'Utilized temporary hydraulic needles and heavy-duty Acrow prop towers while installing twin 450mm RSJ steel gantry beams connected with high-tensile bolts.',
    scopeOfWork: [
      'Structural steel design, calculation & insertion',
      'Reclaimed London Stock brickwork matching',
      'Crittall-style black steel bi-fold door installation',
      'Structural glass roof lantern fitting',
      'Underfloor heating & micro-cement floor screed'
    ],
    materialsUsed: [
      'Reclaimed Victorian Imperial Facing Bricks',
      'Structural Glass Roof Panels (Self-cleaning)',
      'Thermally Broken Black Powder-coated Steel Doors',
      'Hydraulic Lime Mortar'
    ],
    keyHighlights: [
      'Increased property usable floor area by 40%',
      'Architectural award nominee layout design',
      'Flawless brickwork matching with existing structure'
    ]
  },
  {
    id: 'georgian-townhouse-full-renovation',
    title: 'Georgian Townhouse Modernisation',
    category: 'Renovations',
    location: '[LOCATION PLACEHOLDER: BATH]',
    completionYear: '2024',
    duration: '10 Months',
    shortDesc: 'Comprehensive period restoration and modern retrofitting of a 4-storey Grade II listed domestic townhouse.',
    fullOverview: 'Restoring historic elegance while introducing discreet modern HVAC, smart lighting, acoustic insulation between floors, and high-efficiency double glazing. Every detail was crafted in consultation with heritage conservation officers.',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Upgrading insulation, wiring, and plumbing without altering original cornices or period lime plasterwork.',
    solution: 'Used sub-floor void routing for services and breathable hemp-lime insulation panels backed by specialist plasterers.',
    scopeOfWork: [
      'Full electrical rewiring & plumbing replacement',
      'Cornice and ceiling rose plaster restoration',
      'Timber sash window overhaul and draft proofing',
      'Custom marble ensuite bathroom creation',
      'Basement damp-proofing and conversion'
    ],
    materialsUsed: [
      'Carrara Marble Slabs',
      'Breathable Lime Plasters & Distemper Paints',
      'Custom Cast Iron Radiators',
      'Solid European Oak Parquet'
    ],
    keyHighlights: [
      'Full compliance with Grade II Listed regulations',
      'Substantial EPC rating improvement from E to B',
      'Restored 180-year-old original timber floorboards'
    ]
  },
  {
    id: 'luxury-loft-master-suite',
    title: 'Mansard Loft Master Suite Conversion',
    category: 'Refurbishments',
    location: '[LOCATION PLACEHOLDER: SURREY]',
    completionYear: '2024',
    duration: '3.5 Months',
    shortDesc: 'A luxury mansard loft conversion creating a master bedroom, walk-in dressing room, and luxury wet room bathroom.',
    fullOverview: 'Transforming unused roof space into an executive master penthouse suite featuring panoramic roof lights, custom fitted wardrobes, floating double vanity, and high-performance soundproofing insulation.',
    heroImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Restricted headroom and strict ridge height planning constraints.',
    solution: 'Lowered the ceiling joists on the floor below by 150mm to gain extra vertical headroom while forming a lightweight timber dormer cheek structure.',
    scopeOfWork: [
      'Steel ridge beam installation & rafter trimming',
      'Slate mansard cladding & lead flashing',
      'Ensuite bathroom plumbing & wetroom tanking',
      'Bespoke oak staircase with glass balustrade'
    ],
    materialsUsed: [
      'Natural Spanish Roof Slates',
      'Kingspan Kooltherm Insulation Board',
      'Toughened Frameless Glass Balustrade',
      'Porcelain Marble Wall Tiles'
    ],
    keyHighlights: [
      'Added 42 sqm of luxury living space',
      'Completed with minimal disturbance to ground floor occupants',
      'Zero structural defects at final inspection'
    ]
  },
  {
    id: 'minimalist-interior-refurbishment',
    title: 'Minimalist Architectural Interior Overhaul',
    category: 'Interiors',
    location: '[LOCATION PLACEHOLDER: CHELSEA]',
    completionYear: '2025',
    duration: '5 Months',
    shortDesc: 'Complete internal refurbishment featuring flush shadow-gap skirtings, hidden acoustic pocket doors, and micro-cement surfaces.',
    fullOverview: 'Designed for ultra-clean lines, this interior renovation involved full drylining strip-out, rewiring, bespoke joinery installation, custom ambient LED trough lighting, and high-end Italian porcelain surfaces.',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Achieving absolute precision alignment across shadow gap skirtings and concealed door frames without standard architraves.',
    solution: 'Installed specialized aluminum plaster-in bead trims before plastering, verified with 3D laser level alignment.',
    scopeOfWork: [
      'Complete plasterboard strip back and acoustic studding',
      'Concealed magnetic pocket door installation',
      'Full home automation & Lutron lighting control setup',
      'Polished micro-cement floor application'
    ],
    materialsUsed: [
      'Micro-cement Resin Screed',
      'Concealed Aluminum Shadow-Gap Extrusions',
      'Smoked Oak Veneer Cabinetry',
      'Brushed Brass Architectural Ironmongery'
    ],
    keyHighlights: [
      'Featured in architectural interior showcases',
      'Seamless frameless door details throughout',
      'Flawless surface tolerances achieved'
    ]
  },
  {
    id: 'architectural-landscaping-patio',
    title: 'Architectural Grounds & Outdoor Pavilion',
    category: 'External Works',
    location: '[LOCATION PLACEHOLDER: KENT]',
    completionYear: '2024',
    duration: '2.5 Months',
    shortDesc: 'A high-spec outdoor living space with integrated barbecue kitchen, porcelain patio paving, and structural retaining walls.',
    fullOverview: 'Transforming an uneven garden into a 3-tiered outdoor entertainment sanctuary equipped with outdoor kitchen, integrated drainage, automated mood lighting, and hardwood pergola.',
    heroImage: 'https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&w=1600&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Severe clay soil moisture retention and surface water runoff toward the main residence structure.',
    solution: 'Designed an underground ACO slot channel drainage system connecting to a 5,000L subterranean rainwater harvesting tank.',
    scopeOfWork: [
      'Sub-base excavation & reinforced concrete foundation slab',
      '20mm Vitrified porcelain paving laying on mortar bed',
      'Outdoor kitchen brickwork with granite worktops',
      'Low-voltage IP67 garden illumination network'
    ],
    materialsUsed: [
      '20mm Exterior Porcelain Slabs',
      'Iroko Hardwood Decking & Pergola',
      'Granite Countertops',
      'Stainless Steel ACO Drain Channels'
    ],
    keyHighlights: [
      'Zero standing water issues during heavy winter storms',
      'Integrated smart lighting controlled via smartphone',
      'Extends living space outdoors year-round'
    ]
  }
];
