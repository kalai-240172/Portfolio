import React from 'react';
import { Github, Linkedin, Mail, Code, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const { socials } = PORTFOLIO_DATA;

  const repositories = [
    {
      name: "student-progression-tracker",
      description: "Full-stack student progression, marks, certificates, and daily productivity logging platform.",
      tech: "Java • Spring Boot • React • TypeScript",
      link: socials.github,
    },
    {
      name: "snapsolve-civic-reporter",
      description: "Civic issue management workflow connecting citizens, municipality officers and workers.",
      tech: "React • Firebase • Geolocation",
      link: socials.github,
    },
    {
      name: "moong-dal-quality-classification",
      description: "Computer vision and parameter-based agricultural crop purity categorization prototype.",
      tech: "Python • Streamlit • OpenCV",
      link: socials.github,
    },
  ];

  return (
    <section className="py-20 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source & Profiles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            GitHub & <span className="text-gradient-cyan">Social Presence</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Collaborative coding, active learning repositories, and professional developer networks.
          </p>
        </div>

        {/* Primary Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* GitHub Card */}
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/60 hover:shadow-neon-cyan/20 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white group-hover:border-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">GitHub</h3>
              <p className="text-xs font-mono text-cyan-400 mb-3">@kalaivanan-s</p>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Explore source code, active side-projects, algorithms, and practical implementations.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800 text-xs font-mono text-cyan-400 flex items-center gap-1">
              <span>View Repositories</span>
              <span>→</span>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/60 hover:shadow-neon-cyan/20 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-[#0a66c2] group-hover:border-cyan-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">LinkedIn</h3>
              <p className="text-xs font-mono text-sky-400 mb-3">in/kalaivanan-s</p>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Professional network, engineering student updates, technical symposiums, and opportunities.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800 text-xs font-mono text-sky-400 flex items-center gap-1">
              <span>Connect on LinkedIn</span>
              <span>→</span>
            </div>
          </a>

          {/* Email Direct */}
          <a
            href={`mailto:${socials.email}`}
            className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/60 hover:shadow-neon-cyan/20 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Email Inquiries</h3>
              <p className="text-xs font-mono text-cyan-400 mb-3">{socials.email}</p>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Reach out directly for internships, collaboration discussions, or technical conversations.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800 text-xs font-mono text-cyan-400 flex items-center gap-1">
              <span>Send An Email</span>
              <span>→</span>
            </div>
          </a>

        </div>

        {/* Highlighted Repositories Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" />
                <span>Featured Repositories Showcase</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Pinpoint links to my learning repositories and core applications.
              </p>
            </div>

            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-xl bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400 transition-colors"
            >
              <span>Visit Main Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {repositories.map((repo) => (
              <a
                key={repo.name}
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-navy-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all block group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-cyan-300 mb-2">
                  <span className="font-semibold group-hover:underline truncate max-w-[80%]">
                    {repo.name}
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-400" />
                </div>
                <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                  {repo.description}
                </p>
                <div className="text-[11px] font-mono text-slate-500">
                  {repo.tech}
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
