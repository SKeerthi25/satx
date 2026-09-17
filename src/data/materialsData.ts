export interface MaterialCategory {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  standards: string[];
  keyProperties: string[];
}

export const MATERIAL_CATEGORIES: MaterialCategory[] = [
  {
    id: 'structural-materials',
    category: 'Structural',
    title: 'Structural Steelwork & Reinforced Concrete',
    description: 'Engineering-grade S355 structural steel RSJ beams and high-density C35/40 ready-mix concrete for unyielding foundation stability.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    standards: ['BS EN 10025 Structural Steel Specification', 'BS 8500 Concrete Performance Certification'],
    keyProperties: ['High tensile strength', 'Anti-corrosion primer coating', 'Engineered load transfer']
  },
  {
    id: 'brickwork-masonry',
    category: 'Masonry',
    title: 'Facing Bricks & Natural Stone Masonry',
    description: 'Hand-selected clay facing bricks, imperial reclaimed London stocks, and natural limestone tailored to local architectural heritage.',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    standards: ['BS EN 771-1 Clay Masonry Units', 'F2 Frost Resistance Rating'],
    keyProperties: ['Thermal mass retention', 'Weather-resistant durability', 'Authentic aesthetic texture']
  },
  {
    id: 'timber-framework',
    category: 'Structural',
    title: 'Structural Timber & Glulam Beams',
    description: 'FSC-certified C24 structural softwood framing timber and engineered Glulam beams for sustainable, high-span roof trusses.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
    standards: ['FSC Sustainable Chain of Custody', 'BS 4978 Timber Grading Standard'],
    keyProperties: ['Precision kiln-dried low moisture', 'Low embodied carbon profile', 'Pressure treated anti-rot protection']
  },
  {
    id: 'roofing-systems',
    category: 'Roofing',
    title: 'Natural Slates & Seamless GRP Roofing',
    description: 'Grade-1 Spanish natural roof slates and heavy-duty GRP fibreglass flat roof membranes designed for 50+ year lifespan performance.',
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80',
    standards: ['BS EN 12326 Slate Quality Standard', 'BBA Approved GRP Membrane Systems'],
    keyProperties: ['100% Waterproof seal', 'UV solar radiation resistant', 'Zero maintenance requirement']
  },
  {
    id: 'insulation-thermal',
    category: 'Insulation',
    title: 'High-Performance PIR & Mineral Wool Insulation',
    description: 'Rigid PIR foil-faced insulation boards and acoustic mineral wool insulation achieving industry-leading U-values.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    standards: ['U-Value Target: <= 0.13 W/m²K', 'A1 Non-Combustible Fire Classification'],
    keyProperties: ['Eliminates thermal bridging', 'Acoustic sound absorption', 'Zero ozone depletion potential']
  },
  {
    id: 'flooring-surfaces',
    category: 'Finishing',
    title: 'Engineered Oak & Vitrified Porcelain Tiling',
    description: '20mm multi-ply engineered European oak and R11 anti-slip large-format Italian porcelain floor tiles.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80',
    standards: ['PEFC Certified European Oak', 'ISO 10545 Porcelain Scratch & Stain Resistance'],
    keyProperties: ['Compatible with underfloor heating', 'Impact & scratch resistant surface', 'Luxury tactile finish']
  },
  {
    id: 'windows-doors',
    category: 'Glazing',
    title: 'Thermally-Broken Aluminium & Smart Glazing',
    description: 'Slimline architectural aluminium window profiles with argon-filled triple glazing and solar control coatings.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    standards: ['PAS 24 Security Standard', 'Document Q Security Compliance'],
    keyProperties: ['U-Value down to 0.8 W/m²K', 'Multi-point locking systems', 'Ultra-slim 20mm sightlines']
  },
  {
    id: 'interior-finishes',
    category: 'Finishing',
    title: 'Specialist Plastering & Micro-Cement',
    description: 'Multi-finish skim plaster, breathable lime restoration plasters, and seamless micro-cement waterproof coatings.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80',
    standards: ['BS 8481 Plastering Quality Standard', 'VOC-Free Interior Air Quality'],
    keyProperties: ['Mirror-smooth finish', 'Waterproof seamless surfaces', 'Resistant to hairline cracking']
  }
];
