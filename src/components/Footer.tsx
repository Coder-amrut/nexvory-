import React from 'react';
import { COMPANY_INFO, SERVICES } from '../data/siteData';
import { ArrowUp } from 'lucide-react';
import { audioEngine } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    audioEngine.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#060709] pt-20 pb-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid: Brand & Link Directories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 22 20 2 20" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                    <circle cx="12" cy="17" r="1" fill="currentColor" />
                  </svg>
                </div>
                <span className="font-display font-extrabold text-xl text-white tracking-widest">
                  {COMPANY_INFO.name}
                </span>
              </div>

              <p className="text-slate-400 text-sm font-light max-w-sm leading-relaxed mb-6">
                {COMPANY_INFO.tagline} Architecting resilient software backends, neural inference models, distributed cloud infrastructure, and zero-trust cybersecurity for modern enterprises.
              </p>

              <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{COMPANY_INFO.status}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 font-mono text-xs text-slate-500">
              COORDINATES: {COMPANY_INFO.coordinates}
            </div>
          </div>

          {/* Column 1: Capabilities */}
          <div>
            <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4 font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-slate-400">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a
                    href="#capabilities"
                    onClick={(e) => {
                      e.preventDefault();
                      audioEngine.playClick();
                      document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Advanced Solutions */}
          <div>
            <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4 font-semibold">
              Architecture
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-slate-400">
              {SERVICES.slice(5, 10).map((s) => (
                <li key={s.id}>
                  <a
                    href="#capabilities"
                    onClick={(e) => {
                      e.preventDefault();
                      audioEngine.playClick();
                      document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate & Compliance */}
          <div>
            <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4 font-semibold">
              Organization
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-slate-400">
              <li>
                <a
                  href="#philosophy"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Engineering Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Reference Architectures
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Engineering Process
                </a>
              </li>
              <li>
                <a
                  href="#insights"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Technical Papers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact & RFP Submission
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Metadata & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-6">
            <span>© {currentYear} {COMPANY_INFO.legalName} ALL RIGHTS RESERVED.</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">PRIVACY PROTOCOL</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">TERMS OF SERVICE</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">SECURITY DISCLOSURES</span>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => audioEngine.playHover()}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all cursor-pointer"
          >
            <span>RETURN TO SUMMIT</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
