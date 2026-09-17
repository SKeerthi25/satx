import React, { useState } from 'react';
import { X, ChevronDown, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/servicesData';
import { SATXLogo } from './SATXLogo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  if (!isOpen) return null;

  const handleNav = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white animate-in slide-in-from-right duration-300">
      {/* Top Mobile Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0]">
        <div onClick={() => handleNav('/')}>
          <SATXLogo variant="full" theme="light" />
        </div>
        <button
          onClick={onClose}
          aria-label="Close mobile navigation menu"
          className="p-2 rounded-lg text-slate-600 hover:text-[#0F172A] hover:bg-[#F0F9FF] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links Scrollable Container */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        <button
          onClick={() => handleNav('/')}
          className="w-full text-left py-2 text-base font-semibold text-[#0F172A] border-b border-[#F1F5F9]"
        >
          Home
        </button>

        <button
          onClick={() => handleNav('/about')}
          className="w-full text-left py-2 text-base font-semibold text-[#0F172A] border-b border-[#F1F5F9]"
        >
          About SATX LTD
        </button>

        {/* Services Accordion */}
        <div className="border-b border-[#F1F5F9] pb-2">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="w-full flex items-center justify-between py-2 text-base font-semibold text-[#0F172A]"
          >
            <span>Our Services</span>
            <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${servicesOpen ? 'rotate-180 text-[#0284C7]' : ''}`} />
          </button>

          {servicesOpen && (
            <div className="mt-2 pl-4 space-y-2 border-l-2 border-[#0284C7] py-2 bg-[#F0F9FF] rounded-r-lg">
              <button
                onClick={() => handleNav('/services')}
                className="block text-sm font-bold text-[#0284C7] py-1"
              >
                All 18 Services Overview →
              </button>
              {SERVICES_LIST.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleNav(service.path)}
                  className="block text-sm font-medium text-slate-600 hover:text-[#0284C7] py-1 w-full text-left"
                >
                  {service.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Projects Accordion */}
        <div className="border-b border-[#F1F5F9] pb-2">
          <button
            onClick={() => setProjectsOpen(!projectsOpen)}
            className="w-full flex items-center justify-between py-2 text-base font-semibold text-[#0F172A]"
          >
            <span>Projects Portfolio</span>
            <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${projectsOpen ? 'rotate-180 text-[#0284C7]' : ''}`} />
          </button>

          {projectsOpen && (
            <div className="mt-2 pl-4 space-y-2 border-l-2 border-[#0369A1] py-2 bg-[#F0F9FF] rounded-r-lg">
              <button
                onClick={() => handleNav('/projects')}
                className="block text-sm font-bold text-[#0F172A] py-1"
              >
                Browse All Projects →
              </button>
              <button onClick={() => handleNav('/before-after')} className="block text-sm text-slate-600 py-1">Before & After Transformations</button>
            </div>
          )}
        </div>

        <button onClick={() => handleNav('/process')} className="w-full text-left py-2 text-base font-semibold text-[#0F172A] border-b border-[#F1F5F9]">Our Process</button>
        <button onClick={() => handleNav('/why-satx')} className="w-full text-left py-2 text-base font-semibold text-[#0F172A] border-b border-[#F1F5F9]">Why SATX LTD</button>
        <button onClick={() => handleNav('/quality')} className="w-full text-left py-2 text-base font-semibold text-[#0F172A] border-b border-[#F1F5F9]">Quality Commitment</button>
        <button onClick={() => handleNav('/health-safety')} className="w-full text-left py-2 text-base font-semibold text-[#0F172A] border-b border-[#F1F5F9]">Health & Safety</button>
        <button onClick={() => handleNav('/sustainability')} className="w-full text-left py-2 text-base font-semibold text-[#0F172A] border-b border-[#F1F5F9]">Sustainability</button>
        <button onClick={() => handleNav('/news')} className="w-full text-left py-2 text-base font-semibold text-[#0F172A] border-b border-[#F1F5F9]">News & Insights</button>
        <button onClick={() => handleNav('/careers')} className="w-full text-left py-2 text-base font-semibold text-[#0F172A] border-b border-[#F1F5F9]">Careers</button>
        <button onClick={() => handleNav('/contact')} className="w-full text-left py-2 text-base font-semibold text-[#0F172A] border-b border-[#F1F5F9]">Contact Us</button>

        {/* Contact Info Official */}
        <div className="pt-4 space-y-3 text-xs text-slate-600 border-t border-[#E2E8F0]">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
            <span className="leading-snug">Flat 30 Webley Court, 3 Sten Close, Enfield, England, EN3 6WX</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[#0284C7] shrink-0" />
            <a href="mailto:satx@satxltd.com" className="font-semibold text-[#0284C7]">satx@satxltd.com</a>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-[#0284C7] shrink-0" />
            <a href="tel:07796729271" className="font-bold text-[#0284C7]">07796 729271</a>
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="p-4 border-t border-[#E2E8F0] bg-[#F0F9FF]">
        <button
          onClick={() => handleNav('/quote')}
          className="w-full py-3.5 bg-[#0284C7] text-white font-bold text-sm rounded-lg shadow-lg hover:bg-[#0369A1] transition-colors flex items-center justify-center gap-2"
        >
          <span>Get a Quote (7-Step Wizard)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
