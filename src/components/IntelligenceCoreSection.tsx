import React from 'react';
import { INTELLIGENCE_COMPONENTS } from '../data/siteData';
import { Cpu, Cloud, ShieldCheck, Layers, Activity, Radio, CheckCircle2 } from 'lucide-react';
import { audioEngine } from '../utils/audio';

const COMPONENT_ICONS: Record<string, React.ElementType> = {
  software: Layers,
  ai: Cpu,
  cloud: Cloud,
  security: ShieldCheck,
};

interface IntelligenceCoreSectionProps {
  activeComponent: 'software' | 'ai' | 'cloud' | 'security' | null;
  onSelectComponent: (comp: 'software' | 'ai' | 'cloud' | 'security' | null) => void;
}

export const IntelligenceCoreSection: React.FC<IntelligenceCoreSectionProps> = ({
  activeComponent,
  onSelectComponent,
}) => {
  const currentComp =
    INTELLIGENCE_COMPONENTS.find((c) => c.id === activeComponent) || INTELLIGENCE_COMPONENTS[1];

  const handleSelect = (id: 'software' | 'ai' | 'cloud' | 'security') => {
    audioEngine.playPulse();
    if (activeComponent === id) {
      onSelectComponent(null);
    } else {
      onSelectComponent(id);
    }
  };

  return (
    <section id="intelligence-core" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
        <span className="w-8 h-px bg-cyan-400" />
        <span>SECTION 04 // THE INTELLIGENCE CORE</span>
      </div>

      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase mb-6">
          CONVERGENCE OF <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
            DIGITAL INTELLIGENCE.
          </span>
        </h2>
        <p className="text-slate-300 font-light text-base sm:text-lg leading-relaxed">
          Modern enterprise systems cannot survive as fragmented silos. Software logic, neural models, distributed cloud nodes, and cryptographic perimeters operate here as an interconnected, continuous computational organism.
        </p>
      </div>

      {/* Live Interactive Control Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 4 Subsystem Selector Badges (4 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="font-mono text-xs text-slate-400 uppercase tracking-widest pb-2 border-b border-white/10 flex items-center justify-between">
            <span>INTERACTIVE TOPOLOGY ENGINE</span>
            <span className="text-cyan-400 text-[10px] animate-pulse">LIVE TELEMETRY</span>
          </div>

          {INTELLIGENCE_COMPONENTS.map((comp) => {
            const Icon = COMPONENT_ICONS[comp.id];
            const isSelected = activeComponent === comp.id;

            return (
              <div
                key={comp.id}
                role="button"
                tabIndex={0}
                onClick={() => handleSelect(comp.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelect(comp.id);
                  }
                }}
                onMouseEnter={() => audioEngine.playHover()}
                className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'glass-panel border-cyan-400 bg-cyan-950/50 shadow-[0_0_30px_rgba(0,240,255,0.25)] translate-x-2'
                    : 'glass-panel border-white/5 hover:border-cyan-400/40 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg border ${
                        isSelected
                          ? 'bg-cyan-400/20 border-cyan-400 text-cyan-300'
                          : 'bg-slate-900 border-white/10 text-slate-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-white">{comp.name}</h3>
                      <span className="font-mono text-[11px] text-slate-400">{comp.tagline}</span>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-[9px] px-2 py-0.5 rounded-full border ${
                      isSelected
                        ? 'bg-cyan-400 text-slate-950 font-bold border-cyan-300'
                        : 'bg-slate-900/80 border-white/10 text-slate-400'
                    }`}
                  >
                    {comp.status}
                  </span>
                </div>

                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>SELECT TO ISOLATE 3D MESH</span>
                  <Radio className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400 animate-pulse' : 'text-slate-600'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed Telemetry Readout for Selected Component (7 Cols) */}
        <div className="lg:col-span-7 glass-panel border border-cyan-500/30 p-8 sm:p-10 rounded-2xl relative tech-border">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>ISOLATION BUFFER: {currentComp.name.toUpperCase()}</span>
            </div>
            <span className="text-emerald-400 font-bold">STATE: 100% NOMINAL</span>
          </div>

          <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase block mb-1">
            {currentComp.tagline}
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            {currentComp.headline}
          </h3>
          <p className="text-slate-300 text-base font-light leading-relaxed mb-8">
            {currentComp.description}
          </p>

          {/* Real-time Metrics Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {currentComp.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/80 border border-white/5 flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                  {m.label}
                </span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-cyan-400">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Architectural Protocols */}
          <div>
            <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">
              Standard Protocols & Verification Standards
            </div>
            <div className="flex flex-wrap gap-2">
              {currentComp.keyProtocols.map((proto, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-white/10 font-mono text-xs text-slate-300 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{proto}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
