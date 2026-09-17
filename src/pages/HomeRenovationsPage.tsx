import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { SafeImage } from '../components/SafeImage';
import { ArrowRight } from 'lucide-react';

interface DedicatedServicePageProps {
  onNavigate: (path: string) => void;
}

export const HomeRenovationsPage: React.FC<DedicatedServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Full Home Renovations & Modernisation"
        subtitle="Transforming historic, period, or aging domestic properties into high-performance contemporary living environments."
        badge="Renovation Excellence"
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Home Renovations' }
        ]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] bg-[#F8FAFC] px-3 py-1 rounded-full border border-[#E2E8F0] inline-block">
              Structural Overhauls
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              Complete Interior & Structural Renovation
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              From strip-back restoration to structural wall knock-throughs, rewiring, heating retrofits, and micro-cement wetrooms. SATX LTD manages complex domestic renovations with precision craftsmanship.
            </p>
            <div className="pt-2">
              <button onClick={() => onNavigate('/quote')} className="satx-btn-accent text-xs">
                Request Renovation Estimate <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-2xl h-[400px]">
              <SafeImage
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Renovated Townhouse Interior"
                category="renovation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Renovation Results</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Renovation Before & After</h2>
        </div>
        <BeforeAfterSlider
          beforeImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
          afterImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
          beforeLabel="Prior to Strip-Back & Steel Install"
          afterLabel="Fully Renovated Modern Interior"
        />
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
