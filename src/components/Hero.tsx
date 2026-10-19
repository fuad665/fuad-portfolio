import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download,
  Award,
  GraduationCap,
  ShieldCheck,
  Medal,
  Mic,
  Camera,
  User,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { EditableImage } from './EditableImage';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [klTime, setKlTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kuala_Lumpur',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setKlTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden scroll-mt-20">
      {/* Background Dot Grid */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-dot-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      {/* Floating Ambient Auroras exactly like reference */}
      <div
        aria-hidden="true"
        className="aurora -left-24 top-10 h-72 w-72 bg-accent sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="aurora right-0 top-40 h-72 w-72 bg-violet [animation-delay:-6s] sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="aurora bottom-10 left-1/3 h-64 w-64 bg-teal [animation-delay:-12s]"
      />

      <div className="container-page relative pb-14 pt-8 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7">
            {/* Top Pill / Badge */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-foreground text-sm font-semibold text-background lg:hidden shadow-sm">
                {PERSONAL_INFO.initials}
              </span>
              <div className="inline-flex min-w-0 items-center gap-2.5 rounded-full border border-border bg-surface py-1.5 pl-3 pr-4 text-sm text-muted shadow-card">
                <span className="status-dot shrink-0" />
                <span className="truncate">
                  {PERSONAL_INFO.statusText}
                  <span className="hidden sm:inline"> · Remote or relocation</span>
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="h-display mt-6 sm:mt-7 text-foreground">
              I turn enterprise workflows into AI products that{' '}
              <span className="text-gradient">pay for themselves.</span>
            </h1>

            {/* Sub-bio */}
            <p className="lead mt-5 max-w-xl sm:mt-6 text-muted">
              I'm <strong className="font-semibold text-foreground">{PERSONAL_INFO.name}</strong>,{' '}
              <strong className="font-semibold text-foreground">Product Manager at MindHive</strong> in Kuala Lumpur.
              I take AI from discovery and PRDs to production rollout, backed by a Computer Science (Data Science) degree.
            </p>

            {/* Recognition Badges */}
            <a
              href="#highlights"
              className="group mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm"
              aria-label="See awards and certifications"
            >
              <Award className="h-4 w-4 shrink-0 text-amber" />
              <span className="chip gap-1.5 py-1 pl-1 font-medium text-foreground transition-transform group-hover:-translate-y-0.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full text-accent bg-accent/10">
                  <GraduationCap className="h-3 w-3" />
                </span>
                Dean's List ×2
              </span>
              <span className="chip gap-1.5 py-1 pl-1 font-medium text-foreground transition-transform group-hover:-translate-y-0.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full text-rose bg-rose/10">
                  <Mic className="h-3 w-3" />
                </span>
                1st Place · Public Speaking
              </span>
              <span className="chip gap-1.5 py-1 pl-1 font-medium text-foreground transition-transform group-hover:-translate-y-0.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full text-violet bg-violet/10">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                IBM-certified AI PM
              </span>
              <span className="chip gap-1.5 py-1 pl-1 font-medium text-foreground transition-transform group-hover:-translate-y-0.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full text-amber bg-amber/10">
                  <Medal className="h-3 w-3" />
                </span>
                Gold Medal
              </span>
            </a>

            {/* Action Buttons */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
              <a href="#projects" className="btn-gradient h-12 px-4 sm:px-6">
                <span className="sm:hidden">Case studies</span>
                <span className="hidden sm:inline">View case studies</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={onOpenResume}
                className="btn-secondary h-12 px-4 sm:px-6 cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links & Location */}
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:mt-8">
              {/* WhatsApp */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full shadow-card transition-transform hover:-translate-y-0.5 hover:scale-105 bg-[#25D366] text-[#04361A] hover:bg-[#1EBE5A]"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full shadow-card transition-transform hover:-translate-y-0.5 hover:scale-105 bg-[#0A66C2] text-white hover:bg-[#004182]"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                title="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full shadow-card transition-transform hover:-translate-y-0.5 hover:scale-105 bg-[#D93025] text-white hover:bg-[#B3261E]"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full shadow-card transition-transform hover:-translate-y-0.5 hover:scale-105 bg-[#181717] text-white hover:bg-[#333] dark:bg-white dark:text-[#181717] dark:hover:bg-white/85"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              <span className="ml-1 text-sm text-muted">
                Kuala Lumpur · GMT+8 {klTime ? `(${klTime})` : ''}
              </span>
            </div>
          </div>

          {/* Right Column: Hero Portrait Card */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-surface-2 to-surface">
                <div className="absolute inset-0 bg-dot-grid opacity-60" />

                {/* Profile Photo Upload Slot */}
                <EditableImage
                  storageKey="hero_profile"
                  alt={`Portrait of ${PERSONAL_INFO.name}`}
                  className="absolute inset-0 h-full w-full"
                  imgClassName="object-contain object-bottom"
                  uploadPrompt="Upload Your Photo / ارفع صورتك"
                  showBadgeOnlyOnHover={false}
                  fallbackContent={
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl border border-border bg-surface shadow-card transition-transform duration-500 hover:scale-105">
                        <User className="h-14 w-14 text-accent stroke-[1.5]" />
                      </div>

                      <div className="mt-5 max-w-xs space-y-1">
                        <h3 className="font-heading text-lg font-bold text-foreground tracking-tight">
                          {PERSONAL_INFO.name}
                        </h3>
                        <p className="text-xs text-muted font-medium">
                          Product Manager • MindHive
                        </p>
                        <p className="text-[11px] text-subtle font-mono">
                          B.CompSc in Data Science • AIU
                        </p>
                      </div>

                      <div className="mt-4 flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-accent shadow-card">
                        <Camera className="h-3.5 w-3.5" />
                        <span>Click to upload your portrait</span>
                      </div>
                    </div>
                  }
                />
              </div>

              {/* Product Manager Status Badge Card */}
              <div className="card absolute -bottom-5 left-6 flex min-w-[260px] items-center justify-between gap-3 px-4 py-3 shadow-card-hover">
                <div>
                  <p className="text-sm font-semibold text-foreground">Product Manager</p>
                  <p className="text-xs text-muted">MindHive · 2025 – present</p>
                </div>
                <span className="chip-accent">AI · LLM</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Impact Metrics Grid exactly matching reference */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-16 lg:mt-20 lg:grid-cols-4">
          <div className="relative bg-surface p-4 sm:p-6">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-accent" />
            <p className="font-heading text-[1.75rem] font-semibold leading-none tracking-tight sm:text-4xl text-accent">
              60–70%
            </p>
            <p className="mt-2 text-[13px] leading-snug text-muted sm:mt-3 sm:text-sm">
              Review cost cut with an LLM-powered OCR pipeline
            </p>
          </div>

          <div className="relative bg-surface p-4 sm:p-6">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-violet" />
            <p className="font-heading text-[1.75rem] font-semibold leading-none tracking-tight sm:text-4xl text-violet">
              10+
            </p>
            <p className="mt-2 text-[13px] leading-snug text-muted sm:mt-3 sm:text-sm">
              Enterprise clients onboarded to MAIA in 2 months
            </p>
          </div>

          <div className="relative bg-surface p-4 sm:p-6">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-teal" />
            <p className="font-heading text-[1.75rem] font-semibold leading-none tracking-tight sm:text-4xl text-teal">
              3×
            </p>
            <p className="mt-2 text-[13px] leading-snug text-muted sm:mt-3 sm:text-sm">
              Validation throughput after workflow redesign
            </p>
          </div>

          <div className="relative bg-surface p-4 sm:p-6">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-amber" />
            <p className="font-heading text-[1.75rem] font-semibold leading-none tracking-tight sm:text-4xl text-amber">
              120+
            </p>
            <p className="mt-2 text-[13px] leading-snug text-muted sm:mt-3 sm:text-sm">
              Test-case eval suite guarding AI quality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
