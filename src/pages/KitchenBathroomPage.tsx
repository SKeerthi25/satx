import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { SafeImage } from '../components/SafeImage';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface DedicatedServicePageProps {
  onNavigate: (path: string) => void;
}

export const KitchenBathroomPage: React.FC<DedicatedServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Kitchen & Bathroom Renovation"
        subtitle="Bespoke culinary sanctuaries and spa-inspired luxury bathroom wetrooms designed with precision joinery and tiling."
        badge="Luxury Interiors"
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Kitchen & Bathroom' }
        ]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80"
      />

      {/* KITCHEN SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] bg-[#F8FAFC] px-3 py-1 rounded-full border border-[#E2E8F0] inline-block">
              Culinary Craftsmanship
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              Bespoke Kitchen Design & Installation
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We install custom cabinetry, quartz and stone countertops, integrated appliance banks, boiling water taps, and architectural LED lighting. Every kitchen is fitted with precision square alignments.
            </p>
            <div className="space-y-2 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C59B27]" /> Solid quartz & granite worktop template cutting</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C59B27]" /> Integrated gas, electric, and extractor ventilation</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C59B27]" /> Underfloor heating matrix installation</div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-2xl h-[400px]">
              <SafeImage
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Kitchen Renovation"
                category="interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BATHROOM SECTION */}
      <section className="bg-[#F8FAFC] py-16 px-4 sm:px-8 border-y border-[#E2E8F0] space-y-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-2xl h-[400px]">
              <SafeImage
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
                alt="Spa Bathroom Wetroom"
                category="interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] bg-white px-3 py-1 rounded-full border border-[#E2E8F0] inline-block">
              Spa Wetrooms
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              Luxury Bathroom & Wetroom Fitting
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Floor-to-ceiling porcelain tiling, walk-in frameless glass wetroom showers, concealed thermostatic valves, wall-hung sanitaryware, and waterproof tanking membranes.
            </p>
            <div className="pt-2">
              <button onClick={() => onNavigate('/quote')} className="satx-btn-accent text-xs">
                Request Kitchen & Bathroom Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
