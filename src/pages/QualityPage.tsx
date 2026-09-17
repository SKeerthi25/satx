import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { ShieldCheck } from 'lucide-react';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const QualityPage: React.FC<PageProps> = ({ onNavigate }) => {
  const qualityPillars = [
    { title: 'Our Quality Philosophy', desc: 'Zero compromise on structural integrity, material grade, or finish tolerances.' },
    { title: 'Skilled Workmanship', desc: 'Employing qualified tradesmen with proven experience in period and modern construction.' },
    { title: 'Material Selection', desc: 'Sourcing certified materials adhering strictly to British & European (BS/EN) standards.' },
    { title: 'Construction Standards', desc: 'Executing work in full alignment with UK Building Regulations Approved Documents.' },
    { title: 'Quality Checks', desc: 'Multi-stage quality hold-points before plasterboard closing or concrete pouring.' },
    { title: 'Site Inspections', desc: 'Daily supervision by Senior Site Managers and independent Building Control visits.' },
    { title: 'Attention to Detail', desc: 'Flawless brick alignment, mirror-smooth plastering, and precise joinery scribe fits.' },
    { title: 'Client Handover', desc: 'Conducting exhaustive snagging audits and presenting full O&M warranty documentation.' }
  ];

  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Quality Commitment & Standards"
        subtitle="Discover how SATX LTD enforces quality control at every phase of domestic building and residential construction."
        badge="Quality Assurance"
        breadcrumbs={[{ label: 'Quality' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Uncompromising Quality</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">8 Pillars of SATX Quality Control</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityPillars.map((pillar, idx) => (
            <div key={idx} className="satx-card p-6 bg-white border border-[#E2E8F0] space-y-3">
              <div className="p-2.5 rounded-lg bg-[#0F172A] text-[#C59B27] w-fit">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#0F172A]">{pillar.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
