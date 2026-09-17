import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs: { label: string; path?: string }[];
  onNavigate: (path: string) => void;
  bgImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge = 'SATX LTD',
  breadcrumbs,
  onNavigate,
  bgImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
}) => {
  return (
    <div className="relative bg-[#0F172A] text-white py-16 sm:py-20 px-4 sm:px-8 overflow-hidden border-b border-[#1E293B]">
      {/* Background overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/70 z-0" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C59B27_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-4">
        <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

        <div className="space-y-2 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] bg-[#1E293B] px-3 py-1 rounded-full border border-[#334155] inline-block">
            {badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed pt-1">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
