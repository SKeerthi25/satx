import React, { useState, useRef, useCallback } from 'react';
import { SafeImage } from './SafeImage';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before Work',
  afterLabel = 'After Completion',
  title,
  subtitle
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  return (
    <div className="w-full space-y-4">
      {(title || subtitle) && (
        <div className="text-center space-y-1">
          {title && <h4 className="font-bold text-lg text-[#0F172A]">{title}</h4>}
          {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
        </div>
      )}

      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[420px] sm:h-[500px] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xl select-none cursor-ew-resize bg-[#0F172A]"
      >
        {/* AFTER IMAGE (Background) */}
        <SafeImage
          src={afterImage}
          alt="After Construction Completion"
          category="architecture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-[#0F172A]/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-md border border-white/20 z-10">
          {afterLabel}
        </div>

        {/* BEFORE IMAGE (Clipped Layer) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <SafeImage
            src={beforeImage}
            alt="Before Renovation Work"
            category="construction"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-[#C59B27] text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md z-10">
            {beforeLabel}
          </div>
        </div>

        {/* SLIDER DIVIDER HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 cursor-ew-resize flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-9 h-9 rounded-full bg-[#0F172A] text-white border-2 border-[#C59B27] shadow-xl flex items-center justify-center text-xs font-bold -ml-4 hover:scale-110 transition-transform">
            ↔
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-slate-400">
        Drag the center slider horizontal handle left or right to compare transformation results.
      </p>
    </div>
  );
};
