import React from 'react';
import { ArrowRight, ShieldCheck, Server, KeyRound, Camera } from 'lucide-react';
import { PHILOSOPHY_STEPS, LANGUAGES } from '../data/portfolioData';
import { EditableImage } from './EditableImage';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="section border-t border-border bg-surface">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gray-200 bg-surface-2 lg:sticky lg:top-24 shadow-sm group">
              <EditableImage
                storageKey="about_presenting"
                alt="Fuad presenting system security architecture"
                className="absolute inset-0 h-full w-full"
                uploadPrompt="Upload Presentation Photo"
                fallbackContent={
                  <>
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-dot-grid opacity-60" />
                    <div className="absolute top-10 right-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />

                    {/* Graphic container */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                      <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-card transition-transform duration-500 group-hover:scale-105">
                        <ShieldCheck className="h-14 w-14 text-indigo-600 stroke-[1.5]" />
                      </div>

                      <div className="mt-6 space-y-2">
                        <span className="font-mono text-xs font-semibold text-indigo-600 uppercase tracking-widest">
                          Security Engineering
                        </span>
                        <h3 className="font-heading text-xl font-bold text-gray-900">
                          Zero-Trust by Design
                        </h3>
                        <p className="max-w-xs text-xs leading-relaxed text-gray-500">
                          Defending sensitive data flow across authenticated balloting, enterprise payrolls, and embedded telemetry.
                        </p>
                      </div>

                      <div className="mt-5 flex flex-wrap justify-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-medium text-gray-700 shadow-sm">
                          <KeyRound className="h-3 w-3 text-purple-600" />
                          Cryptographic Tokens
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-medium text-gray-700 shadow-sm">
                          <Server className="h-3 w-3 text-teal-600" />
                          Role-Based Access
                        </span>
                      </div>
                    </div>
                  </>
                }
              />

              {/* Bottom Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-5 pt-16">
                <p className="text-sm font-medium text-white">
                  Architecting secure systems &amp; presenting to university leadership
                </p>
                <p className="text-xs text-white/70">
                  Albukhary International University
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7">
            <p className="eyebrow">About</p>
            <h2 className="h-section mt-4">
              Security-first engineer with an automation toolkit.
            </h2>

            <div className="mt-6 space-y-4 text-[16px] sm:text-[17px] leading-relaxed text-muted">
              <p>
                I earned my Bachelor of Computer Science in Cybersecurity at{' '}
                <strong className="font-semibold text-foreground">Albukhary International University</strong>,
                graduating on the Dean's List and receiving the Gold Medal of Academic Distinction.
              </p>
              <p>
                Throughout my academic and project engineering journey, I recognized that security is not an
                afterthought or a checklist—it is foundational architecture. Whether implementing blind cryptographic
                ballots for student elections, architecting strict RBAC for HR systems, or building low-latency IoT
                irrigation monitors, my objective is consistent: eliminate vulnerabilities while maximizing operational
                efficiency.
              </p>
              <p>
                I thrive at the intersection of defense-in-depth principles, modern web frameworks, and automated
                infrastructure. If a system requires manual, repetitive intervention, it can be secured and automated.
              </p>
            </div>

            {/* 3-Step Philosophy Grid */}
            <div className="mt-10 border-t border-border">
              {PHILOSOPHY_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-border py-5 transition-colors hover:bg-surface-2/40"
                >
                  <span className="meta pt-0.5 text-accent font-semibold">{step.number}</span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[14px] sm:text-[15px] leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages Bar & Resume Link */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:flex-wrap">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name}>
                    <p className="text-sm font-semibold text-foreground">{lang.name}</p>
                    <p className="text-xs text-muted">{lang.level}</p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={onOpenResume}
                className="link-arrow cursor-pointer"
              >
                <span>Full credentials</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
