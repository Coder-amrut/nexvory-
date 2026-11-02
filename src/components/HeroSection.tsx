import React from 'react';
import { ArrowDown, ArrowUpRight, Cpu, ShieldCheck, Database, Terminal } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import { audioEngine } from '../utils/audio';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    audioEngine.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 pointer-events-none"
    >
      {/* Top Technical Metadata Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-slate-400 border-b border-white/10 pb-4 pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-semibold text-slate-200">INIT: DIGITAL INTELLIGENCE</span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-400">{COMPANY_INFO.coordinates}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-slate-400 text-[10px]">
            ARCHITECTURAL KERNEL v4.19
          </span>
          <span className="text-cyan-400 font-mono">EST. {COMPANY_INFO.foundedYear}</span>
        </div>
      </div>

      {/* Main Editorial Hero Typography & Content */}
      <div className="my-auto py-12 max-w-4xl pointer-events-auto">
        {/* Subtle Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-6">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>ENTERPRISE TECHNOLOGY & AI ARCHITECTURE</span>
        </div>

        {/* Massive Editorial Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.04] text-white uppercase mb-6">
          WE ENGINEER <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
            WHAT'S NEXT.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="font-sans text-lg sm:text-xl md:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed mb-10">
          {COMPANY_INFO.subheadline}
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollTo('capabilities')}
            onMouseEnter={() => audioEngine.playHover()}
            className="btn-primary"
          >
            <span>Explore Our Capabilities</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            onMouseEnter={() => audioEngine.playHover()}
            className="btn-secondary"
          >
            <span>Start a Conversation</span>
          </button>
        </div>

        {/* Micro Telemetry Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12 mt-12 border-t border-white/10">
          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <div className="font-mono text-xs text-white font-bold">DETERMINISTIC AI</div>
              <div className="text-[11px] text-slate-400">Quantized Neural Inference</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Database className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="font-mono text-xs text-white font-bold">STREAMING MESH</div>
              <div className="text-[11px] text-slate-400">Sub-Second Lakehouses</div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="font-mono text-xs text-white font-bold">ZERO-TRUST SEC</div>
              <div className="text-[11px] text-slate-400">mTLS & Kernel eBPF</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="flex items-center justify-between pt-6 border-t border-white/5 pointer-events-auto">
        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>SCROLL TO TRAVERSE THE DIGITAL INTELLIGENCE</span>
        </div>

        <button
          onClick={() => scrollTo('philosophy')}
          onMouseEnter={() => audioEngine.playHover()}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors group cursor-pointer bg-transparent border-none"
        >
          <span>CHAPTER 02: PHILOSOPHY</span>
          <ArrowDown className="w-4 h-4 text-cyan-400 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
