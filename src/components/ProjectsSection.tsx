import React, { useState } from 'react';
import { Layers, ChevronRight, X, CheckCircle2, Clock, Github, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectDetail } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Practical Implementation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Projects <span className="text-gradient-cyan">Showcase</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Transparently presenting my main active project and future project spaces without exaggerated metrics.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`glass-panel rounded-3xl border border-white/10 hover:border-cyan-500/50 hover:shadow-neon-cyan/20 transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                !project.isPlaceholder ? 'border-cyan-500/30 shadow-neon-cyan/10' : 'opacity-90'
              }`}
            >
              {/* Card Banner Header */}
              <div className="p-6 bg-gradient-to-br from-navy-900 via-navy-850 to-navy-950 border-b border-white/5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-semibold">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-navy-950 border border-slate-700 text-slate-300">
                    <span className={`w-1.5 h-1.5 rounded-full ${!project.isPlaceholder ? 'bg-cyan-400 animate-pulse' : 'bg-slate-500'}`} />
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Problem Solved */}
                  <div className="p-3.5 rounded-2xl bg-navy-900/60 border border-slate-800 text-xs text-slate-300">
                    <span className="font-mono text-[10px] uppercase text-cyan-400 font-bold block mb-1">
                      Problem Solved
                    </span>
                    <p className="font-light leading-relaxed">{project.problemSolved}</p>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Technologies In Project
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologiesUsed.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-navy-900 border border-slate-700/60 text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3 flex-wrap">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 px-3.5 py-2 rounded-xl bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400 transition-all cursor-pointer"
                  >
                    <span>View Full Breakdown</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {/* GitHub button if project has a repo */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3.5 py-2 rounded-xl bg-navy-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-400 hover:shadow-neon-cyan/20 transition-all"
                    >
                      <Github className="w-3.5 h-3.5 text-cyan-400" />
                      <span>View on GitHub</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  ) : (
                    <div className="text-[11px] font-mono text-slate-500">
                      {project.isPlaceholder ? 'Placeholder' : 'Main Project'}
                    </div>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl glass-panel-glow bg-navy-900/95 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 mb-6 pr-8">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-semibold">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Status: {selectedProject.status}
              </p>
            </div>

            <div className="space-y-6 text-sm text-slate-300 font-light">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Core Purpose & Problem Addressed
                </h4>
                <p className="leading-relaxed bg-navy-950/70 p-4 rounded-2xl border border-slate-800">
                  {selectedProject.problemSolved}
                </p>
              </div>

              {/* Distinction: Confirmed Implemented vs Planned Features */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Confirmed Stages / Initial Implementation</span>
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm pl-1">
                  {selectedProject.implementedFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 font-semibold flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Planned / Discussed Features</span>
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm pl-1">
                  {selectedProject.plannedFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  My Contribution
                </h4>
                <p className="leading-relaxed text-xs sm:text-sm text-slate-300">
                  {selectedProject.myContribution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologiesUsed.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-navy-950 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer GitHub Action */}
              {selectedProject.githubUrl && (
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-electric-blue text-navy-950 font-bold text-xs font-mono shadow-neon-cyan hover:shadow-cyan-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] font-mono text-slate-400">
                    Opens in new browser tab
                  </span>
                </div>
              )}

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
