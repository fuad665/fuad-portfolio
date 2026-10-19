import React from 'react';
import {
  X,
  Download,
  Printer,
  GraduationCap,
  Award,
  Briefcase,
  Code,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const cvContent = `
FUAD HIYBO HUSSIN MOHAMED
AI Product Manager & Technical Project Lead
Location: Kuala Lumpur, Malaysia | Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.whatsappPhone}
LinkedIn: ${PERSONAL_INFO.linkedinUrl} | GitHub: ${PERSONAL_INFO.githubUrl}

==================================================
EXECUTIVE SUMMARY
==================================================
Results-driven AI Product Manager specializing in B2B enterprise Generative AI systems, multi-model architectures, and workflow automation. Proven track record of scaling MAIA from pilot to 10+ enterprise clients in 60 days, cutting human review costs by 60–70% and tripling transaction throughput. Bridges executive P&L goals with technical LLM execution across dynamic model routing, agentic RAG, evaluation benchmarks (ROUGE, BERTScore), and strict AI safety guardrails.

==================================================
PROFESSIONAL EXPERIENCE
==================================================
1. Product Manager
MindHive Sdn. Bhd. · Kuala Lumpur, Malaysia (07/2025 – Present)
- Scaled MAIA from pilot to 10+ enterprise clients within 2 months across sales, operations, and finance workflows.
- Identified AI automation opportunities that reduced repetitive operational task time by 40–50% across client teams.
- Led development of an LLM-powered OCR validation system for voucher campaigns, reducing operational review costs by 60–70% across 50+ campaigns.
- Automated document validation and eliminated manual receipt triage for 90% of submissions.
- Defined AI product requirements, workflow designs, release plans, and acceptance criteria across 3 core workflow modules.

2. Product Designer
Nagashi Relief and Development Berhad · Kuala Lumpur, Malaysia (10/2024 – 03/2025)
- Led the end-to-end redesign of the scholarship application experience, including user research, UX flows, and implementation.
- Increased applications to 300 within 2 months of launch through a simplified and accessible application process.
- Redesigned application and eligibility workflows, contributing to a 95% successful scholarship allocation rate.
- Improved applicant transparency through application status tracking and structured feedback.

==================================================
EDUCATION
==================================================
Bachelor of Computer Science (Data Science)
Albukhary International University (AIU) — Malaysia (10/2022 – 10/2025)
- CGPA: 3.52 / 4.00 (Second Class Upper)
- Honors: Dean's List Honor Award (Semester 2 & Semester 3), Gold Medal of Academic Distinction
- Final Year Project: AI Smart Resume Analyzer (NLP-based faculty talent acquisition platform)
- Relevant Coursework: Machine Learning, Natural Language Processing, Statistical Analysis, Human-Computer Interaction, Database Systems, Software Engineering

==================================================
KEY PRODUCTS SHIPPED
==================================================
1. MAIA — Enterprise AI Assistant
   Multi-model enterprise AI assistant automating repetitive sales, operations, and finance workflows.
   Impact: 10 Clients, 40-50% Task Time Cut, 120+ Eval Test Cases (< 0.2% Hallucination Rate).

2. Pelangi Voucher System — BlendVoucher
   LLM-powered OCR validation pipeline automating document review, validation, and submission triage.
   Impact: 60-70% Review Cost Cut, 90% Manual Triage Cut, 3x Faster Throughput.

3. AIU Smart Resume Analyzer
   AI-powered faculty resume screening and bias mitigation platform for university talent acquisition.
   Impact: 75% Faster Turnaround Time, 7 Detected Skill Categories, 4× Accelerated Screening Speed.

4. African Credit Scoring Challenge — Zindi
   Predictive deep learning solution for loan default risk modeling, ranking top 50% globally among 1,024 participants.

==================================================
TECHNICAL SKILLS & COMPETENCIES
==================================================
- Generative AI & LLMs: GPT-4o, DeepSeek, Gemini, Multi-Model Routing, Enterprise RAG, AI Agents, Agentic Workflows, Prompt Engineering, LangChain, LlamaIndex, Pinecone
- AI Evaluation & Safety: LLM Evaluation Suites, Hallucination Mitigation, AI Safety Guardrails, Human-in-the-Loop QA, ROUGE-L, BERTScore
- Product Management: Product Strategy, Discovery, PRD Authoring, Roadmapping, Feature Prioritization (RICE/MoSCoW), User Stories, Acceptance Criteria, Agile / Scrum
- Data & Analytics: SQL, Power BI, Python (Pandas, NumPy, Scikit-Learn), A/B Testing, KPI Dashboards, Business Intelligence

==================================================
HONORS & CERTIFICATIONS
==================================================
- Dean's List Award — Academic Excellence (Semester 2 & Semester 3)
- Gold Medal of Academic Distinction & Achievement
- 1st Place Winner — Public Speaking Competition (Arabic)
- IBM AI Product Manager Professional Certificate
- Generative AI for Product Managers Specialization (Re:Coded / Coursera)
- AI Product Management Program (HelloPM)
- Google Data Analytics Professional Certificate
- AWS Academy Graduate — Machine Learning Foundations
- Data Analysis and Visualization with Power BI (Microsoft / Coursera)
- Google Cloud Technical Series — App Dev & Infrastructure
`;
    const blob = new Blob([cvContent.trim()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Fuad_Hiybo_AI_Product_Manager_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative my-6 w-full max-w-4xl rounded-3xl border border-border bg-surface p-6 sm:p-10 shadow-2xl max-h-[92vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="flex items-center justify-between border-b border-border pb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white font-bold">
              {PERSONAL_INFO.initials}
            </span>
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                Curriculum Vitae
              </h2>
              <p className="text-xs text-muted">
                {PERSONAL_INFO.name} &bull; {PERSONAL_INFO.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="btn-secondary hidden sm:inline-flex h-9 px-3 text-xs cursor-pointer"
              title="Print CV"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print</span>
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="btn-primary h-9 px-3.5 text-xs cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download CV</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted hover:bg-surface-2 hover:text-foreground cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="mt-6 space-y-8 text-foreground">
          {/* Header Info */}
          <div className="rounded-2xl border border-border bg-surface-2 p-5 sm:p-6">
            <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {PERSONAL_INFO.name}
            </h1>
            <p className="mt-1 font-mono text-sm font-semibold text-accent">
              {PERSONAL_INFO.title}
            </p>

            <div className="mt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs text-muted font-mono">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {PERSONAL_INFO.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-accent" />
                {PERSONAL_INFO.email}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-accent" />
                {PERSONAL_INFO.whatsappPhone}
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <div className="flex items-center gap-2 font-heading text-base font-bold text-foreground border-b border-border pb-2">
              <Briefcase className="h-4 w-4 text-accent" />
              <span>EXECUTIVE SUMMARY</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Results-driven AI Product Manager specializing in B2B enterprise Generative AI systems,
              multi-model architectures, and workflow automation. Proven track record of scaling MAIA from
              pilot to 10+ enterprise clients in 60 days, cutting human review costs by 60–70% and tripling
              transaction throughput. Bridges executive P&amp;L goals with technical LLM execution across
              dynamic model routing, agentic RAG, evaluation benchmarks (ROUGE, BERTScore), and strict AI safety guardrails.
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <div className="flex items-center gap-2 font-heading text-base font-bold text-foreground border-b border-border pb-2">
              <Briefcase className="h-4 w-4 text-violet" />
              <span>PROFESSIONAL EXPERIENCE</span>
            </div>
            <div className="mt-4 space-y-5">
              <div className="rounded-xl border border-border p-4 bg-surface-2/40">
                <div className="flex flex-wrap justify-between items-baseline gap-1">
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">
                    Product Manager &bull; MindHive Sdn. Bhd.
                  </h4>
                  <span className="font-mono text-xs text-accent">07/2025 – Present &bull; Kuala Lumpur</span>
                </div>
                <p className="text-xs text-muted mt-0.5 italic">
                  Multi-model enterprise AI assistant and automated receipt validation pipeline.
                </p>
                <ul className="mt-2.5 space-y-1.5 text-xs text-muted list-disc list-inside">
                  <li>Scaled MAIA from pilot to 10+ enterprise clients within 2 months across sales, operations, and finance workflows.</li>
                  <li>Identified AI automation opportunities that reduced repetitive operational task time by 40–50% across client teams.</li>
                  <li>Led development of an LLM-powered OCR validation system for voucher campaigns, reducing review costs by 60–70% across 50+ campaigns.</li>
                  <li>Automated document validation and eliminated manual receipt triage for 90% of submissions.</li>
                  <li>Defined AI product requirements, workflow designs, release plans, and acceptance criteria across 3 core workflow modules.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border p-4 bg-surface-2/40">
                <div className="flex flex-wrap justify-between items-baseline gap-1">
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">
                    Product Designer &bull; Nagashi Relief and Development Berhad
                  </h4>
                  <span className="font-mono text-xs text-muted">10/2024 – 03/2025 &bull; Kuala Lumpur</span>
                </div>
                <p className="text-xs text-muted mt-0.5 italic">
                  End-to-end UX overhaul of digital scholarship application and review workflows.
                </p>
                <ul className="mt-2.5 space-y-1.5 text-xs text-muted list-disc list-inside">
                  <li>Led the end-to-end redesign of the scholarship application experience, including user research, UX flows, and implementation.</li>
                  <li>Increased applications to 300 within 2 months of launch through a simplified and accessible application process.</li>
                  <li>Redesigned application and eligibility workflows, contributing to a 95% successful scholarship allocation rate.</li>
                  <li>Improved applicant transparency through application status tracking and structured feedback.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 font-heading text-base font-bold text-foreground border-b border-border pb-2">
              <GraduationCap className="h-4 w-4 text-accent" />
              <span>EDUCATION</span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h4 className="font-semibold text-foreground text-sm sm:text-base">
                  Bachelor of Computer Science — Data Science
                </h4>
                <span className="font-mono text-xs text-subtle">10/2022 – 10/2025</span>
              </div>
              <p className="text-sm font-medium text-accent">
                Albukhary International University (AIU) — Malaysia &bull; CGPA 3.52 / 4.00 (Second Class Upper)
              </p>
              <ul className="mt-2 space-y-1 text-xs text-muted list-disc list-inside">
                <li><strong className="text-foreground">Honors:</strong> Conferred Dean's List Award (Semester 2 &amp; Semester 3), Gold Medal of Academic Distinction.</li>
                <li><strong className="text-foreground">Relevant Coursework:</strong> Machine Learning, Natural Language Processing, Statistical Analysis, Human-Computer Interaction, Database Systems, Software Engineering.</li>
                <li><strong className="text-foreground">Final Year Project:</strong> AI Smart Resume Analyzer — NLP-powered resume screening, skill categorization, and candidate evaluation.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-2 font-heading text-base font-bold text-foreground border-b border-border pb-2">
              <Code className="h-4 w-4 text-violet" />
              <span>PRODUCT &amp; TECHNICAL COMPETENCIES</span>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="rounded-xl border border-border p-3.5 bg-surface-2/60">
                <p className="font-semibold text-foreground font-mono">Generative AI &amp; LLMs</p>
                <p className="mt-1 text-muted leading-relaxed">
                  GPT-4o, DeepSeek, Gemini, Multi-Model Routing, Enterprise RAG, AI Agents, Agentic Workflows, Prompt Engineering, LangChain, Pinecone, LlamaIndex.
                </p>
              </div>
              <div className="rounded-xl border border-border p-3.5 bg-surface-2/60">
                <p className="font-semibold text-foreground font-mono">AI Evaluation &amp; Safety</p>
                <p className="mt-1 text-muted leading-relaxed">
                  LLM Evaluation Frameworks, Hallucination Mitigation (&lt; 0.2%), AI Guardrails, Human-in-the-Loop QA, ROUGE-L, BERTScore, Regression Testing.
                </p>
              </div>
              <div className="rounded-xl border border-border p-3.5 bg-surface-2/60">
                <p className="font-semibold text-foreground font-mono">Product Management</p>
                <p className="mt-1 text-muted leading-relaxed">
                  Product Strategy, Discovery, PRDs, Roadmapping, Prioritization (RICE/MoSCoW), User Stories, Acceptance Criteria, Stakeholder Management, Agile / Scrum.
                </p>
              </div>
              <div className="rounded-xl border border-border p-3.5 bg-surface-2/60">
                <p className="font-semibold text-foreground font-mono">Data &amp; Analytics</p>
                <p className="mt-1 text-muted leading-relaxed">
                  SQL, Power BI, Python (Pandas, NumPy, Scikit-Learn), A/B Testing, KPI Dashboards, Unit Economics, Business Intelligence.
                </p>
              </div>
            </div>
          </div>

          {/* Key Products Shipped */}
          <div>
            <div className="flex items-center gap-2 font-heading text-base font-bold text-foreground border-b border-border pb-2">
              <Briefcase className="h-4 w-4 text-teal" />
              <span>KEY PRODUCTS SHIPPED</span>
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-semibold text-foreground text-sm">
                    MAIA — Enterprise AI Assistant
                  </h4>
                  <span className="font-mono text-xs text-accent">Enterprise GenAI</span>
                </div>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Multi-model enterprise AI assistant automating repetitive sales, operations, and finance workflows. Scaled to 10 enterprise clients in 2 months, cutting task time by 40–50% with a 120+ eval test suite.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-semibold text-foreground text-sm">
                    Pelangi Voucher System — BlendVoucher
                  </h4>
                  <span className="font-mono text-xs text-violet">LLM-Powered OCR</span>
                </div>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Automated receipt validation pipeline reducing operational review costs by 60–70% across 50+ voucher campaigns, eliminating manual triage for 90% of submissions with 3× faster throughput.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-semibold text-foreground text-sm">
                    AIU Smart Resume Analyzer
                  </h4>
                  <span className="font-mono text-xs text-teal">NLP &amp; HR Tech</span>
                </div>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Automated ATS resume screening platform using custom spaCy NLP entity extraction and algorithmic bias-reduction guardrails, accelerating faculty recruitment by 75%.
                </p>
              </div>
            </div>
          </div>

          {/* Awards & Certifications */}
          <div>
            <div className="flex items-center gap-2 font-heading text-base font-bold text-foreground border-b border-border pb-2">
              <Award className="h-4 w-4 text-amber" />
              <span>HONORS &amp; VERIFIED CERTIFICATIONS</span>
            </div>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>Dean's List Award — Academic Excellence (Semester 2 &amp; 3)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-rose shrink-0" />
                <span>1st Place Winner — Public Speaking Competition (Arabic)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-amber shrink-0" />
                <span>Gold Medal of Academic Distinction &amp; Achievement</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-violet shrink-0" />
                <span>IBM AI Product Manager Professional Certificate</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>Generative AI for Product Managers Specialization (Coursera)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-teal shrink-0" />
                <span>AI Product Management Program (HelloPM)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-amber shrink-0" />
                <span>Google Data Analytics Professional Certificate</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-violet shrink-0" />
                <span>AWS Academy Graduate — Machine Learning Foundations</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>Data Analysis &amp; Visualization with Power BI (Microsoft)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-rose shrink-0" />
                <span>African Credit Scoring Challenge — Global Top 50% (Zindi)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 flex justify-end gap-3 border-t border-border pt-6">
          <button
            type="button"
            onClick={handleDownload}
            className="btn-primary cursor-pointer"
          >
            <Download className="h-4 w-4" />
            <span>Download Document</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
