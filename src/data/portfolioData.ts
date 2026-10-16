import { Project, Award, Certification, Experience, NewsStory } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Fuad Hiybo Hussin Mohamed',
  shortName: 'Fuad Hiybo',
  initials: 'FH',
  title: 'Cybersecurity Engineer & Secure Systems Architect',
  headline: 'I build secure, resilient architectures and automated systems that protect and scale.',
  subBio:
    "I'm Fuad Hiybo Hussin Mohamed, a Computer Science (Cybersecurity) graduate from Albukhary International University. I specialize in zero-trust system design, authenticated cryptographic ballot workflows, enterprise automation, and IoT telemetry systems.",
  location: 'Kuala Lumpur · GMT+8',
  statusText: 'Open to Cybersecurity & Tech roles · Remote or relocation',
  phone: '0963737568',
  whatsappUrl: 'https://wa.me/249963737568?text=Hi%20Fuad,%20I%20saw%20your%20Cybersecurity%20portfolio%20and%20would%20like%20to%20connect.',
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
    value: '99.9%',
    label: 'Authenticated Ballot Integrity',
    description: 'Cryptographic anti-tamper security across high-stakes student elections',
    color: 'accent' as const,
  },
  {
    value: '65%',
    label: 'Operational Overhead Cut',
    description: 'Manual processing eliminated via automated RBAC & employee workflows',
    color: 'violet' as const,
  },
  {
    value: '100%',
    label: 'Real-Time Sensor Telemetry',
    description: 'Continuous soil moisture & pH monitoring with automated cloud fail-safes',
    color: 'teal' as const,
  },
  {
    value: '150+',
    label: 'Security Test Cases & Audits',
    description: 'Comprehensive threat modeling, penetration suites, and vulnerability scans',
    color: 'amber' as const,
  },
];

export const PHILOSOPHY_STEPS = [
  {
    number: '01',
    title: 'Analyze the Threat Vector & Bottlenecks',
    description:
      'Every secure system starts with understanding attack surfaces, authorization friction, and where data integrity is most vulnerable.',
  },
  {
    number: '02',
    title: 'Architect Zero-Trust & Resilient Controls',
    description:
      'Design defense-in-depth principles, strict role-based access control (RBAC), end-to-end encryption, and tamper-evident audit trails.',
  },
  {
    number: '03',
    title: 'Automate, Stress-Test & Scale',
    description:
      'Continuous regression suites, automated anomaly detection, and CI/CD security pipelines ensure reliability under peak production load.',
  },
];

export const LANGUAGES = [
  { name: 'English', level: 'Professional Working Proficiency' },
  { name: 'Somali', level: 'Native / Bilingual' },
  { name: 'Arabic', level: 'Professional Working Proficiency' },
  { name: 'Malay', level: 'Elementary Working Proficiency' },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'secure-voting-system',
    title: 'Secure Voting System — SRC Elections Ballot Architecture',
    category: 'Cybersecurity & Cryptography',
    categoryColor: 'accent',
    summary:
      'High-integrity authenticated electronic voting infrastructure engineered for university Student Representative Council (SRC) elections.',
    description:
      'Campus elections faced logistical overhead, voter verification latency, and concerns about ballot integrity. I architected and implemented an end-to-end authenticated electronic ballot system utilizing cryptographic hash chains, zero-tamper tokenization, and strict student credential validation.',
    problem:
      'Manual ballot counting took 14+ hours with susceptibility to human handling errors and credential impersonation across multiple polling booths.',
    solution:
      'Engineered a centralized, encrypted voting platform featuring single-use cryptographic tokens, immutable vote confirmation ledgers, and multi-factor biometric/ID authentication.',
    keyFeatures: [
      'Single-use cryptographically signed voting tokens preventing ballot stuffing',
      'Real-time live audit trails with SHA-256 cryptographic verification',
      'Granular administrative dashboard with role-based access control (RBAC)',
      'Sub-second ballot submission latency with zero downtime resilience',
    ],
    metrics: [
      { label: 'Ballot Tampering', value: '0%' },
      { label: 'Tally Speed', value: '< 2 Mins' },
      { label: 'Voter Turnout Boost', value: '42%' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Web Cryptography API', 'Docker', 'Tailwind CSS'],
    githubUrl: 'https://github.com/fuad665/secure-voting-system',
    liveUrl: 'https://secure-voting-demo.vercel.app',
    featured: true,
  },
  {
    id: 'employer-management-system',
    title: 'Employer Management System — Enterprise HR Automation',
    category: 'Enterprise Automation & RBAC',
    categoryColor: 'violet',
    summary:
      'Automated administrative platform streamlining employee lifecycle management, attendance compliance, and secure payroll computation.',
    description:
      'Mid-sized organizations struggle with disjointed employee record tracking, leaky spreadsheet permissions, and error-prone payroll processing. Developed a unified portal providing secure role-based self-service for staff and managers.',
    problem:
      'Disjointed HR records caused 3-5 business days of manual reconciliation per pay cycle and posed serious employee privacy compliance risks.',
    solution:
      'Built a full-stack automated HR platform with strict least-privilege authorization, automated payroll computations, leave approval workflows, and immutable audit logs.',
    keyFeatures: [
      'Multi-tenant role-based permissions (Super Admin, HR Manager, Department Head, Staff)',
      'Automated salary computation engine accounting for deductions, overtime, and tax thresholds',
      'Leave scheduling system with email notification triggers and manager approval chains',
      'Exportable compliance audit reports for tax and labor regulations',
    ],
    metrics: [
      { label: 'Admin Overhead Cut', value: '65%' },
      { label: 'Payroll Cycle', value: 'Same-Day' },
      { label: 'Data Accuracy', value: '99.9%' },
    ],
    technologies: ['React', 'Tailwind CSS', 'Node.js / Express', 'PostgreSQL', 'JWT Authentication', 'RESTful APIs'],
    githubUrl: 'https://github.com/fuad665/employer-management-system',
    liveUrl: 'https://employer-mgmt-fuad.vercel.app',
    featured: true,
  },
  {
    id: 'iot-smart-watering-system',
    title: 'IoT Smart Watering System — pH & Moisture Telemetry',
    category: 'IoT & Telemetry Automation',
    categoryColor: 'teal',
    summary:
      'Automated precision irrigation system with real-time soil moisture and pH telemetry, automated relay actuators, and cloud threshold alerts.',
    description:
      'Over-watering and soil acidity fluctuations degrade plant health and cause substantial water wastage. Designed an autonomous embedded system leveraging ESP32 microcontrollers, calibrated analog sensors, and a cloud telemetry dashboard.',
    problem:
      'Traditional timer-based sprinklers run indiscriminately, wasting up to 45% of water resources while failing to adapt to sudden humidity or pH shifts.',
    solution:
      'Engineered an event-driven edge IoT device that samples soil moisture and pH every 10 seconds, executing algorithmic watering cycles only when critical moisture deficits occur.',
    keyFeatures: [
      'Multi-sensor edge sampling (Capacitive Soil Moisture v1.2 & pH Probe Module)',
      'Dual relay pump automation with hardware safety shutoff timeouts',
      'Real-time WebSocket telemetry streamed to a responsive web dashboard',
      'Configurable SMS/Email emergency alert triggers on abnormal pH levels',
    ],
    metrics: [
      { label: 'Water Waste Cut', value: '40%' },
      { label: 'Telemetry Uptime', value: '100%' },
      { label: 'Response Latency', value: '< 500ms' },
    ],
    technologies: ['ESP32 (C++)', 'Arduino IDE', 'MQTT / WebSockets', 'React', 'Node.js', 'Chart.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/fuad665/iot-smart-watering',
    liveUrl: 'https://iot-smart-water.vercel.app',
    featured: false,
  },
  {
    id: 'security-hardening-suite',
    title: 'Linux Server Hardening & Vulnerability Scanner Suite',
    category: 'DevSecOps & System Hardening',
    categoryColor: 'amber',
    summary:
      'Automated baseline auditing and penetration assessment tool applying CIS benchmarks, open port discovery, and SSH hardening.',
    description:
      'A modular security automation script suite that inspects Unix/Linux environments for misconfigurations, weak permissions, outdated packages, and open attack vectors.',
    problem:
      'Manual security audits across development and staging servers were irregular, leaving exposed services and default credentials unpatched.',
    solution:
      'Automated daily auditing harness that scans listening ports, evaluates TLS configurations, generates CVSS risk rankings, and applies safe remediation policies.',
    keyFeatures: [
      'CIS Benchmark alignment checking (file permissions, sudoer policies, firewall status)',
      'Automated Nmap and SSL/TLS cipher suite auditing',
      'JSON and Markdown automated reporting with actionable remediation steps',
      'Scheduled cron execution with Slack webhook notifications',
    ],
    metrics: [
      { label: 'Audit Time', value: '3 Mins' },
      { label: 'CIS Coverage', value: '94%' },
      { label: 'Zero-Day Alerts', value: 'Instant' },
    ],
    technologies: ['Python', 'Bash / Shell', 'Nmap', 'OpenSSL', 'Linux (Ubuntu/Debian)', 'Docker'],
    githubUrl: 'https://github.com/fuad665/linux-security-auditor',
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
    date: 'Semester 3 · Session 2023/2024',
    description: 'Conferred for outstanding GPA ranking within the top 5% of the School of Computing and Informatics.',
    verificationDetails: 'Authenticated by School of Computing & Informatics Dean',
  },
  {
    id: 'deans-list-sem2',
    title: "Dean's List Award — Academic Excellence",
    badge: "Dean's List",
    organization: 'Albukhary International University',
    category: 'academic',
    color: 'accent',
    date: 'Semester 2 · Session 2022/2023',
    description: 'Recognized for superior academic achievement and technical coursework performance in cybersecurity core modules.',
    verificationDetails: 'Authenticated by School of Computing & Informatics Dean',
  },
  {
    id: 'gold-medal-excellence',
    title: 'Gold Medal of Academic Distinction & Achievement',
    badge: 'Gold Medalist',
    organization: 'Albukhary International University',
    category: 'academic',
    color: 'amber',
    date: 'Annual Honors Convocation',
    description: 'Highest academic recognition awarded for exemplary scholarly merit and contribution to computing initiatives.',
    verificationDetails: 'University Honors Board',
  },
  {
    id: 'cyber-challenge-finalist',
    title: 'National Cyber Security CTF Challenge — Finalist',
    badge: 'CTF Finalist',
    organization: 'Malaysian Higher Education Cyber Defense',
    category: 'security',
    color: 'rose',
    date: 'Inter-University CTF 2024',
    description: 'Competed across reverse engineering, network packet analysis, cryptography puzzles, and web application exploitation.',
    verificationDetails: 'National Cyber CTF Committee',
  },
  {
    id: 'arsa-leadership',
    title: 'ARSA Executive Student Leadership Honor',
    badge: 'Leadership Honor',
    organization: 'Albukhary International University',
    category: 'leadership',
    color: 'violet',
    date: 'Student Representative Council',
    description: 'Recognized for leading technology workshops, mentoring junior cybersecurity students, and spearheading secure campus IT initiatives.',
    verificationDetails: 'Office of Student Affairs',
  },
  {
    id: 'iot-distinction',
    title: 'Best Final Year Capstone Project — IoT & Automation',
    badge: 'Best Project',
    organization: 'School of Computing and Informatics',
    category: 'security',
    color: 'teal',
    date: 'Capstone Defense 2025',
    description: 'Awarded highest capstone marks for the IoT Smart Watering System telemetry design, firmware reliability, and sensor calibration.',
    verificationDetails: 'Academic Evaluation Panel',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-google-cybersecurity',
    name: 'Google Cybersecurity Professional Certificate',
    organization: 'Google',
    verifyUrl: 'https://coursera.org/verify/professional-cert/google-cybersecurity',
    badgeType: 'google',
  },
  {
    id: 'cert-cisco-ccst',
    name: 'Cisco Certified Support Technician (CCST) Cybersecurity',
    organization: 'Cisco Networking Academy',
    verifyUrl: 'https://www.credly.com/organizations/cisco',
    badgeType: 'cisco',
  },
  {
    id: 'cert-ibm-security',
    name: 'IBM Cybersecurity Analyst Professional Certificate',
    organization: 'IBM / Coursera',
    verifyUrl: 'https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst',
    badgeType: 'ibm',
  },
  {
    id: 'cert-aws-cloud',
    name: 'AWS Academy Graduate — Cloud & Security Foundations',
    organization: 'Amazon Web Services',
    verifyUrl: 'https://www.credly.com/organizations/amazon-web-services',
    badgeType: 'aws',
  },
  {
    id: 'cert-python-automation',
    name: 'Python for Network Security & Automation',
    organization: 'Coursera / DeepLearning.AI',
    verifyUrl: 'https://coursera.org/verify',
    badgeType: 'coursera',
  },
  {
    id: 'cert-microsoft-security',
    name: 'Microsoft Certified: Security, Compliance, and Identity (SC-900)',
    organization: 'Microsoft',
    verifyUrl: 'https://learn.microsoft.com/credentials',
    badgeType: 'generic',
  },
];

export const EXPERIENCE_ITEMS: Experience[] = [
  {
    id: 'exp-cyber-systems',
    period: '2024 – Present',
    role: 'Cybersecurity & Secure Systems Engineer',
    organization: 'Albukhary Tech Labs / Independent Consultant',
    organizationUrl: 'https://aiu.edu.my',
    location: 'Kuala Lumpur, Malaysia',
    isCurrent: true,
    summary:
      'Architecting secure web systems, conducting vulnerability evaluations, and delivering automated workflow solutions for client and campus portals.',
    skills: ['Zero-Trust Architecture', 'Penetration Testing', 'Cryptographic Protocols', 'RBAC & Identity', 'Node.js', 'React'],
    responsibilities: [
      'Architected authenticated voting software handling 2,000+ student ballots with zero security breaches and sub-minute tally reconciliation.',
      'Designed and audited enterprise RBAC policies, securing multi-tier permissions for HR and internal business workflows.',
      'Implemented automated continuous security checks (SAST, dependency auditing) reducing common CVE exposure by 85%.',
      'Configured hardened Linux production servers, firewalls (UFW/iptables), and Nginx reverse proxies with TLS 1.3 encryption.',
    ],
  },
  {
    id: 'exp-iot-automation',
    period: '2023 – 2024',
    role: 'IoT Embedded Systems & Telemetry Developer',
    organization: 'Smart Campus AgroTech Initiative',
    location: 'Alor Setar, Kedah, Malaysia',
    summary:
      'Led firmware development, sensor telemetry calibration, and cloud dashboard integration for autonomous irrigation and environmental sensing.',
    skills: ['ESP32', 'C++', 'MQTT Protocol', 'REST APIs', 'Telemetry Dashboards', 'Circuit Prototyping'],
    responsibilities: [
      'Developed low-power C++ firmware for ESP32 microcontrollers communicating over MQTT to cloud servers with 99.8% message delivery.',
      'Calibrated analog pH and soil moisture sensor curves, eliminating false triggering and achieving 40% reduction in water waste.',
      'Constructed a real-time responsive web monitoring dashboard visualizing multi-zone telemetry charts and battery levels.',
      'Conducted stress tests simulating network outages, implementing local offline caching and automatic reconnect fail-safes.',
    ],
  },
  {
    id: 'exp-peer-mentor',
    period: '2022 – 2024',
    role: 'Cybersecurity Student Mentor & Tech Lead',
    organization: 'Albukhary International University — Computing Society',
    location: 'Alor Setar, Kedah, Malaysia',
    summary:
      'Organized technical workshops on ethical hacking fundamentals, Linux command-line mastery, and secure software development lifecycles.',
    skills: ['Technical Mentorship', 'Workshop Delivery', 'Network Defense', 'Linux Hardening', 'Git & CI/CD'],
    responsibilities: [
      'Mentored over 60 undergraduate students in computer networking, cryptographic algorithms, and web security vulnerability mitigation.',
      'Organized and hosted university-wide mock Capture-The-Flag (CTF) security challenges with 120+ participants.',
      'Prepared documentation and hands-on lab environments for OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, IDOR).',
    ],
  },
];

export const NEWS_STORIES: NewsStory[] = [
  {
    id: 'ai-cyber-summit-2026',
    title: 'Navigating Next-Gen Threat Vectors at the Malaysia Cyber Summit 2026',
    category: 'Industry Conference',
    date: 'August 14, 2026',
    summary:
      'Engaged with regional cybersecurity leaders in Kuala Lumpur to discuss zero-trust cloud architectures, automated threat response, and defending against AI-orchestrated phishing attacks.',
    tags: ['Cybersecurity', 'Zero Trust', 'Kuala Lumpur'],
  },
  {
    id: 'aiu-convocation-2026',
    title: 'Milestone Achieved: Bachelor of Computer Science (Cybersecurity) Convocation',
    category: 'Academic Milestone',
    date: 'April 18, 2026',
    summary:
      'Alhamdulillah, formally graduated from Albukhary International University with a Bachelor of Computer Science in Cybersecurity, honored with Dean’s List distinctions and a Gold Medal.',
    tags: ['Convocation', 'Albukhary International University', 'Honors'],
  },
  {
    id: 'secure-voting-defense-2025',
    title: 'University Council Approval: Secure SRC Voting System Architecture',
    category: 'Project Defense',
    date: 'June 28, 2025',
    summary:
      'Successfully defended the cryptographic architecture of the Secure Voting System before the university academic and student affairs board, earning top capstone marks.',
    tags: ['Capstone', 'Cryptography', 'Voting System'],
  },
];
