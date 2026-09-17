import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { MATERIAL_CATEGORIES } from '../data/materialsData';
import { CTASection } from '../components/CTASection';
import { SafeImage } from '../components/SafeImage';
import { CheckCircle2 } from 'lucide-react';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const MaterialsPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Materials & Workmanship Quality"
        subtitle="Exploring the certified structural materials, timber, brickwork, glazing, and finishing craftsmanship behind every SATX build."
        badge="Material Excellence"
        breadcrumbs={[{ label: 'Materials & Workmanship' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">High-Grade Specification</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">8 Material Categories & Quality Standards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MATERIAL_CATEGORIES.map((mat) => (
            <div key={mat.id} className="satx-card p-6 bg-white border border-[#E2E8F0] space-y-4">
              <div className="relative h-48 rounded-xl overflow-hidden bg-[#0F172A]">
                <SafeImage
                  src={mat.image}
                  alt={mat.title}
                  category="construction"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#0F172A]/85 backdrop-blur-md text-[#C59B27] text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider border border-[#C59B27]/30">
                  {mat.category}
                </span>
              </div>

              <h3 className="font-bold text-lg text-[#0F172A]">{mat.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{mat.description}</p>

              <div className="space-y-2 pt-2 border-t border-[#F1F5F9]">
                <span className="text-[11px] font-bold uppercase text-slate-400 block">Standards & Properties:</span>
                <ul className="space-y-1 text-xs text-slate-700">
                  {mat.standards.map((std, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                      <span>{std}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
