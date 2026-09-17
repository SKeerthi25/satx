import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const DesignPlanningPage: React.FC<PageProps> = ({ onNavigate }) => {
  const sections = [
    { title: 'Initial Consultation', desc: 'Understanding architectural preferences, spatial layouts, and client aspirations.' },
    { title: 'Site Evaluation', desc: 'Assessing ground conditions, party wall boundaries, access, and utility connections.' },
    { title: 'Project Requirements', desc: 'Defining structural engineering specifications, material finishes, and heating networks.' },
    { title: 'Design Coordination', desc: 'Collaborating with architects to ensure drawings satisfy UK Building Control standards.' },
    { title: 'Material Selection', desc: 'Hand-selecting bricks, glazing systems, roofing slates, and interior joinery.' },
    { title: 'Planning Considerations', desc: 'Navigating Permitted Development rights or formal Local Planning Authority submissions.' },
    { title: 'Cost Planning', desc: 'Producing an un-ambiguous fixed-price quotation with itemised Bill of Quantities.' },
    { title: 'Construction Preparation', desc: 'Scheduling trade workforce, material call-offs, site welfare, and safety RAMS.' }
  ];

  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Design & Planning Phase"
        subtitle="Explaining how rigorous early planning, structural calculations, and cost engineering ensure seamless site execution."
        badge="Pre-Construction Strategy"
        breadcrumbs={[{ label: 'Design & Planning' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Pre-Construction Stages</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">8 Pre-Construction Planning Steps</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((sec, idx) => (
            <div key={idx} className="satx-card p-6 bg-white border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-extrabold text-[#C59B27] bg-[#0F172A] px-2.5 py-1 rounded">0{idx + 1}</span>
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
