import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { TESTIMONIALS_LIST } from '../data/testimonialsData';
import { TestimonialCard } from '../components/TestimonialCard';
import { CTASection } from '../components/CTASection';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const TestimonialsPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Client Testimonials & Feedback"
        subtitle="Read feedback from domestic homeowners and clients regarding our build quality, site management, and project execution."
        badge="Verified Client Reviews"
        breadcrumbs={[{ label: 'Testimonials' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_LIST.map((test) => (
            <TestimonialCard key={test.id} testimonial={test} />
          ))}
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
