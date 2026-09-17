import React from 'react';
import { SERVICES_LIST } from '../data/servicesData';
import { PROJECTS_LIST } from '../data/projectsData';
import { Building2, Home, Maximize2, Hammer, ArrowUpRight, RefreshCw, ChefHat, Layers, ArrowRight } from 'lucide-react';

interface MegaMenuProps {
  type: 'services' | 'projects';
  onNavigate: (path: string) => void;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ type, onNavigate, onClose }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-4 h-4 text-[#0284C7]" />;
      case 'Home': return <Home className="w-4 h-4 text-[#0284C7]" />;
      case 'Maximize2': return <Maximize2 className="w-4 h-4 text-[#0284C7]" />;
      case 'Hammer': return <Hammer className="w-4 h-4 text-[#0284C7]" />;
      case 'ArrowUpRight': return <ArrowUpRight className="w-4 h-4 text-[#0284C7]" />;
      case 'RefreshCw': return <RefreshCw className="w-4 h-4 text-[#0284C7]" />;
      case 'ChefHat': return <ChefHat className="w-4 h-4 text-[#0284C7]" />;
      default: return <Layers className="w-4 h-4 text-[#0284C7]" />;
    }
  };

  if (type === 'services') {
    const mainServices = SERVICES_LIST.slice(0, 8);
    const additionalServices = SERVICES_LIST.slice(8);

    return (
      <div 
        className="absolute top-full left-0 right-0 bg-white border-b border-[#E2E8F0] shadow-2xl py-8 px-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
        onMouseLeave={onClose}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          {/* Main Service Categories */}
          <div className="col-span-7 border-r border-[#E2E8F0] pr-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">Core Construction Services</span>
              <button 
                onClick={() => { onNavigate('/services'); onClose(); }}
                className="text-xs font-semibold text-[#0F172A] hover:text-[#0284C7] flex items-center gap-1"
              >
                View All 18 Services <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {mainServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => { onNavigate(service.path); onClose(); }}
                  className="group flex items-start gap-3 p-3 rounded-lg hover:bg-[#F0F9FF] cursor-pointer transition-colors border border-transparent hover:border-[#BAE6FD]"
                >
                  <div className="p-2 rounded-md bg-[#F0F9FF] group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] group-hover:text-[#0284C7] transition-colors">{service.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{service.shortDesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Building Trade Services */}
          <div className="col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-4">Specialist Trade Work</span>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {additionalServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => { onNavigate(service.path); onClose(); }}
                    className="text-left text-xs font-medium text-slate-600 hover:text-[#0284C7] hover:font-semibold py-1.5 px-2 rounded hover:bg-[#F0F9FF] transition-all flex items-center justify-between"
                  >
                    <span>{service.title}</span>
                    <span className="text-[10px] text-slate-400">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Quote Highlight Card inside MegaMenu */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-[#0284C7] to-[#0C4A6E] text-white border border-[#38BDF8]/40 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-sm font-bold text-white">Planning a domestic build?</h5>
                  <p className="text-xs text-slate-200 mt-0.5">Use our 7-Step quote calculator for an estimate.</p>
                </div>
                <button
                  onClick={() => { onNavigate('/quote'); onClose(); }}
                  className="px-3 py-1.5 text-xs font-bold bg-white text-[#0284C7] hover:bg-slate-100 rounded-md transition-colors shadow-sm"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Projects Mega Menu
  const featuredProjects = PROJECTS_LIST.slice(0, 3);

  return (
    <div 
      className="absolute top-full left-0 right-0 bg-white border-b border-[#E2E8F0] shadow-2xl py-8 px-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">Architecture Portfolio</span>
            <h3 className="text-lg font-bold text-[#0F172A]">Featured Residential Construction Projects</h3>
          </div>
          <button 
            onClick={() => { onNavigate('/projects'); onClose(); }}
            className="text-xs font-semibold bg-[#0284C7] text-white hover:bg-[#0369A1] px-4 py-2 rounded-md transition-colors flex items-center gap-1.5 shadow-sm"
          >
            Explore All Projects <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => { onNavigate(`/projects?id=${project.id}`); onClose(); }}
              className="group cursor-pointer rounded-xl overflow-hidden border border-[#E2E8F0] hover:border-[#38BDF8] transition-all bg-[#F8FAFC]"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0369A1]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/20">
                  {project.category}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-sm text-[#0F172A] group-hover:text-[#0284C7] transition-colors">{project.title}</h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{project.shortDesc}</p>
                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 border-t border-[#E2E8F0] pt-2">
                  <span>{project.location}</span>
                  <span className="font-semibold text-[#0284C7]">View Case Study →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
