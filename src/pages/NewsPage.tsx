import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/PageHeader';
import type { BlogPost } from '../data/blogData';
import { BLOG_POSTS } from '../data/blogData';
import { BlogCard } from '../components/BlogCard';
import { BlogArticlePage } from './BlogArticlePage';
import { CTASection } from '../components/CTASection';

interface NewsPageProps {
  onNavigate: (path: string) => void;
  selectedArticleId?: string | null;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onNavigate, selectedArticleId }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = ['All', 'Construction', 'Home Improvement', 'Architecture', 'Renovation', 'Sustainability', 'Building Tips', 'Company Updates'];

  useEffect(() => {
    if (selectedArticleId) {
      const found = BLOG_POSTS.find(b => b.id === selectedArticleId);
      if (found) setActiveArticle(found);
    } else {
      setActiveArticle(null);
    }
  }, [selectedArticleId]);

  if (activeArticle) {
    return (
      <BlogArticlePage
        post={activeArticle}
        onBack={() => { setActiveArticle(null); onNavigate('/news'); }}
        onNavigate={onNavigate}
      />
    );
  }

  const filteredPosts = BLOG_POSTS.filter(post => {
    return activeCategory === 'All' || post.category === activeCategory;
  });

  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Construction News & Insights"
        subtitle="Expert architectural advice, structural building guides, energy performance, and company updates from SATX LTD."
        badge="News & Insights"
        breadcrumbs={[{ label: 'News & Insights' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
                activeCategory === cat
                  ? 'bg-[#0F172A] text-white border-[#0F172A]'
                  : 'bg-white text-slate-600 border-[#E2E8F0] hover:bg-[#F8FAFC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onSelect={(id) => {
                const found = BLOG_POSTS.find(b => b.id === id);
                if (found) {
                  setActiveArticle(found);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            />
          ))}
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
