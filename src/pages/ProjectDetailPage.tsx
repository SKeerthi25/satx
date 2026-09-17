import React from 'react';
import type { ProjectItem } from '../data/projectsData';
import { PageHeader } from '../components/PageHeader';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { CTASection } from '../components/CTASection';
import { SafeImage } from '../components/SafeImage';
import { ArrowLeft, MapPin, Calendar, Clock, CheckCircle2, Layers, ShieldCheck } from 'lucide-react';

interface ProjectDetailPageProps {
  project: ProjectItem;
  onBack: () => void;
  onNavigate: (path: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onBack, onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      {/* Back Button Bar */}
      <div className="bg-[#0F172A] text-slate-300 py-3 px-4 sm:px-8 border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-xs font-semibold text-[#C59B27] hover:underline flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio Projects
          </button>
          <span className="text-xs text-[#C59B27] font-medium hidden sm:inline">Project Reference: {project.id}</span>
        </div>
      </div>

      <PageHeader
        title={project.title}
        subtitle={project.shortDesc}
        badge={project.category}
        breadcrumbs={[
          { label: 'Projects', path: '/projects' },
          { label: project.title }
        ]}
        onNavigate={onNavigate}
        bgImage={project.heroImage}
      />

      {/* METADATA BAR & OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm text-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Category</span>
            <span className="font-bold text-sm text-[#0F172A]">{project.category}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Location</span>
            <span className="font-bold text-sm text-[#0F172A] flex items-center justify-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C59B27]" /> {project.location}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Duration</span>
            <span className="font-bold text-sm text-[#0F172A] flex items-center justify-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#C59B27]" /> {project.duration}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Completed</span>
            <span className="font-bold text-sm text-[#0F172A] flex items-center justify-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#C59B27]" /> {project.completionYear}
            </span>
          </div>
        </div>

        {/* OVERVIEW CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-[#0F172A]">Project Overview</h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">{project.fullOverview}</p>
            </div>

            {/* CHALLENGE & SOLUTION */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">The Structural Challenge</span>
                <p className="text-xs text-amber-950 leading-relaxed">{project.challenge}</p>
              </div>
              <div className="p-6 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Our Engineering Solution</span>
                <p className="text-xs text-emerald-950 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* SCOPE OF WORK */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-[#0F172A]">Scope of Work Delivered</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.scopeOfWork.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR: MATERIALS & HIGHLIGHTS */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0F172A] text-white p-6 rounded-2xl border border-[#334155] space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C59B27]" /> Materials & Specifications
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.materialsUsed.map((mat, idx) => (
                  <li key={idx} className="flex items-center gap-2 border-b border-[#1E293B] pb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] space-y-3">
              <h4 className="text-sm font-bold text-[#0F172A]">Key Project Outcomes</h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {project.keyHighlights.map((high, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{high}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Case Study Transformation</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Before & After Comparison</h2>
        </div>
        <BeforeAfterSlider
          beforeImage={project.beforeImage}
          afterImage={project.afterImage}
          beforeLabel="Site Prior to Construction"
          afterLabel="Completed Architectural Project"
        />
      </section>

      {/* PROJECT GALLERY */}
      <section className="bg-[#F8FAFC] py-16 px-4 sm:px-8 border-y border-[#E2E8F0] space-y-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Architecture Photography</span>
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Project Image Gallery</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.gallery.map((imgUrl, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden border border-[#E2E8F0] shadow-md h-56 bg-[#0F172A]">
                <SafeImage
                  src={imgUrl}
                  alt={`${project.title} Gallery Image ${idx + 1}`}
                  category="architecture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
