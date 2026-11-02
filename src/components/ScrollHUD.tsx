import React, { useEffect, useState } from 'react';
import { audioEngine } from '../utils/audio';

const CHAPTERS = [
  { id: 'hero', number: '01', label: 'ENTRY' },
  { id: 'philosophy', number: '02', label: 'PHILOSOPHY' },
  { id: 'capabilities', number: '03', label: 'SERVICES' },
  { id: 'intelligence-core', number: '04', label: 'CORE' },
  { id: 'industries', number: '05', label: 'INDUSTRIES' },
  { id: 'work', number: '06', label: 'CASE STUDIES' },
  { id: 'process', number: '07', label: 'PROCESS' },
  { id: 'technology', number: '08', label: 'TECH MATRIX' },
  { id: 'why-abc', number: '09', label: 'WHY ABC' },
  { id: 'trust', number: '10', label: 'PROOF' },
  { id: 'insights', number: '11', label: 'INSIGHTS' },
  { id: 'contact', number: '12', label: 'CONTACT' },
];

export const ScrollHUD: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState('hero');
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollPercent(Math.round(progress));

      // Determine active section based on element scroll positions
      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const el = document.getElementById(CHAPTERS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveChapter(CHAPTERS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    audioEngine.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Chapter Navigation"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 select-none"
    >
      {/* Chapter Indicator Track */}
      <div className="flex flex-col items-end gap-2 pr-1">
        {CHAPTERS.map((chap) => {
          const isActive = activeChapter === chap.id;
          return (
            <button
              key={chap.id}
              onClick={() => scrollTo(chap.id)}
              onMouseEnter={() => audioEngine.playHover()}
              className="group flex items-center gap-3 py-1 cursor-pointer bg-transparent border-none text-right transition-all duration-300"
              title={`Jump to ${chap.label}`}
            >
              <span
                className={`font-mono text-[10px] tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'text-cyan-400 font-bold opacity-100 translate-x-0'
                    : 'text-slate-500 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0'
                }`}
              >
                {chap.number} {chap.label}
              </span>
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-6 h-1 bg-cyan-400 shadow-[0_0_10px_#00F0FF]'
                    : 'w-2 h-1 bg-slate-700 group-hover:bg-slate-400 group-hover:w-3'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Numerical Telemetry Tag */}
      <div className="mt-4 px-2 py-1 glass-pill border border-white/10 font-mono text-[9px] text-slate-400 tracking-wider">
        CH-{CHAPTERS.find((c) => c.id === activeChapter)?.number || '01'} // {scrollPercent}%
      </div>
    </aside>
  );
};
