import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, ShieldCheck, X } from 'lucide-react';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate simulated PDF download text blob
    const content = `=====================================================
SATX LTD - CORPORATE COMPANY PROFILE (DOMESTIC BUILDING)
=====================================================
Business Type: Construction of Domestic Buildings
Corporate Status: Registered Main Contractor

OVERVIEW:
SATX LTD delivers professional domestic building and residential construction solutions with a focus on quality, craftsmanship and dependable project delivery.

CORE EXPERTISE:
1. New Build Homes
2. Residential Extensions
3. Complete Home Renovations
4. Loft Conversions & Roof Works
5. Property Refurbishment
6. Kitchen & Bathroom Fit-outs

QUALITY & SAFETY:
- Site safety compliance protocols
- Comprehensive Building Regulations management
- 10-Year Structural Defect Insurance options

CONTACT INFORMATION:
Address: Flat 30 Webley Court, 3 Sten Close, Enfield, England, EN3 6WX
Email: satx@satxltd.com
Phone: [PHONE NUMBER PLACEHOLDER]
© 2026 SATX LTD. All rights reserved.
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SATX_LTD_Company_Profile.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#0F172A] rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-[#0284C7] text-white shadow-md">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0284C7]">Corporate Dossier</span>
            <h3 className="text-xl font-bold text-[#0F172A]">SATX LTD Company Profile</h3>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          Download our comprehensive corporate brochure outlining company background, construction philosophy, quality assurances, completed project case studies, and safety standards.
        </p>

        <div className="p-4 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD] space-y-2 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
            <span>Turnkey Domestic Building Capability</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
            <span>8-Stage Quality Inspection Framework</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
            <span>Health & Safety Compliance Summary</span>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between">
          <div className="flex items-center gap-1 text-[11px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official Corporate Document</span>
          </div>

          <button
            onClick={handleDownload}
            className="satx-btn-accent text-xs py-2.5 px-5 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>{downloaded ? 'Downloaded Again' : 'Download Brochure'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
