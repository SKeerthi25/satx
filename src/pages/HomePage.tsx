import React from 'react';
import { SERVICES_LIST } from '../data/servicesData';
import { PROJECTS_LIST, UPLOADED_PHOTOS_GALLERY } from '../data/projectsData';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { FAQAccordion } from '../components/FAQAccordion';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { TestimonialCard } from '../components/TestimonialCard';
import { TESTIMONIALS_LIST } from '../data/testimonialsData';
import { CTASection } from '../components/CTASection';
import { SafeImage } from '../components/SafeImage';
import { ArrowRight, CheckCircle2, ShieldCheck, Building2, Award, Users, HardHat } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-12">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[85vh] bg-[#0C4A6E] text-white flex items-center justify-center overflow-hidden border-b border-[#0284C7]/30">
        {/* Background Image with ocean blue overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 transform scale-105 transition-transform duration-10000"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4A6E] via-[#0369A1]/90 to-[#0284C7]/70" />
        
        {/* Architectural Subtle Grid */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:32px_32px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold text-[#BAE6FD] shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span>Domestic Building & Residential Construction Specialists</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Building Homes. <br />
              <span className="text-[#38BDF8]">Creating Better Places to Live.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-100 max-w-2xl font-normal leading-relaxed">
              SATX LTD delivers professional domestic building and residential construction solutions with a focus on quality, craftsmanship and dependable project delivery.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('/quote')}
                className="satx-btn-accent text-sm py-3.5 px-7 shadow-xl"
              >
                Get a Quote (7-Step Wizard) <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('/projects')}
                className="satx-btn-secondary text-sm py-3.5 px-7 bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                Explore Our Projects
              </button>
            </div>

            {/* Trust statement */}
            <div className="pt-6 border-t border-white/20 flex flex-wrap items-center gap-6 text-xs text-slate-200 font-medium">
              <span className="flex items-center gap-1.5 text-slate-100">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                Fixed-Price Quotation Standard
              </span>
              <span className="flex items-center gap-1.5 text-slate-100">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                Building Control Inspection Sign-off
              </span>
              <span className="flex items-center gap-1.5 text-slate-100">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                Dedicated Site Management
              </span>
            </div>
          </div>

          {/* Right Floating Highlight Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-[#0F172A]/85 backdrop-blur-md p-6 rounded-2xl border border-[#38BDF8]/40 shadow-2xl space-y-4">
              <div className="p-3 rounded-xl bg-[#0284C7] text-white inline-block border border-white/30 shadow-md">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Domestic Construction Excellence</h3>
                <span className="bg-[#6366F1] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  PREMIUM
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                From luxury new build residences to complex structural house extensions and complete period refurbishments.
              </p>
              <div className="pt-2 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Turnkey Management</span>
                  <span className="font-bold text-[#38BDF8]">100% Comprehensive</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Structural Guarantee</span>
                  <span className="font-bold text-[#38BDF8]">Verified Standards</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/about')}
                className="w-full text-xs font-bold text-center py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white rounded-lg border border-[#38BDF8]/40 transition-colors shadow-md"
              >
                Learn About SATX LTD →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPANY INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-2xl h-[450px]">
              <SafeImage
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80"
                alt="SATX LTD Residential Construction Site"
                category="construction"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#0369A1] text-white p-6 rounded-xl border border-[#38BDF8]/40 shadow-2xl max-w-xs hidden sm:block">
              <span className="text-xs font-bold uppercase tracking-widest text-[#BAE6FD]">Professional Guarantee</span>
              <p className="text-xs text-slate-100 mt-1">Structured construction methodologies adhering to British Building Regulations.</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] bg-[#F0F9FF] px-3 py-1 rounded-full border border-[#BAE6FD] inline-block">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Established Residential Builders Delivering Lasting Value.
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              SATX LTD is a dedicated domestic building and residential construction main contractor. We partner with homeowners, property developers, and architects to execute residential projects defined by structural integrity, meticulous craftsmanship, and transparent budget management.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1 hover:border-[#38BDF8] transition-colors">
                <h4 className="font-bold text-sm text-[#0F172A]">Craftsmanship</h4>
                <p className="text-xs text-slate-500">Skilled tradesmen and precision structural installation.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1 hover:border-[#38BDF8] transition-colors">
                <h4 className="font-bold text-sm text-[#0F172A]">Project Clarity</h4>
                <p className="text-xs text-slate-500">Detailed weekly updates and transparent cost breakdowns.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/about')}
                className="satx-btn-primary text-xs py-3 px-6"
              >
                Read Our Story & Philosophy <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 4: SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">Our Expertise</span>
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Domestic Building Services</h2>
          </div>
          <button
            onClick={() => onNavigate('/services')}
            className="satx-btn-secondary text-xs"
          >
            Browse All 18 Services →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      {/* SECTION 5: FEATURED PROJECTS PORTFOLIO */}
      <section className="bg-[#F0F9FF] py-16 px-4 sm:px-8 border-y border-[#BAE6FD]/40 space-y-10">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">Portfolio Showcase</span>
              <h2 className="text-3xl font-extrabold text-[#0F172A]">Featured Residential Projects</h2>
            </div>
            <button
              onClick={() => onNavigate('/projects')}
              className="satx-btn-primary text-xs"
            >
              Explore Complete Portfolio →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_LIST.slice(0, 3).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onSelect={(id) => onNavigate(`/projects?id=${id}`)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5B: LIVE ON-SITE PROJECT GALLERY (AUTHENTIC PHOTOS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[11px] font-bold uppercase tracking-widest text-[#0284C7]">
              <HardHat className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Real On-Site Progress</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Live On-Site Project Gallery</h2>
            <p className="text-xs text-slate-500 max-w-xl">
              A curated photographic record of our active residential builds, structural steel installations, groundwork engineering, and finished domestic living spaces across Enfield and London.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/projects')}
            className="satx-btn-secondary text-xs"
          >
            View All Projects ({PROJECTS_LIST.length}) →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {UPLOADED_PHOTOS_GALLERY.slice(0, 8).map((photo) => (
            <div
              key={photo.id}
              className="group relative rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <SafeImage
                  src={photo.src}
                  alt={photo.title}
                  category="construction"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0F172A]/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#38BDF8] border border-white/10 uppercase tracking-wider">
                  {photo.category}
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="font-bold text-sm text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {photo.description}
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('/projects')}
                  className="text-xs font-bold text-[#0284C7] hover:text-[#0369A1] flex items-center gap-1 pt-1 self-start"
                >
                  Explore Portfolio <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: WHY SATX LTD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">Core Differentiators</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Why Choose SATX LTD</h2>
          <p className="text-xs text-slate-600">Built on principles of technical precision, clear communication, and quality craftsmanship.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="satx-card p-6 space-y-3 bg-white border border-[#E2E8F0]">
            <div className="p-3 rounded-xl bg-[#0284C7] text-white w-fit shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#0F172A]">Uncompromising Quality</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We enforce multi-point quality control checks at every stage, sourcing premium certified building materials.
            </p>
          </div>

          <div className="satx-card p-6 space-y-3 bg-white border border-[#E2E8F0]">
            <div className="p-3 rounded-xl bg-[#0284C7] text-white w-fit shadow-md">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#0F172A]">Dedicated Site Management</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your project is assigned a experienced Site Manager who ensures seamless trade coordination and regular client reporting.
            </p>
          </div>

          <div className="satx-card p-6 space-y-3 bg-white border border-[#E2E8F0]">
            <div className="p-3 rounded-xl bg-[#0284C7] text-white w-fit shadow-md">
              <HardHat className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#0F172A]">Safety & Compliance First</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Strict adherence to UK Building Control standards, Health & Safety RAMS, and site welfare management.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: CONSTRUCTION PROCESS TIMELINE */}
      <section className="bg-white py-16 px-4 sm:px-8 border-y border-[#E2E8F0] space-y-10">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">8-Stage Delivery</span>
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Our Construction Methodology</h2>
            <p className="text-xs text-slate-600">A structured step-by-step roadmap from initial consultation to final key handover.</p>
          </div>

          <ProcessTimeline onNavigate={onNavigate} />
        </div>
      </section>

      {/* SECTION 8 & 9: BEFORE & AFTER SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">Visual Transformation</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Before & After Showcase</h2>
          <p className="text-xs text-slate-600">Experience how our structural extensions and full home renovations convert space.</p>
        </div>

        <BeforeAfterSlider
          beforeImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
          afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
          beforeLabel="Original Period Rear Layout"
          afterLabel="Architectural Glass Extension Completed"
        />
      </section>

      {/* SECTION 10: TESTIMONIALS */}
      <section className="bg-[#F0F9FF] py-16 px-4 sm:px-8 border-y border-[#BAE6FD]/40 space-y-10">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">Client Feedback</span>
              <h2 className="text-3xl font-extrabold text-[#0F172A]">What Our Clients Say</h2>
            </div>
            <button
              onClick={() => onNavigate('/testimonials')}
              className="satx-btn-secondary text-xs"
            >
              View All Client Reviews →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS_LIST.slice(0, 2).map((test) => (
              <TestimonialCard key={test.id} testimonial={test} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">Got Questions?</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-600">Answers to common domestic building, pricing, and planning questions.</p>
        </div>

        <FAQAccordion />
      </section>

      {/* SECTION 12: CTA BANNER */}
      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
