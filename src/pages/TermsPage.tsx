import React from 'react';
import { PageHeader } from '../components/PageHeader';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Terms & Conditions"
        subtitle="General terms of service and website usage agreements for SATX LTD."
        badge="Legal & Compliance"
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6 text-xs text-slate-700 leading-relaxed bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm">
        <h2 className="text-lg font-bold text-[#0F172A]">1. Agreement to Terms</h2>
        <p>
          By accessing or using the website of SATX LTD, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please refrain from using the site.
        </p>

        <h2 className="text-lg font-bold text-[#0F172A] pt-4">2. Construction Quotations & Contracts</h2>
        <p>
          Estimates provided via the online 7-step quote calculator are indicative. Formal binding contract quotations are issued only after technical site survey inspection and detailed architectural drawing verification.
        </p>

        <h2 className="text-lg font-bold text-[#0F172A] pt-4">3. Intellectual Property Rights</h2>
        <p>
          All text, architectural project photos, logo designs, and content featured on this website are the property of SATX LTD and protected by UK copyright law.
        </p>
      </section>
    </div>
  );
};
