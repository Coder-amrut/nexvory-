import React from 'react';
import { WHY_ABC } from '../data/siteData';
import { Terminal, ShieldCheck, Users, Lock, Key, Gauge } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Terminal,
  ShieldCheck,
  Users,
  Lock,
  Key,
  Gauge
};

export const WhyABCSection: React.FC = () => {
  return (
    <section id="why-abc" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
        <span className="w-8 h-px bg-cyan-400" />
        <span>SECTION 09 // THE ABC ADVANTAGE</span>
      </div>

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            WHY MODERN ENTERPRISES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              TRUST ABC ENGINEERING.
            </span>
          </h2>
        </div>
        <p className="max-w-xl text-slate-300 font-light text-base sm:text-lg leading-relaxed">
          We exist to eliminate the structural failures of traditional IT outsourcing. No bloated middle management, no unmaintainable spaghetti code, and no hand-waving promises.
        </p>
      </div>

      {/* 6 Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHY_ABC.map((pillar, idx) => {
          const Icon = ICON_MAP[pillar.icon] || Terminal;
          return (
            <div
              key={idx}
              className="glass-panel border border-white/10 p-8 rounded-2xl hover:border-cyan-400/60 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between group tech-border"
            >
              <div>
                <div className="p-3 w-fit rounded-xl bg-slate-950 border border-white/10 text-cyan-400 mb-6 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 font-mono text-[11px] text-slate-500 flex items-center justify-between">
                <span>PILLAR 0{idx + 1}</span>
                <span className="text-cyan-400">ENFORCED</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
