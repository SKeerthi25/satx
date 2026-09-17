import React, { useState } from 'react';
import { Building2, Home, Hammer, ShieldCheck, Construction } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  category?: 'architecture' | 'construction' | 'renovation' | 'interior' | 'exterior' | 'general';
  className?: string;
  aspectRatio?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  category = 'general',
  className = '',
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getCategoryIcon = () => {
    switch (category) {
      case 'architecture':
      case 'exterior':
        return <Building2 className="w-10 h-10 text-[#38BDF8]" />;
      case 'construction':
        return <Construction className="w-10 h-10 text-[#38BDF8]" />;
      case 'renovation':
        return <Hammer className="w-10 h-10 text-[#38BDF8]" />;
      case 'interior':
        return <Home className="w-10 h-10 text-[#38BDF8]" />;
      default:
        return <ShieldCheck className="w-10 h-10 text-[#38BDF8]" />;
    }
  };

  if (error || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#0C4A6E] via-[#0369A1] to-[#0284C7] text-white p-6 overflow-hidden select-none border border-[#0284C7]/30 ${className}`}
      >
        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-15 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:16px_16px]" 
        />
        
        {/* Architectural corner lines */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#38BDF8]/60" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#38BDF8]/60" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#38BDF8]/60" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#38BDF8]/60" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-2">
          <div className="p-3 rounded-xl bg-[#0F172A]/80 border border-[#38BDF8]/40 shadow-lg backdrop-blur-sm">
            {getCategoryIcon()}
          </div>
          <span className="text-xs uppercase tracking-widest text-[#38BDF8] font-bold">SATX Architectural Studio</span>
          <p className="text-sm font-medium text-slate-100 max-w-[80%] line-clamp-2">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {loading && (
        <div className="absolute inset-0 bg-[#0284C7]/10 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[#0284C7] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-all duration-500 ${loading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} ${className}`}
        {...props}
      />
    </div>
  );
};
