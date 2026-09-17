import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { Leaf } from 'lucide-react';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const SustainabilityPage: React.FC<PageProps> = ({ onNavigate }) => {
  const ecoPillars = [
    { title: 'Sustainable Construction', desc: 'Designing high-performance thermal envelopes that reduce lifetime residential heating demand.' },
    { title: 'Energy Efficiency', desc: 'Integrating heat recovery ventilation (MVHR), triple glazing, and air-source heat pumps.' },
    { title: 'Responsible Materials', desc: 'Prioritizing FSC-certified structural timbers, low-carbon concrete, and recycled aggregate.' },
    { title: 'Waste Reduction & Segregation', desc: 'Enforcing strict site waste management plans with active timber, brick, and metal recycling.' },
    { title: 'Recycling Best Practices', desc: 'Crushing cleared masonry waste for sub-base reuse and donating excess usable timber.' },
    { title: 'Efficient Resource Use', desc: 'Water-efficient plumbing fixtures and low-energy LED site illumination.' },
    { title: 'Long-Term Building Performance', desc: 'Eliminating cold thermal bridges to prevent condensation and long-term fabric decay.' },
    { title: 'Sustainable Homes', desc: 'Creating comfortable, future-proofed domestic residences designed for low operational carbon.' }
  ];

  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Sustainable Building & Energy Performance"
        subtitle="Creating energy-efficient, low-carbon domestic residences designed for comfort and long-term environmental sustainability."
        badge="Eco-Construction"
        breadcrumbs={[{ label: 'Sustainability' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Eco-Building Principles</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Sustainable Residential Construction</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecoPillars.map((pillar, idx) => (
            <div key={idx} className="satx-card p-6 bg-white border border-[#E2E8F0] space-y-3">
              <div className="p-2.5 rounded-lg bg-[#0F172A] text-[#C59B27] w-fit">
                <Leaf className="w-5 h-5" />
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
