import React, { useState } from 'react';
import { X, Briefcase, Plus, Sparkles } from 'lucide-react';
import { Experience } from '../types/portfolio';

interface CreateExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (experience: Experience) => void;
}

export const CreateExperienceModal: React.FC<CreateExperienceModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [role, setRole] = useState('');
  const [organization, setOrganization] = useState('');
  const [organizationUrl, setOrganizationUrl] = useState('');
  const [location, setLocation] = useState('Kuala Lumpur, Malaysia');
  const [period, setPeriod] = useState('');
  const [isCurrent, setIsCurrent] = useState(false);
  const [summary, setSummary] = useState('');
  const [skillsText, setSkillsText] = useState('');
  const [responsibilitiesText, setResponsibilitiesText] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role.trim() || !organization.trim()) return;

    const skills = skillsText
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const responsibilities = responsibilitiesText
      .split('\n')
      .map((r) => r.trim())
      .filter(Boolean);

    const newExp: Experience = {
      id: `exp-${Date.now()}`,
      role: role.trim(),
      organization: organization.trim(),
      organizationUrl: organizationUrl.trim() || undefined,
      location: location.trim() || 'Kuala Lumpur, Malaysia',
      period: period.trim() || '2026 — Present',
      isCurrent,
      summary: summary.trim(),
      skills: skills.length > 0 ? skills : ['Product Strategy', 'Execution'],
      responsibilities:
        responsibilities.length > 0
          ? responsibilities
          : [
              'Spearheaded key initiatives and led discovery across cross-functional teams.',
              'Shipped high-impact features aligned with core business milestones.',
            ],
    };

    onCreate(newExp);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-surface p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-surface-2 hover:text-foreground cursor-pointer"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Briefcase className="h-5 w-5 stroke-[1.75]" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent uppercase tracking-wider">
              <Sparkles className="h-3 w-3" />
              <span>Admin Mode</span>
            </div>
            <h2 className="mt-0.5 font-heading text-xl font-bold text-foreground">
              Add New Work Experience
            </h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                Role Title *
              </label>
              <input
                type="text"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. AI Product Manager"
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                Organization / Company *
              </label>
              <input
                type="text"
                required
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="e.g. TechCorp Sdn. Bhd."
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                Period
              </label>
              <input
                type="text"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                placeholder="e.g. 2025 — Present"
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Kuala Lumpur, Malaysia"
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                Company Website
              </label>
              <input
                type="url"
                value={organizationUrl}
                onChange={(e) => setOrganizationUrl(e.target.value)}
                placeholder="https://company.com"
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isCurrentExp"
              checked={isCurrent}
              onChange={(e) => setIsCurrent(e.target.checked)}
              className="h-4 w-4 rounded border-border text-accent focus:ring-accent"
            />
            <label htmlFor="isCurrentExp" className="text-xs font-medium text-foreground cursor-pointer">
              Mark as current role (shows active status dot)
            </label>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
              Summary Paragraph
            </label>
            <textarea
              rows={2}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Brief summary of your core responsibilities and product ownership..."
              className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
              Skills / Chips (comma-separated)
            </label>
            <input
              type="text"
              value={skillsText}
              onChange={(e) => setSkillsText(e.target.value)}
              placeholder="e.g. AI product strategy, Multi-model routing, PRD writing, Agile"
              className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
              Key Achievements / Responsibilities (one per line)
            </label>
            <textarea
              rows={4}
              value={responsibilitiesText}
              onChange={(e) => setResponsibilitiesText(e.target.value)}
              placeholder="Conducted workflow discovery with stakeholders and drafted PRDs&#10;Scaled product adoption across 10+ enterprise clients&#10;Automated data pipelines shortening turnaround by 3x"
              className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm font-mono text-xs text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="pt-3 flex items-center justify-end gap-3 border-t border-border">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-border px-4 py-2.5 text-xs font-medium text-muted hover:bg-surface-2 hover:text-foreground cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-gradient inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold cursor-pointer shadow-md"
            >
              <Plus className="h-4 w-4" />
              <span>Add Role Card</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
