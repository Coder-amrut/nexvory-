import React from 'react';
import type { CaseStudyItem } from '../types';
import { X, Cpu, Database, ShieldCheck, Activity, Terminal } from 'lucide-react';
import { audioEngine } from '../utils/audio';

interface CaseStudyModalProps {
  study: CaseStudyItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose }) => {
  if (!study) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="glass-panel border border-cyan-500/40 w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 rounded-2xl relative tech-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            audioEngine.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
          aria-label="Close Case Study Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-cyan-400 mb-4">
          <span className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-500/30 font-bold">
            {study.code}
          </span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-300">{study.category}</span>
        </div>

        <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white mb-6">
          {study.title}
        </h3>

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-xl bg-slate-950/70 border border-white/10">
            <div className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider mb-2">
              The Architecture Bottleneck
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{study.problem}</p>
          </div>

          <div className="p-5 rounded-xl bg-cyan-950/30 border border-cyan-500/30">
            <div className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2">
              The ABC Engineered Solution
            </div>
            <p className="text-slate-200 text-sm leading-relaxed">{study.solution}</p>
          </div>
        </div>

        {/* Engineering Highlight */}
        <div className="p-5 rounded-xl bg-slate-900/60 border border-cyan-400/30 mb-8">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2">
            <Terminal className="w-4 h-4" />
            <span>Distinctive Engineering Innovation</span>
          </div>
          <p className="text-slate-200 text-sm leading-relaxed">{study.engineeringHighlight}</p>
        </div>

        {/* Deep Architecture Blueprint Specs */}
        <div className="mb-8">
          <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-4">
            Detailed Subsystem Architecture Specifications
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-white/5 flex items-start gap-3">
              <Database className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                  Data Ingestion Pipeline
                </span>
                <span className="text-slate-200 text-xs">{study.architectureDetails.dataIngestion}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-white/5 flex items-start gap-3">
              <Cpu className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                  Processing & Computation Engine
                </span>
                <span className="text-slate-200 text-xs">{study.architectureDetails.processingEngine}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-white/5 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                  Cryptographic Security Layer
                </span>
                <span className="text-slate-200 text-xs">{study.architectureDetails.securityLayer}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-white/5 flex items-start gap-3">
              <Activity className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                  Verified Scalability Benchmark
                </span>
                <span className="text-slate-200 text-xs">{study.architectureDetails.scalabilityMetric}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Chips & Outcome */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
          <div>
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-2">
              Core Technologies Used
            </span>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 font-mono text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="text-right">
            <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider block mb-1">
              Verified Benchmark Outcome
            </span>
            <span className="text-slate-200 text-xs font-semibold">{study.verifiedOutcome}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
