import React from 'react';
import { PageHeader } from '../components/PageHeader';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Cookie Policy"
        subtitle="Information regarding the cookies utilized on our website to enhance user navigation and functional performance."
        badge="Legal & Compliance"
        breadcrumbs={[{ label: 'Cookie Policy' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6 text-xs text-slate-700 leading-relaxed bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm">
        <h2 className="text-lg font-bold text-[#0F172A]">1. What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help remember your preferences, active navigation states, and form inputs.
        </p>

        <h2 className="text-lg font-bold text-[#0F172A] pt-4">2. Cookies We Use</h2>
        <p>
          We strictly use essential technical cookies necessary for rendering site navigation, maintaining quote wizard progress state, and remembering cookie consent options. We do not use intrusive third-party tracking cookies.
        </p>
      </section>
    </div>
  );
};
