import React from 'react';
import { GraduationCap, Award, Calendar, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationAndCerts: React.FC = () => {
  const { education, learningJourney, certifications } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Education Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Education <span className="text-gradient-cyan">Profile</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Formal undergraduate engineering education in Chennai, India.
            </p>
          </div>

          <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-neon-cyan/10 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-950 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-neon-cyan shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {education.institution}
                  </h3>
                  <p className="text-cyan-400 font-mono text-sm mt-1">
                    {education.degree}
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  Status: {education.status}
                </span>
                <p className="text-slate-400 text-xs font-mono mt-1.5">
                  📍 {education.location}
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-2 text-xs font-mono text-slate-400">
              <p>• {education.department}</p>
              <p className="italic text-slate-500 pt-1">
                * Note: Currently pursuing undergraduate degree without fabricated CGPA, year, or unsupported claims.
              </p>
            </div>
          </div>
        </div>

        {/* Learning Journey / Activity Section */}
        <div id="journey-activity">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Activity Log</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Learning <span className="text-gradient-cyan">Journey</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A log of what I am currently learning, programming practice, and active milestones.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningJourney.map((entry, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-bold">
                      {entry.category}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {entry.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {entry.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                    {entry.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                  {entry.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-navy-900 border border-slate-700/60 text-slate-400"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Certifications Placeholder Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Certifications & <span className="text-gradient-cyan">Achievements</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Reserved placeholder section to be populated upon completion of verified credentials.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-dashed border-slate-700 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-navy-900 border border-slate-800">
                      {item.status}
                    </span>
                    <span>{item.datePlaceholder}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-300 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mb-3">
                    {item.issuer}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {item.notes}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-500 mt-4">
                  Editable in portfolioData.ts
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
