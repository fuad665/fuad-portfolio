import React, { useState } from 'react';
import {
  Award as AwardIcon,
  GraduationCap,
  Medal,
  ShieldAlert,
  Users,
  CheckCircle2,
  ArrowUpRight,
  Maximize2,
  X,
  ExternalLink,
} from 'lucide-react';
import { AWARDS, CERTIFICATIONS } from '../data/portfolioData';
import { Award } from '../types/portfolio';
import { EditableImage } from './EditableImage';

export const AwardsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'academic' | 'security' | 'leadership'>('all');
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);

  const filteredAwards = AWARDS.filter((award) => {
    if (activeTab === 'all') return true;
    return award.category === activeTab;
  });

  const getAwardIcon = (award: Award) => {
    switch (award.category) {
      case 'academic':
        return <GraduationCap className="h-6 w-6 text-accent" />;
      case 'security':
        return <ShieldAlert className="h-6 w-6 text-rose" />;
      case 'leadership':
        return <Users className="h-6 w-6 text-violet" />;
      default:
        return <Medal className="h-6 w-6 text-amber" />;
    }
  };

  const getColorClasses = (color: Award['color']) => {
    switch (color) {
      case 'rose':
        return {
          bar: 'bg-rose',
          text: 'text-rose',
          glow: 'hover:shadow-[0_16px_40px_-16px_rgba(225,29,72,0.4)]',
          badgeBg: 'bg-rose/10 text-rose',
        };
      case 'amber':
        return {
          bar: 'bg-amber',
          text: 'text-amber',
          glow: 'hover:shadow-[0_16px_40px_-16px_rgba(217,119,6,0.4)]',
          badgeBg: 'bg-amber/10 text-amber',
        };
      case 'violet':
        return {
          bar: 'bg-violet',
          text: 'text-violet',
          glow: 'hover:shadow-[0_16px_40px_-16px_rgba(124,58,237,0.4)]',
          badgeBg: 'bg-violet/10 text-violet',
        };
      case 'teal':
        return {
          bar: 'bg-teal',
          text: 'text-teal',
          glow: 'hover:shadow-[0_16px_40px_-16px_rgba(13,148,136,0.4)]',
          badgeBg: 'bg-teal/10 text-teal',
        };
      default:
        return {
          bar: 'bg-accent',
          text: 'text-accent',
          glow: 'hover:shadow-[0_16px_40px_-16px_rgba(37,71,208,0.4)]',
          badgeBg: 'bg-accent/10 text-accent',
        };
    }
  };

  return (
    <section id="highlights" aria-labelledby="highlights-title" className="scroll-mt-20 border-y border-border bg-background">
      <div className="container-page py-14 sm:py-20">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
          <div>
            <p className="eyebrow">Recognition</p>
            <h2 id="highlights-title" className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Awards &amp; certifications
            </h2>
          </div>
          <span className="text-sm font-medium text-muted">
            {AWARDS.length} Honors &bull; {CERTIFICATIONS.length} Certifications
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="no-scrollbar -mx-5 mb-8 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div role="tablist" aria-label="Filter honors" className="inline-flex gap-1 rounded-full bg-surface-2 p-1 border border-border">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'all'}
              onClick={() => setActiveTab('all')}
              className={`tab ${activeTab === 'all' ? 'tab-active' : ''}`}
            >
              All
              <span className="text-xs text-subtle ml-1">({AWARDS.length})</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'academic'}
              onClick={() => setActiveTab('academic')}
              className={`tab ${activeTab === 'academic' ? 'tab-active' : ''}`}
            >
              Academic
              <span className="text-xs text-subtle ml-1">(3)</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'security'}
              onClick={() => setActiveTab('security')}
              className={`tab ${activeTab === 'security' ? 'tab-active' : ''}`}
            >
              Security &amp; Tech
              <span className="text-xs text-subtle ml-1">(2)</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'leadership'}
              onClick={() => setActiveTab('leadership')}
              className={`tab ${activeTab === 'leadership' ? 'tab-active' : ''}`}
            >
              Leadership
              <span className="text-xs text-subtle ml-1">(1)</span>
            </button>
          </div>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-5">
          {filteredAwards.map((award) => {
            const colors = getColorClasses(award.color);
            return (
              <div
                key={award.id}
                className={`card-interactive group relative flex h-full flex-col overflow-hidden text-left ${colors.glow}`}
              >
                {/* Colored Top Accent Bar */}
                <span aria-hidden="true" className={`absolute inset-x-0 top-0 z-10 h-1 ${colors.bar}`} />

                {/* Preview Graphic Area with Image Upload */}
                <div className="relative bg-surface-2 p-3 sm:p-4 flex items-center justify-center">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-surface border border-gray-200 shadow-sm">
                    <EditableImage
                      storageKey={`award_cert_${award.id}`}
                      alt={award.title}
                      className="h-full w-full"
                      uploadPrompt="Upload Certificate"
                      objectFit="contain"
                      fallbackContent={
                        <div
                          className="flex h-full w-full flex-col items-center justify-center p-4 text-center cursor-pointer transition-transform hover:scale-[1.02]"
                          onClick={() => setSelectedAward(award)}
                        >
                          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.badgeBg} mb-2 shadow-sm`}>
                            {getAwardIcon(award)}
                          </div>
                          <span className="font-heading text-xs font-semibold text-gray-900 line-clamp-1">
                            {award.organization}
                          </span>
                          <span className="font-mono text-[10px] text-gray-500">
                            {award.date}
                          </span>
                        </div>
                      }
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedAward(award)}
                    className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 cursor-pointer"
                    title="Expand details"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Card Info */}
                <div
                  className="flex flex-1 flex-col p-4 sm:p-5 cursor-pointer"
                  onClick={() => setSelectedAward(award)}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className={`font-mono text-xs font-semibold uppercase tracking-wider ${colors.text}`}>
                      {award.badge}
                    </p>
                    <span className="text-[11px] text-subtle">{award.category}</span>
                  </div>
                  <h3 className="mt-1.5 font-heading text-base font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
                    {award.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-2">
                    {award.description}
                  </p>
                  <p className="mt-auto pt-3 text-[11px] font-mono text-subtle border-t border-border-subtle flex items-center justify-between">
                    <span>{award.date}</span>
                    <span className="text-accent group-hover:underline">Inspect credential &rarr;</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Certifications List */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
            <div>
              <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Professional certifications &amp; verifications
              </h3>
              <p className="mt-1 text-sm text-muted">
                Industry-recognized credentials verified through Cisco, Google, IBM, AWS &amp; Microsoft
              </p>
            </div>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.id}>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4 transition-colors hover:bg-surface-2/60 px-2 rounded-lg"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-accent shadow-sm group-hover:border-accent">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-semibold text-foreground transition-colors group-hover:text-accent">
                      {cert.name}
                    </span>
                    <span className="block text-xs text-muted font-mono">
                      {cert.organization} &bull; Verified ID Credential
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors group-hover:text-foreground">
                    <span className="hidden sm:inline">Verify Credential</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Credential Inspection Modal */}
      {selectedAward && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          onClick={() => setSelectedAward(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl border border-border bg-surface p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedAward(null)}
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                {getAwardIcon(selectedAward)}
              </div>
              <div>
                <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                  {selectedAward.badge}
                </span>
                <p className="text-xs text-subtle">{selectedAward.organization}</p>
              </div>
            </div>

            <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
              {selectedAward.title}
            </h3>

            {/* Certificate Preview in Modal */}
            <div className="mt-4 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-surface-2 shadow-inner">
              <EditableImage
                storageKey={`award_cert_${selectedAward.id}`}
                alt={selectedAward.title}
                className="h-full w-full"
                uploadPrompt="Upload Certificate Image"
                objectFit="contain"
                fallbackContent={
                  <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-3 shadow-sm">
                      {getAwardIcon(selectedAward)}
                    </div>
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {selectedAward.organization}
                    </p>
                    <p className="font-mono text-xs text-muted mt-1">
                      Official Certificate &bull; {selectedAward.date}
                    </p>
                  </div>
                }
              />
            </div>

            <div className="mt-4 rounded-2xl border border-border bg-surface-2 p-4 font-mono text-xs text-muted space-y-2">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-subtle">Date / Session:</span>
                <span className="font-semibold text-foreground">{selectedAward.date}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-subtle">Issuing Institution:</span>
                <span className="font-semibold text-foreground">{selectedAward.organization}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-subtle">Status:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Authenticated &bull; Dean Approved</span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              {selectedAward.description}
            </p>

            {selectedAward.verificationDetails && (
              <p className="mt-3 text-xs text-subtle italic">
                Note: {selectedAward.verificationDetails}
              </p>
            )}

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                className="btn-secondary px-5"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
