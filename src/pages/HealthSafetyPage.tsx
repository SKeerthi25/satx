import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { HardHat } from 'lucide-react';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const HealthSafetyPage: React.FC<PageProps> = ({ onNavigate }) => {
  const safetySections = [
    { title: 'Safety First Culture', desc: 'Prioritising workforce, client, and public safety across all active construction sites.' },
    { title: 'Site Safety Standards', desc: 'Secure site hoarding, scaffolding inspections, and controlled access perimeters.' },
    { title: 'Risk Management (RAMS)', desc: 'Conducting thorough Risk Assessments and Method Statements prior to high-risk works.' },
    { title: 'Safe Working Practices', desc: 'Enforcing safe propping procedures, manual handling guidelines, and tool safety.' },
    { title: 'Protective Equipment (PPE)', desc: 'Mandatory high-visibility clothing, safety helmets, steel-toe boots, and eye protection.' },
    { title: 'Site Organisation', desc: 'Maintaining clean, debris-free walkways, organized material storage, and welfare facilities.' },
    { title: 'Quality & Safety Audits', desc: 'Regular site safety walkthroughs by Senior Site Managers to audit working protocols.' },
    { title: 'Employee Awareness', desc: 'Daily morning site briefings and safety induction training for all trade operatives.' }
  ];

  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Health & Safety Management"
        subtitle="Our commitment to maintaining secure, organized, and compliant domestic building sites across all construction phases."
        badge="Site Welfare & Safety"
        breadcrumbs={[{ label: 'Health & Safety' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Safety Protocols</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Core Site Safety Commitment</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetySections.map((sec, idx) => (
            <div key={idx} className="satx-card p-6 bg-white border border-[#E2E8F0] space-y-3">
              <div className="p-2.5 rounded-lg bg-[#0F172A] text-[#C59B27] w-fit">
                <HardHat className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#0F172A]">{sec.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{sec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
