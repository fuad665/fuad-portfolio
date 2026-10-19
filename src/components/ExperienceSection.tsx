import React, { useState } from 'react';
import { ArrowUpRight, Download, ChevronDown, ChevronUp, Plus, X, Briefcase } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';
import { Experience } from '../types/portfolio';
import { useAdmin } from '../context/AdminContext';
import { CreateExperienceModal } from './CreateExperienceModal';

interface ExperienceSectionProps {
  onOpenResume: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenResume }) => {
  const { isAdmin } = useAdmin();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [experiences, setExperiences] = useState<Experience[]>(() => {
    try {
      const saved = localStorage.getItem('portfolio_experience');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return EXPERIENCE_ITEMS;
  });

  const handleDeleteExperience = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Delete this role card? / هل ترغب في حذف هذا الكارد؟')) {
      const updated = experiences.filter((item) => item.id !== id);
      setExperiences(updated);
      localStorage.setItem('portfolio_experience', JSON.stringify(updated));
    }
  };

  const handleCreateExperience = (newExp: Experience) => {
    const updated = [newExp, ...experiences];
    setExperiences(updated);
    localStorage.setItem('portfolio_experience', JSON.stringify(updated));
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="section border-t border-border bg-surface">
      <div className="container-page">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between lg:mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Experience</p>
            <h2 className="h-section mt-3 sm:mt-4">
              Where I've shipped
            </h2>
            <p className="lead mt-3 sm:mt-4">
              Product roles where I owned discovery, requirements and rollout, and was accountable for the outcome.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {isAdmin && (
              <button
                type="button"
                onClick={() => setIsCreateModalOpen(true)}
                className="btn-gradient inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold cursor-pointer shadow-md"
              >
                <Plus className="h-4 w-4" />
                <span>Create New Role</span>
              </button>
            )}
            <button
              type="button"
              onClick={onOpenResume}
              className="btn-secondary cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>Full CV (PDF)</span>
            </button>
          </div>
        </div>

        {/* Experience Timeline */}
        <ol className="divide-y divide-border border-y border-border">
          {experiences.map((item) => {
            const isExpanded = expandedId === item.id;
            const visibleResponsibilities = isExpanded
              ? item.responsibilities
              : item.responsibilities.slice(0, 3);
            const hasMore = item.responsibilities.length > 3;

            return (
              <li
                key={item.id}
                className="relative grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-10 sm:py-12 group"
              >
                {/* Admin Delete 'X' Button */}
                {isAdmin && (
                  <button
                    type="button"
                    onClick={(e) => handleDeleteExperience(item.id, e)}
                    title="Delete role card"
                    aria-label="Delete role card"
                    className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/10 text-rose-600 hover:bg-rose-500 hover:text-white transition-all shadow-sm cursor-pointer border border-rose-300 dark:border-rose-800"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}

                {/* Left Column: Organization & Meta */}
                <div className="md:col-span-4">
                  <div className="md:sticky md:top-24">
                    <p className="meta font-semibold">{item.period}</p>
                    {item.organizationUrl ? (
                      <a
                        href={item.organizationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-base font-semibold text-foreground transition-colors hover:text-accent"
                      >
                        <span>{item.organization}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-subtle" />
                      </a>
                    ) : (
                      <p className="mt-2 text-base font-semibold text-foreground">
                        {item.organization}
                      </p>
                    )}
                    <p className="mt-1 text-sm text-muted">{item.location}</p>

                    {item.isCurrent && (
                      <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-muted">
                        <span className="status-dot" />
                        Current role
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Column: Role Details & Achievements */}
                <div className="md:col-span-8">
                  <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground pr-8">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {item.summary}
                  </p>

                  {/* Skills Chips */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  <ul className="mt-6 space-y-3">
                    {visibleResponsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expand / Collapse Button if more than 3 */}
                  {hasMore && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.id)}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground cursor-pointer"
                    >
                      <span>
                        {isExpanded ? 'Show less' : `Show ${item.responsibilities.length - 3} more`}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Admin: Create Experience Modal */}
      <CreateExperienceModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreateExperience}
      />
    </section>
  );
};
