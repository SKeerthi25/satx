import React from 'react';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  onNavigate: (path: string) => void;
  title?: string;
  subtitle?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onNavigate,
  title = "Ready to Discuss Your Domestic Building Project?",
  subtitle = "Contact SATX LTD today to request a transparent consultation and fixed-price quotation for your new build, extension, or full home renovation."
}) => {
  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-16 px-4 sm:px-8 border-y border-[#1E293B] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C59B27]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#1E293B] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] bg-[#1E293B] px-3 py-1 rounded-full border border-[#334155] inline-block">
            Dependable Project Delivery
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            {title}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
              <span>Transparent Itemised Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
              <span>Dedicated Site Manager Supervision</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
              <span>Full Building Control Sign-Off</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
          <button
            onClick={() => onNavigate('/quote')}
            className="satx-btn-accent text-sm py-3.5 px-6 w-full shadow-xl"
          >
            Get a Quote (7-Step Wizard) <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => onNavigate('/contact')}
            className="satx-btn-secondary text-sm py-3.5 px-6 w-full bg-white/10 hover:bg-white/20 text-white border-white/20"
          >
            <Phone className="w-4 h-4 text-[#C59B27]" />
            <span>Speak With Our Team</span>
          </button>
        </div>
      </div>
    </section>
  );
};
