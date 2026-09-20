import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { CompanyProfileModal } from '../components/CompanyProfileModal';
import { CTASection } from '../components/CTASection';
import { Download } from 'lucide-react';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const CompanyProfilePage: React.FC<PageProps> = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Downloadable Company Profile"
        subtitle="An executive summary of SATX LTD domestic building operations, structural capabilities, quality commitments, and safety records."
        badge="Executive Dossier"
        breadcrumbs={[{ label: 'Company Profile' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xl p-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#F1F5F9] pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">SATX LTD Dossier</span>
              <h2 className="text-2xl font-bold text-[#0F172A]">Domestic Building Company Profile</h2>
              <p className="text-xs text-slate-500 mt-1">Official Document • Updated 2026 Edition</p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="satx-btn-accent text-xs py-3 px-6 shrink-0"
            >
              <Download className="w-4 h-4" /> Download Profile (PDF/TXT)
            </button>
          </div>

          <div className="space-y-6 text-xs text-slate-700 leading-relaxed">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-[#0F172A]">1. Company Introduction</h3>
              <p>
                SATX LTD is a domestic building main contractor specializing in high-end residential construction. We provide complete turnkey project management for new builds, structural extensions, period renovations, and luxury refurbishments.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-[#0F172A]">2. Services & Expertise</h3>
              <p>
                Our core operational divisions include groundworks, structural steelwork, facing brickwork, slate roofing, insulation retrofitting, micro-cement tiling, bespoke interior joinery, and Building Control inspection sign-offs.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-[#0F172A]">3. Construction Approach & Quality Assurance</h3>
              <p>
                Every project operates under a strict 8-stage methodology. We conduct multi-stage snagging checks, electrical safety testing (EICR), pressure testing, and coordinate directly with local authority Building Control.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-[#0F172A]">4. Health & Safety Protocol</h3>
              <p>
                We enforce mandatory site RAMS risk assessments, secure perimeter hoarding, daily tool-box safety briefings, and full PPE compliance across all active residential sites.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-[#0F172A]">5. Corporate Governance & Contact</h3>
              <p className="font-semibold text-[#0F172A]">
                Director: Sathishkumar Vijayakumar (Appointed: 14 September 2026 • Active)
              </p>
              <p className="font-medium text-slate-700">
                Registered Office: Flat 30 Webley Court, 3 Sten Close, Enfield, England, EN3 6WX | Email: satx@satxltd.com | Tel: 07796 729271
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#F1F5F9] flex justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="satx-btn-accent text-xs py-3.5 px-8 shadow-lg"
            >
              <Download className="w-4 h-4" /> Trigger Official Brochure Download
            </button>
          </div>
        </div>
      </section>

      <CompanyProfileModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
