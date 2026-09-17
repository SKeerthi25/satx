import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { CheckCircle2, ShieldCheck, Award, Users, HardHat, FileCheck, PhoneCall, Layers, Sparkles, Clock } from 'lucide-react';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const WhySatxPage: React.FC<PageProps> = ({ onNavigate }) => {
  const differentiators = [
    { title: 'Quality Workmanship', desc: 'Precision masonry, structural steel framing, and immaculate interior joinery.', icon: Award },
    { title: 'Professional Approach', desc: 'Methodical project governance, transparent contract terms, and clean site management.', icon: ShieldCheck },
    { title: 'Clear Communication', desc: 'Direct access to your dedicated Senior Site Manager with weekly progress updates.', icon: PhoneCall },
    { title: 'Attention to Detail', desc: 'Flawless line alignments, shadow gaps, thermal insulation continuity, and finish quality.', icon: Sparkles },
    { title: 'Reliable Project Management', desc: 'Gantt schedule tracking to keep your build on timeline and within agreed valuations.', icon: Clock },
    { title: 'Customer-Focused Service', desc: 'Respectful site teams preserving client privacy and minimizing domestic disruption.', icon: Users },
    { title: 'Quality Certified Materials', desc: 'Sourcing certified timber, steel, bricks, and glass adhering to British Standards.', icon: Layers },
    { title: 'Structured 8-Stage Process', desc: 'A transparent roadmap from initial consultation through to final Building Control sign-off.', icon: FileCheck },
    { title: 'Safety-Conscious Working', desc: 'Strict RAMS safety compliance, PPE enforcement, and secure site hoarding.', icon: HardHat },
    { title: 'Professional Handover Pack', desc: 'Delivering complete O&M manuals, warranty documentation, and 12-month aftercare support.', icon: CheckCircle2 }
  ];

  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Why Choose SATX LTD"
        subtitle="10 core reasons domestic homeowners and property developers choose SATX LTD for residential construction."
        badge="Corporate Integrity"
        breadcrumbs={[{ label: 'Why SATX LTD' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">10 Core Differentiators</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Why Clients Trust SATX LTD</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentiators.map((diff, idx) => {
            const IconComponent = diff.icon;
            return (
              <div key={idx} className="satx-card p-6 bg-white border border-[#E2E8F0] space-y-3">
                <div className="p-2.5 rounded-lg bg-[#0F172A] text-[#C59B27] w-fit">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#0F172A]">{diff.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{diff.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
