import React, { useState } from 'react';
import { 
  Compass, 
  CircleDashed, 
  Clock, 
  Terminal, 
  Code2, 
  Server, 
  Database, 
  Cpu, 
  Briefcase,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const RoadmapSection: React.FC = () => {
  const { roadmap } = PORTFOLIO_DATA;
  const [expandedStage, setExpandedStage] = useState<number | null>(1); // Open Stage 1 by default

  const getStageIcon = (stageNumber: number) => {
    switch (stageNumber) {
      case 1: return Terminal;   // Programming Fundamentals (Python)
      case 2: return Code2;      // Frontend Development
      case 3: return Server;     // Backend Development
      case 4: return Database;   // Database Management
      case 5: return Cpu;        // Computer Science Fundamentals
      case 6: return Briefcase;  // Professional Development
      default: return Compass;
    }
  };

  return (
    <section id="roadmap" className="py-24 relative z-10 border-t border-slate-800/60 overflow-hidden">
      
      {/* Background soft glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured Path</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Learning <span className="text-gradient-cyan">Roadmap</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            A planned 6-stage engineering roadmap showing my current active learning and future technical milestones.
          </p>
        </div>

        {/* Roadmap Connected Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Cable Line */}
          <div className="absolute left-5 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400 via-sky-500 to-slate-800" />

          <div className="space-y-8 sm:space-y-10 relative">
            {roadmap.map((stage) => {
              const StageIcon = getStageIcon(stage.stageNumber);
              const isActive = stage.status === 'Active / In Progress';
              const isExpanded = expandedStage === stage.stageNumber;

              return (
                <div key={stage.stageNumber} className="relative pl-14 sm:pl-20 group">
                  
                  {/* Connected Roadmap Node */}
                  <div
                    onClick={() => setExpandedStage(isExpanded ? null : stage.stageNumber)}
                    className={`absolute left-1.5 sm:left-4 top-4 -translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-2xl border-2 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-10 cursor-pointer ${
                      isActive
                        ? 'border-cyan-400 bg-cyan-950/90 text-cyan-300 shadow-neon-cyan'
                        : 'border-slate-700 bg-navy-900/80 text-slate-400'
                    }`}
                    title={`Stage ${stage.stageNumber}: ${stage.stageTitle}`}
                  >
                    <StageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  {/* Stage Card */}
                  <div
                    className={`glass-panel p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                      isActive
                        ? 'border-cyan-400/50 shadow-neon-cyan/20 bg-navy-900/90'
                        : 'border-white/10 hover:border-cyan-500/30'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                            Stage {stage.stageNumber}
                          </span>
                          <span className="font-mono text-xs text-cyan-400">
                            {stage.subtitle}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {stage.stageTitle}
                        </h3>
                      </div>

                      {/* Status Badge */}
                      <div>
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                            isActive
                              ? 'text-cyan-300 bg-cyan-500/15 border-cyan-400/40 shadow-neon-cyan/20'
                              : 'text-slate-400 bg-slate-800/40 border-slate-700/50'
                          }`}
                        >
                          {isActive ? (
                            <>
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f2fe]" />
                              <CircleDashed className="w-3.5 h-3.5 text-cyan-400" />
                              <span>Current Active Learning</span>
                            </>
                          ) : (
                            <>
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span>Upcoming Learning</span>
                            </>
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                      {stage.description}
                    </p>

                    {/* Stage Topics Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-2">
                      {stage.topics.map((topic) => (
                        <span
                          key={topic}
                          className={`text-xs font-mono px-3 py-1 rounded-lg border ${
                            isActive
                              ? 'bg-cyan-950/70 border-cyan-500/40 text-cyan-300'
                              : 'bg-navy-900/80 border-slate-700/60 text-slate-300'
                          }`}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Expandable info toggle */}
                    <div className="pt-3 border-t border-slate-800/80 mt-4">
                      <button
                        onClick={() => setExpandedStage(isExpanded ? null : stage.stageNumber)}
                        className="flex items-center justify-between w-full text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5">
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                          <span>{isExpanded ? 'Hide Details' : 'View Learning Topics'}</span>
                        </span>
                        <span className="text-slate-500 text-[11px]">
                          {stage.topics.length} planned core topics
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="mt-3 pt-3 border-t border-slate-800/60 space-y-2 animate-in fade-in">
                          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                            {stage.topics.map((t, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <ArrowRight className="w-3 h-3 text-cyan-400 shrink-0" />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

