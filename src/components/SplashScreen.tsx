import React, { useState, useEffect } from 'react';
import { SATXLogo } from './SATXLogo';

interface SplashScreenProps {
  onComplete?: () => void;
  durationMs?: number; // Defaults to 3000ms (3 seconds)
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onComplete,
  durationMs = 3000
}) => {
  const [fadingOut, setFadingOut] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadingOut(true);
      setTimeout(() => {
        setVisible(false);
        if (onComplete) onComplete();
      }, 500); // 500ms smooth fade out transition
    }, durationMs);

    return () => clearTimeout(timer);
  }, [durationMs, onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0C4A6E] via-[#0F172A] to-[#0369A1] text-white transition-opacity duration-500 ease-in-out ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Subtle Background Grid & Radial Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c715_1px,transparent_1px),linear-gradient(to_bottom,#0284c715_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute w-80 h-80 rounded-full bg-[#0284C7]/25 blur-3xl animate-pulse" />

      {/* Pure Logo Display */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="transform transition-transform duration-700 hover:scale-105 scale-125 sm:scale-150">
          <SATXLogo variant="full" theme="dark" />
        </div>
      </div>
    </div>
  );
};
