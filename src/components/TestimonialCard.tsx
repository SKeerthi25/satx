import React from 'react';
import type { TestimonialItem } from '../data/testimonialsData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="satx-card p-6 sm:p-8 flex flex-col justify-between h-full border border-[#E2E8F0] relative bg-white">
      <Quote className="w-10 h-10 text-[#C59B27]/20 absolute top-6 right-6" />

      <div className="space-y-4 relative z-10">
        <div className="flex items-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#C59B27] text-[#C59B27]" />
          ))}
        </div>

        <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
          "{testimonial.review}"
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-[#F1F5F9] flex items-center justify-between">
        <div>
          <h4 className="font-bold text-sm text-[#0F172A]">{testimonial.name}</h4>
          <p className="text-xs text-slate-500">{testimonial.projectType} • {testimonial.location}</p>
        </div>
        {testimonial.verified && (
          <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <CheckCircle2 className="w-3 h-3" /> Verified Client
          </span>
        )}
      </div>
    </div>
  );
};
