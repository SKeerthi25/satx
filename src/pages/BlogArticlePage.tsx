import React from 'react';
import type { BlogPost } from '../data/blogData';
import { BLOG_POSTS } from '../data/blogData';
import { PageHeader } from '../components/PageHeader';
import { BlogCard } from '../components/BlogCard';
import { CTASection } from '../components/CTASection';
import { SafeImage } from '../components/SafeImage';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

interface BlogArticlePageProps {
  post: BlogPost;
  onBack: () => void;
  onNavigate: (path: string) => void;
}

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({ post, onBack, onNavigate }) => {
  const related = BLOG_POSTS.filter(b => b.id !== post.id).slice(0, 2);

  return (
    <div className="space-y-16 pb-12">
      <div className="bg-[#0F172A] text-slate-300 py-3 px-4 sm:px-8 border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-xs font-semibold text-[#C59B27] hover:underline flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" /> Back to News & Insights
          </button>
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">{post.category}</span>
        </div>
      </div>

      <PageHeader
        title={post.title}
        subtitle={`Published by ${post.author} on ${post.date}`}
        badge={post.category}
        breadcrumbs={[
          { label: 'News', path: '/news' },
          { label: post.title }
        ]}
        onNavigate={onNavigate}
        bgImage={post.image}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex items-center gap-6 text-xs text-slate-500 font-medium border-b border-[#E2E8F0] pb-4">
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#C59B27]" /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#C59B27]" /> {post.readTime}</span>
          <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-[#C59B27]" /> {post.author}</span>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xl h-80 bg-[#0F172A]">
          <SafeImage
            src={post.image}
            alt={post.title}
            category="architecture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose max-w-none space-y-6 text-slate-700 text-sm leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {related.length > 0 && (
        <section className="bg-[#F8FAFC] py-16 px-4 sm:px-8 border-y border-[#E2E8F0] space-y-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <h3 className="text-2xl font-bold text-[#0F172A] text-center">Related Construction Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {related.map((rel) => (
                <BlogCard key={rel.id} post={rel} onSelect={() => onNavigate(`/news?id=${rel.id}`)} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
