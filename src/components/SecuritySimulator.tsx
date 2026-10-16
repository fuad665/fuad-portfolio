import React, { useState } from 'react';
import { Calculator, ChevronDown, ChevronUp, ShieldCheck, Zap, DollarSign, Clock } from 'lucide-react';

export const SecuritySimulator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [systemsCount, setSystemsCount] = useState(25);
  const [weeklyAuditHours, setWeeklyAuditHours] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(60);

  // Calculations:
  // Automation cuts ~65% of repetitive audit & access management overhead
  const annualHoursSaved = Math.round(weeklyAuditHours * 52 * 0.65);
  const annualCostSaved = annualHoursSaved * hourlyRate;
  const vulnerabilityTriageSpeedup = (1 + (systemsCount / 15)).toFixed(1);

  return (
    <div className="container-page pb-14 sm:pb-20">
      <div className="rounded-2xl border border-dashed border-border p-5 sm:p-6 bg-surface/50 backdrop-blur-sm transition-all hover:border-foreground/20">
        {/* Accordion Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between gap-4 text-left cursor-pointer"
          aria-expanded={isOpen}
        >
          <span className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Calculator className="h-[18px] w-[18px]" />
            </span>
            <span>
              <span className="block text-[15px] font-semibold text-foreground">
                Try the Security &amp; Automation ROI Simulator
              </span>
              <span className="block text-sm text-muted">
                The quantitative model I use to calculate breach risk mitigation and hours saved through secure automation.
              </span>
            </span>
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted">
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </span>
        </button>

        {/* Collapsible Content */}
        {isOpen && (
          <div className="mt-8 border-t border-border pt-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Sliders Input Panel */}
              <div className="space-y-6 lg:col-span-7">
                {/* Slider 1: Managed Systems */}
                <div>
                  <div className="flex justify-between text-sm">
                    <label htmlFor="systems-slider" className="font-medium text-foreground">
                      Managed Systems &amp; Services
                    </label>
                    <span className="font-mono font-semibold text-accent">{systemsCount} nodes</span>
                  </div>
                  <input
                    id="systems-slider"
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={systemsCount}
                    onChange={(e) => setSystemsCount(Number(e.target.value))}
                    className="mt-3 w-full"
                  />
                  <p className="mt-1 text-xs text-subtle">
                    Servers, database instances, and internal microservices requiring compliance access.
                  </p>
                </div>

                {/* Slider 2: Weekly Audit Hours */}
                <div>
                  <div className="flex justify-between text-sm">
                    <label htmlFor="hours-slider" className="font-medium text-foreground">
                      Manual Security &amp; Access Admin (Hours / Week)
                    </label>
                    <span className="font-mono font-semibold text-violet">{weeklyAuditHours} hrs/wk</span>
                  </div>
                  <input
                    id="hours-slider"
                    type="range"
                    min="5"
                    max="40"
                    step="1"
                    value={weeklyAuditHours}
                    onChange={(e) => setWeeklyAuditHours(Number(e.target.value))}
                    className="mt-3 w-full"
                  />
                  <p className="mt-1 text-xs text-subtle">
                    Time spent on manual permission triage, log review, and patch verification.
                  </p>
                </div>

                {/* Slider 3: Hourly Rate */}
                <div>
                  <div className="flex justify-between text-sm">
                    <label htmlFor="rate-slider" className="font-medium text-foreground">
                      Average Engineer / Admin Cost
                    </label>
                    <span className="font-mono font-semibold text-teal">${hourlyRate} / hr</span>
                  </div>
                  <input
                    id="rate-slider"
                    type="range"
                    min="25"
                    max="150"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="mt-3 w-full"
                  />
                  <p className="mt-1 text-xs text-subtle">
                    Blended engineering resource cost for operational tasks.
                  </p>
                </div>
              </div>

              {/* Real-Time Calculated Results Card */}
              <div className="lg:col-span-5">
                <div className="h-full rounded-2xl border border-border bg-surface-2 p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                      Estimated Annual Impact
                    </span>

                    <div className="mt-4 space-y-4">
                      {/* Stat 1: Hours Saved */}
                      <div className="flex items-center justify-between border-b border-border pb-3">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium text-muted">Dev &amp; Ops Hours Saved</span>
                        </div>
                        <span className="font-heading text-lg font-bold text-foreground font-mono">
                          {annualHoursSaved.toLocaleString()} hrs
                        </span>
                      </div>

                      {/* Stat 2: Dollar Savings */}
                      <div className="flex items-center justify-between border-b border-border pb-3">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-emerald-500" />
                          <span className="text-sm font-medium text-muted">Annual Cost Avoidance</span>
                        </div>
                        <span className="font-heading text-lg font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                          ${annualCostSaved.toLocaleString()}
                        </span>
                      </div>

                      {/* Stat 3: Triage Speed */}
                      <div className="flex items-center justify-between border-b border-border pb-3">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-amber" />
                          <span className="text-sm font-medium text-muted">Vulnerability Triage</span>
                        </div>
                        <span className="font-heading text-lg font-bold text-amber font-mono">
                          {vulnerabilityTriageSpeedup}× Faster
                        </span>
                      </div>

                      {/* Stat 4: Security Posture */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-violet" />
                          <span className="text-sm font-medium text-muted">Automated Audit Trails</span>
                        </div>
                        <span className="font-heading text-lg font-bold text-violet font-mono">
                          100% Immutable
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-[11px] text-subtle leading-relaxed border-t border-border pt-4">
                    Based on benchmark data from automated RBAC policy enforcement and CI/CD security scanning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
