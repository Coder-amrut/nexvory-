import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Gauge, Menu, X, ArrowUpRight } from 'lucide-react';
import { audioEngine } from '../utils/audio';
import { COMPANY_INFO } from '../data/siteData';

interface HeaderProps {
  performanceMode: 'ultra' | 'efficient';
  onTogglePerformance: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  performanceMode,
  onTogglePerformance,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const newMuteState = audioEngine.toggleMute();
    setIsMuted(newMuteState);
  };

  const navLinks = [
    { name: 'Services', href: '#capabilities' },
    { name: 'Intelligence Core', href: '#intelligence-core' },
    { name: 'Industries', href: '#industries' },
    { name: 'Case Studies', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Insights', href: '#insights' },
  ];

  const handleLinkClick = (href: string) => {
    audioEngine.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#08090C]/85 backdrop-blur-md border-b border-white/5 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#hero');
          }}
          className="flex items-center gap-3 group text-decoration-none"
        >
          {/* Logo Glyph */}
          <div className="relative w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-cyan-400 transition-colors">
            <svg
              className="w-5 h-5 text-cyan-400 transform group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="12 2 22 20 2 20" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="9" x2="12" y2="15" strokeLinecap="round" />
              <circle cx="12" cy="17" r="1" fill="currentColor" />
            </svg>
            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-black tracking-widest text-lg text-white group-hover:text-cyan-400 transition-colors">
                {COMPANY_INFO.name}
              </span>
              <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 font-semibold tracking-wider">
                CORE
              </span>
            </div>
            <span className="font-mono text-[8px] text-slate-400 tracking-widest uppercase">
              Digital Intelligence
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              onMouseEnter={() => audioEngine.playHover()}
              className="font-sans text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors tracking-wide py-1 border-b-2 border-transparent hover:border-cyan-400/50"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & Telemetry */}
        <div className="flex items-center gap-3">
          {/* Live System Indicator */}
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/60 border border-white/5 font-mono text-[10px] text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>99.999% HEALTH</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={handleAudioToggle}
            className="p-2 rounded-lg bg-slate-900/60 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer flex items-center gap-1.5"
            title={isMuted ? 'Enable procedural ambient audio' : 'Mute ambient audio'}
            aria-label="Toggle Sound"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-slate-400" />
            ) : (
              <div className="flex items-center gap-1">
                <Volume2 className="w-4 h-4 text-cyan-400" />
                <span className="flex gap-0.5 items-end h-3">
                  <span className="w-0.5 h-2 bg-cyan-400 animate-pulse" />
                  <span className="w-0.5 h-3 bg-cyan-400 animate-pulse delay-75" />
                  <span className="w-0.5 h-1.5 bg-cyan-400 animate-pulse delay-150" />
                </span>
              </div>
            )}
          </button>

          {/* Performance Mode Toggle */}
          <button
            onClick={() => {
              audioEngine.playClick();
              onTogglePerformance();
            }}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/60 border border-white/10 text-[10px] font-mono font-medium text-slate-300 hover:text-white hover:border-cyan-400/40 transition-all cursor-pointer"
            title="Toggle between Ultra 3D and High Efficiency rendering"
          >
            <Gauge className={`w-3.5 h-3.5 ${performanceMode === 'ultra' ? 'text-cyan-400' : 'text-slate-400'}`} />
            <span>{performanceMode === 'ultra' ? '3D: ULTRA' : '3D: ECO'}</span>
          </button>

          {/* Start a Project Primary CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="hidden sm:inline-flex btn-primary !py-2 !px-4 !text-xs"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              audioEngine.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-400"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#08090C]/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 shadow-2xl transition-all">
          <div className="flex flex-col gap-4">
            <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest border-b border-white/5 pb-2">
              SYSTEM DIRECTORY // ABC
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-display text-lg font-bold text-slate-200 hover:text-cyan-400 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="btn-primary w-full text-center"
              >
                Start a Conversation
              </a>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2">
                <span>LATENCY: 12ms</span>
                <span>STATUS: OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
