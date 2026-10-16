import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-border bg-background">
      {/* Gradient Top Line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-accent via-violet to-rose"
      />

      <div className="container-page flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">
        {/* Left Column: Brand & Bio */}
        <div className="max-w-xs">
          <p className="text-[15px] font-bold text-foreground tracking-tight">
            {PERSONAL_INFO.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Cybersecurity Engineer &amp; Secure Systems Architect, based in Kuala Lumpur, Malaysia.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex gap-2">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5 bg-[#25D366]/10 text-[#128C4B] dark:text-[#25D366]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5 bg-[#0A66C2]/10 text-[#0A66C2] dark:text-[#5BA4F0]"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              title="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5 bg-[#EA4335]/10 text-[#D93025] dark:text-[#FF7A6E]"
            >
              <Mail className="h-4 w-4" />
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5 bg-[#181717]/10 text-[#181717] dark:bg-white/10 dark:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right Navigation Anchors */}
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, '#about')}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="#highlights"
            onClick={(e) => handleSmoothScroll(e, '#highlights')}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Awards
          </a>
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, '#projects')}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Work
          </a>
          <a
            href="#experience"
            onClick={(e) => handleSmoothScroll(e, '#experience')}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Experience
          </a>
          <a
            href="#news"
            onClick={(e) => handleSmoothScroll(e, '#news')}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            News
          </a>
          <button
            type="button"
            onClick={onOpenResume}
            className="text-left text-sm text-muted transition-colors hover:text-foreground cursor-pointer"
          >
            Resume
          </button>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Copyright Bar */}
      <div className="container-page flex flex-col gap-2 border-t border-border-subtle py-6 text-xs text-subtle sm:flex-row sm:justify-between">
        <p>&copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
        <p>Built with React, Tailwind CSS &amp; Lucide Icons</p>
      </div>
    </footer>
  );
};
