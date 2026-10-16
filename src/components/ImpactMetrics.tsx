import React from 'react';
import { IMPACT_METRICS } from '../data/portfolioData';

export const ImpactMetrics: React.FC = () => {
  return (
    <div className="container-page pb-12 sm:pb-16 lg:pb-20">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
        {IMPACT_METRICS.map((metric) => {
          const colorClasses = {
            accent: 'text-accent bg-accent',
            violet: 'text-violet bg-violet',
            teal: 'text-teal bg-teal',
            amber: 'text-amber bg-amber',
          }[metric.color];

          const textColor = colorClasses.split(' ')[0];
          const barColor = colorClasses.split(' ')[1];

          return (
            <div key={metric.label} className="relative bg-surface p-4 sm:p-6 transition-colors hover:bg-surface-2/60">
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-0.5 ${barColor}`} />
              <p className={`font-heading text-[1.75rem] font-semibold leading-none tracking-tight sm:text-4xl ${textColor}`}>
                {metric.value}
              </p>
              <p className="mt-2 text-[13px] font-semibold text-foreground sm:mt-2.5 sm:text-sm">
                {metric.label}
              </p>
              <p className="mt-1 text-xs leading-snug text-muted sm:text-[13px]">
                {metric.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
