import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { CheckCircle2 } from 'lucide-react';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const ClientExperiencePage: React.FC<PageProps> = ({ onNavigate }) => {
  const timeline = [
    { step: '01. Enquiry', desc: 'Initial contact, scope outline, and preliminary feasibility advice.' },
    { step: '02. Consultation', desc: 'In-depth review of architectural goals, budget parameters, and site survey.' },
    { step: '03. Planning & Costing', desc: 'Structural engineer calculations, Building Control alignment, and itemised fixed quote.' },
    { step: '04. Contract Quote', desc: 'Formal JCT / FMB contract execution with staged milestone valuation schedule.' },
    { step: '05. Construction', desc: 'Active build execution with weekly photo progress reports and site manager updates.' },
    { step: '06. Quality Inspection', desc: 'Multi-point snag audit, pressure testing, EICR, and Building Control completion sign-off.' },
    { step: '07. Handover & Aftercare', desc: 'Final key handover, presentation of O&M manuals, and 12-month defects liability period.' }
  ];

  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Client Journey & Customer Experience"
        subtitle="Explaining the transparent, communicative step-by-step customer experience from initial enquiry through to aftercare."
        badge="Customer Experience"
        breadcrumbs={[{ label: 'Client Experience' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Client Timeline</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Enquiry to Aftercare Roadmap</h2>
        </div>

        <div className="space-y-4">
          {timeline.map((item, idx) => (
            <div key={idx} className="satx-card p-6 bg-white border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#0F172A] text-[#C59B27] font-bold text-sm shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#0F172A]">{item.step}</h3>
                  <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-[#C59B27] shrink-0 hidden sm:block" />
            </div>
          ))}
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
