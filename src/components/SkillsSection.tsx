import React, { useState } from 'react';
import { Calculator, ChevronDown, ChevronUp, Plus, X } from 'lucide-react';
import { SecuritySimulator } from './SecuritySimulator';
import { useAdmin } from '../context/AdminContext';
import { CreateSkillModal, Capability } from './CreateSkillModal';

const DEFAULT_CAPABILITIES: Capability[] = [
  {
    id: '01',
    number: '01',
    title: 'Product management',
    subtitle: 'Discovery to release, with the team aligned.',
    colorClass: 'text-accent',
    bulletBg: 'bg-accent',
    bullets: [
      'End-to-end product lifecycle: opportunity sizing, PRD authoring, sprint backlogs & release roadmaps',
      'Translating executive business strategy into actionable engineering sprints & user acceptance criteria',
      'Cross-functional stakeholder alignment across Software Engineering, Data Science, UX, and C-Suite',
      'Feature prioritization frameworks (RICE, MoSCoW, Impact vs. Effort matrices) for high-velocity delivery',
      'KPI instrumentation, OKR tracking, and product analytics to validate post-launch customer adoption',
    ],
  },
  {
    id: '02',
    number: '02',
    title: 'Generative AI systems',
    subtitle: 'Know the stack well enough to make the trade-offs.',
    colorClass: 'text-violet',
    bulletBg: 'bg-violet',
    bullets: [
      'Multi-model routing (GPT-4o, DeepSeek, Gemini) optimized for latency, accuracy, and token economics',
      'Enterprise Retrieval-Augmented Generation (RAG) with hybrid search and document citation gates',
      'Autonomous multi-turn agentic workflows & tool-calling agent systems automating business tasks',
      'Advanced prompt engineering, system prompt governance & dynamic context window management',
      'LangChain, vector embedding databases & enterprise knowledge base integrations',
    ],
  },
  {
    id: '03',
    number: '03',
    title: 'Unit economics & ROI',
    subtitle: 'Every feature ties back to cost or revenue.',
    colorClass: 'text-teal',
    bulletBg: 'bg-teal',
    bullets: [
      'Operational expense (OpEx) reduction modeling (60–70% cost reduction delivered across client workflows)',
      'Cost-to-serve analysis, token budgeting, and cloud inference ROI forecasting for enterprise contracts',
      'Turnaround velocity acceleration: shortening manual processing bottlenecks by 3×',
      'Commercial viability assessments, customer discovery interviews, and enterprise onboarding roadmaps',
      'Executive business case presentations demonstrating clear cost savings and revenue enablement',
    ],
  },
  {
    id: '04',
    number: '04',
    title: 'Evaluation & governance',
    subtitle: 'Ship AI you can measure and trust.',
    colorClass: 'text-amber',
    bulletBg: 'bg-amber',
    bullets: [
      'Automated 120+ test-case evaluation suites benchmarking accuracy, latency, and rubric adherence',
      'Semantic precision benchmarking using ROUGE-L and BERTScore against verified ground truth',
      'Hallucination mitigation achieving < 0.2% error thresholds through multi-layer verification gates',
      'Enterprise safety guardrails, automated content filters & human-in-the-loop (HITL) fallback triggers',
      'LLM regression testing, edge-case red-teaming, and model drift monitoring',
    ],
  },
  {
    id: '05',
    number: '05',
    title: 'Data science',
    subtitle: 'A CS degree I use every day.',
    colorClass: 'text-rose',
    bulletBg: 'bg-rose',
    bullets: [
      'Bachelor of Computer Science (Data Science) — Albukhary International University (Dean\'s List Award)',
      'SQL querying, relational schema modeling & analytical data pipelines',
      'Python data science stack: Pandas, NumPy, Scikit-Learn, and statistical predictive modeling',
      'Executive KPI dashboards and business intelligence reporting (Power BI, Tableau)',
      'A/B experimentation design, hypothesis testing, and statistical significance analysis',
    ],
  },
  {
    id: '06',
    number: '06',
    title: 'Leadership & communication',
    subtitle: 'Bridging engineers, operators and executives.',
    colorClass: 'text-sky',
    bulletBg: 'bg-sky',
    bullets: [
      'Bilingual executive communication (Fluent English & Native Arabic) for global client engagement',
      'First-principles problem solving and rapid adaptability in fast-moving AI technology shifts',
      'Technical bridge: translating complex machine learning concepts into clear commercial value for clients',
      'High-accountability delivery: meeting critical project deadlines while upholding quality and reliability',
      'Empathetic stakeholder collaboration: keeping multidisciplinary teams motivated and aligned',
    ],
  },
];

export const SkillsSection: React.FC = () => {
  const { isAdmin } = useAdmin();
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [capabilities, setCapabilities] = useState<Capability[]>(() => {
    try {
      const saved = localStorage.getItem('portfolio_capabilities');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_CAPABILITIES;
  });

  const handleDeleteCard = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Delete this capability card? / هل ترغب في حذف هذا الكارد؟')) {
      const updated = capabilities.filter((c) => c.id !== id);
      setCapabilities(updated);
      localStorage.setItem('portfolio_capabilities', JSON.stringify(updated));
    }
  };

  const handleCreateCapability = (newCap: Capability) => {
    const updated = [...capabilities, newCap];
    setCapabilities(updated);
    localStorage.setItem('portfolio_capabilities', JSON.stringify(updated));
  };

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const nextNumber = String(capabilities.length + 1).padStart(2, '0');

  return (
    <section id="skills" className="section border-t border-border">
      <div className="container-page">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between lg:mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Capabilities</p>
            <h2 className="h-section mt-3 sm:mt-4">
              Product judgment, technical depth
            </h2>
            <p className="lead mt-3 sm:mt-4">
              I can sit with engineers to debate model routing, then walk into a finance review and defend the business case.
            </p>
          </div>
          {isAdmin && (
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setIsCreateModalOpen(true)}
                className="btn-gradient inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold cursor-pointer shadow-md"
              >
                <Plus className="h-4 w-4" />
                <span>Create New Capability</span>
              </button>
            </div>
          )}
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => {
            const isExpanded = !!expandedCards[cap.id];
            return (
              <div key={cap.id} className="relative bg-surface p-6 sm:p-8 group">
                {/* Admin Delete 'X' Button */}
                {isAdmin && (
                  <button
                    type="button"
                    onClick={(e) => handleDeleteCard(cap.id, e)}
                    title="Delete capability card"
                    aria-label="Delete capability card"
                    className="absolute top-4 right-4 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-rose-500/10 text-rose-600 hover:bg-rose-500 hover:text-white transition-all shadow-sm cursor-pointer border border-rose-300 dark:border-rose-800"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}

                <p className={`font-mono text-sm font-semibold ${cap.colorClass}`}>
                  {cap.number}
                </p>
                <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight text-foreground pr-6">
                  {cap.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {cap.subtitle}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-border-subtle pt-5">
                  {cap.bullets.map((bullet, idx) => {
                    const hideOnMobile = idx >= 3 && !isExpanded;
                    return (
                      <li
                        key={idx}
                        className={`gap-2.5 text-sm leading-relaxed text-muted md:flex ${
                          hideOnMobile ? 'hidden' : 'flex'
                        }`}
                      >
                        <span className={`mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full ${cap.bulletBg}`} />
                        <span>{bullet}</span>
                      </li>
                    );
                  })}
                </ul>

                <button
                  type="button"
                  onClick={() => toggleCard(cap.id)}
                  aria-expanded={isExpanded}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-foreground md:hidden cursor-pointer"
                >
                  <span>{isExpanded ? 'Show less' : 'Show 2 more'}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Unit-Economics Simulator Accordion */}
        <div className="mt-8 rounded-2xl border border-dashed border-border p-5 sm:p-6 transition-all">
          <button
            type="button"
            onClick={() => setSimulatorOpen((prev) => !prev)}
            aria-expanded={simulatorOpen}
            className="flex w-full items-center justify-between gap-4 text-left cursor-pointer"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Calculator className="h-[18px] w-[18px]" />
              </span>
              <span>
                <span className="block text-[15px] font-medium text-foreground">
                  Try the unit-economics simulator
                </span>
                <span className="block text-sm text-muted">
                  The cost model I use to make the case for AI automation.
                </span>
              </span>
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                simulatorOpen ? 'rotate-180 text-foreground' : ''
              }`}
            />
          </button>

          {/* Collapsible Content */}
          {simulatorOpen && (
            <div className="mt-6 pt-6 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
              <SecuritySimulator />
            </div>
          )}
        </div>
      </div>

      {/* Admin: Create Skill Modal */}
      <CreateSkillModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreateCapability}
        nextNumber={nextNumber}
      />
    </section>
  );
};
