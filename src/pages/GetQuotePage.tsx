import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { MultiStepQuoteForm } from '../components/MultiStepQuoteForm';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const GetQuotePage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Get a Construction Quote"
        subtitle="Complete our 7-step interactive quote calculator for a transparent, itemised domestic construction estimate."
        badge="7-Step Interactive Quote Wizard"
        breadcrumbs={[{ label: 'Get a Quote' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <MultiStepQuoteForm onComplete={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      </section>
    </div>
  );
};
