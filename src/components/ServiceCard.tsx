import React from 'react';
import type { ServiceItem } from '../data/servicesData';
import { SafeImage } from './SafeImage';
import { Building2, Home, Maximize2, Hammer, ArrowUpRight, RefreshCw, ChefHat, Bath, Layers, Shovel, ShieldAlert, Grid, Paintbrush, Square, PenTool, Compass, FileCheck, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onNavigate: (path: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-[#C59B27]" />;
      case 'Home': return <Home className="w-5 h-5 text-[#C59B27]" />;
      case 'Maximize2': return <Maximize2 className="w-5 h-5 text-[#C59B27]" />;
      case 'Hammer': return <Hammer className="w-5 h-5 text-[#C59B27]" />;
      case 'ArrowUpRight': return <ArrowUpRight className="w-5 h-5 text-[#C59B27]" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-[#C59B27]" />;
      case 'ChefHat': return <ChefHat className="w-5 h-5 text-[#C59B27]" />;
      case 'Bath': return <Bath className="w-5 h-5 text-[#C59B27]" />;
      case 'Shovel': return <Shovel className="w-5 h-5 text-[#C59B27]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-[#C59B27]" />;
      case 'Grid': return <Grid className="w-5 h-5 text-[#C59B27]" />;
      case 'Paintbrush': return <Paintbrush className="w-5 h-5 text-[#C59B27]" />;
      case 'Square': return <Square className="w-5 h-5 text-[#C59B27]" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-[#C59B27]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#C59B27]" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-[#C59B27]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#C59B27]" />;
      default: return <Layers className="w-5 h-5 text-[#C59B27]" />;
    }
  };

  return (
    <div className="satx-card group overflow-hidden flex flex-col justify-between h-full border border-[#E2E8F0]">
      <div>
        <div className="relative h-48 overflow-hidden bg-[#0F172A]">
          <SafeImage
            src={service.image}
            alt={service.title}
            category="construction"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-3 left-3 p-2.5 rounded-xl bg-[#0F172A]/90 backdrop-blur-md border border-white/20 shadow-md">
            {getIcon(service.iconName)}
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59B27]">{service.category}</span>
            <h3 className="font-bold text-lg text-[#0F172A] group-hover:text-[#C59B27] transition-colors">{service.title}</h3>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">{service.shortDesc}</p>

          <div className="space-y-2 pt-2">
            <span className="text-[11px] font-bold text-[#0F172A] uppercase tracking-wider block">Key Service Benefits:</span>
            <ul className="space-y-1.5">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <button
          onClick={() => onNavigate(service.path)}
          className="w-full py-2.5 px-4 rounded-lg bg-[#F8FAFC] hover:bg-[#0F172A] text-[#0F172A] hover:text-white border border-[#E2E8F0] font-semibold text-xs transition-colors flex items-center justify-between group-hover:border-[#0F172A]"
        >
          <span>Learn More About Service</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
        </button>
      </div>
    </div>
  );
};
