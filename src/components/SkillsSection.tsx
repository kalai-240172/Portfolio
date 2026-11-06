import React from 'react';
import { Sparkles, Terminal, ShieldCheck, Clock, Brain } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { currentSkills, upcomingSkills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Honest Technical Profile</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient-cyan">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Grounded in transparency — showing only technologies I am genuinely learning, with future AI/ML domains clearly designated as planned learning.
          </p>
        </div>

        {/* 1. Genuine Current Active Skill Card */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f2fe]" />
              <h3 className="text-lg font-bold font-mono uppercase tracking-wider text-white">
                Current Active Learning
              </h3>
            </div>

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
                      <h4 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
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
                    <span>Variables, Loops, Functions, OOP & Problem-Solving</span>
                  </span>
                  <span className="text-cyan-400 font-semibold">
                    Active Daily Practice
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 2. Distinct Section for Planned / Upcoming Technologies */}
          <div className="pt-6">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
              <div className="flex items-center gap-2.5">
                <Brain className="w-4 h-4 text-cyan-400" />
                <h3 className="text-lg font-bold font-mono uppercase tracking-wider text-white">
                  Planned Learning & Future AI/ML Domains
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400">
                Step-by-Step Curriculum
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {upcomingSkills.map((category) => (
                <div
                  key={category.category}
                  className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h4 className="text-base font-bold text-slate-200">
                        {category.category}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-navy-950 border border-slate-700 text-slate-400">
                        <Clock className="w-3 h-3 text-slate-500" />
                        <span>{category.status}</span>
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
                      {category.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-navy-900 border border-slate-700/60 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Transparency Note */}
          <div className="p-5 rounded-2xl bg-navy-900/60 border border-slate-800 text-xs text-slate-400 leading-relaxed space-y-1 font-mono">
            <p className="text-slate-300 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Strict Transparency Note:</span>
            </p>
            <p>
              I do not claim NumPy, Pandas, Matplotlib, Seaborn, Machine Learning, Deep Learning, TensorFlow, or PyTorch as mastered skills. They are structured as part of my planned progression below.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
