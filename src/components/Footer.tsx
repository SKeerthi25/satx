import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, FileText, Sparkles } from 'lucide-react';
import { SATXLogo } from './SATXLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0C4A6E] text-white pt-16 pb-8 border-t border-[#0284C7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Footer Banner */}
        <div className="bg-gradient-to-r from-[#0284C7] via-[#0369A1] to-[#0C4A6E] rounded-2xl p-6 sm:p-8 mb-16 border border-[#38BDF8]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#BAE6FD] bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" /> Start Your Domestic Construction Project
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Ready to discuss your building or renovation plans?</h3>
            <p className="text-xs sm:text-sm text-slate-100">Request a transparent, itemised quote from our professional construction team today.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto relative z-10">
            <button
              onClick={() => onNavigate('/quote')}
              className="px-6 py-3 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-bold text-xs sm:text-sm rounded-lg shadow-lg transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              Get a Quote (7-Step Wizard) <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-6 py-3 bg-white/10 text-white hover:bg-white/20 border border-white/30 font-semibold text-xs sm:text-sm rounded-lg transition-colors w-full sm:w-auto text-center"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* 5-Column Corporate Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: SATX Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div onClick={() => onNavigate('/')}>
              <SATXLogo variant="full" theme="dark" />
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              Delivering professional domestic building and residential construction solutions with an unwavering focus on quality, craftsmanship, and dependable project delivery.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <span>Registered Company (Domestic Building Construction)</span>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#BAE6FD]">Company</h4>
            <ul className="space-y-2 text-xs text-slate-200">
              <li><button onClick={() => onNavigate('/about')} className="hover:text-[#38BDF8] transition-colors">About SATX LTD</button></li>
              <li><button onClick={() => onNavigate('/why-satx')} className="hover:text-[#38BDF8] transition-colors">Why Choose Us</button></li>
              <li><button onClick={() => onNavigate('/process')} className="hover:text-[#38BDF8] transition-colors">Our Construction Process</button></li>
              <li><button onClick={() => onNavigate('/quality')} className="hover:text-[#38BDF8] transition-colors">Quality Commitment</button></li>
              <li><button onClick={() => onNavigate('/health-safety')} className="hover:text-[#38BDF8] transition-colors">Health & Safety</button></li>
              <li><button onClick={() => onNavigate('/sustainability')} className="hover:text-[#38BDF8] transition-colors">Sustainability</button></li>
              <li><button onClick={() => onNavigate('/careers')} className="hover:text-[#38BDF8] transition-colors">Careers</button></li>
              <li><button onClick={() => onNavigate('/news')} className="hover:text-[#38BDF8] transition-colors">News & Insights</button></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#BAE6FD]">Services</h4>
            <ul className="space-y-2 text-xs text-slate-200">
              <li><button onClick={() => onNavigate('/services/new-builds')} className="hover:text-[#38BDF8] transition-colors">New Build Homes</button></li>
              <li><button onClick={() => onNavigate('/services/residential-construction')} className="hover:text-[#38BDF8] transition-colors">Residential Construction</button></li>
              <li><button onClick={() => onNavigate('/services/house-extensions')} className="hover:text-[#38BDF8] transition-colors">House Extensions</button></li>
              <li><button onClick={() => onNavigate('/services/home-renovations')} className="hover:text-[#38BDF8] transition-colors">Home Renovations</button></li>
              <li><button onClick={() => onNavigate('/services/loft-conversions')} className="hover:text-[#38BDF8] transition-colors">Loft Conversions</button></li>
              <li><button onClick={() => onNavigate('/services/property-refurbishment')} className="hover:text-[#38BDF8] transition-colors">Property Refurbishment</button></li>
              <li><button onClick={() => onNavigate('/services/kitchen-bathroom')} className="hover:text-[#38BDF8] transition-colors">Kitchen & Bathroom</button></li>
              <li><button onClick={() => onNavigate('/materials')} className="hover:text-[#38BDF8] transition-colors">Materials & Workmanship</button></li>
            </ul>
          </div>

          {/* Col 4: Projects */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#BAE6FD]">Projects</h4>
            <ul className="space-y-2 text-xs text-slate-200">
              <li><button onClick={() => onNavigate('/projects')} className="hover:text-[#38BDF8] transition-colors">Featured Projects</button></li>
              <li><button onClick={() => onNavigate('/projects')} className="hover:text-[#38BDF8] transition-colors">New Build Portfolio</button></li>
              <li><button onClick={() => onNavigate('/projects')} className="hover:text-[#38BDF8] transition-colors">Extensions Showcase</button></li>
              <li><button onClick={() => onNavigate('/before-after')} className="hover:text-[#38BDF8] transition-colors">Before & After Showcase</button></li>
              <li><button onClick={() => onNavigate('/client-experience')} className="hover:text-[#38BDF8] transition-colors">Client Experience</button></li>
              <li><button onClick={() => onNavigate('/testimonials')} className="hover:text-[#38BDF8] transition-colors">Client Testimonials</button></li>
              <li><button onClick={() => onNavigate('/faq')} className="hover:text-[#38BDF8] transition-colors">Frequently Asked Questions</button></li>
            </ul>
          </div>

          {/* Col 5: Contact Official Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#BAE6FD]">Head Office Contact</h4>
            <div className="space-y-3 text-xs text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span className="leading-relaxed">Flat 30 Webley Court, 3 Sten Close, Enfield, England, EN3 6WX</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href="mailto:satx@satxltd.com" className="hover:text-[#38BDF8] transition-colors font-semibold">satx@satxltd.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>[PHONE NUMBER PLACEHOLDER]</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/company-profile')}
                  className="flex items-center gap-1.5 text-xs text-[#38BDF8] font-semibold hover:underline"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Download Company Profile (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© 2026 SATX LTD. All rights reserved. Construction of Domestic Buildings.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('/privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('/terms')} className="hover:text-white transition-colors">Terms & Conditions</button>
            <button onClick={() => onNavigate('/cookies')} className="hover:text-white transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
