import React, { useState } from 'react';
import { Calculator, ChevronDown, ChevronUp, Bot, Zap, DollarSign, Clock } from 'lucide-react';

export const SecuritySimulator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [monthlyVolume, setMonthlyVolume] = useState(3000);
  const [reviewMinutes, setReviewMinutes] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(35);

  // Unit Economics Model:
  // Automation cuts 65% of review time and triages 90% of submissions automatically
  const manualHoursPerMonth = (monthlyVolume * reviewMinutes) / 60;
  const hoursSavedPerMonth = Math.round(manualHoursPerMonth * 0.65);
  const annualHoursSaved = hoursSavedPerMonth * 12;
  const annualCostSaved = annualHoursSaved * hourlyRate;
  const speedupFactor = '3×';

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
                Try the unit-economics simulator
              </span>
              <span className="block text-sm text-muted">
                The cost model I use to make the case for AI automation.
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
                {/* Slider 1: Monthly Tasks */}
                <div>
                  <div className="flex justify-between text-sm">
                    <label htmlFor="volume-slider" className="font-medium text-foreground">
                      Monthly Document &amp; Task Volume
                    </label>
                    <span className="font-mono font-semibold text-accent">
                      {monthlyVolume.toLocaleString()} submissions
                    </span>
                  </div>
                  <input
                    id="volume-slider"
                    type="range"
                    min="500"
                    max="15000"
                    step="500"
                    value={monthlyVolume}
                    onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                    className="mt-3 w-full"
                  />
                  <p className="mt-1 text-xs text-subtle">
                    Receipts, invoices, student applications, or transaction tickets reviewed per month.
                  </p>
                </div>

                {/* Slider 2: Minutes per Task */}
                <div>
                  <div className="flex justify-between text-sm">
                    <label htmlFor="mins-slider" className="font-medium text-foreground">
                      Manual Review Duration per Item
                    </label>
                    <span className="font-mono font-semibold text-violet">{reviewMinutes} mins</span>
                  </div>
                  <input
                    id="mins-slider"
                    type="range"
                    min="3"
                    max="30"
                    step="1"
                    value={reviewMinutes}
                    onChange={(e) => setReviewMinutes(Number(e.target.value))}
                    className="mt-3 w-full"
                  />
                  <p className="mt-1 text-xs text-subtle">
                    Average manual handling, OCR correction, data validation, and approval time.
                  </p>
                </div>

                {/* Slider 3: Hourly Rate */}
                <div>
                  <div className="flex justify-between text-sm">
                    <label htmlFor="rate-slider" className="font-medium text-foreground">
                      Analyst / Operator Blended Hourly Rate
                    </label>
                    <span className="font-mono font-semibold text-teal">${hourlyRate} / hr</span>
                  </div>
                  <input
                    id="rate-slider"
                    type="range"
                    min="15"
                    max="100"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="mt-3 w-full"
                  />
                  <p className="mt-1 text-xs text-subtle">
                    Loaded operational cost per operator hour.
                  </p>
                </div>
              </div>

              {/* Real-Time Calculated Results Card */}
              <div className="lg:col-span-5">
                <div className="h-full rounded-2xl border border-border bg-surface-2 p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                      Estimated Annual ROI &amp; OpEx Impact
                    </span>

                    <div className="mt-4 space-y-4">
                      {/* Stat 1: Hours Saved */}
                      <div className="flex items-center justify-between border-b border-border pb-3">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium text-muted">Annual Hours Saved</span>
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

                      {/* Stat 3: Review Cost Cut */}
                      <div className="flex items-center justify-between border-b border-border pb-3">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-amber-500" />
                          <span className="text-sm font-medium text-muted">Review Cost Reduction</span>
                        </div>
                        <span className="font-heading text-lg font-bold text-amber-600 dark:text-amber-400 font-mono">
                          60–70% Cut
                        </span>
                      </div>

                      {/* Stat 4: Speedup */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Bot className="h-4 w-4 text-violet" />
                          <span className="text-sm font-medium text-muted">Throughput Velocity</span>
                        </div>
                        <span className="font-heading text-lg font-bold text-violet font-mono">
                          {speedupFactor} Faster
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border text-[11px] font-mono text-subtle">
                    Model: Multi-tier LLM routing + agentic automated triage &bull; 90% auto-resolution
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
