import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ArrowLeft, Building2, Home, Maximize2, Hammer, ArrowUpRight, RefreshCw, Calendar, DollarSign, MapPin, Send } from 'lucide-react';

interface MultiStepQuoteFormProps {
  onComplete?: () => void;
}

export const MultiStepQuoteForm: React.FC<MultiStepQuoteFormProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    projectType: 'New Build Homes',
    propertyType: 'Detached House',
    location: '',
    estimatedBudget: '£100k - £250k',
    startDate: 'Within 3 Months',
    description: '',
    name: '',
    email: '',
    phone: '',
    agreeTerms: true
  });

  const projectTypes = [
    { name: 'New Build Homes', icon: Building2, desc: 'Complete ground-up residential build' },
    { name: 'House Extensions', icon: Maximize2, desc: 'Rear, side, or multi-storey addition' },
    { name: 'Home Renovations', icon: Hammer, desc: 'Structural or full interior overhaul' },
    { name: 'Loft Conversions', icon: ArrowUpRight, desc: 'Dormer, Mansard, or Velux attic build' },
    { name: 'Property Refurbishment', icon: RefreshCw, desc: 'Period restoration or modernization' },
    { name: 'Kitchen & Bathroom', icon: Home, desc: 'Luxury culinary or bathroom wetroom fit-out' }
  ];

  const propertyTypes = ['Detached House', 'Semi-Detached House', 'Terraced Period House', 'Townhouse (Multi-Storey)', 'Bungalow', 'Flats / Apartments'];
  const budgets = ['Under £50,000', '£50,000 - £100,000', '£100,000 - £250,000', '£250,000 - £500,000', '£500,000+'];
  const startDates = ['Immediately / Urgent', 'Within 1 to 3 Months', 'Within 3 to 6 Months', 'Flexible / Planning Stage'];

  const nextStep = () => {
    if (currentStep < 7) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onComplete) onComplete();
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl p-8 sm:p-12 text-center space-y-6 animate-in fade-in max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Enquiry Submitted</span>
          <h3 className="text-2xl font-bold text-[#0F172A]">Quote Request Received</h3>
          <p className="text-sm text-slate-600">
            Thank you, <span className="font-bold text-[#0F172A]">{formData.name || 'Valued Client'}</span>. Our senior quantity surveying team will review your project parameters and contact you within 24 business hours.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-slate-500 text-left space-y-1">
          <p><span className="font-semibold text-[#0F172A]">Project Type:</span> {formData.projectType}</p>
          <p><span className="font-semibold text-[#0F172A]">Estimated Budget:</span> {formData.estimatedBudget}</p>
          <p><span className="font-semibold text-[#0F172A]">Preferred Start:</span> {formData.startDate}</p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setCurrentStep(1); }}
          className="satx-btn-secondary text-xs"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl overflow-hidden max-w-3xl mx-auto">
      {/* Header & Progress Indicator */}
      <div className="bg-[#0F172A] text-white p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">SATX Quote Calculator</span>
          <span className="text-xs font-bold bg-[#1E293B] px-3 py-1 rounded-full text-slate-300 border border-[#334155]">
            Step {currentStep} of 7
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold">Request an Itemised Construction Estimate</h3>
        
        {/* Progress Bar */}
        <div className="w-full bg-[#1E293B] h-2 rounded-full overflow-hidden border border-[#334155]">
          <div 
            className="bg-gradient-to-r from-[#C59B27] to-[#D97706] h-full transition-all duration-300"
            style={{ width: `${(currentStep / 7) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        {/* STEP 1: Project Type */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-in fade-in">
            <h4 className="text-lg font-bold text-[#0F172A]">Step 1: What type of project do you need?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectTypes.map((item) => {
                const IconComponent = item.icon;
                const selected = formData.projectType === item.name;
                return (
                  <div
                    key={item.name}
                    onClick={() => setFormData({ ...formData, projectType: item.name })}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                      selected ? 'border-[#C59B27] bg-[#F8FAFC] shadow-md ring-1 ring-[#C59B27]' : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
                    }`}
                  >
                    <div className={`p-2.5 rounded-lg ${selected ? 'bg-[#0F172A] text-white' : 'bg-[#F1F5F9] text-[#0F172A]'}`}>
                      <IconComponent className="w-5 h-5 text-[#C59B27]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-[#0F172A]">{item.name}</h5>
                      <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Property Type */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-in fade-in">
            <h4 className="text-lg font-bold text-[#0F172A]">Step 2: Tell us about the property</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {propertyTypes.map((prop) => (
                <div
                  key={prop}
                  onClick={() => setFormData({ ...formData, propertyType: prop })}
                  className={`p-4 rounded-xl border text-sm font-semibold cursor-pointer transition-all ${
                    formData.propertyType === prop ? 'border-[#C59B27] bg-[#F8FAFC] text-[#0F172A] ring-1 ring-[#C59B27]' : 'border-[#E2E8F0] text-slate-700 hover:border-[#CBD5E1]'
                  }`}
                >
                  {prop}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Location */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-in fade-in">
            <h4 className="text-lg font-bold text-[#0F172A]">Step 3: Where is the project located?</h4>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Property Postcode / Town</label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. GU1 4AB or Surrey / London area placeholder"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C59B27] text-sm text-[#0F172A]"
                />
              </div>
              <p className="text-xs text-slate-500">We operate across high-end domestic residential sectors.</p>
            </div>
          </div>
        )}

        {/* STEP 4: Budget */}
        {currentStep === 4 && (
          <div className="space-y-4 animate-in fade-in">
            <h4 className="text-lg font-bold text-[#0F172A]">Step 4: What is your estimated budget?</h4>
            <div className="space-y-3">
              {budgets.map((b) => (
                <div
                  key={b}
                  onClick={() => setFormData({ ...formData, estimatedBudget: b })}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    formData.estimatedBudget === b ? 'border-[#C59B27] bg-[#F8FAFC] text-[#0F172A] ring-1 ring-[#C59B27] font-bold' : 'border-[#E2E8F0] text-slate-700 hover:border-[#CBD5E1]'
                  }`}
                >
                  <span className="text-sm">{b}</span>
                  <DollarSign className="w-4 h-4 text-[#C59B27]" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5: Start Date */}
        {currentStep === 5 && (
          <div className="space-y-4 animate-in fade-in">
            <h4 className="text-lg font-bold text-[#0F172A]">Step 5: When would you like to start?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {startDates.map((date) => (
                <div
                  key={date}
                  onClick={() => setFormData({ ...formData, startDate: date })}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
                    formData.startDate === date ? 'border-[#C59B27] bg-[#F8FAFC] text-[#0F172A] ring-1 ring-[#C59B27] font-bold' : 'border-[#E2E8F0] text-slate-700 hover:border-[#CBD5E1]'
                  }`}
                >
                  <Calendar className="w-5 h-5 text-[#C59B27]" />
                  <span className="text-sm">{date}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 6: Description */}
        {currentStep === 6 && (
          <div className="space-y-4 animate-in fade-in">
            <h4 className="text-lg font-bold text-[#0F172A]">Step 6: Tell us more about the project scope</h4>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Project Details & Key Requirements</label>
              <textarea
                rows={5}
                placeholder="Describe your vision, architectural preferences, ground floor dimensions, or planning status..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-4 border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C59B27] text-sm text-[#0F172A]"
              />
            </div>
          </div>
        )}

        {/* STEP 7: Contact Information */}
        {currentStep === 7 && (
          <div className="space-y-4 animate-in fade-in">
            <h4 className="text-lg font-bold text-[#0F172A]">Step 7: Contact Information</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border border-[#E2E8F0] rounded-xl text-sm focus:ring-2 focus:ring-[#C59B27]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. client@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 border border-[#E2E8F0] rounded-xl text-sm focus:ring-2 focus:ring-[#C59B27]"
                />
              </div>
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-bold text-slate-700">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +44 7000 000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 border border-[#E2E8F0] rounded-xl text-sm focus:ring-2 focus:ring-[#C59B27]"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="w-4 h-4 text-[#C59B27] rounded"
              />
              <label htmlFor="terms" className="text-xs text-slate-600">
                I agree to SATX LTD storing my details for project consultation purposes.
              </label>
            </div>
          </div>
        )}

        {/* Wizard Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-[#E2E8F0]">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="satx-btn-secondary text-xs py-2.5 px-4"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          ) : <div />}

          {currentStep < 7 ? (
            <button
              type="button"
              onClick={nextStep}
              className="satx-btn-accent text-xs py-2.5 px-6 ml-auto"
            >
              Next Step <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              className="satx-btn-accent text-xs py-2.5 px-6 ml-auto bg-emerald-600 hover:bg-emerald-700 border-emerald-600"
            >
              Submit Quote Request <Send className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
