import React from 'react';
import { ArrowRight, ArrowUpRight, Award, Trophy, Medal, Star } from 'lucide-react';
import { EditableImage } from './EditableImage';

export const HighlightsSection: React.FC = () => {
  const highlights = [
    {
      id: 'deans-list-sem3',
      storageKey: 'award_cert_deans-list-sem3',
      tag: "Dean's List",
      tagColor: 'text-accent',
      barColor: 'bg-accent',
      title: "Dean's List",
      subtitle: 'Awarded in 2 semesters',
      alt: "Dean's List Award — Academic Excellence",
      fallbackIcon: <Award className="h-10 w-10 text-accent stroke-[1.5]" />,
    },
    {
      id: 'public-speaking-1st',
      storageKey: 'award_cert_public-speaking-1st',
      tag: '1st Place',
      tagColor: 'text-rose',
      barColor: 'bg-rose',
      title: '1st Place',
      subtitle: 'University public speaking',
      alt: '1st Place Winner — Public Speaking Competition (Arabic)',
      fallbackIcon: <Trophy className="h-10 w-10 text-rose stroke-[1.5]" />,
    },
    {
      id: 'gold-medal',
      storageKey: 'award_cert_gold-medal',
      tag: 'Gold Medal',
      tagColor: 'text-amber',
      barColor: 'bg-amber',
      title: 'Gold Medal',
      subtitle: 'Academic distinction',
      alt: 'Gold Medal of Academic Distinction & Achievement',
      fallbackIcon: <Medal className="h-10 w-10 text-amber stroke-[1.5]" />,
    },
    {
      id: 'zindi-top-50',
      storageKey: 'award_cert_zindi-top-50',
      tag: 'Top 50% globally',
      tagColor: 'text-violet',
      barColor: 'bg-violet',
      title: 'Top 50% globally',
      subtitle: 'Zindi credit-scoring challenge',
      alt: 'African Credit Scoring Challenge — Global Top 50%',
      fallbackIcon: <Star className="h-10 w-10 text-violet stroke-[1.5]" />,
    },
  ];

  const certifiedBy = [
    {
      name: 'IBM AI Product Manager',
      url: 'https://www.coursera.org/professional-certificates/ibm-ai-product-manager',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#052FAD]" aria-label="IBM">
          <path d="M0 2h7v1.8H0V2zm10 0h4v1.8h-4V2zm7 0h7v1.8h-7V2zM0 4.8h7v1.8H0V4.8zm10 0h4v1.8h-4V4.8zm7 0h7v1.8h-7V4.8zM0 7.6h7v1.8H0V7.6zm10 0h4v1.8h-4V7.6zm7 0h7v1.8h-7V7.6zM0 10.4h2.5v1.8H0v-1.8zm4.5 0H7v1.8H4.5v-1.8zm5.5 0h4v1.8h-4v-1.8zm7 0h2.5v1.8H17v-1.8zm4.5 0H24v1.8h-2.5v-1.8zM0 13.2h2.5V15H0v-1.8zm4.5 0H7V15H4.5v-1.8zm5.5 0h4V15h-4v-1.8zm7 0h2.5V15H17v-1.8zm4.5 0H24V15h-2.5v-1.8zM0 16h7v1.8H0V16zm10 0h4v1.8h-4V16zm7 0h7v1.8h-7V16zM0 18.8h7v1.8H0v-1.8zm10 0h4v1.8h-4v-1.8zm7 0h7v1.8h-7v-1.8zM0 21.6h7v1.8H0v-1.8zm10 0h4v1.8h-4v-1.8zm7 0h7v1.8h-7v-1.8z" />
        </svg>
      ),
    },
    {
      name: 'Generative AI for PMs',
      url: 'https://www.coursera.org/account/accomplishments/specialization/EMBC4WCUL307',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#0056D2]" aria-label="Coursera">
          <path d="M11.374 23.977c-4.183-.21-8.006-2.626-9.959-6.347C-.488 14.004-.467 9.873 1.5 6.035 3.42 2.296 7.234.025 11.458 0c3.966-.023 7.643 1.956 9.771 5.257.653 1.013 1.135 2.19 1.396 3.407.086.402-.137.785-.53.91-.397.126-.814-.083-.93-.485-.295-1.026-.749-2.016-1.344-2.92-1.89-2.87-5.06-4.577-8.528-4.48-3.722.103-7.009 2.138-8.625 5.372-1.74 3.483-1.683 7.155.158 10.513 1.77 3.23 5.093 5.291 8.784 5.449 3.513.15 6.845-1.572 8.756-4.524.59-.914 1.034-1.922 1.31-2.957.112-.403.528-.617.926-.497.394.12.622.5.54.903-.255 1.238-.737 2.433-1.407 3.468-2.188 3.375-5.96 5.395-10.02 5.564-.15.007-.338.01-.496.01Z" />
        </svg>
      ),
    },
    {
      name: 'HelloPM AI PM Program',
      url: 'https://drive.google.com/file/d/1FKlgtViUk8jntgCqfpjtim2fFqtVXtwl/view',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" aria-label="HelloPM">
          <rect x="2" y="3" width="20" height="18" rx="4" fill="#0E131F" stroke="#10B981" strokeWidth="1.5" />
          <path d="M7 8v8M7 12h4M11 8v8" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M15 8v8M15 8h3a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-3" stroke="#F8FAFC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'Google Data Analytics',
      url: 'https://www.coursera.org/account/accomplishments/specialization/S71E3NPXHFHC',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" aria-label="Google">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z" />
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.36 7.35 24 12 24Z" />
          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.42l4.03-3.15Z" />
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z" />
        </svg>
      ),
    },
    {
      name: 'AWS ML Foundations',
      url: 'https://www.credly.com/badges/b6657942-90d4-4f58-a8ce-9240feba954a/public_url',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#FF9900]" aria-label="AWS">
          <path d="M18.8 15.6c-2.3 1.7-5.5 2.6-8.4 2.6-4 0-7.6-1.5-10.4-3.9-.2-.2 0-.5.2-.4 3.1 1.8 6.8 2.8 10.6 2.8 2.6 0 5.4-.6 8-1.8.4-.2.7.2.4.6l-.4.1zm1.2-1.2c-.3-.4-1.9-.2-2.6-.1-.2 0-.3-.2-.1-.3 1.3-.9 3.5-.6 3.7-.3.3.3 0 2.4-1.2 3.4-.2.1-.3.1-.4-.1.1-.8.6-2.2.6-2.6zM9.5 7.4l.2.8c.8-.7 1.8-1 2.8-1 1.7 0 2.7.9 2.7 2.4v4c0 .3.2.4.4.4.1 0 .2 0 .3-.1l.2.8c-.3.2-.8.3-1.3.3-.8 0-1.2-.4-1.2-1.3-.7.8-1.6 1.3-2.6 1.3-1.4 0-2.4-.9-2.4-2.2 0-1.7 1.3-2.3 3.6-2.4l1.3-.1v-.5c0-.9-.6-1.4-1.7-1.4-.9 0-1.7.3-2.3.8-.1.1-.3 0-.3-.2l.1-.9zm3.1 3.9l-1 .1c-1.3.1-2.1.4-2.1 1.4 0 .8.6 1.3 1.4 1.3.9 0 1.7-.5 1.7-1.5v-1.3z" />
        </svg>
      ),
    },
    {
      name: 'Microsoft Power BI',
      url: 'https://coursera.org/verify/GMZF2JCR2Q6W',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#F2C811]" aria-label="Power BI">
          <path d="M16.5 2h-3C12.7 2 12 2.7 12 3.5v17c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zm-5 6h-3C7.7 8 7 8.7 7 9.5v11c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-11c0-.8-.7-1.5-1.5-1.5zm-5 5H3.5C2.7 13 2 13.7 2 14.5v6c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-6c0-.8-.7-1.5-1.5-1.5zM22 6h-3c-.8 0-1.5.7-1.5 1.5v13c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-13c0-.8-.7-1.5-1.5-1.5z" />
        </svg>
      ),
    },
    {
      name: 'Google Cloud Tech Series',
      url: 'https://www.credential.net/cd5d8ae0-ccbb-43cf-929a-3a93be7be51d#acc.tIewT85m',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" aria-label="Google Cloud">
          <path fill="#EA4335" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          <path fill="#4285F4" d="M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
        </svg>
      ),
    },
  ];

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
          <a className="link-arrow" href="#certifications">
            See all 14 <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:gap-5">
          {highlights.map((item) => (
            <li key={item.id}>
              <a
                href="#certifications"
                className="card-interactive group relative flex h-full flex-col overflow-hidden"
              >
                {/* Colored Top Line Indicator */}
                <span aria-hidden="true" className={`absolute inset-x-0 top-0 z-10 h-1 ${item.barColor}`} />

                <div className="bg-surface-2 p-2.5 sm:p-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-white shadow-card">
                    <EditableImage
                      storageKey={item.storageKey}
                      alt={item.alt}
                      className="h-full w-full"
                      imgClassName="h-full w-full object-contain p-1"
                      uploadPrompt="Upload Certificate"
                      showBadgeOnlyOnHover={true}
                      fallbackContent={
                        <div className="h-full w-full flex flex-col items-center justify-center p-3 text-center bg-surface-2/40">
                          {item.fallbackIcon}
                          <span className="mt-2 text-[11px] font-medium text-muted line-clamp-1">
                            {item.title}
                          </span>
                        </div>
                      }
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-3.5 sm:p-5">
                  <p className={`font-heading text-base font-semibold tracking-tight sm:text-lg ${item.tagColor}`}>
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-muted sm:text-sm">
                    {item.subtitle}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* Certified By Footer */}
        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8 lg:flex-row lg:items-center lg:gap-8">
          <p className="shrink-0 text-sm font-medium text-foreground">Certified by</p>
          <ul className="flex flex-wrap gap-2">
            {certifiedBy.map((cert) => (
              <li key={cert.name}>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Verify: ${cert.name}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-background py-1.5 pl-2 pr-3 text-sm text-foreground transition-colors hover:border-foreground/30"
                >
                  <span className="flex h-5 w-5 items-center justify-center">
                    {cert.icon}
                  </span>
                  <span>{cert.name}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-subtle transition-colors group-hover:text-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
