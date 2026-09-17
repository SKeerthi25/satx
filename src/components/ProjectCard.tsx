import React from 'react';
import type { ProjectItem } from '../data/projectsData';
import { SafeImage } from './SafeImage';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(project.id)}
      className="satx-card group cursor-pointer overflow-hidden flex flex-col h-full border border-[#E2E8F0] hover:border-[#CBD5E1]"
    >
      <div className="relative h-64 overflow-hidden bg-[#0F172A]">
        <SafeImage
          src={project.heroImage}
          alt={project.title}
          category="architecture"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-[#0F172A]/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
          {project.category}
        </div>
        <div className="absolute bottom-4 right-4 bg-[#C59B27] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-md">
          Completed {project.completionYear}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
              {project.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {project.duration}
            </span>
          </div>

          <h3 className="font-bold text-lg text-[#0F172A] group-hover:text-[#C59B27] transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {project.shortDesc}
          </p>
        </div>

        <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#0F172A] group-hover:text-[#C59B27] transition-colors">
          <span>View Project Case Study</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
