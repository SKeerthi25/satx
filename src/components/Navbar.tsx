import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, Phone, FileText, Sparkles } from 'lucide-react';
import { SATXLogo } from './SATXLogo';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [activeMega, setActiveMega] = useState<'services' | 'projects' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Corporate Utility Bar */}
      <div className="bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-[#0C4A6E] text-white text-xs py-2 px-4 sm:px-8 border-b border-[#38BDF8]/20 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="hidden sm:inline-flex items-center gap-1.5 font-bold bg-[#6366F1] text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[10px] shadow-sm shrink-0">
              <Sparkles className="w-3 h-3 fill-white" /> POPULAR
            </span>
            <span className="font-medium text-slate-100 tracking-wide text-[11px] truncate">
              Flat 30 Webley Court, 3 Sten Close, Enfield, EN3 6WX
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-[11px] sm:text-xs">
            <a href="mailto:satx@satxltd.com" className="hover:text-[#BAE6FD] hidden md:inline-block font-semibold transition-colors">
              satx@satxltd.com
            </a>
            <a href="tel:07796729271" className="hover:text-[#BAE6FD] flex items-center gap-1 font-bold transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>07796 729271</span>
            </a>
            <span className="text-white/30 hidden md:inline">|</span>
            <button
              onClick={() => onNavigate('/company-profile')}
              className="hidden md:flex items-center gap-1 hover:text-[#BAE6FD] transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav 
        className={`bg-white/95 backdrop-blur-md border-b transition-all duration-200 relative ${
          scrolled ? 'border-[#38BDF8]/30 shadow-md py-3' : 'border-[#E2E8F0] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Grand Logo */}
          <div onClick={() => onNavigate('/')}>
            <SATXLogo variant="full" theme="light" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => onNavigate('/')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                currentPath === '/' ? 'text-[#0284C7] bg-[#F0F9FF]' : 'text-[#0F172A] hover:text-[#0284C7] hover:bg-[#F0F9FF]'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => onNavigate('/about')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                currentPath === '/about' ? 'text-[#0284C7] bg-[#F0F9FF]' : 'text-[#0F172A] hover:text-[#0284C7] hover:bg-[#F0F9FF]'
              }`}
            >
              About
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMega('services')}
            >
              <button
                onClick={() => onNavigate('/services')}
                className={`px-3 py-2 text-sm font-semibold rounded-md flex items-center gap-1 transition-colors ${
                  currentPath.startsWith('/services') ? 'text-[#0284C7] bg-[#F0F9FF]' : 'text-[#0F172A] hover:text-[#0284C7] hover:bg-[#F0F9FF]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMega === 'services' ? 'rotate-180 text-[#0284C7]' : ''}`} />
              </button>
            </div>

            {/* Projects Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMega('projects')}
            >
              <button
                onClick={() => onNavigate('/projects')}
                className={`px-3 py-2 text-sm font-semibold rounded-md flex items-center gap-1 transition-colors ${
                  currentPath.startsWith('/projects') ? 'text-[#0284C7] bg-[#F0F9FF]' : 'text-[#0F172A] hover:text-[#0284C7] hover:bg-[#F0F9FF]'
                }`}
              >
                <span>Projects</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMega === 'projects' ? 'rotate-180 text-[#0284C7]' : ''}`} />
              </button>
            </div>

            <button
              onClick={() => onNavigate('/process')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                currentPath === '/process' ? 'text-[#0284C7] bg-[#F0F9FF]' : 'text-[#0F172A] hover:text-[#0284C7] hover:bg-[#F0F9FF]'
              }`}
            >
              Process
            </button>

            <button
              onClick={() => onNavigate('/why-satx')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                currentPath === '/why-satx' ? 'text-[#0284C7] bg-[#F0F9FF]' : 'text-[#0F172A] hover:text-[#0284C7] hover:bg-[#F0F9FF]'
              }`}
            >
              Why SATX
            </button>

            <button
              onClick={() => onNavigate('/news')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                currentPath.startsWith('/news') ? 'text-[#0284C7] bg-[#F0F9FF]' : 'text-[#0F172A] hover:text-[#0284C7] hover:bg-[#F0F9FF]'
              }`}
            >
              Insights
            </button>

            <button
              onClick={() => onNavigate('/contact')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                currentPath === '/contact' ? 'text-[#0284C7] bg-[#F0F9FF]' : 'text-[#0F172A] hover:text-[#0284C7] hover:bg-[#F0F9FF]'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onNavigate('/quote')}
              className="satx-btn-accent shadow-md text-sm py-2.5 px-5"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open mobile navigation menu"
            className="lg:hidden p-2 rounded-lg text-[#0F172A] hover:bg-[#F0F9FF] transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mega Menu Container */}
        {activeMega && (
          <MegaMenu
            type={activeMega}
            onNavigate={onNavigate}
            onClose={() => setActiveMega(null)}
          />
        )}
      </nav>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onNavigate={onNavigate}
      />
    </header>
  );
};
