import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { HighlightsSection } from './components/HighlightsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { AwardsSection } from './components/AwardsSection';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AdminProvider } from './context/AdminContext';
import { AdminBar } from './components/AdminBar';
import { AdminLoginModal } from './components/AdminLoginModal';

function AppContent() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
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

      {/* Floating Admin Status Bar for Owner */}
      <AdminBar />

      {/* Main Content Sections matching exact reference architecture */}
      <main className="relative min-h-screen overflow-x-hidden pt-16">
        {/* 1. Hero & Impact Metrics (#home) */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* 2. About & Philosophy (#about) */}
        <AboutSection onOpenResume={() => setResumeModalOpen(true)} />

        {/* 3. Awards & Certifications Highlight Reel (#highlights) */}
        <HighlightsSection />

        {/* 4. Featured Case Studies (#projects) */}
        <ProjectsSection />

        {/* 5. Work Experience (#experience) */}
        <ExperienceSection onOpenResume={() => setResumeModalOpen(true)} />

        {/* 6. Capabilities & Unit-Economics Simulator (#skills) */}
        <SkillsSection />

        {/* 7. Academic Education (#education) */}
        <EducationSection />

        {/* 8. Full Honors & Professional Certifications (#certifications) */}
        <AwardsSection />

        {/* 9. Milestones & News (#news) */}
        <NewsSection />

        {/* 10. Contact & Opportunities (#contact) */}
        <ContactSection onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Interactive CV Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Owner Admin Passcode Dialog */}
      <AdminLoginModal />
    </div>
  );
}

export function App() {
  return (
    <AdminProvider>
      <AppContent />
    </AdminProvider>
  );
}

export default App;
