import React, { useState } from 'react';
import { X, Plus, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (project: Project) => void;
}

export const CreateProjectModal: React.FC<CreateProjectModalProps> = ({ isOpen, onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Enterprise GenAI');
  const [categoryColor, setCategoryColor] = useState<'accent' | 'violet' | 'teal' | 'amber'>('accent');
  const [summary, setSummary] = useState('');
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [metric1Label, setMetric1Label] = useState('Throughput');
  const [metric1Value, setMetric1Value] = useState('3x Faster');
  const [metric2Label, setMetric2Label] = useState('Cost Cut');
  const [metric2Value, setMetric2Value] = useState('60-70%');
  const [metric3Label, setMetric3Label] = useState('Scale');
  const [metric3Value, setMetric3Value] = useState('10+ Clients');
  const [technologies, setTechnologies] = useState('GPT-4o, Fast-API, Python');
  const [keyFeatures, setKeyFeatures] = useState('Automated workflow validation\nMulti-model dynamic routing\nReal-time telemetry');
  const [githubUrl, setGithubUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !summary.trim()) {
      alert('Please fill in at least the project title and summary.');
      return;
    }

    const newProject: Project = {
      id: `project-${Date.now()}`,
      title: title.trim(),
      category: category.trim(),
      categoryColor,
      summary: summary.trim(),
      description: summary.trim(),
      problem: problem.trim() || 'Identified operational workflow bottleneck requiring scalable automation.',
      solution: solution.trim() || 'Architected and rolled out automated AI platform delivering measurable ROI.',
      keyFeatures: keyFeatures.split('\n').filter((f) => f.trim().length > 0),
      metrics: [
        { label: metric1Label.trim() || 'Throughput', value: metric1Value.trim() || '3x Faster' },
        { label: metric2Label.trim() || 'Cost Cut', value: metric2Value.trim() || '60%' },
        { label: metric3Label.trim() || 'Scale', value: metric3Value.trim() || '10+ Clients' },
      ],
      technologies: technologies.split(',').map((t) => t.trim()).filter(Boolean),
      githubUrl: githubUrl.trim() || undefined,
      liveUrl: liveUrl.trim() || undefined,
      featured: true,
    };

    onCreate(newProject);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-2xl sm:p-8"
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
            <Plus className="h-5 w-5" />
          </span>
          <h2 className="font-heading text-xl font-bold text-foreground">
            Create New Project Card
          </h2>
        </div>
        <p className="mt-1 text-xs text-muted">
          Add a new case study card matching the exact specifications and layout of this section.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-h-[75vh] overflow-y-auto pr-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Project Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. MAIA — Enterprise AI Assistant"
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Category Label
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g. Enterprise GenAI"
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Accent Theme Color
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['accent', 'violet', 'teal', 'amber'] as const).map((col) => (
                <button
                  key={col}
                  type="button"
                  onClick={() => setCategoryColor(col)}
                  className={`rounded-xl border py-2 text-xs font-semibold capitalize transition-all cursor-pointer ${
                    categoryColor === col
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
              Short Summary / Problem Statement *
            </label>
            <textarea
              required
              rows={2}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Enterprise teams needed to automate repetitive workflows..."
              className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Detailed Problem
              </label>
              <textarea
                rows={2}
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="High operational overhead, 4-6 hours manual audit..."
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Delivered Solution
              </label>
              <textarea
                rows={2}
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                placeholder="Led development of automated LLM pipeline..."
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              3 Key Outcome Metrics (Label &amp; Value)
            </label>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <input
                  type="text"
                  placeholder="Metric 1 Label"
                  value={metric1Label}
                  onChange={(e) => setMetric1Label(e.target.value)}
                  className="w-full rounded-lg border border-border bg-surface-2 px-2.5 py-1.5 text-xs text-foreground mb-1"
                />
                <input
                  type="text"
                  placeholder="Value (e.g. 60-70%)"
                  value={metric1Value}
                  onChange={(e) => setMetric1Value(e.target.value)}
                  className="w-full rounded-lg border border-border bg-surface-2 px-2.5 py-1.5 text-xs font-semibold text-accent"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Metric 2 Label"
                  value={metric2Label}
                  onChange={(e) => setMetric2Label(e.target.value)}
                  className="w-full rounded-lg border border-border bg-surface-2 px-2.5 py-1.5 text-xs text-foreground mb-1"
                />
                <input
                  type="text"
                  placeholder="Value (e.g. 10+ Clients)"
                  value={metric2Value}
                  onChange={(e) => setMetric2Value(e.target.value)}
                  className="w-full rounded-lg border border-border bg-surface-2 px-2.5 py-1.5 text-xs font-semibold text-accent"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Metric 3 Label"
                  value={metric3Label}
                  onChange={(e) => setMetric3Label(e.target.value)}
                  className="w-full rounded-lg border border-border bg-surface-2 px-2.5 py-1.5 text-xs text-foreground mb-1"
                />
                <input
                  type="text"
                  placeholder="Value (e.g. 3x Faster)"
                  value={metric3Value}
                  onChange={(e) => setMetric3Value(e.target.value)}
                  className="w-full rounded-lg border border-border bg-surface-2 px-2.5 py-1.5 text-xs font-semibold text-accent"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Key Features (One per line)
            </label>
            <textarea
              rows={3}
              value={keyFeatures}
              onChange={(e) => setKeyFeatures(e.target.value)}
              placeholder="One feature per line..."
              className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Technologies (Comma separated)
            </label>
            <input
              type="text"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              placeholder="GPT-4o, DeepSeek, Python, FastAPI"
              className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                GitHub Repository URL (Optional)
              </label>
              <input
                type="url"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/fuad665/..."
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Live Product URL (Optional)
              </label>
              <input
                type="url"
                value={liveUrl}
                onChange={(e) => setLiveUrl(e.target.value)}
                placeholder="https://..."
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
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
              Add Project Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
