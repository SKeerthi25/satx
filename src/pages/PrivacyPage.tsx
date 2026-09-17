import React from 'react';
import { PageHeader } from '../components/PageHeader';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Privacy Policy"
        subtitle="Information on how SATX LTD collects, stores, and protects personal data in compliance with UK GDPR regulations."
        badge="Legal & Compliance"
        breadcrumbs={[{ label: 'Privacy Policy' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6 text-xs text-slate-700 leading-relaxed bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm">
        <h2 className="text-lg font-bold text-[#0F172A]">1. Data Collection & Purpose</h2>
        <p>
          SATX LTD ("we", "us", or "our") collects personal information supplied voluntarily through our online contact form, 7-step quote request wizard, and career application forms (such as your name, email, phone number, and project location).
        </p>

        <h2 className="text-lg font-bold text-[#0F172A] pt-4">2. How We Use Your Information</h2>
        <p>
          Your data is strictly utilized for constructing project cost estimates, scheduling site consultations, delivering domestic building contracts, and communicating progress updates. We never sell or distribute your contact details to third-party marketing firms.
        </p>

        <h2 className="text-lg font-bold text-[#0F172A] pt-4">3. Data Security & Retention</h2>
        <p>
          We store data on secure, encrypted server infrastructure. Project files and contract documents are retained for the duration required by statutory UK construction and tax compliance laws.
        </p>

        <h2 className="text-lg font-bold text-[#0F172A] pt-4">4. Your Data Rights</h2>
        <p>
          Under UK GDPR, you have the right to request access to, correction of, or deletion of your personal data. Contact our Data Protection Officer at [EMAIL ADDRESS PLACEHOLDER] for enquiries.
        </p>
      </section>
    </div>
  );
};
