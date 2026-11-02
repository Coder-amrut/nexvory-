import React, { useState } from 'react';
import { PROCESS_STAGES } from '../data/siteData';
import type { ProcessStage } from '../types';
import { CheckCircle2, ArrowRight, Clock, FileCheck, Layers } from 'lucide-react';
import { audioEngine } from '../utils/audio';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<ProcessStage>(PROCESS_STAGES[0]);

  return (
    <section id="process" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
        <span className="w-8 h-px bg-cyan-400" />
        <span>SECTION 07 // THE ENGINEERING LIFECYCLE</span>
      </div>

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            RIGOROUS LIFECYCLE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              FROM DISCOVERY TO SHIP.
            </span>
          </h2>
        </div>
        <p className="max-w-xl text-slate-300 font-light text-base sm:text-lg leading-relaxed">
          We treat the delivery of software systems as an audited, deterministic pipeline. Each phase concludes with immutable artifacts and formal verification milestones before the next stage begins.
        </p>
      </div>

      {/* Interactive Stage Timeline Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-10">
        {PROCESS_STAGES.map((stage) => {
          const isSelected = activeStep.step === stage.step;
          return (
            <button
              key={stage.step}
              onClick={() => {
                audioEngine.playClick();
                setActiveStep(stage);
              }}
              onMouseEnter={() => audioEngine.playHover()}
              className={`p-3.5 rounded-xl border flex flex-col items-center sm:items-start text-left transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-cyan-950/60 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.25)]'
                  : 'bg-slate-900/40 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className={`font-mono text-xs font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}>
                  {stage.step}
                </span>
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan-400' : 'bg-slate-700'}`} />
              </div>
              <span className={`font-display font-bold text-sm ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                {stage.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Deep-Dive Card */}
      <div className="glass-panel border border-cyan-500/30 p-8 sm:p-12 rounded-2xl relative tech-border">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-400 font-bold">
              PHASE {activeStep.step}
            </span>
            <span className="text-white text-base font-bold font-display">{activeStep.title}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>{activeStep.durationEstimate}</span>
            </div>
          </div>
        </div>

        {/* Phase Subtitle & Description */}
        <div className="mb-8">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-2 font-semibold">
            {activeStep.phase}
          </span>
          <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
            {activeStep.description}
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="mb-8">
          <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-cyan-400" />
            <span>Formal Client Deliverables & Artifacts</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeStep.clientReceives.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-950/80 border border-white/5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 text-xs sm:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Key Artifacts Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>KEY ARTIFACTS: <strong className="text-slate-200">{activeStep.keyArtifacts}</strong></span>
          </div>

          <div className="flex items-center gap-2 text-cyan-400 font-semibold">
            <span>CONTINUOUS AUDIT TRAILS</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};
