import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { FAQAccordion } from '../components/FAQAccordion';
import { SafeImage } from '../components/SafeImage';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface DedicatedServicePageProps {
  onNavigate: (path: string) => void;
}

export const LoftConversionsPage: React.FC<DedicatedServicePageProps> = ({ onNavigate }) => {
  const loftTypes = [
    { title: 'Dormer Loft Conversions', desc: 'Box-shaped roof extensions providing maximum vertical headroom and usable floor area.' },
    { title: 'Mansard Loft Conversions', desc: 'Altering roof slope angle to 72 degrees for period properties in conservation areas.' },
    { title: 'Velux Rooflight Conversions', desc: 'Minimal external changes with high-performance Velux windows for fast delivery.' },
    { title: 'Hip-to-Gable Conversions', desc: 'Extending side sloping roof hips to vertical gable walls for semi-detached houses.' }
  ];

  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Loft Conversions & Attic Living Suites"
        subtitle="Unlocking unused roof voids into executive master penthouse suites, home offices, and luxury ensuite bathrooms."
        badge="Attic Conversions"
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Loft Conversions' }
        ]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] bg-[#F8FAFC] px-3 py-1 rounded-full border border-[#E2E8F0] inline-block">
              Top Floor Penthouse Living
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              Maximise Space Above Your Head
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Converting your loft is one of the highest value-add domestic investments. SATX LTD manages steel ridge beam installation, floor joist reinforcement, roof slating, dormer cheeks, insulation, plumbing, and bespoke staircase fitting.
            </p>
            <div className="pt-2">
              <button onClick={() => onNavigate('/quote')} className="satx-btn-accent text-xs">
                Get Loft Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-2xl h-[400px]">
              <SafeImage
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Master Loft Bedroom"
                category="interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 px-4 sm:px-8 border-y border-[#E2E8F0] space-y-10">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Loft Options</span>
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Types of Loft Conversion</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loftTypes.map((type, idx) => (
              <div key={idx} className="satx-card p-6 bg-white border border-[#E2E8F0] space-y-3">
                <div className="p-2.5 rounded-lg bg-[#0F172A] text-[#C59B27] w-fit">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#0F172A]">{type.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Loft FAQ</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Attic Conversion Questions</h2>
        </div>
        <FAQAccordion />
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
