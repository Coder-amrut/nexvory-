import React, { useState } from 'react';
import { SERVICES } from '../data/siteData';
import type { ServiceItem } from '../types';
import {
  Code2,
  Cpu,
  Bot,
  Cloud,
  ShieldCheck,
  Database,
  Globe,
  Network,
  Layers,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { audioEngine } from '../utils/audio';

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Cpu,
  Bot,
  Cloud,
  ShieldCheck,
  Database,
  Globe,
  Network,
  Layers,
  Sparkles
};

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES[0]);
  const [activeCategory, setActiveCategory] = useState<'all' | 'systems' | 'ai' | 'cloud'>('all');

  const filteredServices = SERVICES.filter((s) => {
    if (activeCategory === 'systems') return ['custom-software', 'web-platforms', 'api-integration', 'ui-ux-engineering'].includes(s.id);
    if (activeCategory === 'ai') return ['ai-ml', 'ai-automation', 'data-engineering'].includes(s.id);
    if (activeCategory === 'cloud') return ['cloud-devops', 'cybersecurity', 'tech-modernization'].includes(s.id);
    return true;
  });

  const SelectedIcon = ICON_MAP[selectedService.iconName] || Code2;

  return (
    <section id="capabilities" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
        <span className="w-8 h-px bg-cyan-400" />
        <span>SECTION 03 // WHAT WE BUILD</span>
      </div>

      {/* Section Title & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            ENTERPRISE CAPABILITIES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              & SERVICE DOMAINS.
            </span>
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900/80 border border-white/10">
          {(['all', 'systems', 'ai', 'cloud'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                audioEngine.playClick();
                setActiveCategory(cat);
              }}
              onMouseEnter={() => audioEngine.playHover()}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-cyan-400 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Dual-Column Spatial Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Service Directory (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3 max-h-[750px] overflow-y-auto pr-2 custom-scroll">
          {filteredServices.map((svc) => {
            const Icon = ICON_MAP[svc.iconName] || Code2;
            const isSelected = selectedService.id === svc.id;

            return (
              <div
                key={svc.id}
                onClick={() => {
                  audioEngine.playClick();
                  setSelectedService(svc);
                }}
                onMouseEnter={() => audioEngine.playHover()}
                className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'glass-panel border-cyan-400 bg-cyan-950/40 translate-x-2 shadow-[0_0_25px_rgba(0,240,255,0.18)]'
                    : 'glass-panel border-white/5 hover:border-white/20 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2.5 rounded-lg border transition-colors ${
                      isSelected
                        ? 'bg-cyan-400/20 border-cyan-400 text-cyan-300'
                        : 'bg-slate-900 border-white/10 text-slate-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-cyan-400 font-bold">{svc.number}</span>
                      <h3 className="font-display font-bold text-base text-white">{svc.title}</h3>
                    </div>
                    <span className="font-mono text-[11px] text-slate-400 line-clamp-1">
                      {svc.metrics}
                    </span>
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Right Column: Deep Architectural Specification Inspector (7 Cols) */}
        <div className="lg:col-span-7 glass-panel border border-cyan-500/30 p-8 sm:p-10 rounded-2xl relative tech-border">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
                <SelectedIcon className="w-5 h-5" />
              </span>
              <div>
                <span className="text-slate-400">SPECIFICATION // {selectedService.number}</span>
                <div className="text-white font-bold">{selectedService.title}</div>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 font-semibold text-[11px]">
              {selectedService.metrics}
            </span>
          </div>

          {/* Description & Value */}
          <div className="mb-8">
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
              {selectedService.tagline}
            </h4>
            <p className="text-slate-300 text-base leading-relaxed mb-6 font-light">
              {selectedService.description}
            </p>

            {/* Business Value Highlight Box */}
            <div className="p-5 rounded-xl bg-slate-950/70 border-l-4 border-cyan-400 border border-white/5">
              <div className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider mb-1 font-semibold">
                Quantified Business Value
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">
                {selectedService.businessValue}
              </p>
            </div>
          </div>

          {/* Technical Capabilities Matrix */}
          <div className="mb-8">
            <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">
              Technical Capabilities & Architecture
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedService.technicalCapabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-900/60 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Architecture Focus & CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-400">
            <div>
              <span className="text-slate-500 block text-[10px]">ARCHITECTURE SPECIFICATION</span>
              <span className="text-slate-300 text-xs">{selectedService.architectureFocus}</span>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                audioEngine.playClick();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-bold tracking-wider uppercase shrink-0"
            >
              <span>Consult on this stack</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
