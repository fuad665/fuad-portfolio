import React from 'react';
import { ArrowUpRight, Award, GraduationCap, Camera } from 'lucide-react';
import { EditableImage } from './EditableImage';

export const EducationSection: React.FC = () => {
  const coursework = [
    'Machine Learning',
    'Natural Language Processing',
    'Statistical Analysis',
    'Human-Computer Interaction',
    'Database Systems',
    'Software Engineering',
  ];

  return (
    <section id="education" className="section border-t border-border">
      <div className="container-page">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between lg:mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Education</p>
            <h2 className="h-section mt-3 sm:mt-4">
              A technical foundation for product decisions
            </h2>
          </div>
        </div>

        {/* Main Card */}
        <div className="card grid grid-cols-1 overflow-hidden lg:grid-cols-12">
          {/* Left Column: Photo Slot */}
          <div className="relative aspect-[4/3] bg-surface-2 lg:col-span-5 lg:aspect-auto lg:min-h-[400px]">
            <EditableImage
              storageKey="education_photo"
              alt="Fuad Hiybo graduation at Albukhary International University"
              className="absolute inset-0 h-full w-full"
              imgClassName="object-cover object-top"
              uploadPrompt="Upload Graduation Photo"
              showBadgeOnlyOnHover={false}
              fallbackContent={
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-surface-2 to-surface">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-border bg-surface shadow-card">
                    <GraduationCap className="h-14 w-14 text-accent stroke-[1.5]" />
                  </div>

                  <div className="mt-5 space-y-1">
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      Albukhary International University
                    </h3>
                    <p className="text-xs font-medium text-accent">
                      Bachelor of Computer Science
                    </p>
                    <p className="text-xs text-muted">
                      Specialization in Data Science
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-accent shadow-card">
                    <Camera className="h-3.5 w-3.5" />
                    <span>Upload graduation picture</span>
                  </div>
                </div>
              }
            />
          </div>

          {/* Right Column: Educational Details */}
          <div className="flex flex-col p-6 sm:p-10 lg:col-span-7">
            <p className="meta">10.2022 – 10.2026</p>

            <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
              Bachelor of Computer Science — Data Science
            </h3>

            <a
              href="https://aiu.edu.my"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-1 text-[15px] text-muted transition-colors hover:text-accent"
            >
              <span>Albukhary International University – Malaysia</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            {/* DL for CGPA & Classification */}
            <dl className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border p-4">
                <dt className="text-xs text-subtle">CGPA</dt>
                <dd className="mt-1 font-heading text-2xl font-semibold tracking-tight text-violet">
                  3.86 / 4.00
                </dd>
              </div>
              <div className="rounded-xl border border-border p-4">
                <dt className="text-xs text-subtle">Classification</dt>
                <dd className="mt-1 font-heading text-lg font-semibold leading-tight tracking-tight text-teal">
                  Distinction / Dean's Honor
                </dd>
              </div>
            </dl>

            {/* Dean's List Callout */}
            <div className="mt-3 flex items-start gap-3 rounded-xl bg-accent/[0.06] p-4">
              <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="text-[15px] font-medium text-foreground">
                  Dean's List Honor Award
                </p>
                <p className="mt-0.5 text-sm text-muted">
                  Awarded across multiple semesters by the School of Computing and Informatics.
                </p>
              </div>
            </div>

            {/* Final Year Project */}
            <div className="mt-6">
              <p className="text-sm font-medium text-foreground">
                Final year project · <span className="text-accent font-semibold">AI Smart Resume Analyzer</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                An AI-powered system that analyzes resumes, extracts candidate information, and evaluates skills against job requirements.
              </p>
            </div>

            {/* Relevant Coursework */}
            <div className="mt-6 lg:mt-auto lg:pt-6">
              <p className="text-sm font-medium text-foreground">Relevant coursework</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {coursework.map((course) => (
                  <span key={course} className="chip">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
