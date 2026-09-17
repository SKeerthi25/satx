import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTASection } from '../components/CTASection';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const FAQPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Comprehensive answers covering domestic building, new builds, extensions, renovations, pricing, planning permissions, materials, and timelines."
        badge="FAQ Knowledge Base"
        breadcrumbs={[{ label: 'FAQ' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <FAQAccordion />
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
