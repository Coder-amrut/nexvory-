import React, { useState } from 'react';
import { Compass, Zap, Shield, Target, ArrowRight } from 'lucide-react';
import { audioEngine } from '../utils/audio';

const PRINCIPLES = [
  {
    id: 'clarity',
    number: '01',
    title: 'Clarity Over Convenience',
    subtitle: 'Domain Precision First',
    description: 'We reject vague requirements and premature optimizations. Complex enterprise systems fail when boundaries are ambiguous. We rigorously model domain concepts, data ownership, and failure domains mathematically before authoring a single line of production code.',
    manifesto: 'If a system cannot be explained as a deterministic state machine, it is not ready to be deployed.',
    icon: Compass,
    metric: '100% Formal Domain Schemas'
  },
  {
    id: 'excellence',
    number: '02',
    title: 'Engineering Excellence',
    subtitle: 'Zero-Technical-Debt Standard',
    description: 'We do not build minimum viable prototypes that rot into unmaintainable legacy nightmares. Every microservice, module, and API is engineered with strict automated linting, comprehensive unit/integration test suites, and cryptographic security by default.',
    manifesto: 'True velocity is a direct byproduct of structural craftsmanship, not cut corners.',
    icon: Zap,
    metric: '>90% Continuous Test Coverage'
  },
  {
    id: 'adaptability',
    number: '03',
    title: 'Cellular Adaptability',
    subtitle: 'Decoupled for Evolution',
    description: 'Technology changes relentlessly. Rather than building brittle monoliths or sprawling, entangled dependencies, we architect modular systems that can absorb new foundational AI models, cloud regions, and database backends without system-wide regressions.',
    manifesto: 'Architectures must withstand the retirement of their own foundational dependencies.',
    icon: Shield,
    metric: 'Zero-Downtime Hot Upgrades'
  },
  {
    id: 'value',
    number: '04',
    title: 'Measurable Business Value',
    subtitle: 'Outcomes, Not Vanity Deliverables',
    description: 'We do not write code for academic indulgence. Every architectural investment must translate into measurable operational advantage: reduced compute spend, slashed human turnaround time, lower cloud bills, or higher system uptime.',
    manifesto: 'Engineering success is measured on the customer’s ledger, not in agile story points.',
    icon: Target,
    metric: '40%+ Average TCO Reduction'
  }
];

export const PhilosophySection: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState(PRINCIPLES[0]);

  return (
    <section id="philosophy" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
        <span className="w-8 h-px bg-cyan-400" />
        <span>SECTION 02 // ARCHITECTURAL PHILOSOPHY</span>
      </div>

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            HOW WE APPROACH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              COMPLEX SYSTEMS.
            </span>
          </h2>
        </div>
        <p className="max-w-xl text-slate-300 font-light text-base sm:text-lg leading-relaxed">
          Technology should not feel like an unpredictable black box. We treat enterprise software engineering as an exact, disciplined science where determinism, resilience, and business continuity are foundational prerequisites.
        </p>
      </div>

      {/* Asymmetric Interactive Philosophy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Interactive Selector List (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {PRINCIPLES.map((principle) => {
            const Icon = principle.icon;
            const isSelected = activePrinciple.id === principle.id;

            return (
              <div
                key={principle.id}
                onClick={() => {
                  audioEngine.playClick();
                  setActivePrinciple(principle);
                }}
                onMouseEnter={() => audioEngine.playHover()}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'glass-panel border-cyan-400/80 bg-cyan-950/30 shadow-[0_0_30px_rgba(0,240,255,0.15)] translate-x-2'
                    : 'glass-panel border-white/5 hover:border-white/20 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-cyan-400 font-bold">
                      {principle.number}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white">
                      {principle.title}
                    </h3>
                  </div>
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isSelected ? 'text-cyan-400' : 'text-slate-500'
                    }`}
                  />
                </div>
                <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                  <span>{principle.subtitle}</span>
                  <span className="text-cyan-400/80 font-semibold">{principle.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Deep Architectural Focus Card (7 Cols) */}
        <div className="lg:col-span-7 glass-panel border border-cyan-500/30 p-8 sm:p-12 rounded-2xl flex flex-col justify-between relative overflow-hidden tech-border">
          {/* Subtle Ambient Radial Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>PRINCIPLE ARCHIVE // {activePrinciple.number}</span>
              </div>
              <span className="text-cyan-400 font-bold">{activePrinciple.metric}</span>
            </div>

            <div className="mb-6">
              <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase block mb-2">
                {activePrinciple.subtitle}
              </span>
              <h3 className="font-display font-black text-2xl sm:text-4xl text-white mb-4">
                {activePrinciple.title}
              </h3>
              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
                {activePrinciple.description}
              </p>
            </div>

            {/* Manifesto Quote Box */}
            <div className="p-6 rounded-xl bg-slate-950/80 border-l-4 border-cyan-400 border-y border-r border-white/5 font-sans italic text-slate-200 text-sm sm:text-base leading-relaxed">
              "{activePrinciple.manifesto}"
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-400">
            <span>ABC GOVERNANCE FRAMEWORK</span>
            <div className="flex items-center gap-1.5 text-cyan-400">
              <span>EXPLORE CAPABILITIES</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
