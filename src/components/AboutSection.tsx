import React from 'react';
import { Target, Sparkles, Brain, Network, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { about, personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Brain className="w-3.5 h-3.5" />
            <span>Identity & Direction</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Computer Science student driven by continuous learning, problem-solving, and building intelligent software solutions.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-5 leading-relaxed text-slate-300 text-base sm:text-lg font-light">
              {about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Dedicated Career Goal Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-cyan-500/40 bg-gradient-to-r from-cyan-950/40 via-navy-900/80 to-blue-950/40 shadow-neon-cyan/15 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-sm mt-0.5">
                  <Target className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Career Goal</span>
                  </span>
                  <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
                    "{personal.careerGoalStatement}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Academic & Goal Overview Card */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase font-mono">Academic Hub</h3>
                  <p className="text-xs text-slate-400">Chennai, Tamil Nadu</p>
                </div>
              </div>

              <div className="space-y-3 text-xs font-mono">
                {about.highlights.map((h, i) => (
                  <div key={i} className="p-3 rounded-xl bg-navy-900/60 border border-slate-800">
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">{h.label}</span>
                    <span className="text-slate-200 font-semibold text-xs mt-0.5 block">{h.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/25 text-xs text-slate-300 flex items-start gap-3">
              <Compass className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
              <span>
                "I believe in learning concepts step by step, practising consistently, and applying my knowledge through practical projects."
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
