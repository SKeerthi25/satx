import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { FAQAccordion } from '../components/FAQAccordion';
import { SafeImage } from '../components/SafeImage';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface DedicatedServicePageProps {
  onNavigate: (path: string) => void;
}

export const NewBuildsPage: React.FC<DedicatedServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="New Build Homes Construction"
        subtitle="Bespoke luxury domestic residential new builds engineered from site groundworks through to structural frame, glazier fitting, interior fit-out, and final handover."
        badge="Dedicated Service Page"
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'New Build Homes' }
        ]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
      />

      {/* OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] bg-[#F8FAFC] px-3 py-1 rounded-full border border-[#E2E8F0] inline-block">
              Turnkey Development
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              Bespoke New Build Residential Execution
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              SATX LTD manages complete domestic new build residential developments. Whether construct-only for private clients or full turnkey management alongside your architect, we oversee every technical phase with absolute precision.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 font-medium">NHBC & Building Regulations Standard Compliance</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 font-medium">Air-Source & Solar Zero Carbon Thermal Envelope Integration</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 font-medium">Transparent Milestone Valuations & Weekly Site Reports</p>
              </div>
            </div>
            <div className="pt-4">
              <button onClick={() => onNavigate('/quote')} className="satx-btn-accent text-xs">
                Request New Build Quotation <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-2xl h-[420px]">
              <SafeImage
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
                alt="New Build Contemporary Home"
                category="architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEW BUILD APPROACH PHASES */}
      <section className="bg-[#0F172A] text-white py-16 px-4 sm:px-8 border-y border-[#1E293B] space-y-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Systematic Execution</span>
            <h2 className="text-3xl font-extrabold text-white">Our New Build Technical Roadmap</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { num: '01', title: 'Planning & Survey', desc: 'Site soil testing, utility audits, and architectural drawing alignment.' },
              { num: '02', title: 'Groundworks', desc: 'Laser excavation, raft or pile foundations, and subterranean drainage.' },
              { num: '03', title: 'Structure', desc: 'Masonry brick cavity wall construction or structural steel framing.' },
              { num: '04', title: 'Roof & Shell', desc: 'Truss roof pitching, natural slate tiling, and weather-tight glazing.' },
              { num: '05', title: 'Interior Works', desc: 'First-fix electrical/plumbing, acoustic insulation, and multi-skim plastering.' },
              { num: '06', title: 'Handover', desc: 'Snag inspection, building control certification, and key handover pack.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-[#1E293B] p-5 rounded-xl border border-[#334155] space-y-2">
                <span className="text-xs font-extrabold text-[#C59B27]">{step.num}</span>
                <h4 className="font-bold text-sm text-white">{step.title}</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Questions</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">New Build FAQ</h2>
        </div>
        <FAQAccordion />
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
