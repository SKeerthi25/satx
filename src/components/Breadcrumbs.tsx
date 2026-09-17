import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav className="flex items-center gap-2 text-xs text-slate-400 py-3">
      <button 
        onClick={() => onNavigate('/')}
        className="hover:text-[#C59B27] flex items-center gap-1 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </button>

      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          {item.path ? (
            <button 
              onClick={() => onNavigate(item.path!)}
              className="hover:text-[#C59B27] transition-colors"
            >
              {item.label}
            </button>
          ) : (
            <span className="font-semibold text-slate-200 truncate max-w-[200px]">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
