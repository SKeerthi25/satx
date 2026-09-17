import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { SafeImage } from '../components/SafeImage';
import { Maximize2, ArrowRight } from 'lucide-react';

interface DedicatedServicePageProps {
  onNavigate: (path: string) => void;
}

export const HouseExtensionsPage: React.FC<DedicatedServicePageProps> = ({ onNavigate }) => {
  const extensionTypes = [
    { title: 'Rear Extensions', desc: 'Expand rear living spaces with structural glass bi-folds connecting directly to gardens.' },
    { title: 'Side Extensions', desc: 'Utilise side alley voids to create utility rooms, expanded kitchens, or side entrances.' },
    { title: 'Double-Storey Extensions', desc: 'Add ground floor living area and upper-level bedroom ensuite master suites.' },
    { title: 'Single-Storey Extensions', desc: 'Cost-effective open-plan kitchen and dining spaces under Permitted Development.' },
    { title: 'Kitchen Extensions', desc: 'Bespoke culinary spaces featuring central islands, roof lanterns, and underfloor heating.' },
    { title: 'Living-Space Extensions', desc: 'Architectural garden pavilions, home offices, or family sunrooms.' }
  ];

  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="House Extensions & Structural Additions"
        subtitle="Seamless rear, side, and double-storey home extensions designed to maximize usable living space while maintaining architectural character."
        badge="Extension Specialists"
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'House Extensions' }
        ]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
      />

      {/* OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] bg-[#F8FAFC] px-3 py-1 rounded-full border border-[#E2E8F0] inline-block">
              Space Optimization
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              Transforming Domestic Layouts with Structural Precision
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Extending your property is one of the most effective ways to gain extra square footage without the hassle of moving. SATX LTD specializes in structural steel knock-throughs, glass roof lanterns, brick matching, and seamless interior transitions.
            </p>
            <div className="pt-2">
              <button onClick={() => onNavigate('/quote')} className="satx-btn-accent text-xs">
                Request Extension Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-2xl h-[400px]">
              <SafeImage
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Glass Rear House Extension"
                category="architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXTENSION TYPES GRID */}
      <section className="bg-[#F8FAFC] py-16 px-4 sm:px-8 border-y border-[#E2E8F0] space-y-10">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Types of Extensions</span>
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Tailored Extension Categories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extensionTypes.map((ext, idx) => (
              <div key={idx} className="satx-card p-6 bg-white border border-[#E2E8F0] space-y-3">
                <div className="p-2.5 rounded-lg bg-[#0F172A] text-[#C59B27] w-fit">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0F172A]">{ext.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{ext.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER TRANSFORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Transformation</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Rear Extension Before & After</h2>
        </div>
        <BeforeAfterSlider
          beforeImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
          afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
          beforeLabel="Original Narrow Rear Ground Floor"
          afterLabel="Expanded Open-Plan Pavilion"
        />
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
