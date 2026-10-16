import React from 'react';
import {
  ArrowRight,
  Download,
  Award,
  GraduationCap,
  ShieldCheck,
  Medal,
  Terminal,
  Cpu,
  Mail,
  Linkedin,
  Github,
  Lock,
  Camera,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { EditableImage } from './EditableImage';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-20">
      {/* Background Dot Grid */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-dot-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      {/* Floating Ambient Auroras exactly like the screenshot */}
      <div
        aria-hidden="true"
        className="aurora -left-28 top-8 h-80 w-80 bg-[#93C5FD] sm:h-[420px] sm:w-[420px] !opacity-35"
      />
      <div
        aria-hidden="true"
        className="aurora right-0 top-32 h-80 w-80 bg-[#D8B4FE] [animation-delay:-6s] sm:h-[420px] sm:w-[420px] !opacity-35"
      />
      <div
        aria-hidden="true"
        className="aurora bottom-10 left-1/3 h-64 w-64 bg-[#A7F3D0] [animation-delay:-12s] !opacity-20"
      />

      <div className="container-page relative pb-14 pt-8 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7">
            {/* Top Pill / Badge */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-black text-white font-bold lg:hidden shadow-sm">
                FH
              </span>
              <div className="inline-flex min-w-0 items-center gap-2.5 rounded-full border border-border bg-white py-1.5 pl-3 pr-4 text-sm text-gray-700 shadow-card">
                <span className="status-dot shrink-0" />
                <span className="truncate">
                  Open to Cybersecurity &amp; Tech roles
                  <span className="hidden sm:inline"> · Remote or relocation</span>
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="h-display mt-6 sm:mt-7 text-gray-950">
              I build secure, resilient architectures and automated systems that{' '}
              <span className="text-gradient">protect and scale.</span>
            </h1>

            {/* Sub-bio */}
            <p className="lead mt-5 max-w-xl sm:mt-6 text-gray-600">
              I'm <strong className="font-semibold text-gray-950">{PERSONAL_INFO.name}</strong>, a{' '}
              <strong className="font-semibold text-gray-950">Computer Science (Cybersecurity)</strong> graduate
              from Albukhary International University. I design zero-trust authenticated voting infrastructures,
              scalable enterprise automation pipelines, and robust IoT telemetry systems.
            </p>

            {/* Highlight Badges / Recognition Pills matching the screenshot */}
            <a
              href="#highlights"
              className="group mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm"
              aria-label="See awards and certifications"
            >
              <Award className="h-4 w-4 shrink-0 text-amber-500" />
              <span className="chip gap-1.5 py-1 pl-1 font-medium text-gray-800 transition-transform group-hover:-translate-y-0.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full text-blue-600 bg-blue-100/70">
                  <GraduationCap className="h-3 w-3" />
                </span>
                Dean's List ×2
              </span>
              <span className="chip gap-1.5 py-1 pl-1 font-medium text-gray-800 transition-transform group-hover:-translate-y-0.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full text-rose-600 bg-rose-100/70">
                  <Medal className="h-3 w-3" />
                </span>
                1st Place · Distinction
              </span>
              <span className="chip gap-1.5 py-1 pl-1 font-medium text-gray-800 transition-transform group-hover:-translate-y-0.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full text-purple-600 bg-purple-100/70">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                Security Specialist
              </span>
              <span className="chip gap-1.5 py-1 pl-1 font-medium text-gray-800 transition-transform group-hover:-translate-y-0.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full text-amber-600 bg-amber-100/70">
                  <Award className="h-3 w-3" />
                </span>
                Gold Medal
              </span>
            </a>

            {/* Primary Action Buttons */}
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

            {/* Quick Social Links & Location Badge */}
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:mt-8">
              {/* WhatsApp Button */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full shadow-card transition-all hover:-translate-y-0.5 hover:scale-105 bg-[#25D366] text-[#04361A] hover:bg-[#1EBE5A]"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* LinkedIn Button */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                title="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full shadow-card transition-all hover:-translate-y-0.5 hover:scale-105 bg-[#0A66C2] text-white hover:bg-[#004182]"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Email"
                title="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full shadow-card transition-all hover:-translate-y-0.5 hover:scale-105 bg-[#D93025] text-white hover:bg-[#B3261E]"
              >
                <Mail className="h-[18px] w-[18px]" />
              </a>

              {/* GitHub Button */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub profile"
                title="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full shadow-card transition-all hover:-translate-y-0.5 hover:scale-105 bg-[#181717] text-white hover:bg-[#333] dark:bg-white dark:text-[#181717] dark:hover:bg-white/85"
              >
                <Github className="h-[18px] w-[18px]" />
              </a>

              <span className="ml-1 text-sm text-muted font-medium">
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Right Column: High-Tech Cutout Portrait Card */}
          <div className="mt-8 max-w-md mx-auto w-full lg:mx-0 lg:max-w-none lg:mt-0 lg:col-span-5 block">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-b from-gray-100/90 via-white to-white shadow-md group">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-dot-grid opacity-50" />

                {/* Ambient glow accent */}
                <div className="absolute top-1/4 right-1/4 h-48 w-48 rounded-full bg-blue-400/15 blur-3xl pointer-events-none" />

                {/* Editable Profile Photo Container */}
                <EditableImage
                  storageKey="hero_profile"
                  alt={`Portrait of ${PERSONAL_INFO.name}`}
                  className="absolute inset-0 h-full w-full"
                  imgClassName="object-contain object-bottom"
                  uploadPrompt="Upload Your Photo / ارفع صورتك"
                  showBadgeOnlyOnHover={false}
                  fallbackContent={
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="relative flex h-36 w-36 items-center justify-center rounded-3xl border border-gray-200 bg-white shadow-sm transition-transform duration-500 group-hover:scale-105">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-50 via-indigo-50/50 to-transparent" />
                        <div className="relative flex flex-col items-center">
                          <Lock className="h-14 w-14 text-indigo-600 stroke-[1.5]" />
                          <div className="mt-2 flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="font-mono text-[10px] font-semibold text-gray-900 tracking-wider uppercase">
                              SECURED
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 max-w-xs space-y-1">
                        <h3 className="font-heading text-lg font-bold text-gray-950 tracking-tight">
                          {PERSONAL_INFO.name}
                        </h3>
                        <p className="text-xs text-gray-600 font-medium">
                          B.CompSc in Cybersecurity
                        </p>
                        <p className="text-[11px] text-gray-400 font-mono">
                          Albukhary International University
                        </p>
                      </div>

                      <div className="mt-4 flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm">
                        <Camera className="h-3.5 w-3.5" />
                        <span>Click bottom button to upload photo</span>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
