import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<PageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'New Build Homes',
    propertyType: 'Detached House',
    location: '',
    estimatedBudget: '£100k - £250k',
    preferredStart: 'Within 3 Months',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-12">
      <PageHeader
        title="Contact SATX LTD"
        subtitle="Get in touch with our senior residential team for project consultations, site assessments, and general enquiries."
        badge="Direct Corporate Contact"
        breadcrumbs={[{ label: 'Contact Us' }]}
        onNavigate={onNavigate}
        bgImage="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] bg-[#F0F9FF] px-3 py-1 rounded-full border border-[#BAE6FD] inline-block">
              Corporate Office
            </span>
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Get in Touch</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We welcome enquiries from domestic homeowners, architectural practices, property developers, and structural engineers.
            </p>
          </div>

          <div className="space-y-6">
            <div className="satx-card p-6 bg-white border border-[#E2E8F0] flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#0284C7] text-white shrink-0 shadow-md">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-[#0F172A]">Head Office Address</h4>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Flat 30 Webley Court, 3 Sten Close, Enfield, England, EN3 6WX
                </p>
              </div>
            </div>

            <div className="satx-card p-6 bg-white border border-[#E2E8F0] flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#0284C7] text-white shrink-0 shadow-md">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-[#0F172A]">Email Enquiries</h4>
                <a href="mailto:satx@satxltd.com" className="text-xs font-bold text-[#0284C7] hover:underline">
                  satx@satxltd.com
                </a>
              </div>
            </div>

            <div className="satx-card p-6 bg-white border border-[#E2E8F0] flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#0284C7] text-white shrink-0 shadow-md">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-[#0F172A]">Telephone & Support</h4>
                <p className="text-xs text-slate-600">[PHONE NUMBER PLACEHOLDER]</p>
              </div>
            </div>

            <div className="satx-card p-6 bg-white border border-[#E2E8F0] flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#0284C7] text-white shrink-0 shadow-md">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-[#0F172A]">Business Hours</h4>
                <p className="text-xs text-slate-600">Monday – Friday: 08:00 – 17:30</p>
                <p className="text-[11px] text-slate-400">Saturday: Emergency Site Visits Only</p>
              </div>
            </div>
          </div>

          {/* MAP PLACEHOLDER WITH ENFIELD LOCATION */}
          <div className="h-48 rounded-2xl bg-gradient-to-br from-[#0C4A6E] to-[#0369A1] border border-[#38BDF8]/40 flex flex-col items-center justify-center p-6 text-center text-white space-y-2 shadow-lg">
            <MapPin className="w-8 h-8 text-[#38BDF8]" />
            <span className="font-bold text-sm">Enfield Head Office Location</span>
            <p className="text-xs text-slate-200">Flat 30 Webley Court, 3 Sten Close, Enfield, EN3 6WX</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xl p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#0F172A]">Send a Direct Enquiry</h3>
              <p className="text-xs text-slate-500">Fill out the fields below and our team will get back to you promptly.</p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-xl space-y-4">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-lg text-emerald-950">Message Sent Successfully</h4>
                <p className="text-xs text-emerald-800">Thank you for contacting SATX LTD. A representative will respond within 24 business hours.</p>
                <button onClick={() => setSubmitted(false)} className="satx-btn-secondary text-xs">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 border border-[#E2E8F0] rounded-xl text-xs focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 border border-[#E2E8F0] rounded-xl text-xs focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +44 7000 000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 border border-[#E2E8F0] rounded-xl text-xs focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Location / Postcode</label>
                    <input
                      type="text"
                      placeholder="e.g. Enfield / Greater London area"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full p-3 border border-[#E2E8F0] rounded-xl text-xs focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full p-3 border border-[#E2E8F0] rounded-xl text-xs focus:ring-2 focus:ring-[#0284C7]"
                    >
                      <option>New Build Homes</option>
                      <option>House Extensions</option>
                      <option>Home Renovations</option>
                      <option>Loft Conversions</option>
                      <option>Property Refurbishment</option>
                      <option>Kitchen & Bathroom</option>
                      <option>Other Construction Work</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Estimated Budget</label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full p-3 border border-[#E2E8F0] rounded-xl text-xs focus:ring-2 focus:ring-[#0284C7]"
                    >
                      <option>Under £50k</option>
                      <option>£50k - £100k</option>
                      <option>£100k - £250k</option>
                      <option>£250k - £500k</option>
                      <option>£500k+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Message / Scope Overview *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide a brief overview of your property, timeframe, or specific architectural requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 border border-[#E2E8F0] rounded-xl text-xs focus:ring-2 focus:ring-[#0284C7]"
                  />
                </div>

                <button type="submit" className="satx-btn-accent text-xs py-3 px-6 w-full">
                  Send Enquiry <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
