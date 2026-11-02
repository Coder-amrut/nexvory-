import React from 'react';
import { TRUST_PROOFS } from '../data/siteData';
import { ShieldCheck, CheckCircle } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
        <span className="w-8 h-px bg-cyan-400" />
        <span>SECTION 10 // VERIFIED BENCHMARKS & TRUST CRITERIA</span>
      </div>

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            OBJECTIVE METRICS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              & AUDITED PROOF.
            </span>
          </h2>
        </div>
        <p className="max-w-xl text-slate-300 font-light text-base sm:text-lg leading-relaxed">
          We reject fabricated testimonials and vanity marketing claims. Trust is earned through quantifiable uptime records, cryptographic security compliance, and open-source benchmark validations.
        </p>
      </div>

      {/* 4 Objective Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {TRUST_PROOFS.map((proof, idx) => (
          <div
            key={idx}
            className="glass-panel border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-cyan-400/50 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3 font-mono text-[10px] text-slate-400">
                <span>BENCHMARK #{idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-black text-cyan-400 mb-2">
                {proof.value}
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2">
                {proof.label}
              </h3>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-light mt-4 pt-4 border-t border-white/5">
              {proof.description}
            </p>
          </div>
        ))}
      </div>

      {/* Formal Audit & Verification Banner */}
      <div className="glass-panel border border-cyan-500/30 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden tech-border">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-xl bg-cyan-950/80 border border-cyan-400/40 text-cyan-400 shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-display font-bold text-xl text-white mb-1">
              Zero-Trust Architecture Guarantee
            </h4>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Every production delivery includes an independent Static Application Security Testing (SAST) dossier, dependency provenance attestation, and Infrastructure-as-Code audit reports.
            </p>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <div className="px-4 py-2 rounded-lg bg-slate-950 border border-white/10 font-mono text-xs text-slate-300 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>CONTINUOUS ATTESTATION</span>
          </div>
        </div>
      </div>
    </section>
  );
};
