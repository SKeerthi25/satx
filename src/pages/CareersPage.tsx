import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import type { JobListing } from '../data/careersData';
import { CAREER_LISTINGS } from '../data/careersData';
import { CTASection } from '../components/CTASection';
import { MapPin, Clock, CheckCircle2, Send } from 'lucide-react';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const CareersPage: React.FC<PageProps> = ({ onNavigate }) => {
  const [selectedRole, setSelectedRole] = useState<JobListing | null>(null);
  const [applied, setApplied] = useState(false);

  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Careers at SATX LTD"
        subtitle="Join an established domestic residential construction company committed to quality craftsmanship, professional safety, and career growth."
        badge="Join Our Team"
        breadcrumbs={[{ label: 'Careers' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80"
      />

      {/* WORKING ENVIRONMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Work Culture</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Our Working Environment</h2>
          <p className="text-xs text-slate-600">We foster a supportive, professional environment where site managers, quantity surveyors, and skilled tradespeople thrive.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="satx-card p-6 bg-white border border-[#E2E8F0] space-y-2">
            <h3 className="font-bold text-base text-[#0F172A]">Professional Growth</h3>
            <p className="text-xs text-slate-600 leading-relaxed">Ongoing NVQ, SMSTS, and trade training sponsorship to advance your construction career.</p>
          </div>
          <div className="satx-card p-6 bg-white border border-[#E2E8F0] space-y-2">
            <h3 className="font-bold text-base text-[#0F172A]">Safety & Respect</h3>
            <p className="text-xs text-slate-600 leading-relaxed">Top-tier site welfare facilities, high-quality tools, and strict RAMS health & safety standards.</p>
          </div>
          <div className="satx-card p-6 bg-white border border-[#E2E8F0] space-y-2">
            <h3 className="font-bold text-base text-[#0F172A]">Competitive Package</h3>
            <p className="text-xs text-slate-600 leading-relaxed">Market-leading rates, performance bonuses, company vehicles for site managers, and pension plans.</p>
          </div>
        </div>
      </section>

      {/* CURRENT OPPORTUNITIES */}
      <section className="bg-[#F8FAFC] py-16 px-4 sm:px-8 border-y border-[#E2E8F0] space-y-10">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Open Vacancies</span>
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Current Construction Roles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAREER_LISTINGS.map((job) => (
              <div key={job.id} className="satx-card p-6 bg-white border border-[#E2E8F0] flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59B27] bg-[#F8FAFC] px-2.5 py-1 rounded border border-[#E2E8F0]">
                    {job.department}
                  </span>
                  <h3 className="font-bold text-lg text-[#0F172A]">{job.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#C59B27]" /> {job.location}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" /> {job.type}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{job.summary}</p>
                </div>

                <button
                  onClick={() => setSelectedRole(job)}
                  className="satx-btn-primary text-xs w-full py-2.5"
                >
                  View Role & Apply →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION MODAL */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => { setSelectedRole(null); setApplied(false); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#0F172A]"
            >
              ✕
            </button>

            {applied ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A]">Application Submitted</h3>
                <p className="text-xs text-slate-600">Thank you for applying for {selectedRole.title}. Our recruitment team will review your CV.</p>
                <button
                  onClick={() => { setSelectedRole(null); setApplied(false); }}
                  className="satx-btn-secondary text-xs"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59B27]">{selectedRole.department}</span>
                <h3 className="text-xl font-bold text-[#0F172A]">{selectedRole.title}</h3>
                
                <div className="space-y-2 pt-2 border-t border-[#F1F5F9]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Responsibilities:</h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {selectedRole.responsibilities.map((res, i) => (
                      <li key={i} className="flex items-center gap-2">• <span>{res}</span></li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#F1F5F9]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Requirements:</h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {selectedRole.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2">• <span>{req}</span></li>
                    ))}
                  </ul>
                </div>

                {/* Application Form Inputs */}
                <form onSubmit={(e) => { e.preventDefault(); setApplied(true); }} className="space-y-3 pt-4 border-t border-[#E2E8F0]">
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" required placeholder="Full Name" className="p-2.5 border rounded-lg text-xs" />
                    <input type="email" required placeholder="Email Address" className="p-2.5 border rounded-lg text-xs" />
                  </div>
                  <input type="tel" required placeholder="Phone Number" className="w-full p-2.5 border rounded-lg text-xs" />
                  <textarea rows={3} placeholder="Brief summary of relevant construction experience..." className="w-full p-2.5 border rounded-lg text-xs" />
                  <button type="submit" className="satx-btn-accent text-xs w-full py-2.5">
                    Submit Application <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
