import React from 'react';
import { Sparkles, Terminal, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { currentSkills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Honest Technical Profile</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Current <span className="text-gradient-cyan">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Grounded in transparency — showing only technologies I am genuinely learning and actively practising.
          </p>
        </div>

        {/* Current Active Skills Card */}
        <div className="max-w-3xl mx-auto space-y-6">
          {currentSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-400/40 bg-navy-900/85 shadow-neon-cyan/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-400/50 flex items-center justify-center text-cyan-300 font-mono text-xl shadow-neon-cyan">
                    🐍
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 font-medium">
                      {skill.focus}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f2fe]" />
                    <span>{skill.status}</span>
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mt-3">
                {skill.notes}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Programming Syntax, Functions & Control Logic</span>
                </span>
                <span className="text-cyan-400 font-semibold">
                  Active Daily Practice
                </span>
              </div>
            </div>
          ))}

          {/* Transparent Academic Disclosure Notice */}
          <div className="p-5 rounded-2xl bg-navy-900/60 border border-slate-800 text-xs text-slate-400 leading-relaxed space-y-1 font-mono">
            <p className="text-slate-300 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Honest Representation Note:</span>
            </p>
            <p>
              I do not claim expert-level mastery or list technologies I haven't yet learned as current skills. All upcoming domains (HTML, CSS, JavaScript, React, Spring Boot, SQL, DSA, etc.) are structured in my step-by-step roadmap below.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
