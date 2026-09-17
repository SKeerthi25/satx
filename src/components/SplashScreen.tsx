import React, { useState, useEffect } from 'react';
import { SATXLogo } from './SATXLogo';

interface SplashScreenProps {
  onComplete?: () => void;
  durationMs?: number; // Defaults to 5000ms (5 seconds)
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onComplete,
  durationMs = 5000
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [fadingOut, setFadingOut] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / durationMs) * 100));
      setProgress(pct);

      if (elapsed >= durationMs) {
        clearInterval(interval);
        setFadingOut(true);
        setTimeout(() => {
          setVisible(false);
          if (onComplete) onComplete();
        }, 600); // 600ms fade out transition
      }
    }, 50);

    return () => clearInterval(interval);
  }, [durationMs, onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0C4A6E] via-[#0F172A] to-[#0369A1] text-white transition-opacity duration-700 ease-in-out ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c715_1px,transparent_1px),linear-gradient(to_bottom,#0284c715_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Glow effect behind logo */}
      <div className="absolute w-72 h-72 rounded-full bg-[#0284C7]/20 blur-3xl animate-pulse" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-6 max-w-md w-full">
        {/* Animated Brand Logo */}
        <div className="transform transition-transform duration-1000 scale-110 sm:scale-125 mb-2">
          <SATXLogo variant="full" theme="dark" />
        </div>

        {/* Tagline */}
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#38BDF8]">
            Construction of Domestic Buildings
          </p>
          <p className="text-[11px] text-slate-300">
            Professional • Trustworthy • Modern Residential Construction
          </p>
        </div>

        {/* 5-Second Progress Bar Container */}
        <div className="w-full space-y-2 pt-4">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden border border-white/10 p-0.5 backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-[#38BDF8] via-[#6366F1] to-[#0284C7] rounded-full transition-all duration-75 ease-linear shadow-[0_0_12px_rgba(56,189,248,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300 px-1">
            <span>Loading SATX LTD Portal...</span>
            <span className="text-[#38BDF8] font-mono font-bold">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Details */}
      <div className="absolute bottom-6 text-[10px] text-slate-400 font-mono tracking-widest uppercase z-10">
        SATX LTD • Official Corporate Website
      </div>
    </div>
  );
};
