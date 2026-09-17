import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/processData';
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react';

interface ProcessTimelineProps {
  onNavigate?: (path: string) => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="space-y-12">
      {/* Interactive Desktop Timeline Bar */}
      <div className="hidden lg:grid grid-cols-8 gap-2 border-b border-[#E2E8F0] pb-6">
        {PROCESS_STEPS.map((step, idx) => {
          const isSelected = activeStep === idx;
          return (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-3 text-left rounded-xl transition-all border ${
                isSelected 
                  ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-lg scale-105' 
                  : 'bg-white text-slate-600 border-[#E2E8F0] hover:border-[#CBD5E1]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-extrabold text-xs ${isSelected ? 'text-[#C59B27]' : 'text-slate-400'}`}>
                  {step.number}
                </span>
                {isSelected && <div className="w-2 h-2 rounded-full bg-[#C59B27]" />}
              </div>
              <p className={`font-bold text-xs truncate ${isSelected ? 'text-white' : 'text-[#0F172A]'}`}>
                {step.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Step Highlight Card */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-extrabold text-[#C59B27] bg-[#0F172A] px-3 py-1 rounded-lg">
              {PROCESS_STEPS[activeStep].number}
            </span>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Step {activeStep + 1} of 8</span>
              <h3 className="text-2xl font-bold text-[#0F172A]">{PROCESS_STEPS[activeStep].title}</h3>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            {PROCESS_STEPS[activeStep].detailedDescription}
          </p>

          <div className="pt-2 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Key Stage Deliverables:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PROCESS_STEPS[activeStep].keyDeliverables.map((deliv, i) => (
                <div key={i} className="p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white p-6 rounded-xl border border-[#334155] space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#C59B27] font-bold">
            <Clock className="w-4 h-4" />
            <span>Estimated Duration</span>
          </div>
          <p className="text-xl font-bold text-white">{PROCESS_STEPS[activeStep].durationEstimate}</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Every process milestone is supervised by your dedicated Site Manager with weekly progress updates.
          </p>
          {onNavigate && (
            <button
              onClick={() => onNavigate('/quote')}
              className="w-full satx-btn-accent text-xs py-2.5"
            >
              Start Consultation <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Full Vertical Timeline for Mobile & Overall View */}
      <div className="lg:hidden space-y-4">
        {PROCESS_STEPS.map((step, idx) => (
          <div 
            key={step.number}
            onClick={() => setActiveStep(idx)}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              activeStep === idx ? 'border-[#C59B27] bg-white ring-1 ring-[#C59B27]' : 'border-[#E2E8F0] bg-white'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-extrabold text-sm text-[#C59B27]">{step.number}</span>
                <span className="font-bold text-sm text-[#0F172A]">{step.title}</span>
              </div>
              <span className="text-xs text-slate-400">{step.durationEstimate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
