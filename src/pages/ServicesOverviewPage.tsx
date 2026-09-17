import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { SERVICES_LIST } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { CTASection } from '../components/CTASection';
import { Search } from 'lucide-react';

interface ServicesOverviewPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Construction', 'Extensions', 'Renovations', 'Conversions', 'Refurbishment', 'Interiors', 'Structural', 'Finishing', 'Exterior', 'Management'];

  const filteredServices = SERVICES_LIST.filter(service => {
    const matchesCat = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Our Domestic Building Services"
        subtitle="Complete residential construction capabilities tailored to luxury new build homes, structural house extensions, full home renovations, and period refurbishments."
        badge="Complete Portfolio of 18 Services"
        breadcrumbs={[{ label: 'Our Services' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
      />

      {/* FILTER & SEARCH HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search services (e.g. extension, brickwork)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#C59B27] text-[#0F172A]"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
                  selectedCategory === cat
                    ? 'bg-[#0F172A] text-white border-[#0F172A]'
                    : 'bg-[#F8FAFC] text-slate-600 border-[#E2E8F0] hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
