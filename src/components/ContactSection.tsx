import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/siteData';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Mail,
  MapPin,
  Lock,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { audioEngine } from '../utils/audio';

export const ContactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'project' | 'consultation' | 'direct'>('project');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    projectScope: 'Custom Software & Architecture',
    budgetRange: '$50k - $150k',
    targetTimeline: '3 - 6 Months',
    techFocus: [] as string[],
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const techOptions = [
    'AI / LLM Fine-Tuning',
    'Distributed Microservices',
    'Real-Time Streaming / Lakehouse',
    'Cloud Migration (Kubernetes)',
    'Zero-Trust Cybersecurity',
    '3D WebGL / Interactive Frontends'
  ];

  const handleTechToggle = (tech: string) => {
    audioEngine.playClick();
    setFormData((prev) => {
      const exists = prev.techFocus.includes(tech);
      return {
        ...prev,
        techFocus: exists
          ? prev.techFocus.filter((t) => t !== tech)
          : [...prev.techFocus, tech],
      };
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid corporate email';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details on your technical requirements';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    audioEngine.playClick();

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      audioEngine.playSuccess();

      // Trigger celebratory technical particle confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#00F0FF', '#0066FF', '#10B981', '#FFFFFF'],
        });
      } catch {
        // safe fallback
      }
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
        <span className="w-8 h-px bg-cyan-400" />
        <span>SECTION 12 // FINAL CONVERSION & INITIATION</span>
      </div>

      {/* Main Closing Header */}
      <div className="max-w-4xl mb-12">
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] uppercase mb-4">
          HAVE A COMPLEX PROBLEM? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
            GOOD.
          </span>
        </h2>
        <p className="text-slate-300 font-light text-lg sm:text-2xl leading-relaxed">
          Let's turn your next technology challenge into something real.
        </p>
      </div>

      {/* Interaction Mode Tabs */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        <button
          onClick={() => {
            audioEngine.playClick();
            setActiveTab('project');
          }}
          className={`px-5 py-3 rounded-xl font-mono text-xs tracking-wider transition-all cursor-pointer border ${
            activeTab === 'project'
              ? 'bg-cyan-400 text-slate-950 font-bold border-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.35)]'
              : 'glass-panel border-white/10 text-slate-400 hover:text-white'
          }`}
        >
          01. START A PROJECT
        </button>

        <button
          onClick={() => {
            audioEngine.playClick();
            setActiveTab('consultation');
          }}
          className={`px-5 py-3 rounded-xl font-mono text-xs tracking-wider transition-all cursor-pointer border ${
            activeTab === 'consultation'
              ? 'bg-cyan-400 text-slate-950 font-bold border-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.35)]'
              : 'glass-panel border-white/10 text-slate-400 hover:text-white'
          }`}
        >
          02. BOOK ARCHITECTURE CONSULTATION
        </button>

        <button
          onClick={() => {
            audioEngine.playClick();
            setActiveTab('direct');
          }}
          className={`px-5 py-3 rounded-xl font-mono text-xs tracking-wider transition-all cursor-pointer border ${
            activeTab === 'direct'
              ? 'bg-cyan-400 text-slate-950 font-bold border-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.35)]'
              : 'glass-panel border-white/10 text-slate-400 hover:text-white'
          }`}
        >
          03. DIRECT SECURE LINES
        </button>
      </div>

      {/* Tab 1: Start a Project Form */}
      {activeTab === 'project' && (
        <div className="glass-panel border border-cyan-500/30 p-8 sm:p-12 rounded-2xl relative tech-border">
          {submitted ? (
            <div className="py-16 text-center max-w-xl mx-auto flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center text-cyan-400 mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-3">
                DISPATCH TRANSMISSION CONFIRMED
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Your technical specification dossier has been routed to our Lead Architecture Team. A staff engineer will review your invariants and reply within 12 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    company: '',
                    role: '',
                    projectScope: 'Custom Software & Architecture',
                    budgetRange: '$50k - $150k',
                    targetTimeline: '3 - 6 Months',
                    techFocus: [],
                    message: '',
                  });
                }}
                className="btn-secondary text-xs"
              >
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1: Contact Basics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Alex Mercer"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans text-sm"
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@enterprise.corp"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans text-sm"
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Row 2: Company & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Global Tech Systems"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                    Scope of Engagement
                  </label>
                  <select
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400 font-sans text-sm"
                  >
                    <option value="Custom Software & Architecture">Custom Software & Architecture</option>
                    <option value="AI / ML Foundation Models">AI / ML Foundation Models</option>
                    <option value="Cloud Modernization & DevOps">Cloud Modernization & DevOps</option>
                    <option value="Zero-Trust Cybersecurity">Zero-Trust Cybersecurity</option>
                    <option value="Enterprise Web & Interactive Platforms">Enterprise Web & Interactive Platforms</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Budget & Timeline Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                    Estimated Capital Allocation
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400 font-sans text-sm"
                  >
                    <option value="$25k - $50k">$25k - $50k (Focused Assessment)</option>
                    <option value="$50k - $150k">$50k - $150k (System Delivery)</option>
                    <option value="$150k - $300k">$150k - $300k (Full Platform Build)</option>
                    <option value="$300k+">$300k+ (Enterprise Core Transformation)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                    Target Execution Window
                  </label>
                  <select
                    value={formData.targetTimeline}
                    onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400 font-sans text-sm"
                  >
                    <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                    <option value="3 - 6 Months">3 - 6 Months</option>
                    <option value="6 - 12 Months">6 - 12 Months</option>
                    <option value="Strategic Planning Phase">Strategic Planning Phase</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Technology Multi-Select Tags */}
              <div>
                <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                  Key Technical Primitives Involved
                </label>
                <div className="flex flex-wrap gap-2">
                  {techOptions.map((tech) => {
                    const isChecked = formData.techFocus.includes(tech);
                    return (
                      <button
                        type="button"
                        key={tech}
                        onClick={() => handleTechToggle(tech)}
                        className={`px-3 py-1.5 rounded-lg font-mono text-xs tracking-wider transition-all cursor-pointer border ${
                          isChecked
                            ? 'bg-cyan-950 text-cyan-300 border-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                            : 'bg-slate-950/80 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        {isChecked ? '✓ ' : '+ '}
                        {tech}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 5: Details / Message */}
              <div>
                <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                  Technical Architecture Challenge / Requirements *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your existing technical bottleneck, expected transaction volume, or architecture goals..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans text-sm"
                />
                {errors.message && (
                  <div className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Strict NDA and Intellectual Property Isolation Protected</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                >
                  {isSubmitting ? (
                    <span>ENCRYPTING & DISPATCHING...</span>
                  ) : (
                    <>
                      <span>Transmit Requirements</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Tab 2: Book Architecture Consultation */}
      {activeTab === 'consultation' && (
        <div className="glass-panel border border-cyan-500/30 p-8 sm:p-12 rounded-2xl relative tech-border">
          <div className="max-w-2xl mb-8">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              SCHEDULE A 45-MINUTE ARCHITECTURAL DEEP-DIVE
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Connect directly with an ABC Principal Architect to review your distributed systems topology, model fine-tuning feasibility, or cloud migration roadmaps. No sales representatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {['Tuesday // 14:00 UTC', 'Wednesday // 16:30 UTC', 'Thursday // 18:00 UTC'].map((slot, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-slate-950/80 border border-white/10 flex flex-col justify-between hover:border-cyan-400 transition-all cursor-pointer"
                onClick={() => {
                  audioEngine.playSuccess();
                  alert(`Consultation reserved for ${slot}. Our calendar bridge has registered your slot.`);
                }}
              >
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>OPEN SLOT #{i + 1}</span>
                </div>
                <div className="text-white font-bold text-base mb-2">{slot}</div>
                <span className="text-[11px] font-mono text-slate-400">VIA SECURE ZOOM / WEBRTC</span>
              </div>
            ))}
          </div>

          <div className="font-mono text-xs text-slate-400 pt-4 border-t border-white/10">
            CONFIDENTIAL ARCHITECTURAL SESSION // MUTUAL NDA AUTOMATICALLY ISSUED
          </div>
        </div>
      )}

      {/* Tab 3: Direct Secure Lines */}
      {activeTab === 'direct' && (
        <div className="glass-panel border border-cyan-500/30 p-8 sm:p-12 rounded-2xl relative tech-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="p-3 w-fit rounded-xl bg-cyan-950/80 text-cyan-400 mb-4 border border-cyan-500/30">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-white text-base mb-1">Direct Engineering Inbox</h4>
              <p className="text-slate-400 text-xs mb-3">For technical inquiries, RFP documents, and specifications.</p>
              <a
                href={`mailto:${COMPANY_INFO.contactEmail}`}
                className="font-mono text-xs text-cyan-400 hover:underline"
              >
                {COMPANY_INFO.contactEmail}
              </a>
            </div>

            <div>
              <div className="p-3 w-fit rounded-xl bg-cyan-950/80 text-cyan-400 mb-4 border border-cyan-500/30">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-white text-base mb-1">Primary Headquarters</h4>
              <p className="text-slate-400 text-xs mb-3">{COMPANY_INFO.headquarters}</p>
              <span className="font-mono text-xs text-slate-300">{COMPANY_INFO.coordinates}</span>
            </div>

            <div>
              <div className="p-3 w-fit rounded-xl bg-cyan-950/80 text-cyan-400 mb-4 border border-cyan-500/30">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-white text-base mb-1">PGP Key Attestation</h4>
              <p className="text-slate-400 text-xs mb-3">For encrypted threat disclosures and classified briefs.</p>
              <span className="font-mono text-[10px] text-slate-400 break-all">
                4B2F 89A1 73C0 E59D 1102 99A7 C4D1 28F0 5B9E
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
