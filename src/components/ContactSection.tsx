import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Copy,
  Check,
  Download,
  Linkedin,
  Mail,
  Github,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Synchronize Kuala Lumpur GMT+8 time
  useEffect(() => {
    const updateKLTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kuala_Lumpur',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setCurrentTime(formatter.format(now));
      } catch (e) {
        setCurrentTime('GMT+8');
      }
    };

    updateKLTime();
    const interval = setInterval(updateKLTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-[#0E0B2E] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20 shadow-2xl">
          {/* Ambient Auroras */}
          <div
            aria-hidden="true"
            className="aurora -left-20 -top-24 h-80 w-80 bg-accent !opacity-60"
          />
          <div
            aria-hidden="true"
            className="aurora -right-16 top-10 h-80 w-80 bg-violet !opacity-60 [animation-delay:-6s]"
          />
          <div
            aria-hidden="true"
            className="aurora -bottom-28 left-1/3 h-72 w-72 bg-rose !opacity-40 [animation-delay:-12s]"
          />

          {/* Dot Grid Layer */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-dot-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />

          <div className="relative">
            {/* Header Area */}
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white/90 backdrop-blur-md border border-white/15">
                <span className="status-dot shrink-0" />
                Available now · Remote or relocation
              </p>

              <h2 className="mt-6 font-heading text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl text-white">
                Let's talk about your next{' '}
                <span className="bg-gradient-to-r from-[#8FA8FF] via-[#C4B5FD] to-[#FDA4AF] bg-clip-text text-transparent">
                  AI product.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-white/75">
                Hiring an AI Product Manager or Technical Project Lead? Pick whichever channel suits you. I reply within 24 hours.
              </p>
            </div>

            {/* 4 Contact Channel Cards */}
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {/* WhatsApp Card */}
              <li>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.1]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl shadow-lg ring-1 ring-white/20 bg-[#25D366] text-[#04361A] transition-transform group-hover:scale-105">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <span className="mt-4 text-base font-semibold">WhatsApp</span>
                  <span className="mt-0.5 truncate text-xs text-white/60 font-mono">
                    {PERSONAL_INFO.whatsappPhone}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-white/85 group-hover:text-white">
                    Chat on WhatsApp
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>

              {/* LinkedIn Card */}
              <li>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.1]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl shadow-lg ring-1 ring-white/20 bg-[#0A66C2] text-white transition-transform group-hover:scale-105">
                    <Linkedin className="h-5 w-5" />
                  </span>
                  <span className="mt-4 text-base font-semibold">LinkedIn</span>
                  <span className="mt-0.5 truncate text-xs text-white/60 font-mono">
                    {PERSONAL_INFO.linkedinHandle}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-white/85 group-hover:text-white">
                    Connect on LinkedIn
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>

              {/* Email Card */}
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.1]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl shadow-lg ring-1 ring-white/20 bg-[#D93025] text-white transition-transform group-hover:scale-105">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="mt-4 text-base font-semibold">Email</span>
                  <span className="mt-0.5 truncate text-xs text-white/60 font-mono">
                    {PERSONAL_INFO.email}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-white/85 group-hover:text-white">
                    Send an email
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>

              {/* GitHub Card */}
              <li>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.1]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl shadow-lg ring-1 ring-white/20 bg-white text-[#181717] transition-transform group-hover:scale-105">
                    <Github className="h-5 w-5" />
                  </span>
                  <span className="mt-4 text-base font-semibold">GitHub</span>
                  <span className="mt-0.5 truncate text-xs text-white/60 font-mono">
                    {PERSONAL_INFO.githubHandle}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-white/85 group-hover:text-white">
                    View Repositories
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>
            </ul>

            {/* Bottom Actions Row & Timezone Clock */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn h-11 border border-white/20 bg-white/5 px-5 text-white hover:border-white/50 hover:bg-white/10 cursor-pointer"
                  aria-live="polite"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-400">Email copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy email address</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onOpenResume}
                  className="btn h-11 bg-white px-5 text-[#0E0B2E] hover:bg-white/90 font-semibold cursor-pointer shadow-md"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Real-Time Live Clock synced to Kuala Lumpur */}
              <div className="text-left sm:text-right">
                <p className="text-xs text-white/60 uppercase tracking-widest font-mono">
                  Kuala Lumpur &bull; GMT+8
                </p>
                <p className="font-heading text-2xl font-bold tabular-nums text-white mt-0.5 font-mono">
                  {currentTime || '08:00:00 PM'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
