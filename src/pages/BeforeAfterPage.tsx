import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { CTASection } from '../components/CTASection';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const BeforeAfterPage: React.FC<PageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Home Renovations');

  const categories = ['Home Renovations', 'Extensions', 'Kitchens', 'Bathrooms', 'Interiors', 'Exterior Improvements'];

  const showcaseData: Record<string, { before: string; after: string; title: string; desc: string }> = {
    'Home Renovations': {
      before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      title: 'Full Period Townhouse Restoration',
      desc: 'Complete strip-back, structural beam installation, electrical rewiring, and bespoke oak interior finish.'
    },
    'Extensions': {
      before: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      title: 'Rear Glass Pavilion Extension',
      desc: 'Knock-through load-bearing brick wall replaced with 450mm RSJ gantry beam and structural glass lanterns.'
    },
    'Kitchens': {
      before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      title: 'Open-Plan Culinary Kitchen',
      desc: 'Removing internal partition walls to build a luxury island kitchen with solid quartz worktops.'
    },
    'Bathrooms': {
      before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      title: 'Spa-Inspired Wetroom Suite',
      desc: 'Waterproof tanking membrane application with floor-to-ceiling Italian porcelain tiling.'
    },
    'Interiors': {
      before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      title: 'Minimalist Shadow-Gap Interior Overhaul',
      desc: 'Flush shadow-gap skirtings, hidden acoustic pocket doors, and micro-cement surfaces.'
    },
    'Exterior Improvements': {
      before: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&w=1200&q=80',
      title: 'Architectural Grounds & Outdoor Terrace',
      desc: 'Terraced retaining masonry walls, 20mm exterior porcelain paving, and ACO channel drainage.'
    }
  };

  const current = showcaseData[activeCategory] || showcaseData['Home Renovations'];

  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Before & After Transformation Showcase"
        subtitle="Visual proof of structural craftsmanship across home renovations, extensions, kitchens, bathrooms, and exterior grounds."
        badge="Interactive Showcase"
        breadcrumbs={[{ label: 'Before & After' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
                activeCategory === cat
                  ? 'bg-[#0F172A] text-white border-[#0F172A]'
                  : 'bg-white text-slate-600 border-[#E2E8F0] hover:bg-[#F8FAFC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <BeforeAfterSlider
            beforeImage={current.before}
            afterImage={current.after}
            beforeLabel="Before Work Commenced"
            afterLabel="After Project Handover"
            title={current.title}
            subtitle={current.desc}
          />
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
