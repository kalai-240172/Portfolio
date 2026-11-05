import React from 'react';
import { ArrowRight, Mail, Sparkles, Terminal, Linkedin, Github } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Custom LeetCode SVG Icon
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

export const HeroSection: React.FC = () => {
  const { personal, socials } = PORTFOLIO_DATA;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Student & Learning Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-mono tracking-wide shadow-neon-cyan backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Currently Learning: {personal.currentlyLearning}</span>
            </div>

            {/* Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                {personal.name}
              </h1>
              <div className="pt-1">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-electric-blue">
                  {personal.title}
                </span>
              </div>
            </div>

            {/* Introduction paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              "{personal.heroIntroduction}"
            </p>

            {/* College & Degree Pill */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-slate-300 pt-1">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-900/80 border border-slate-800">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                {personal.educationBrief}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-900/80 border border-slate-800">
                <span className="text-cyan-400">📍</span>
                {personal.college}
              </span>
            </div>

            {/* Two Required Hero Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-navy-950 bg-gradient-to-r from-cyan-400 to-electric-blue shadow-neon-cyan hover:shadow-cyan-400/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 glass-panel border border-cyan-500/30 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Profile Icons directly below introduction */}
            <div className="pt-2 flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Verified Social Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-navy-900/90 border border-slate-700/80 text-slate-300 hover:text-[#0a66c2] hover:border-cyan-400 hover:shadow-neon-cyan/20 transition-all duration-200 group"
                  aria-label="LinkedIn Profile - Kalaivanan S"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-navy-900/90 border border-slate-700/80 text-slate-300 hover:text-white hover:border-cyan-400 hover:shadow-neon-cyan/20 transition-all duration-200 group"
                  aria-label="GitHub Profile - Kalaivanan S"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href={socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-navy-900/90 border border-slate-700/80 text-slate-300 hover:text-[#FFA116] hover:border-[#FFA116]/60 hover:shadow-[0_0_15px_rgba(255,161,22,0.25)] transition-all duration-200 group"
                  aria-label="LeetCode Profile - Kalaivanan S"
                >
                  <LeetCodeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Portrait Presentation */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative group">
              
              {/* Subtle Cyan / Blue Glow Aura */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-sky-500 to-electric-blue rounded-full opacity-35 blur-2xl group-hover:opacity-60 transition duration-700 animate-pulse-glow" />
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-electric-blue rounded-full opacity-45 blur-md" />
              
              {/* Outer Cyan Ring with Soft Rounded Presentation */}
              <div className="relative p-1.5 rounded-full bg-gradient-to-b from-cyan-400 via-sky-500 to-navy-900 shadow-neon-cyan animate-float-slow">
                <div className="rounded-full p-2 bg-navy-950/90 backdrop-blur-xl border border-cyan-400/40">
                  
                  {/* Portrait Image Container preserving original proportions and artwork */}
                  <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 rounded-full overflow-hidden bg-navy-900 border-2 border-cyan-300/40 shadow-inner">
                    <img
                      src={personal.avatar}
                      alt={`${personal.name} - ${personal.title}`}
                      className="w-full h-full object-cover object-center transform transition duration-500 group-hover:scale-105"
                      loading="eager"
                    />

                    {/* Subtle internal ring reflection */}
                    <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-inset ring-white/10" />
                  </div>
                </div>

                {/* Floating Active Focus Badge */}
                <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:-left-6 px-4 py-2 rounded-2xl glass-panel-glow border border-cyan-400/50 shadow-xl flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-mono text-sm font-bold">
                    🐍
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Current Focus</p>
                    <p className="text-xs font-semibold text-white">Python Logic</p>
                  </div>
                </div>

                {/* Floating Status Sparkle */}
                <div className="absolute -top-2 -right-2 sm:top-6 sm:-right-4 px-4 py-2 rounded-2xl glass-panel-glow border border-cyan-400/50 shadow-xl flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-semibold text-white">CSE Student</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
