import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { SafeImage } from '../components/SafeImage';
import { ArrowRight } from 'lucide-react';

interface DedicatedServicePageProps {
  onNavigate: (path: string) => void;
}

export const PropertyRefurbishmentPage: React.FC<DedicatedServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Property Refurbishment & Modernisation"
        subtitle="Complete cosmetic and structural property overhauls, energy efficiency retrofits, and landlord turnarounds."
        badge="Property Refurbishment"
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Property Refurbishment' }
        ]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] bg-[#F8FAFC] px-3 py-1 rounded-full border border-[#E2E8F0] inline-block">
              Turnaround Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              Comprehensive Property Modernisation
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              SATX LTD restores and modernises residential property portfolios. From damp-proofing to structural timber repairs, central heating replacements, double glazing, and fresh interior joinery.
            </p>
            <div className="pt-2">
              <button onClick={() => onNavigate('/quote')} className="satx-btn-accent text-xs">
                Request Refurbishment Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-2xl h-[400px]">
              <SafeImage
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Refurbished Domestic Property"
                category="renovation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
