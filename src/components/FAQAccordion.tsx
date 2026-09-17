import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faqData';
import { ChevronDown, Search } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['All', 'General', 'New Builds', 'Extensions', 'Renovations', 'Pricing', 'Planning', 'Construction', 'Materials', 'Timelines', 'Aftercare'];

  const filteredFaqs = FAQ_ITEMS.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory || (selectedCategory === 'Timelines' && faq.category === 'Project Timelines');
    const matchesQuery = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search construction, pricing, planning or building regulations questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C59B27] shadow-sm text-[#0F172A]"
        />
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors border ${
              selectedCategory === cat
                ? 'bg-[#0F172A] text-white border-[#0F172A]'
                : 'bg-white text-slate-600 border-[#E2E8F0] hover:bg-[#F8FAFC]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion Items */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-xl border border-[#E2E8F0] text-slate-500 text-sm">
            No matching questions found for "{searchQuery}". Please try another search term or contact our technical team directly.
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="satx-card border border-[#E2E8F0] rounded-xl overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#0F172A] hover:text-[#C59B27] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59B27] bg-[#F8FAFC] px-2.5 py-1 rounded border border-[#E2E8F0] shrink-0">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#C59B27]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-[#F1F5F9] pt-4 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
