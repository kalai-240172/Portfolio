import React, { useState, useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { RoadmapSection } from './components/RoadmapSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationAndCerts } from './components/EducationAndCerts';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);

  // Initial loader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  // Intersection observer for navbar indicator
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'roadmap', 'projects', 'education', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-navy-950 flex flex-col items-center justify-center z-50">
        <div className="relative flex items-center justify-center">
          <div className="w-14 h-14 rounded-2xl border-2 border-cyan-400 border-t-transparent animate-spin" />
          <span className="absolute font-mono font-bold text-cyan-400 text-sm">
            K
          </span>
        </div>
        <p className="mt-4 font-mono text-xs tracking-widest text-cyan-300 uppercase animate-pulse">
          LOADING PORTFOLIO...
        </p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-navy-950 text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background Particle Canvas & Glow */}
      <ParticleBackground />

      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Accessible Navbar with 7 Sections */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <RoadmapSection />
        <ProjectsSection />
        <EducationAndCerts />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
