import React from 'react';
import type { InsightArticle } from '../types';
import { X, Clock, Calendar, CheckCircle, User } from 'lucide-react';
import { audioEngine } from '../utils/audio';

interface InsightModalProps {
  article: InsightArticle | null;
  onClose: () => void;
}

export const InsightModal: React.FC<InsightModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="glass-panel border border-cyan-500/40 w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 rounded-2xl relative tech-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            audioEngine.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
          aria-label="Close Insight Reader"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Meta */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-400 mb-4">
          <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30 font-bold">
            {article.category}
          </span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>{article.readTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>{article.date}</span>
          </div>
        </div>

        <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
          {article.title}
        </h3>

        {/* Author Byline */}
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-white/5 mb-8">
          <div className="w-9 h-9 rounded-full bg-slate-900 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
            <User className="w-5 h-5" />
          </div>
          <div>
            <div className="text-white text-xs font-bold font-mono">{article.author.name}</div>
            <div className="text-slate-400 text-[11px]">{article.author.role}</div>
          </div>
        </div>

        {/* Abstract */}
        <div className="p-5 rounded-xl bg-cyan-950/20 border-l-4 border-cyan-400 mb-8 font-light text-slate-200 text-base leading-relaxed">
          {article.abstract}
        </div>

        {/* Key Takeaways */}
        <div className="mb-8">
          <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">
            Architectural Key Takeaways
          </div>
          <div className="space-y-2.5">
            {article.keyTakeaways.map((takeaway, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-slate-950 border border-white/5 flex items-start gap-3 text-xs text-slate-300 leading-relaxed"
              >
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full Article Body */}
        <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-light mb-8 pt-6 border-t border-white/10">
          {article.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-500">
          <span>PUBLISHED BY ABC RESEARCH & ARCHITECTURE</span>
          <button
            onClick={onClose}
            className="text-cyan-400 hover:text-white uppercase font-bold cursor-pointer bg-transparent border-none"
          >
            Close Reader
          </button>
        </div>
      </div>
    </div>
  );
};
