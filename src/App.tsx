import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactMetrics } from './components/ImpactMetrics';
import { AboutSection } from './components/AboutSection';
import { AwardsSection } from './components/AwardsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SecuritySimulator } from './components/SecuritySimulator';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Default to the warm beige and burgundy theme unless explicitly saved
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    return false;
  });

  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Sync dark mode class on document
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Sticky Top Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenContact={handleOpenContact}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative min-h-screen overflow-x-hidden pt-16">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <ImpactMetrics />
        <AboutSection onOpenResume={() => setResumeModalOpen(true)} />
        <AwardsSection />
        <ProjectsSection />
        <ExperienceSection onOpenResume={() => setResumeModalOpen(true)} />
        <SecuritySimulator />
        <NewsSection />
        <ContactSection onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Interactive CV Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
