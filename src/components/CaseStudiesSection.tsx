import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/siteData';
import type { CaseStudyItem } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { audioEngine } from '../utils/audio';

export const CaseStudiesSection: React.FC = () => {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudyItem | null>(null);

  return (
    <section id="work" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
        <span className="w-8 h-px bg-cyan-400" />
        <span>SECTION 06 // SELECTED WORK & CONCEPT ARCHITECTURES</span>
      </div>

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            FLAGSHIP ARCHITECTURES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              & BENCHMARK BLUEPRINTS.
            </span>
          </h2>
        </div>
        <p className="max-w-xl text-slate-300 font-light text-base sm:text-lg leading-relaxed">
          Explore our reference system architectures. Each case study represents an engineered solution to mission-critical operational challenges, clearly labelled and verified through formal simulation benchmarks.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CASE_STUDIES.map((study) => (
          <div
            key={study.id}
            className="glass-panel border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-cyan-400/60 transition-all duration-300 group tech-border relative overflow-hidden"
          >
            {/* Top Identity & Status */}
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 font-mono text-xs text-slate-400">
                <span className="px-2.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 font-bold">
                  {study.code}
                </span>
                <span className="text-slate-400">{study.category}</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {study.title}
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="font-mono text-[10px] text-red-400 uppercase tracking-wider block mb-1 font-semibold">
                    The Problem
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed">{study.problem}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider block mb-1 font-semibold">
                    The Solution
                  </span>
                  <p className="text-slate-200 text-sm leading-relaxed">{study.solution}</p>
                </div>
              </div>

              {/* Verified Outcome Badge */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 mb-6 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider block">
                    Verified Benchmark
                  </span>
                  <span className="text-slate-200 text-xs font-medium">{study.verifiedOutcome}</span>
                </div>
              </div>
            </div>

            {/* Bottom Tech Stack & Action */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {study.techStack.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-white/5 font-mono text-[10px] text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
                {study.techStack.length > 4 && (
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-500 font-mono text-[10px]">
                    +{study.techStack.length - 4}
                  </span>
                )}
              </div>

              <button
                onClick={() => {
                  audioEngine.playClick();
                  setActiveModalStudy(study);
                }}
                onMouseEnter={() => audioEngine.playHover()}
                className="flex items-center gap-1.5 font-mono text-xs text-cyan-400 hover:text-white transition-colors uppercase font-bold cursor-pointer bg-transparent border-none"
              >
                <span>Inspect Blueprint</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        study={activeModalStudy}
        onClose={() => setActiveModalStudy(null)}
      />
    </section>
  );
};
