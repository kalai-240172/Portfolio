import React from 'react';
import { Mail, Linkedin, Github, ExternalLink, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Custom LeetCode Icon
const LeetCodeIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    role="img"
    aria-label="LeetCode"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.607 2.6 2.6 0 0 1 .388-.392l4.271-4.57 5.405-5.787a1.377 1.377 0 0 0-.012-1.951A1.37 1.37 0 0 0 13.483 0zm-2.88 7.283a1.374 1.374 0 0 0-.961.438L3.23 14.133a1.376 1.376 0 0 0 1.953 1.944l6.412-6.412a1.376 1.376 0 0 0-.992-2.382z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const { socials } = PORTFOLIO_DATA;

  const handleLaunchEmailClient = () => {
    window.location.href = `mailto:${socials.email}?subject=Contact%20Inquiry%20for%20Kalaivanan%20S`;
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Reach out directly for student collaborations, learning discussions, or professional queries.
          </p>
        </div>

        {/* Clean Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Email Card */}
          <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-400/60 hover:shadow-neon-cyan/20 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Email</h3>
              <p className="text-xs font-mono text-cyan-400 mb-3 break-all">{socials.email}</p>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Direct email for software engineering discussions, questions, and collaborations.
              </p>
            </div>
            
            <button
              onClick={handleLaunchEmailClient}
              className="mt-6 pt-4 border-t border-slate-800 w-full inline-flex items-center justify-between text-xs font-mono text-cyan-300 hover:text-white transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5 text-cyan-400" />
                <span>Open Mail App</span>
              </span>
              <span>→</span>
            </button>
          </div>

          {/* LinkedIn Card */}
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-400/60 hover:shadow-neon-cyan/20 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0a66c2]/15 border border-[#0a66c2]/30 flex items-center justify-center text-[#0a66c2] mb-4 group-hover:scale-105 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white mb-1">LinkedIn</h3>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <p className="text-xs font-mono text-cyan-400 mb-3">kalaivanan200705</p>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Connect with me professionally to follow my learning journey and milestones.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-cyan-300 flex items-center justify-between">
              <span>View Profile</span>
              <span>→</span>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-400/60 hover:shadow-neon-cyan/20 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white mb-1">GitHub</h3>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <p className="text-xs font-mono text-cyan-400 mb-3">@kalai-240172</p>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Explore my code repositories, projects in progress, and daily learning commits.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-cyan-300 flex items-center justify-between">
              <span>Browse Repositories</span>
              <span>→</span>
            </div>
          </a>

        </div>

        {/* LeetCode Direct Banner */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#FFA116]/10 border border-[#FFA116]/30 flex items-center justify-center text-[#FFA116]">
              <LeetCodeIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">LeetCode Profile</h4>
              <p className="text-xs text-slate-400 font-mono">u/Kalai240172</p>
            </div>
          </div>

          <a
            href={socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 border border-slate-700 hover:border-[#FFA116] text-xs font-mono text-slate-200 hover:text-white transition-colors"
          >
            <span>Visit LeetCode</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
