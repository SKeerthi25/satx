import React from 'react';

interface SATXLogoProps {
  variant?: 'full' | 'icon' | 'stacked';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SATXLogo: React.FC<SATXLogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = ''
}) => {
  const isDark = theme === 'dark';

  const iconSvg = (
    <div className="relative flex items-center justify-center shrink-0">
      <svg
        width="42"
        height="42"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9 sm:w-10 sm:h-10 drop-shadow-md"
      >
        <defs>
          <linearGradient id="satx-logo-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#0369A1" />
            <stop offset="100%" stopColor="#0C4A6E" />
          </linearGradient>
          <linearGradient id="satx-logo-grad-accent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>

        {/* Outer Architectural Precision Hex/Shield Base */}
        <rect
          x="6"
          y="6"
          width="88"
          height="88"
          rx="18"
          fill="url(#satx-logo-grad-1)"
          stroke="url(#satx-logo-grad-accent)"
          strokeWidth="3"
        />

        {/* Roof Peak / Gables Structural Line */}
        <path
          d="M50 18L80 40V78H20V40L50 18Z"
          stroke="#38BDF8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.35"
        />

        {/* Interlocking 'S' & Monogram Geometry */}
        <path
          d="M62 34C62 30 56 26 50 26C42 26 36 31 36 37C36 44 44 46 50 49C58 52 64 56 64 64C64 72 56 76 48 76C40 76 34 71 34 66"
          stroke="#FFFFFF"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Accent Cornerstone Beam */}
        <circle cx="50" cy="50" r="4" fill="url(#satx-logo-grad-accent)" />
        <line x1="20" y1="78" x2="80" y2="78" stroke="url(#satx-logo-grad-accent)" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
  );

  if (variant === 'icon') {
    return iconSvg;
  }

  return (
    <div className={`flex items-center gap-3 select-none cursor-pointer group ${className}`}>
      {iconSvg}

      <div className={`flex flex-col ${variant === 'stacked' ? 'items-center text-center' : ''}`}>
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-extrabold text-xl sm:text-2xl tracking-tight font-heading ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
            SATX
          </span>
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#0284C7]">
            LTD
          </span>
        </div>
        <span className={`text-[9px] uppercase tracking-[0.22em] font-semibold mt-0.5 ${isDark ? 'text-[#38BDF8]' : 'text-[#0369A1]'}`}>
          Domestic Construction
        </span>
      </div>
    </div>
  );
};
