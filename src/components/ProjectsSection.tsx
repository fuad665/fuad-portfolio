import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Layers,
  CheckCircle,
  ExternalLink,
  X,
  Github,
  Radio,
  Lock,
  Workflow,
  Cpu,
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { EditableImage } from './EditableImage';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const getCategoryTheme = (color: Project['categoryColor']) => {
    switch (color) {
      case 'violet':
        return {
          text: 'text-violet',
          borderHover: 'hover:border-violet/40',
          metricText: 'text-violet',
          badgeBg: 'bg-violet/10 text-violet',
        };
      case 'teal':
        return {
          text: 'text-teal',
          borderHover: 'hover:border-teal/40',
          metricText: 'text-teal',
          badgeBg: 'bg-teal/10 text-teal',
        };
      case 'amber':
        return {
          text: 'text-amber',
          borderHover: 'hover:border-amber/40',
          metricText: 'text-amber',
          badgeBg: 'bg-amber/10 text-amber',
        };
      default:
        return {
          text: 'text-accent',
          borderHover: 'hover:border-accent/40',
          metricText: 'text-accent',
          badgeBg: 'bg-accent/10 text-accent',
        };
    }
  };

  const renderProjectVisual = (project: Project) => {
    switch (project.id) {
      case 'secure-voting-system':
        return (
          <div className="relative h-full w-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-surface-2 via-surface to-accent/5">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-accent/20 bg-surface shadow-md">
              <Lock className="h-12 w-12 text-accent" />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                SHA-256 Authenticated Chain
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-center w-full max-w-xs font-mono text-[11px]">
              <div className="rounded-lg border border-border bg-surface p-2 text-muted">
                Zero-Tamper Ledger
              </div>
              <div className="rounded-lg border border-border bg-surface p-2 text-muted">
                Blind Single-Use Token
              </div>
            </div>
          </div>
        );
      case 'employer-management-system':
        return (
          <div className="relative h-full w-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-surface-2 via-surface to-violet/5">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-violet/20 bg-surface shadow-md">
              <Workflow className="h-12 w-12 text-violet" />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-violet">
                Granular RBAC Matrix
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-center w-full max-w-xs font-mono text-[11px]">
              <div className="rounded-lg border border-border bg-surface p-2 text-muted">
                Admin &bull; HR &bull; Staff
              </div>
              <div className="rounded-lg border border-border bg-surface p-2 text-muted">
                Automated Payroll Run
              </div>
            </div>
          </div>
        );
      case 'iot-smart-watering-system':
        return (
          <div className="relative aspect-[16/10] w-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-surface-2 via-surface to-teal/5">
            <Cpu className="h-12 w-12 text-teal" />
            <div className="mt-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal animate-ping" />
              <span className="font-mono text-xs font-semibold text-teal uppercase tracking-wider">
                Telemetry Active
              </span>
            </div>
            <span className="mt-1 font-mono text-[11px] text-muted">
              Soil Moisture &amp; pH Sensors
            </span>
          </div>
        );
      default:
        return (
          <div className="relative aspect-[16/10] w-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-surface-2 via-surface to-amber/5">
            <Shield className="h-12 w-12 text-amber" />
            <span className="mt-3 font-mono text-xs font-semibold text-amber uppercase tracking-wider">
              CIS Benchmark Compliance
            </span>
            <span className="mt-1 font-mono text-[11px] text-muted">
              Automated Port &amp; TLS Auditing
            </span>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="section border-t border-border">
      <div className="container-page">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between lg:mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="h-section mt-3 sm:mt-4">
              Case studies with measurable outcomes
            </h2>
            <p className="lead mt-3 sm:mt-4">
              Each project addresses a critical security or automation bottleneck, followed by rigorous architecture,
              testing, and measurable real-world outcomes.
            </p>
          </div>
        </div>

        {/* Major Case Studies List */}
        <div className="space-y-8">
          {/* Featured Project 1: Secure Voting System */}
          {FEATURED_PROJECTS.slice(0, 2).map((project) => {
            const theme = getCategoryTheme(project.categoryColor);
            return (
              <article
                key={project.id}
                className={`card-interactive group relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 ${theme.borderHover}`}
              >
                {/* Visual Area (7 cols on desktop) */}
                <div
                  className="relative block overflow-hidden bg-surface-2 aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[420px]"
                >
                  <EditableImage
                    storageKey={`project_${project.id}`}
                    alt={project.title}
                    className="h-full w-full min-h-[300px] lg:min-h-[420px]"
                    uploadPrompt="Upload Project Screenshot"
                    objectFit="cover"
                    fallbackContent={renderProjectVisual(project)}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
                </div>

                {/* Content Area (5 cols on desktop) */}
                <div className="flex flex-1 flex-col p-6 sm:p-8 lg:col-span-5 lg:p-10">
                  <p className={`font-mono text-xs font-semibold uppercase tracking-[0.12em] ${theme.text}`}>
                    {project.category}
                  </p>

                  <h3 className="mt-3 font-heading font-semibold tracking-tight text-foreground text-2xl sm:text-[1.75rem] sm:leading-tight">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="text-left transition-colors hover:text-accent cursor-pointer"
                    >
                      {project.title}
                    </button>
                  </h3>

                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {project.summary}
                  </p>

                  {/* Metrics DL */}
                  <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6 lg:mt-auto">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="flex flex-col-reverse">
                        <dt className="mt-1 text-xs leading-snug text-subtle">
                          {metric.label}
                        </dt>
                        <dd className={`font-heading font-semibold tracking-tight text-xl sm:text-2xl ${theme.metricText}`}>
                          {metric.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {/* Action Links */}
                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent cursor-pointer group/btn"
                    >
                      <span>Read case study</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
                      >
                        <span>Live product</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}

          {/* 2-Column Grid for Secondary Projects */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {FEATURED_PROJECTS.slice(2).map((project) => {
              const theme = getCategoryTheme(project.categoryColor);
              return (
                <article
                  key={project.id}
                  className={`card-interactive group relative overflow-hidden flex flex-col ${theme.borderHover}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                    <EditableImage
                      storageKey={`project_${project.id}`}
                      alt={project.title}
                      className="h-full w-full"
                      uploadPrompt="Upload Project Screenshot"
                      objectFit="cover"
                      fallbackContent={renderProjectVisual(project)}
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <p className={`font-mono text-xs font-semibold uppercase tracking-[0.12em] ${theme.text}`}>
                      {project.category}
                    </p>

                    <h3 className="mt-3 font-heading font-semibold tracking-tight text-foreground text-xl">
                      <button
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="text-left transition-colors hover:text-accent cursor-pointer"
                      >
                        {project.title}
                      </button>
                    </h3>

                    <p className="mt-3 text-[14px] leading-relaxed text-muted">
                      {project.summary}
                    </p>

                    {/* Metrics DL */}
                    <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-6">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="flex flex-col-reverse">
                          <dt className="mt-1 text-[11px] leading-snug text-subtle">
                            {metric.label}
                          </dt>
                          <dd className={`font-heading font-semibold tracking-tight text-lg ${theme.metricText}`}>
                            {metric.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    {/* Actions */}
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent cursor-pointer"
                      >
                        <span>Read case study</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>Repository</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md overflow-y-auto"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative my-8 w-full max-w-3xl rounded-3xl border border-border bg-surface p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Eyebrow */}
            <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
              {activeModalProject.category}
            </span>

            <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {activeModalProject.title}
            </h2>

            {/* Project Screenshot / Visual inside Modal */}
            <div className="mt-4 relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-surface-2 shadow-inner">
              <EditableImage
                storageKey={`project_${activeModalProject.id}`}
                alt={activeModalProject.title}
                className="h-full w-full"
                uploadPrompt="Upload Project Screenshot"
                objectFit="contain"
                fallbackContent={renderProjectVisual(activeModalProject)}
              />
            </div>

            {/* Impact Metric Chips */}
            <div className="mt-5 grid grid-cols-3 gap-3 rounded-2xl border border-border bg-surface-2 p-4">
              {activeModalProject.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <p className="font-heading text-xl font-bold text-accent sm:text-2xl">
                    {m.value}
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Narrative Sections */}
            <div className="mt-6 space-y-5">
              <div>
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                  The Problem &amp; Bottleneck
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {activeModalProject.problem}
                </p>
              </div>

              <div>
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                  The Architecture &amp; Solution
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {activeModalProject.solution}
                </p>
              </div>

              <div>
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                  Key Technical Features &amp; Controls
                </h4>
                <ul className="mt-2 space-y-2">
                  {activeModalProject.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                  Technologies Utilized
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((tech) => (
                    <span key={tech} className="chip font-mono text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* External Links */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <div className="flex gap-3">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>View Live Prototype</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Github className="h-4 w-4" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
