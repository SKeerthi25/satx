import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/PageHeader';
import type { ProjectItem } from '../data/projectsData';
import { PROJECTS_LIST } from '../data/projectsData';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectDetailPage } from './ProjectDetailPage';
import { CTASection } from '../components/CTASection';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
  selectedProjectId?: string | null;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, selectedProjectId }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'New Builds', 'Extensions', 'Renovations', 'Refurbishments', 'Interiors', 'External Works'];

  useEffect(() => {
    if (selectedProjectId) {
      const found = PROJECTS_LIST.find(p => p.id === selectedProjectId);
      if (found) setActiveProject(found);
    } else {
      setActiveProject(null);
    }
  }, [selectedProjectId]);

  if (activeProject) {
    return (
      <ProjectDetailPage 
        project={activeProject} 
        onBack={() => { setActiveProject(null); onNavigate('/projects'); }}
        onNavigate={onNavigate}
      />
    );
  }

  const filteredProjects = PROJECTS_LIST.filter(p => {
    return activeCategory === 'All' || p.category === activeCategory;
  });

  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Residential Architecture & Project Portfolio"
        subtitle="Explore our completed domestic new builds, structural extensions, period restorations, and luxury refurbishments."
        badge="Architectural Portfolio"
        breadcrumbs={[{ label: 'Projects' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Category Filter Tabs */}
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(id) => {
                const found = PROJECTS_LIST.find(p => p.id === id);
                if (found) {
                  setActiveProject(found);
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
