import React, { useState } from 'react';
import { X, Plus, Award as AwardIcon } from 'lucide-react';
import { Award } from '../types/portfolio';

interface CreateAwardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (award: Award) => void;
}

export const CreateAwardModal: React.FC<CreateAwardModalProps> = ({ isOpen, onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [organization, setOrganization] = useState('Albukhary International University');
  const [category, setCategory] = useState<'academic' | 'leadership' | 'programmes'>('academic');
  const [badge, setBadge] = useState("Dean's List Honor");
  const [color, setColor] = useState<'accent' | 'rose' | 'amber' | 'violet' | 'teal'>('accent');
  const [date, setDate] = useState('Semester 3 · Academic Session 2024');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please enter an award title.');
      return;
    }

    const newAward: Award = {
      id: `award-${Date.now()}`,
      title: title.trim(),
      organization: organization.trim() || 'Albukhary International University',
      category,
      badge: badge.trim() || 'Honors Recognition',
      color,
      date: date.trim() || '2024',
      description: description.trim() || 'Academic distinction recognized by faculty and academic committee.',
    };

    onCreate(newAward);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-2xl sm:p-8"
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

        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white">
            <AwardIcon className="h-5 w-5" />
          </span>
          <h2 className="font-heading text-xl font-bold text-foreground">
            Create New Award / Certificate Card
          </h2>
        </div>
        <p className="mt-1 text-xs text-muted">
          Add a new honor, academic award, or leadership credential to the recognition grid.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Award Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Dean's List Award — Academic Excellence"
              className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Issuing Organization
              </label>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Albukhary International University"
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Badge / Tag Text
              </label>
              <input
                type="text"
                value={badge}
                onChange={(e) => setBadge(e.target.value)}
                placeholder="Dean's List Honor, 1st Place, Gold Medalist"
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
              >
                <option value="academic">Academic</option>
                <option value="leadership">Leadership</option>
                <option value="programmes">Programmes</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Date / Session
              </label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="e.g. Semester 3 · Academic Session 2024"
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Accent Color
            </label>
            <div className="grid grid-cols-5 gap-2">
              {(['accent', 'rose', 'amber', 'violet', 'teal'] as const).map((col) => (
                <button
                  key={col}
                  type="button"
                  onClick={() => setColor(col)}
                  className={`rounded-xl border py-1.5 text-xs font-semibold capitalize transition-all cursor-pointer ${
                    color === col
                      ? 'border-foreground bg-foreground text-background shadow-sm'
                      : 'border-border bg-surface-2 text-muted hover:text-foreground'
                  }`}
                >
                  {col}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Description / Notes
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Awarded for academic excellence and top GPA performance..."
              className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-border">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary px-4 py-2 text-xs font-medium cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-gradient px-6 py-2.5 text-xs font-semibold cursor-pointer"
            >
              Add Award Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
