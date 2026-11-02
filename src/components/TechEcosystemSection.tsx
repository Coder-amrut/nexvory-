import React, { useState } from 'react';
import { TECH_ECOSYSTEM } from '../data/siteData';
import { audioEngine } from '../utils/audio';

const CATEGORIES = [
  'All Technologies',
  'Frontend & Platforms',
  'Systems & Backend',
  'AI & Data Intelligence',
  'Cloud & Distributed',
  'Cybersecurity',
] as const;

export const TechEcosystemSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Technologies');

  const filteredTech = TECH_ECOSYSTEM.filter((item) => {
    if (selectedCategory === 'All Technologies') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="technology" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
        <span className="w-8 h-px bg-cyan-400" />
        <span>SECTION 08 // ARCHITECTURAL ECOSYSTEM</span>
      </div>

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            TECHNOLOGY STACK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              & PRODUCTION PRIMITIVES.
            </span>
          </h2>
        </div>
        <p className="max-w-xl text-slate-300 font-light text-base sm:text-lg leading-relaxed">
          We curate a battle-tested technical matrix optimized for low latency, memory safety, horizontal scaling, and developer ergonomics. No ephemeral hype; only proven production primitives.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-10 custom-scroll">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              audioEngine.playClick();
              setSelectedCategory(cat);
            }}
            onMouseEnter={() => audioEngine.playHover()}
            className={`px-4 py-2 rounded-xl font-mono text-xs tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer border ${
              selectedCategory === cat
                ? 'bg-cyan-400 text-slate-950 font-bold border-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredTech.map((tech, idx) => (
          <div
            key={idx}
            className="glass-panel border border-white/5 p-5 rounded-xl hover:border-cyan-400/50 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-cyan-400 tracking-wider uppercase font-semibold">
                  {tech.category}
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-950 border border-white/10 font-mono text-[9px] text-slate-400">
                  {tech.level}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {tech.name}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed font-light">
                {tech.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-500">
              <span>ABC PRODUCTION TESTED</span>
              <span className="text-emerald-400">APPROVED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
