import React from 'react';
import { LEADERSHIP_TEAM } from '../data/siteData';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, Terminal, Globe, Users, ArrowUpRight } from 'lucide-react';
import { audioEngine } from '../utils/audio';

export const LeadershipTeamSection: React.FC = () => {
  return (
    <section id="leadership" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
        <span className="w-8 h-px bg-cyan-400" />
        <span>SECTION 09B // LEADERSHIP & ARCHITECTURAL FOUNDERS</span>
      </div>

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
            ENGINEERING LEADERSHIP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              & FOUNDING ARCHITECTS.
            </span>
          </h2>
        </div>
        <p className="max-w-xl text-slate-300 font-light text-base sm:text-lg leading-relaxed">
          Led by formal computer application and engineering specialists. We combine academic depth with a verified track record of 10+ high-scale enterprise websites and cloud deployments delivered with 100% client satisfaction.
        </p>
      </div>

      {/* Verified Delivery Track Record Metrics Banner */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        <div className="glass-panel border border-cyan-500/40 p-6 rounded-2xl relative overflow-hidden group">
          <div className="flex items-center justify-between font-mono text-[11px] text-cyan-400 mb-2">
            <span>VERIFIED PORTFOLIO</span>
            <Globe className="w-4 h-4 text-cyan-400 animate-pulse" />
          </div>
          <div className="font-mono text-4xl sm:text-5xl font-black text-white mb-1">
            10+
          </div>
          <div className="font-display font-bold text-sm text-cyan-300 mb-1">
            Websites & Platforms Delivered
          </div>
          <p className="text-slate-400 text-xs">
            Full-cycle architecture, engineering, and live production cutover.
          </p>
        </div>

        <div className="glass-panel border border-blue-500/40 p-6 rounded-2xl relative overflow-hidden group">
          <div className="flex items-center justify-between font-mono text-[11px] text-blue-400 mb-2">
            <span>CLIENT RETENTION</span>
            <Users className="w-4 h-4 text-blue-400" />
          </div>
          <div className="font-mono text-4xl sm:text-5xl font-black text-white mb-1">
            10+
          </div>
          <div className="font-display font-bold text-sm text-blue-300 mb-1">
            Happy Enterprise Clients
          </div>
          <p className="text-slate-400 text-xs">
            Direct partnerships with verified satisfaction and ongoing technical support.
          </p>
        </div>

        <div className="glass-panel border border-emerald-500/40 p-6 rounded-2xl relative overflow-hidden group">
          <div className="flex items-center justify-between font-mono text-[11px] text-emerald-400 mb-2">
            <span>DELIVERY RECORD</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="font-mono text-4xl sm:text-5xl font-black text-emerald-400 mb-1">
            100%
          </div>
          <div className="font-display font-bold text-sm text-emerald-300 mb-1">
            On-Time Milestone Rate
          </div>
          <p className="text-slate-400 text-xs">
            Zero project delivery abandonments or budget overruns.
          </p>
        </div>

        <div className="glass-panel border border-purple-500/40 p-6 rounded-2xl relative overflow-hidden group">
          <div className="flex items-center justify-between font-mono text-[11px] text-purple-400 mb-2">
            <span>SLA RELIABILITY</span>
            <ShieldCheck className="w-4 h-4 text-purple-400" />
          </div>
          <div className="font-mono text-4xl sm:text-5xl font-black text-purple-400 mb-1">
            99.999%
          </div>
          <div className="font-display font-bold text-sm text-purple-300 mb-1">
            Cloud Architecture Uptime
          </div>
          <p className="text-slate-400 text-xs">
            Continuous zero-downtime microservices and cluster operations.
          </p>
        </div>
      </div>

      {/* Founders Leadership Profile Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {LEADERSHIP_TEAM.map((member) => (
          <div
            key={member.id}
            className="glass-panel border border-white/10 p-8 sm:p-10 rounded-2xl relative tech-border hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header Badge & Education Pill */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-6">
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>{member.education}</span>
                </span>
                <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-white/10 text-emerald-400 font-mono text-[11px] font-bold">
                  {member.verifiedDeliveries}
                </span>
              </div>

              {/* Founder Name & Title */}
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
                {member.name}
              </h3>
              <div className="font-mono text-xs sm:text-sm text-cyan-400 font-semibold mb-6 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>{member.role}</span>
              </div>

              {/* Bio & Academic Depth */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                {member.bio}
              </p>

              {/* Academic & Professional Specialization Matrix */}
              <div className="mb-6">
                <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3 font-semibold">
                  Core Architectural Specializations
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {member.specialization.map((spec, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-slate-950/80 border border-white/5 flex items-start gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Founder Metrics */}
            <div className="pt-6 border-t border-white/10">
              <div className="grid grid-cols-3 gap-2">
                {member.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-white/5 text-center">
                    <div className="font-mono text-lg sm:text-xl font-bold text-cyan-400">
                      {m.value}
                    </div>
                    <div className="font-mono text-[10px] text-slate-400 uppercase mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Verified Delivery Guarantee Callout */}
      <div className="mt-12 glass-panel border border-cyan-500/30 p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-xl bg-cyan-950/80 border border-cyan-400/40 text-cyan-400 shrink-0">
            <Award className="w-7 h-7" />
          </div>
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-1">
              Direct Access to Founding Architects
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm font-light">
              Every client project is personally architected and supervised by Amrutkiran Kshirsagar (MCA) and Pratik Salunkhe (Engineering, DevOps). No junior liaisons or outsourced third parties.
            </p>
          </div>
        </div>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            audioEngine.playClick();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="btn-primary shrink-0 !py-2.5 !px-5 !text-xs whitespace-nowrap"
        >
          <span>Connect with the Founders</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
