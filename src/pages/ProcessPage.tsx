import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { CTASection } from '../components/CTASection';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const ProcessPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Our Construction Process"
        subtitle="A structured 8-stage methodology ensuring transparent project delivery, milestone valuations, and rigorous quality control."
        badge="8-Stage Delivery"
        breadcrumbs={[{ label: 'Our Process' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <ProcessTimeline onNavigate={onNavigate} />
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
