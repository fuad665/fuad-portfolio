import React, { useState } from 'react';
import {
  Award as AwardIcon,
  GraduationCap,
  Medal,
  Users,
  CheckCircle2,
  ArrowUpRight,
  Maximize2,
  X,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { AWARDS, CERTIFICATIONS } from '../data/portfolioData';
import { Award } from '../types/portfolio';
import { EditableImage } from './EditableImage';

export const AwardsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'academic' | 'leadership' | 'programmes'>('all');
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredAwards = AWARDS.filter((award) => {
    if (activeTab === 'all') return true;
    return award.category === activeTab;
  });

  const displayedAwards = showAll ? filteredAwards : filteredAwards.slice(0, 6);

  const getAwardIcon = (award: Award) => {
    switch (award.category) {
      case 'academic':
        return <GraduationCap className="h-6 w-6 text-accent" />;
      case 'leadership':
        return <Users className="h-6 w-6 text-rose" />;
      case 'programmes':
        return <Medal className="h-6 w-6 text-violet" />;
      default:
        return <AwardIcon className="h-6 w-6 text-amber" />;
    }
  };

  const getBadgeColor = (color: Award['color']) => {
    switch (color) {
      case 'rose':
        return 'text-rose';
      case 'amber':
        return 'text-amber';
      case 'violet':
        return 'text-violet';
      case 'teal':
        return 'text-teal';
      default:
        return 'text-accent';
    }
  };

  return (
    <section id="certifications" className="section border-t border-border bg-surface">
      <div className="container-page">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between lg:mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Recognition</p>
            <h2 className="h-section mt-3 sm:mt-4">
              Honors &amp; certifications
            </h2>
            <p className="lead mt-3 sm:mt-4">
              Academic awards, competition results and leadership recognition. Every certificate is shown in full, so you can check it.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="no-scrollbar -mx-5 mb-8 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div role="tablist" aria-label="Filter honors" className="inline-flex gap-1 rounded-full bg-surface-2 p-1 border border-border">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'all'}
              onClick={() => setActiveTab('all')}
              className={`tab cursor-pointer ${activeTab === 'all' ? 'tab-active' : ''}`}
            >
              All
              <span className="text-xs text-subtle">{AWARDS.length}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'academic'}
              onClick={() => setActiveTab('academic')}
              className={`tab cursor-pointer ${activeTab === 'academic' ? 'tab-active' : ''}`}
            >
              Academic
              <span className="text-xs text-subtle">
                {AWARDS.filter((a) => a.category === 'academic').length}
              </span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'leadership'}
              onClick={() => setActiveTab('leadership')}
              className={`tab cursor-pointer ${activeTab === 'leadership' ? 'tab-active' : ''}`}
            >
              Leadership
              <span className="text-xs text-subtle">
                {AWARDS.filter((a) => a.category === 'leadership').length}
              </span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'programmes'}
              onClick={() => setActiveTab('programmes')}
              className={`tab cursor-pointer ${activeTab === 'programmes' ? 'tab-active' : ''}`}
            >
              Programmes
              <span className="text-xs text-subtle">
                {AWARDS.filter((a) => a.category === 'programmes').length}
              </span>
            </button>
          </div>
        </div>

        {/* Honors Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {displayedAwards.map((award) => {
            const badgeColorClass = getBadgeColor(award.color);
            return (
              <button
                type="button"
                key={award.id}
                onClick={() => setSelectedAward(award)}
                className="card-interactive group flex flex-col overflow-hidden text-left cursor-pointer"
              >
                <div className="relative w-full bg-surface-2 p-2.5 sm:p-4">
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg bg-white shadow-card">
                    <EditableImage
                      storageKey={`award_cert_${award.id}`}
                      alt={award.title}
                      className="h-full w-full"
                      imgClassName="h-full w-full object-contain p-1.5"
                      uploadPrompt="Upload Certificate"
                      showBadgeOnlyOnHover={true}
                      fallbackContent={
                        <div className="h-full w-full flex flex-col items-center justify-center p-3 text-center bg-surface-2/40">
                          {getAwardIcon(award)}
                          <span className="mt-2 text-xs font-semibold text-foreground line-clamp-1">
                            {award.title}
                          </span>
                        </div>
                      }
                    />
                  </div>

                  <span className="absolute right-4 top-4 hidden h-8 w-8 sm:right-6 sm:top-6 sm:flex items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-3.5 sm:p-5">
                  <p className={`text-xs font-medium ${badgeColorClass}`}>
                    {award.badge}
                  </p>
                  <h3 className="mt-1.5 text-sm font-semibold leading-snug text-foreground sm:mt-2 sm:text-[15px]">
                    {award.title}
                  </h3>
                  <p className="mt-auto hidden pt-4 text-sm text-muted sm:block">
                    {award.organization}
                  </p>
                  <p className="mt-auto pt-2 text-xs text-subtle sm:mt-0.5 sm:pt-0">
                    {award.date}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Show all / Show less button */}
        {filteredAwards.length > 6 && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="btn-secondary cursor-pointer"
            >
              <span>{showAll ? 'Show less' : `Show all ${filteredAwards.length}`}</span>
              {showAll ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>
        )}

        {/* Professional Certifications List */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Professional certifications
            </h3>
            <p className="text-sm text-muted">
              Verifiable via Coursera, IBM, Google &amp; AWS
            </p>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.id}>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4 transition-colors hover:bg-surface-2/40 px-2 rounded-lg"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-medium text-foreground transition-colors group-hover:text-accent">
                      {cert.name}
                    </span>
                    <span className="block text-sm text-muted">
                      {cert.organization}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-foreground">
                    <span className="hidden sm:inline">Verify</span>
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
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-surface-2 hover:text-foreground cursor-pointer"
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

            <div className="mt-4 aspect-[16/11] w-full overflow-hidden rounded-xl border border-border bg-surface-2">
              <EditableImage
                storageKey={`award_cert_${selectedAward.id}`}
                alt={selectedAward.title}
                className="h-full w-full"
                imgClassName="h-full w-full object-contain p-2"
                uploadPrompt="Upload Certificate"
                fallbackContent={
                  <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center">
                    {getAwardIcon(selectedAward)}
                    <p className="mt-3 font-heading font-semibold text-foreground">
                      {selectedAward.title}
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      {selectedAward.organization} &bull; {selectedAward.date}
                    </p>
                  </div>
                }
              />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              {selectedAward.description}
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-subtle">
              <span>Date: {selectedAward.date}</span>
              <span className="font-mono uppercase text-accent font-semibold">
                Verified Credential
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
