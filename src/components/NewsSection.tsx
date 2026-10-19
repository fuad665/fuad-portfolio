import React, { useState } from 'react';
import { Shield, GraduationCap, FileCheck, Plus, X } from 'lucide-react';
import { NEWS_STORIES } from '../data/portfolioData';
import { NewsStory } from '../types/portfolio';
import { EditableImage } from './EditableImage';
import { useAdmin } from '../context/AdminContext';
import { CreateNewsModal } from './CreateNewsModal';

export const NewsSection: React.FC = () => {
  const { isAdmin } = useAdmin();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [stories, setStories] = useState<NewsStory[]>(() => {
    try {
      const saved = localStorage.getItem('portfolio_news');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return NEWS_STORIES;
  });

  const handleDeleteStory = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Delete this milestone card? / هل ترغب في حذف هذا الكارد؟')) {
      const updated = stories.filter((s) => s.id !== id);
      setStories(updated);
      localStorage.setItem('portfolio_news', JSON.stringify(updated));
    }
  };

  const handleCreateStory = (newStory: NewsStory) => {
    const updated = [newStory, ...stories];
    setStories(updated);
    localStorage.setItem('portfolio_news', JSON.stringify(updated));
  };

  const getIconForCategory = (cat: string) => {
    if (cat.includes('Conference') || cat.includes('Industry')) return <Shield className="h-10 w-10 text-accent" />;
    if (cat.includes('Academic') || cat.includes('Convocation')) return <GraduationCap className="h-10 w-10 text-amber" />;
    return <FileCheck className="h-10 w-10 text-teal" />;
  };

  return (
    <section id="news" className="section border-t border-border">
      <div className="container-page">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between lg:mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Latest</p>
            <h2 className="h-section mt-3 sm:mt-4">
              What I've been up to
            </h2>
            <p className="lead mt-3 sm:mt-4">
              Recent symposiums, technical milestones, and academic defenses.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {isAdmin && (
              <button
                type="button"
                onClick={() => setIsCreateModalOpen(true)}
                className="btn-gradient inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold cursor-pointer shadow-md"
              >
                <Plus className="h-4 w-4" />
                <span>Create New Story</span>
              </button>
            )}
            <span className="text-sm font-medium text-muted">
              {stories.length} recent stories
            </span>
          </div>
        </div>

        {/* 3-Column Stories Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article key={story.id} className="group relative flex flex-col">
              {/* Admin Delete 'X' Button */}
              {isAdmin && (
                <button
                  type="button"
                  onClick={(e) => handleDeleteStory(story.id, e)}
                  title="Delete story card"
                  aria-label="Delete story card"
                  className="absolute top-2 right-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-rose-500/10 text-rose-600 hover:bg-rose-500 hover:text-white transition-all shadow-sm cursor-pointer border border-rose-300 dark:border-rose-800"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}

              {/* Visual Card with Image Upload */}
              <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface-2 transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-card">
                <EditableImage
                  storageKey={`news_${story.id}`}
                  alt={story.title}
                  className="h-full w-full"
                  uploadPrompt="Upload Event / Graduation Photo"
                  objectFit="cover"
                  fallbackContent={
                    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-surface shadow-sm transition-transform duration-500 group-hover:scale-110">
                        {getIconForCategory(story.category)}
                      </div>
                      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                        {story.tags.map((tag) => (
                          <span key={tag} className="chip text-[10px] py-0.5 px-2">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  }
                />
              </div>

              {/* Story Meta */}
              <div className="mt-5 flex items-center gap-2 text-xs text-subtle">
                <span className="font-semibold text-accent">{story.category}</span>
                <span aria-hidden="true">&bull;</span>
                <time>{story.date}</time>
              </div>

              {/* Title & Summary */}
              <h3 className="mt-2 font-heading text-lg font-semibold leading-snug tracking-tight text-foreground">
                <span className="transition-colors group-hover:text-accent">
                  {story.title}
                </span>
              </h3>

              <p className="mt-2 line-clamp-3 text-[14px] leading-relaxed text-muted">
                {story.summary}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Admin: Create News Modal */}
      <CreateNewsModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreateStory}
      />
    </section>
  );
};
