export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: string;
  iconName: string;
  image: string;
  benefits: string[];
  fullDesc?: string;
  path: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'new-build-homes',
    title: 'New Build Homes',
    shortDesc: 'End-to-end bespoke residential development built from ground zero with precision engineering and superior materials.',
    category: 'Construction',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Full Architectural & Structural Planning', 'Turnkey Construction & Site Supervision', 'High Energy Efficiency & NHBC Standards'],
    path: '/services/new-builds'
  },
  {
    id: 'residential-construction',
    title: 'Residential Construction',
    shortDesc: 'Complete structural construction and building solutions tailored for luxury domestic properties and estates.',
    category: 'Construction',
    iconName: 'Home',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Structural Engineering Oversight', 'Precision Foundation & Brickwork', 'Comprehensive Project Management'],
    path: '/services/residential-construction'
  },
  {
    id: 'house-extensions',
    title: 'House Extensions',
    shortDesc: 'Seamless rear, side, and double-storey home extensions expanding your living space without compromising architectural harmony.',
    category: 'Extensions',
    iconName: 'Maximize2',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Rear, Side & Double-Storey Layouts', 'Building Control & Planning Compliance', 'Seamless Structural Integration'],
    path: '/services/house-extensions'
  },
  {
    id: 'home-renovations',
    title: 'Home Renovations',
    shortDesc: 'Complete interior and structural home transformations updating historic or aging layouts into modern living spaces.',
    category: 'Renovations',
    iconName: 'Hammer',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Full Interior Reconfiguration', 'Structural Beam Installations', 'Modern Heating & Electrical Retrofitting'],
    path: '/services/home-renovations'
  },
  {
    id: 'loft-conversions',
    title: 'Loft Conversions',
    shortDesc: 'Unlock unutilised attic space into master bedroom suites, home offices, or luxury bathrooms with tailored loft designs.',
    category: 'Conversions',
    iconName: 'ArrowUpRight',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Dormer, Mansard & Velux Conversion', 'Structural Floor Reinforcement', 'Bespoke Staircase Craftsmanship'],
    path: '/services/loft-conversions'
  },
  {
    id: 'property-refurbishment',
    title: 'Property Refurbishment',
    shortDesc: 'Comprehensive property modernization, cosmetic overhauls, and landlord turnarounds executed with efficiency.',
    category: 'Refurbishment',
    iconName: 'RefreshCw',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Complete Exterior & Interior Overhaul', 'Energy Efficiency Upgrades', 'Rapid Commercial Turnaround'],
    path: '/services/property-refurbishment'
  },
  {
    id: 'kitchen-renovations',
    title: 'Kitchen Renovations',
    shortDesc: 'Bespoke culinary spaces featuring luxury cabinetry, custom island counters, and high-performance appliance integration.',
    category: 'Interiors',
    iconName: 'ChefHat',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Custom Cabinetry Installation', 'Stone & Solid Surface Worktops', 'Integrated Lighting & Appliances'],
    path: '/services/kitchen-bathroom'
  },
  {
    id: 'bathroom-renovations',
    title: 'Bathroom Renovations',
    shortDesc: 'Spa-inspired bathroom retreats featuring floor-to-ceiling tiling, walk-in wet rooms, and premium sanitaryware.',
    category: 'Interiors',
    iconName: 'Bath',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Tanking & Wet Room Waterproofing', 'Underfloor Heating Systems', 'Precision Tile Alignment'],
    path: '/services/kitchen-bathroom'
  },
  {
    id: 'structural-alterations',
    title: 'Structural Alterations',
    shortDesc: 'Open-plan living conversions, load-bearing RSJ steel installs, and foundation underpinning executed by structural experts.',
    category: 'Structural',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    benefits: ['RSJ Steel Beam Calculations & Installs', 'Load-Bearing Wall Removals', 'Structural Foundation Stabilization'],
    path: '/services/residential-construction'
  },
  {
    id: 'groundworks',
    title: 'Groundworks & Foundations',
    shortDesc: 'Site excavation, trenching, steel rebar reinforcement, concrete slab pouring, and site drainage systems.',
    category: 'Structural',
    iconName: 'Shovel',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Precision Laser Excavation', 'Concrete Strip & Raft Foundations', 'Sub-Surface Drainage & Services'],
    path: '/services/residential-construction'
  },
  {
    id: 'roofing',
    title: 'Roofing Services',
    shortDesc: 'Pitched tile and slate roofs, flat GRP fibreglass systems, dormer roofing, and leadwork flashing.',
    category: 'Exterior',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Natural Slate & Clay Tile Pitching', 'Seamless Flat Roof GRP Systems', 'Code 4 & Code 5 Lead Dressings'],
    path: '/services/residential-construction'
  },
  {
    id: 'brickwork',
    title: 'Brickwork & Masonry',
    shortDesc: 'High-end structural bricklaying, pointing, decorative stone masonry, and cavity wall construction.',
    category: 'Structural',
    iconName: 'Grid',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Facing Brick & Mortar Matching', 'Lime Pointing & Historic Masonry', 'Insulated Cavity Walls'],
    path: '/services/residential-construction'
  },
  {
    id: 'plastering',
    title: 'Plastering & Drylining',
    shortDesc: 'Smooth skim plastering, drylining wallboard systems, acoustic insulation, and decorative cornice detailing.',
    category: 'Finishing',
    iconName: 'Paintbrush',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Mirror-Smooth Multi-Skim Finish', 'Soundproof Drylining Systems', 'Coving & Ceiling Restoration'],
    path: '/services/residential-construction'
  },
  {
    id: 'flooring',
    title: 'Flooring Installation',
    shortDesc: 'Engineered hardwood, solid oak, porcelain tiling, luxury vinyl tile (LVT), and screed subfloor preparation.',
    category: 'Finishing',
    iconName: 'Square',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Subfloor Self-Levelling Screeds', 'Herringbone & Engineered Oak', 'Large Format Porcelain Tiling'],
    path: '/services/residential-construction'
  },
  {
    id: 'interior-finishing',
    title: 'Interior Finishing & Joinery',
    shortDesc: 'Custom architectural carpentry, skirting boards, architraves, door hanging, and high-spec decorating.',
    category: 'Finishing',
    iconName: 'PenTool',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Bespoke Oak Doors & Joinery', 'Precision Architrave Fitting', 'Professional Spray & Paint Finishes'],
    path: '/services/residential-construction'
  },
  {
    id: 'external-works',
    title: 'External Works & Landscaping',
    shortDesc: 'Patios, block paving driveways, composite decking, retaining walls, and architectural garden structures.',
    category: 'Exterior',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Kandla Grey Slate & Porcelain Paving', 'Retaining Brick & Gabion Walls', 'Automated Driveway Gates'],
    path: '/services/residential-construction'
  },
  {
    id: 'project-management',
    title: 'Project Management',
    shortDesc: 'Dedicated site manager supervising timeline schedules, budget controls, material deliveries, and safety compliance.',
    category: 'Management',
    iconName: 'FileCheck',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Gantt Chart Timeline Tracking', 'Transparent Weekly Progress Logs', 'Quality Assurance Checklists'],
    path: '/services/residential-construction'
  },
  {
    id: 'property-maintenance',
    title: 'Property Maintenance',
    shortDesc: 'Scheduled preventative maintenance, structural inspections, and planned repairs for domestic portfolios.',
    category: 'Management',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    benefits: ['Rapid Response Inspection Teams', 'Preventative Roof & Gutter Checks', 'Long-term Maintenance Contracts'],
    path: '/services/residential-construction'
  }
];
