import React from 'react';
import { Shield, GraduationCap, FileCheck } from 'lucide-react';
import { NEWS_STORIES } from '../data/portfolioData';
import { EditableImage } from './EditableImage';

export const NewsSection: React.FC = () => {
  const getIconForCategory = (cat: string) => {
    if (cat.includes('Conference')) return <Shield className="h-10 w-10 text-accent" />;
    if (cat.includes('Academic')) return <GraduationCap className="h-10 w-10 text-amber" />;
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
          <span className="text-sm font-medium text-muted">
            {NEWS_STORIES.length} recent stories
          </span>
        </div>

        {/* 3-Column Stories Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS_STORIES.map((story) => (
            <article key={story.id} className="group flex flex-col">
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
    </section>
  );
};
