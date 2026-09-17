import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { SafeImage } from '../components/SafeImage';
import { ShieldCheck, Target, Eye, Heart, Award, CheckCircle2, UserCheck, Layers } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="About SATX LTD"
        subtitle="A professional domestic building and residential construction company dedicated to quality, precision, and reliable project delivery."
        badge="Who We Are"
        breadcrumbs={[{ label: 'About SATX LTD' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80"
      />

      {/* WHO WE ARE & OUR STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] bg-[#F8FAFC] px-3 py-1 rounded-full border border-[#E2E8F0] inline-block">
                Our Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
                Built on Craftsmanship, Integrity and Structural Quality
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              SATX LTD was established to elevate the standard of domestic building and residential construction. We operate as a full-service main contractor specializing in high-end new builds, structural extensions, period restorations, and luxury home refurbishments.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Rather than relying on basic template construction, we approach every domestic building project with an architectural mindset. Our teams combine traditional masonry and joinery craftsmanship with modern building technology, high-performance thermal insulation, and strict Building Regulations compliance.
            </p>

            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2 font-bold text-[#0F172A]">
                <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
                <span>Our Core Operating Principle:</span>
              </div>
              <p className="italic">
                "Deliver every domestic building project with unyielding structural integrity, transparent cost accounting, and exceptional finish quality."
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-2xl h-[480px] bg-[#0F172A]">
              <SafeImage
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="SATX LTD Architecture & Residential Construction"
                category="architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <section className="bg-[#0F172A] text-white py-16 px-4 sm:px-8 border-y border-[#1E293B]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Strategic Foundations</span>
            <h2 className="text-3xl font-extrabold text-white">Our Mission, Vision & Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1E293B] p-8 rounded-2xl border border-[#334155] space-y-4">
              <div className="p-3 rounded-xl bg-[#0F172A] text-[#C59B27] w-fit border border-[#C59B27]/30">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                To construct exceptional domestic residences and home improvements through dependable project management, skilled tradesmanship, and transparent communication with clients.
              </p>
            </div>

            <div className="bg-[#1E293B] p-8 rounded-2xl border border-[#334155] space-y-4">
              <div className="p-3 rounded-xl bg-[#0F172A] text-[#C59B27] w-fit border border-[#C59B27]/30">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Vision</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                To be recognised as the benchmark residential construction company—setting industry standards for build quality, site safety, thermal efficiency, and customer satisfaction.
              </p>
            </div>

            <div className="bg-[#1E293B] p-8 rounded-2xl border border-[#334155] space-y-4">
              <div className="p-3 rounded-xl bg-[#0F172A] text-[#C59B27] w-fit border border-[#C59B27]/30">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Values</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Precision, honesty, accountability, and safety. We treat every domestic client property with respect, maintaining clean and organized site operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSTRUCTION PHILOSOPHY & APPROACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Methodology</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Our Construction Philosophy & Approach</h2>
          <p className="text-xs text-slate-600">Editorial overview of how we control build quality from groundworks to interior handover.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="satx-card p-8 space-y-4 bg-white border border-[#E2E8F0]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#0F172A] text-[#C59B27]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A]">Quality Commitment</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Quality is engineered into our builds from day one. We enforce rigorous checking procedures during excavation, steel fixing, bricklaying, electrical first-fix, and plastering. We do not cut corners or use sub-standard materials.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C59B27]" /> Multi-stage independent building control sign-offs</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C59B27]" /> Certified British/European standard materials</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C59B27]" /> Snag-free comprehensive completion inspections</li>
            </ul>
          </div>

          <div className="satx-card p-8 space-y-4 bg-white border border-[#E2E8F0]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#0F172A] text-[#C59B27]">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A]">Customer Commitment</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              We understand that domestic construction work can be disruptive. Our dedicated site management structure ensures transparent weekly reporting, clear milestone schedules, and courteous site personnel.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C59B27]" /> Direct line of contact with Senior Site Manager</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C59B27]" /> Weekly written progress logs & schedule updates</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C59B27]" /> 12-Month dedicated aftercare warranty period</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL TEAM PLACEHOLDERS */}
      <section className="bg-[#F8FAFC] py-16 px-4 sm:px-8 border-y border-[#E2E8F0] space-y-10">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Leadership & Site Team</span>
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Our Professional Team Structure</h2>
            <p className="text-xs text-slate-600">Experienced site managers, quantity surveyors, structural engineers, and master tradesmen.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: 'Managing Director', title: '[TEAM MEMBER PLACEHOLDER]', desc: 'Oversees company operations and client contracts.' },
              { role: 'Senior Site Manager', title: '[TEAM MEMBER PLACEHOLDER]', desc: 'Directs daily site operations & safety RAMS.' },
              { role: 'Lead Quantity Surveyor', title: '[TEAM MEMBER PLACEHOLDER]', desc: 'Manages cost estimations & material procurement.' },
              { role: 'Senior Site Foreman', title: '[TEAM MEMBER PLACEHOLDER]', desc: 'Supervises trade craftsmanship and quality control.' }
            ].map((member, idx) => (
              <div key={idx} className="satx-card p-6 bg-white border border-[#E2E8F0] text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#0F172A] text-[#C59B27] mx-auto flex items-center justify-center font-bold text-xl border border-[#C59B27]/30">
                  <Layers className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59B27]">{member.role}</span>
                  <h4 className="font-bold text-sm text-[#0F172A] mt-0.5">{member.title}</h4>
                </div>
                <p className="text-xs text-slate-500">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
