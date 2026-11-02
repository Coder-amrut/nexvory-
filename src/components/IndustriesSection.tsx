import React, { useState } from 'react';
import { INDUSTRIES } from '../data/siteData';
import type { IndustryItem } from '../types';
import { ShieldAlert, Cpu, ArrowUpRight } from 'lucide-react';
import { audioEngine } from '../utils/audio';

export const IndustriesSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES[0]);

  return (
    <section id="industries" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
        <span className="w-8 h-px bg-cyan-400" />
        <span>SECTION 05 // SECTORS & DOMAINS</span>
      </div>

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            TARGET DOMAINS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              & INDUSTRY ADAPTATIONS.
            </span>
          </h2>
        </div>
        <p className="max-w-xl text-slate-300 font-light text-base sm:text-lg leading-relaxed">
          Technical architectures must adapt to the physical and regulatory realities of each domain. A sub-millisecond fintech ledger requires fundamentally distinct invariants than an air-gapped industrial IoT telemetry broker.
        </p>
      </div>

      {/* Industry Tabs Bar */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 custom-scroll">
        {INDUSTRIES.map((ind) => {
          const isSelected = selectedIndustry.id === ind.id;
          return (
            <button
              key={ind.id}
              onClick={() => {
                audioEngine.playClick();
                setSelectedIndustry(ind);
              }}
              onMouseEnter={() => audioEngine.playHover()}
              className={`px-5 py-3 rounded-xl font-mono text-xs tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer border ${
                isSelected
                  ? 'bg-cyan-400 text-slate-950 font-bold border-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.35)]'
                  : 'bg-slate-900/70 border-white/5 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {ind.name}
            </button>
          );
        })}
      </div>

      {/* Selected Industry Architecture Dossier */}
      <div className="glass-panel border border-cyan-500/30 p-8 sm:p-12 rounded-2xl relative tech-border">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase block mb-1">
              DOMAIN MATRIX // {selectedIndustry.badge}
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-white">
              {selectedIndustry.name}
            </h3>
          </div>
          <div className="px-4 py-2 rounded-xl bg-slate-950/80 border border-cyan-500/30 font-mono text-xs text-cyan-300 font-semibold">
            {selectedIndustry.highlightedMetrics}
          </div>
        </div>

        <p className="text-slate-200 text-lg sm:text-xl font-light mb-10 max-w-3xl">
          {selectedIndustry.tagline}
        </p>

        {/* Two-Column Problem vs Engineering Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Challenges */}
          <div className="p-6 rounded-xl bg-slate-950/60 border border-red-500/20">
            <div className="flex items-center gap-2 font-mono text-xs text-red-400 font-bold uppercase tracking-wider mb-4">
              <ShieldAlert className="w-4 h-4" />
              <span>Inherent Domain Bottlenecks & Risks</span>
            </div>
            <ul className="space-y-3">
              {selectedIndustry.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Approach */}
          <div className="p-6 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider mb-4">
              <Cpu className="w-4 h-4" />
              <span>Engineered Architectural Approach</span>
            </div>
            <p className="text-slate-200 text-sm leading-relaxed mb-4">
              {selectedIndustry.solutionApproach}
            </p>
            <div className="p-3.5 rounded-lg bg-slate-950/80 border border-cyan-400/20 font-mono text-xs text-slate-300">
              <span className="text-cyan-400 block text-[10px] uppercase tracking-wider mb-1 font-semibold">
                Reference Architecture:
              </span>
              {selectedIndustry.technicalArchitecture}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <span>COMPLIANCE & SYSTEM RESILIENCE VERIFIED</span>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              audioEngine.playClick();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 text-cyan-400 hover:text-white transition-colors font-bold uppercase"
          >
            <span>Request Domain Architecture Blueprint</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
