import React, { useState } from 'react';
import { X, Cpu, Plus, Sparkles } from 'lucide-react';

export interface Capability {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  colorClass: string;
  bulletBg: string;
  bullets: string[];
}

interface CreateSkillModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (capability: Capability) => void;
  nextNumber: string;
}

export const CreateSkillModal: React.FC<CreateSkillModalProps> = ({
  isOpen,
  onClose,
  onCreate,
  nextNumber,
}) => {
  const [number, setNumber] = useState(nextNumber);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [colorScheme, setColorScheme] = useState<'accent' | 'violet' | 'teal' | 'amber' | 'rose' | 'sky'>('accent');
  const [bulletsText, setBulletsText] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const bullets = bulletsText
      .split('\n')
      .map((b) => b.trim())
      .filter(Boolean);

    const colorMap = {
      accent: { colorClass: 'text-accent', bulletBg: 'bg-accent' },
      violet: { colorClass: 'text-violet', bulletBg: 'bg-violet' },
      teal: { colorClass: 'text-teal', bulletBg: 'bg-teal' },
      amber: { colorClass: 'text-amber', bulletBg: 'bg-amber' },
      rose: { colorClass: 'text-rose', bulletBg: 'bg-rose' },
      sky: { colorClass: 'text-sky', bulletBg: 'bg-sky' },
    };

    const scheme = colorMap[colorScheme];

    const newCap: Capability = {
      id: `cap-${Date.now()}`,
      number: number.trim() || nextNumber,
      title: title.trim(),
      subtitle: subtitle.trim(),
      colorClass: scheme.colorClass,
      bulletBg: scheme.bulletBg,
      bullets:
        bullets.length > 0
          ? bullets
          : ['Technical architecture and system design execution.', 'Proven impact across delivery lifecycle.'],
    };

    onCreate(newCap);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-border bg-surface p-6 shadow-2xl sm:p-8"
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
            <Cpu className="h-5 w-5 stroke-[1.75]" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent uppercase tracking-wider">
              <Sparkles className="h-3 w-3" />
              <span>Admin Mode</span>
            </div>
            <h2 className="mt-0.5 font-heading text-xl font-bold text-foreground">
              Add Capability Domain
            </h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                Number
              </label>
              <input
                type="text"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="07"
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm font-mono text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                Accent Theme
              </label>
              <select
                value={colorScheme}
                onChange={(e) => setColorScheme(e.target.value as any)}
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="accent">Royal Blue (Accent)</option>
                <option value="violet">Violet</option>
                <option value="teal">Teal</option>
                <option value="amber">Amber</option>
                <option value="rose">Rose</option>
                <option value="sky">Sky Blue</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
              Domain Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Cloud & Distributed Systems"
              className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
              Subtitle
            </label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="e.g. High-availability containerized microservices."
              className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
              Key Bullets / Proficiencies (one per line)
            </label>
            <textarea
              rows={4}
              value={bulletsText}
              onChange={(e) => setBulletsText(e.target.value)}
              placeholder="Docker containerization, Kubernetes cluster orchestration&#10;CI/CD automated testing pipelines with GitHub Actions&#10;Zero-downtime rolling deployments and observability monitoring"
              className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-xs font-mono text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent"
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
              <span>Add Capability Card</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
