import { Project, Award, Certification, Experience, NewsStory } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Fuad Hiybo Hussin Mohamed',
  shortName: 'Fuad Hiybo',
  initials: 'FH',
  title: 'AI Product Manager & Technical Project Lead',
  headline: 'I turn enterprise workflows into AI products that pay for themselves.',
  subBio:
    "I'm Fuad Hiybo, Product Manager at MindHive in Kuala Lumpur. I take AI from discovery and PRDs to production rollout, backed by a Computer Science (Data Science) degree from Albukhary International University.",
  location: 'Kuala Lumpur · GMT+8',
  statusText: 'Open to AI PM roles · Remote or relocation',
  currentRole: 'Product Manager',
  currentCompany: 'MindHive',
  currentPeriod: '2025 – present',
  currentTags: 'AI · LLM',
  phone: '0963737568',
  whatsappUrl:
    'https://wa.me/249963737568?text=Hi%20Fuad,%20I%20saw%20your%20AI%20Product%20Manager%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity.',
  whatsappPhone: '+249 96 373 7568 (0963737568)',
  linkedinUrl: 'https://www.linkedin.com/in/fuad-hiyabo-a45087323',
  linkedinHandle: 'linkedin.com/in/fuad-hiyabo-a45087323',
  githubUrl: 'https://github.com/fuad665',
  githubHandle: 'github.com/fuad665',
  email: 'fuad.hiybo@gmail.com',
  resumeUrl: '#resume',
};

export const IMPACT_METRICS = [
  {
    value: '60–70%',
    label: 'Review Cost Cut',
    description: 'Review cost cut with an LLM-powered OCR pipeline across 50+ campaigns',
    color: 'accent' as const,
  },
  {
    value: '10+',
    label: 'Enterprise Clients',
    description: 'Enterprise clients onboarded to MAIA in 2 months across sales, operations & finance',
    color: 'violet' as const,
  },
  {
    value: '3×',
    label: 'Validation Throughput',
    description: 'Validation throughput acceleration after end-to-end workflow redesign',
    color: 'teal' as const,
  },
  {
    value: '120+',
    label: 'Eval Test Cases',
    description: 'Test-case evaluation suite guarding AI quality, factual recall & safety',
    color: 'amber' as const,
  },
];

export const PHILOSOPHY_STEPS = [
  {
    number: '01',
    title: 'Start from the bottleneck',
    description:
      'I begin with the workflow that costs the business the most time or money, not with the model.',
  },
  {
    number: '02',
    title: 'Write it down',
    description:
      'Crisp PRDs, acceptance criteria and KPI trees keep engineering, ops and leadership pointed at the same outcome.',
  },
  {
    number: '03',
    title: 'Measure before scaling',
    description:
      'Evaluation suites, guardrails and cost tracking go in early, so we scale what actually works.',
  },
];

export const LANGUAGES = [
  { name: 'Arabic', level: 'Native / Bilingual' },
  { name: 'English', level: 'Professional Working Proficiency' },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'maia-enterprise-ai',
    title: 'MAIA — Enterprise AI Assistant',
    category: 'Enterprise GenAI',
    categoryColor: 'accent',
    summary:
      'Enterprise teams needed to automate repetitive sales, operations, and finance workflows with a scalable and reliable AI solution.',
    description:
      'Multi-model enterprise AI assistant automating repetitive sales, operations, and finance workflows across 10+ enterprise clients.',
    problem:
      'Enterprise teams faced slow, manual document scanning, multi-tab data entry, and email approval cycles taking 4–6 hours per case.',
    solution:
      'Led product strategy and rollout of a multi-model enterprise AI assistant (GPT-4o, DeepSeek, Gemini) with dynamic complexity routing, multi-step agentic workflows, transparent reasoning popovers, and a 120+ test evaluation suite.',
    keyFeatures: [
      'Directed model selection and multi-model routing across GPT-4o, DeepSeek, and Gemini based on cost, latency, and accuracy',
      'Led transition from single-turn AI interactions to multi-step agentic workflows across sales, operations, and finance',
      'Developed 120+ test-case evaluation framework covering accuracy, hallucination rate (< 0.2%), and workflow latency',
      'Transparent reasoning chain views displaying document sources, citations, and confidence scores',
    ],
    metrics: [
      { label: 'Enterprise Scale', value: '10 Clients' },
      { label: 'Task Time Cut', value: '40-50%' },
      { label: 'Eval Test Cases', value: '120+' },
    ],
    technologies: [
      'GPT-4o',
      'DeepSeek',
      'Gemini',
      'Multi-Model Routing',
      'Enterprise RAG',
      'Agentic Workflows',
      'LLM Evaluation',
      'LlamaIndex',
      'Pinecone',
    ],
    githubUrl: 'https://github.com/fuad665/maia-enterprise-ai',
    featured: true,
  },
  {
    id: 'pelangi-voucher-ocr',
    title: 'Pelangi Voucher System — BlendVoucher',
    category: 'LLM-Powered OCR',
    categoryColor: 'violet',
    summary:
      'Manual receipt verification was costly, slow, and difficult to scale across high-volume promotional campaigns.',
    description:
      'LLM-powered OCR validation pipeline automating document review, validation, and submission triage.',
    problem:
      'Physical receipt submissions were manually audited by staff with a 5-day verification backlog and high operational overhead.',
    solution:
      'Led development of an LLM-powered OCR validation pipeline that automated document review, validation, and submission triage for 90% of receipts.',
    keyFeatures: [
      'Automated document validation and eliminated manual receipt triage for 90% of submissions',
      'Benchmarked LLM-OCR extraction precision across 50+ promotional voucher campaigns',
      'Implemented fraud detection algorithms flagging duplicate receipts and manipulated timestamps',
      'Instant upload interface with auto-cropping and receipt clarity feedback',
    ],
    metrics: [
      { label: 'Review Cost Cut', value: '60-70%' },
      { label: 'Manual Triage Cut', value: '90%' },
      { label: 'Throughput', value: '3x Faster' },
    ],
    technologies: [
      'LLM-based OCR',
      'Document Validation',
      'Workflow Automation',
      'Python',
      'Node.js',
      'FastAPI',
      'Webhook API',
    ],
    githubUrl: 'https://github.com/fuad665/pelangi-voucher-ocr',
    featured: true,
  },
  {
    id: 'aiu-smart-resume-analyzer',
    title: 'AIU Smart Resume Analyzer',
    category: 'NLP & HR Tech',
    categoryColor: 'teal',
    summary:
      'AI-powered faculty resume screening & bias mitigation platform for university talent acquisition.',
    description:
      'AI-powered faculty resume screening and qualification scoring platform for university talent acquisition.',
    problem:
      'University talent acquisition faced slow manual review times (3–4 weeks), inconsistent screening rubrics, and unconscious bias across hundreds of multi-department applicants.',
    solution:
      'Led end-to-end design and delivery of an automated ATS resume screening and qualification scoring platform with custom spaCy NLP extraction and algorithmic bias-reduction guardrails.',
    keyFeatures: [
      'Trained custom spaCy NLP entity extraction pipelines classifying skills across 7 core academic categories',
      'Engineered real-time candidate analytics dashboards and algorithmic bias-reduction guardrails',
      'High-performance FastAPI asynchronous backend connected with Firebase authentication and document storage',
      'Benchmarked NLP extraction accuracy across 100+ international academic CV formats with > 95% precision',
    ],
    metrics: [
      { label: 'Turnaround Time', value: '75% Faster' },
      { label: 'Skill Categories', value: '7 Detected' },
      { label: 'Screening Speed', value: '4× Accelerated' },
    ],
    technologies: [
      'FastAPI',
      'spaCy (NLP)',
      'Firebase',
      'Python',
      'React',
      'Next.js',
      'ATS Scoring Algorithms',
    ],
    githubUrl: 'https://github.com/fuad665/aiu-smart-resume-analyzer',
    featured: false,
  },
  {
    id: 'african-credit-scoring',
    title: 'African Credit Scoring Challenge — Zindi',
    category: 'Fintech & Machine Learning',
    categoryColor: 'amber',
    summary:
      'Predictive deep learning solution for loan default risk modeling, ranking top 50% globally.',
    description:
      'Predictive deep learning and machine learning solution for loan default risk modeling on the Zindi platform.',
    problem:
      'Traditional credit bureaus lack sufficient financial history for unbanked populations, requiring predictive models to assess loan default risk from non-traditional features.',
    solution:
      'Engineered an ensemble machine learning pipeline with feature extraction, class imbalance handling, and hyperparameter tuning on Zindi dataset.',
    keyFeatures: [
      'Advanced feature engineering pipeline extracting behavioral transaction patterns',
      'Ensemble modeling combining LightGBM, XGBoost, and neural networks',
      'Evaluated with precision-recall AUC and ROC curves minimizing false negative default risks',
      'Ranked in the top 50% globally among 1,024 competing data scientists',
    ],
    metrics: [
      { label: 'Global Standing', value: 'Top 50%' },
      { label: 'Prediction Accuracy', value: '70%' },
      { label: 'Participants', value: '1,024 Competing' },
    ],
    technologies: [
      'Python',
      'Scikit-Learn',
      'XGBoost',
      'LightGBM',
      'Pandas',
      'NumPy',
      'Data Science',
    ],
    githubUrl: 'https://github.com/fuad665/african-credit-scoring',
    liveUrl: 'https://zindi.africa',
    featured: false,
  },
];

export const AWARDS: Award[] = [
  {
    id: 'deans-list-sem3',
    title: "Dean's List Award — Academic Excellence",
    badge: "Dean's List ×2",
    organization: 'Albukhary International University',
    category: 'academic',
    color: 'accent',
    date: 'Semester 3 · Academic Session 2023/2024',
    description:
      'Conferred for outstanding GPA ranking within the top 5% of the School of Computing and Informatics.',
    verificationDetails: 'Authenticated by School of Computing & Informatics Dean',
  },
  {
    id: 'deans-list-sem2',
    title: "Dean's List Award — Academic Excellence",
    badge: "Dean's List",
    organization: 'Albukhary International University',
    category: 'academic',
    color: 'accent',
    date: 'Semester 2 · Academic Session 2022/2023',
    description:
      'Recognized for superior academic achievement and technical coursework performance in data science core modules.',
    verificationDetails: 'Authenticated by School of Computing & Informatics Dean',
  },
  {
    id: 'public-speaking-1st',
    title: '1st Place Winner — Public Speaking Competition (Arabic)',
    badge: '1st Place Champion',
    organization: 'Albukhary International University',
    category: 'leadership',
    color: 'rose',
    date: 'Annual University Competition',
    description:
      'Awarded 1st Place Champion in the university-wide public speaking competition delivering persuasive oratorical discourse.',
    verificationDetails: 'University Cultural & Debate Committee',
  },
  {
    id: 'gold-medal-excellence',
    title: 'Gold Medal of Academic Distinction & Achievement',
    badge: 'Gold Medalist',
    organization: 'Albukhary International University',
    category: 'academic',
    color: 'amber',
    date: 'Honors Recognition Convocation',
    description:
      'Highest academic recognition awarded for exemplary scholarly merit and contribution to computing initiatives.',
    verificationDetails: 'University Honors Board',
  },
  {
    id: 'zindi-credit-scoring',
    title: 'African Credit Scoring Challenge — Global Top 50%',
    badge: 'Top 50% Globally',
    organization: 'Zindi Africa',
    category: 'programmes',
    color: 'violet',
    date: 'Competitive Data Science Hackathon',
    description:
      'Ranked in the top 50% globally among 1,024 international data scientists developing predictive default models.',
    verificationDetails: 'Zindi Leaderboard Verification',
  },
  {
    id: 'deans-list-ceremony',
    title: "Official Dean's List Stage Presentation Ceremony",
    badge: 'Official Stage Handover',
    organization: 'Albukhary International University',
    category: 'academic',
    color: 'teal',
    date: 'Official Ceremony Handover',
    description:
      'Formal stage handover and ceremony presentation honoring top percentile scholarly performance.',
    verificationDetails: 'School of Computing and Informatics',
  },
  {
    id: 'deans-list-dual-verification',
    title: "Dean's List Dual Honor Verification",
    badge: 'Authenticated Credentials',
    organization: 'Albukhary International University',
    category: 'academic',
    color: 'accent',
    date: 'Academic Sessions 2022/2023 & 2023/2024',
    description:
      "Dual Dean's list certification validating sustained academic achievement across multiple consecutive semesters.",
    verificationDetails: 'Registrar Office Authentication',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ibm-ai-pm',
    name: 'IBM AI Product Manager Professional Certificate',
    organization: 'IBM',
    verifyUrl: 'https://www.coursera.org/professional-certificates/ibm-ai-product-manager',
    badgeType: 'ibm',
  },
  {
    id: 'genai-for-pm',
    name: 'Generative AI for Product Managers Specialization',
    organization: 'Re:Coded / Coursera',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/specialization/EMBC4WCUL307?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n',
    badgeType: 'coursera',
  },
  {
    id: 'hellopm-program',
    name: 'AI Product Management Program',
    organization: 'HELLOPM',
    verifyUrl: 'https://drive.google.com/file/d/1FKlgtViUk8jntgCqfpjtim2fFqtVXtwl/view',
    badgeType: 'generic',
  },
  {
    id: 'google-data-analytics',
    name: 'Google Data Analytics Professional Certificate',
    organization: 'Google',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/specialization/S71E3NPXHFHC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof',
    badgeType: 'google',
  },
  {
    id: 'aws-ml-foundations',
    name: 'AWS Academy Graduate — Machine Learning Foundations',
    organization: 'Amazon Web Services',
    verifyUrl: 'https://www.credly.com/badges/b6657942-90d4-4f58-a8ce-9240feba954a/public_url',
    badgeType: 'aws',
  },
  {
    id: 'power-bi',
    name: 'Data Analysis and Visualization with Power BI',
    organization: 'Microsoft / Coursera',
    verifyUrl: 'https://coursera.org/verify/GMZF2JCR2Q6W',
    badgeType: 'microsoft',
  },
  {
    id: 'google-cloud-tech-series',
    name: 'Google Cloud Technical Series — App Dev & Infrastructure',
    organization: 'Google Cloud Asia Pacific',
    verifyUrl: 'https://www.credential.net/cd5d8ae0-ccbb-43cf-929a-3a93be7be51d#acc.tIewT85m',
    badgeType: 'google',
  },
  {
    id: 'linkedin-workshop',
    name: 'LinkedIn Workshop — Professional Career Branding',
    organization: 'Albukhary International University',
    verifyUrl: 'https://aiu.edu.my',
    badgeType: 'generic',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'mindhive-pm',
    period: '07/2025 – Present',
    role: 'Product Manager',
    organization: 'MindHive Sdn. Bhd.',
    location: 'Kuala Lumpur, Malaysia',
    summary:
      'Multi-model enterprise AI assistant and automated receipt validation pipeline.',
    isCurrent: true,
    skills: [
      'AI product strategy',
      'Multi-model routing',
      'Agentic workflows',
      'LLM-powered OCR',
      'LLM evaluation',
      'Enterprise rollout',
    ],
    responsibilities: [
      'Scaled MAIA from pilot to 10+ enterprise clients within 2 months across sales, operations, and finance workflows.',
      'Identified AI automation opportunities that reduced repetitive operational task time by 40–50% across client teams.',
      'Led development of an LLM-powered OCR validation system for voucher campaigns, reducing operational review costs by 60–70% across 50+ campaigns.',
      'Automated document validation and eliminated manual receipt triage for 90% of submissions.',
      'Conducted workflow discovery with enterprise stakeholders and translated business requirements into PRDs, acceptance criteria, and release plans.',
    ],
  },
  {
    id: 'nagashi-designer',
    period: '10/2024 – 03/2025',
    role: 'Product Designer',
    organization: 'Nagashi Relief and Development Berhad',
    location: 'Kuala Lumpur, Malaysia',
    summary:
      'End-to-end UX overhaul of digital scholarship application and review workflows.',
    isCurrent: false,
    skills: [
      'User research',
      'UX flows',
      'Eligibility tracking',
      'Application experience',
      'Figma',
      'Prototyping',
    ],
    responsibilities: [
      'Led the end-to-end redesign of the scholarship application experience, including user research, UX flows, and implementation.',
      'Increased applications to 300 within 2 months of launch through a simplified and accessible application process.',
      'Redesigned application and eligibility workflows, contributing to a 95% successful scholarship allocation rate.',
      'Improved applicant transparency through application status tracking and structured feedback.',
    ],
  },
];

export const EXPERIENCE_ITEMS = EXPERIENCES;

export const NEWS_STORIES: NewsStory[] = [
  {
    id: 'ai-malaysia-takeover-2026',
    title: 'AI Malaysia Takeover 2026 at The Campus, Ampang',
    category: 'AI Industry Event',
    date: 'August 13, 2026',
    summary:
      'Sometimes, the best way to understand the future is not just to imagine it but to experience it. Exploring cutting-edge AI breakthroughs and connecting with leaders shaping what comes next.',
    tags: ['AI Conference', 'Kuala Lumpur', 'Enterprise GenAI'],
  },
  {
    id: 'aiu-graduation-2026',
    title: 'End of Chapter: Bachelor of Computer Science Graduation',
    category: 'Academic Milestone',
    date: 'April 1, 2026',
    summary:
      "Alhamdulillah, successfully graduated with a Bachelor's degree in Computer Science (Data Science) from Albukhary International University, celebrating years of scholastic dedication and growth.",
    tags: ['Convocation', 'Albukhary International University', "Dean's List"],
  },
  {
    id: 'aiu-resume-defense-2025',
    title: 'Project Presentation Success: AIU Smart Resume Analyzer Officially Approved',
    category: 'Final Year Project Defense',
    date: 'June 24, 2025',
    summary:
      'Successfully presented and defended the AIU Smart Resume Analyzer before the academic evaluation panel, earning official approval for our NLP-powered recruitment platform.',
    tags: ['Capstone Defense', 'NLP & ATS', 'Academic Approval'],
  },
];
