import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieBannerProps {
  onNavigate: (path: string) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigate }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('satx_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('satx_cookie_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-[#0F172A] text-white p-6 rounded-2xl border border-[#334155] shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#1E293B] text-[#C59B27] border border-[#C59B27]/40">
            <Cookie className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-white">Cookie & Privacy Settings</h4>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-slate-300 mt-3 leading-relaxed">
        SATX LTD uses essential technical cookies to ensure optimal functionality on our website. Read our{' '}
        <button
          onClick={() => { onNavigate('/cookies'); setVisible(false); }}
          className="text-[#C59B27] underline font-semibold"
        >
          Cookie Policy
        </button>{' '}
        for details.
      </p>

      <div className="flex items-center justify-end gap-3 mt-4 pt-3 border-t border-[#1E293B]">
        <button
          onClick={() => setVisible(false)}
          className="text-xs font-semibold text-slate-400 hover:text-white px-3 py-1.5"
        >
          Essential Only
        </button>
        <button
          onClick={acceptAll}
          className="satx-btn-accent text-xs py-1.5 px-4"
        >
          Accept All Cookies
        </button>
      </div>
    </div>
  );
};
