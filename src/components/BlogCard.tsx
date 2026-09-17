import React from 'react';
import type { BlogPost } from '../data/blogData';
import { SafeImage } from './SafeImage';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  onSelect: (id: string) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(post.id)}
      className="satx-card group cursor-pointer overflow-hidden flex flex-col justify-between h-full border border-[#E2E8F0]"
    >
      <div>
        <div className="relative h-48 overflow-hidden bg-[#0F172A]">
          <SafeImage
            src={post.image}
            alt={post.title}
            category="architecture"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-[#0F172A]/85 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider border border-white/20">
            {post.category}
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h3 className="font-bold text-base text-[#0F172A] group-hover:text-[#C59B27] transition-colors leading-snug">
            {post.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {post.summary}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="flex items-center justify-between text-xs font-bold text-[#0F172A] group-hover:text-[#C59B27] transition-colors pt-3 border-t border-[#F1F5F9]">
          <span>Read Full Article</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
