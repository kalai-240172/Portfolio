import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const LeetCodeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
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

export const Footer: React.FC = () => {
  const { personal, socials } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-cyan-500/15 bg-navy-950/95 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-electric-blue flex items-center justify-center font-mono font-bold text-navy-950 shadow-neon-cyan">
              &lt;K/&gt;
            </div>
            <div>
              <p className="font-mono text-sm font-bold text-white tracking-wider">
                {personal.name}
              </p>
              <p className="text-xs text-slate-400 font-mono">
                {personal.title} • {personal.college}
              </p>
            </div>
          </div>

          {/* Social Icons with exact links */}
          <div className="flex items-center gap-3">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-navy-900 border border-slate-700 text-slate-300 hover:text-[#0a66c2] hover:border-cyan-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-navy-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-navy-900 border border-slate-700 text-slate-300 hover:text-[#FFA116] hover:border-[#FFA116] transition-colors"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>

        </div>

        {/* Bottom Details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p>Rajalakshmi Institute of Technology, Chennai • Computer Science & Engineering</p>
        </div>

      </div>
    </footer>
  );
};
