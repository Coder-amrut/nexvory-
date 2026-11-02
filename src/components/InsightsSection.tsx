import React, { useState } from 'react';
import { INSIGHTS } from '../data/siteData';
import type { InsightArticle } from '../types';
import { InsightModal } from './InsightModal';
import { Clock, ArrowUpRight } from 'lucide-react';
import { audioEngine } from '../utils/audio';

export const InsightsSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  return (
    <section id="insights" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
        <span className="w-8 h-px bg-cyan-400" />
        <span>SECTION 11 // RESEARCH & TECHNOLOGY THINKING</span>
      </div>

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            ENGINEERING INSIGHTS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              & ARCHITECTURAL PAPERS.
            </span>
          </h2>
        </div>
        <p className="max-w-xl text-slate-300 font-light text-base sm:text-lg leading-relaxed">
          Our staff engineers actively publish post-mortems, architectural decision records, and technical research on high-throughput systems, multi-agent AI, and kernel security.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {INSIGHTS.map((article) => (
          <div
            key={article.id}
            className="glass-panel border border-white/10 p-7 rounded-2xl flex flex-col justify-between hover:border-cyan-400/60 hover:bg-slate-900/80 transition-all duration-300 group cursor-pointer"
            onClick={() => {
              audioEngine.playClick();
              setActiveArticle(article);
            }}
            onMouseEnter={() => audioEngine.playHover()}
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-4">
                <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30 font-semibold">
                  {article.category}
                </span>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mb-6 line-clamp-3">
                {article.abstract}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400 text-[11px]">{article.author.name}</span>
              <span className="flex items-center gap-1 text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                <span>READ PAPER</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal */}
      <InsightModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </section>
  );
};
