import React from 'react';
import { X, Download, Printer, GraduationCap, Award, Briefcase, Code, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
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
    // Generate clean text-based CV download or trigger download
    const cvContent = `
FUAD HIYBO HUSSIN MOHAMED
Cybersecurity Engineer & Secure Systems Architect
Location: Kuala Lumpur, Malaysia | Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.whatsappPhone}
LinkedIn: ${PERSONAL_INFO.linkedinUrl} | GitHub: ${PERSONAL_INFO.githubUrl}

==================================================
EXECUTIVE SUMMARY
==================================================
Computer Science (Cybersecurity) graduate from Albukhary International University with proven expertise in zero-trust system architecture, authenticated cryptographic voting systems, enterprise HR automation, and embedded IoT telemetry. Honored with Dean's List Awards across multiple semesters and the Gold Medal of Academic Distinction.

==================================================
EDUCATION
==================================================
Bachelor of Computer Science (Cybersecurity)
Albukhary International University, Malaysia (Graduated with Honors)
- Honors: Dean's List Award (Semester 2 & Semester 3), Gold Medal of Academic Distinction
- Capstone Project: Secure Voting System with SHA-256 Cryptographic Ballot Verification (Grade: A)

==================================================
TECHNICAL SKILLS & COMPETENCIES
==================================================
- Security Architecture: Zero-Trust Principles, Threat Modeling (STRIDE), Blind Signature Protocols, Cryptographic Hashing (SHA-256), PKI & TLS
- Access & Identity: Role-Based Access Control (RBAC), Least Privilege Enforcement, JWT Authentication, Multi-Factor Authentication (MFA)
- Systems & Cloud: Linux Hardening, CIS Benchmarks, Docker Containerization, Nginx Reverse Proxy, AWS Cloud Foundations
- Web & Automation: React, TypeScript, Node.js, Express, PostgreSQL, REST APIs, Python Automation, Bash Scripting
- Embedded & IoT: ESP32 Microcontroller, C++, MQTT Protocols, Soil Moisture & pH Sensor Calibration, Telemetry Dashboards

==================================================
FEATURED PROJECTS
==================================================
1. Secure Voting System (SRC Elections Ballot Infrastructure)
- Architected electronic ballot platform with cryptographic verification for university student council elections.
- Implemented single-use blind tokenization preventing ballot stuffing; reduced election tally time to < 2 minutes.

2. Employer Management System (Enterprise HR Automation)
- Engineered role-based portal automating employee records, leave approval chains, and payroll computations.
- Cut administrative processing overhead by 65% with 100% immutable audit logging.

3. IoT Smart Watering System (pH & Soil Moisture Telemetry)
- Designed autonomous irrigation device with ESP32 edge microcontroller and calibrated analog sensors.
- Reduced water wastage by 40% and delivered continuous telemetry to a real-time web dashboard.

==================================================
HONORS & CERTIFICATIONS
==================================================
- Dean's List Award — Academic Excellence (Semester 2 & 3)
- Gold Medal of Academic Distinction & Achievement
- Google Cybersecurity Professional Certificate
- Cisco Certified Support Technician (CCST) Cybersecurity
- IBM Cybersecurity Analyst Professional Certificate
- AWS Academy Graduate — Cloud & Security Foundations
`;
    const blob = new Blob([cvContent.trim()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Fuad_Hiybo_Cybersecurity_Engineer_CV.txt';
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
              className="btn-secondary hidden sm:inline-flex h-9 px-3 text-xs"
              title="Print CV"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print</span>
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="btn-primary h-9 px-3.5 text-xs"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download CV</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted hover:bg-surface-2 hover:text-foreground"
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

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 font-heading text-base font-bold text-foreground border-b border-border pb-2">
              <GraduationCap className="h-4 w-4 text-accent" />
              <span>EDUCATION</span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h4 className="font-semibold text-foreground text-sm sm:text-base">
                  Bachelor of Computer Science (Cybersecurity)
                </h4>
                <span className="font-mono text-xs text-subtle">Graduated with Honors</span>
              </div>
              <p className="text-sm font-medium text-accent">
                Albukhary International University (AIU) — Malaysia
              </p>
              <ul className="mt-2 space-y-1 text-xs text-muted list-disc list-inside">
                <li><strong className="text-foreground">Honors:</strong> Conferred Dean's List Award (Semester 2 &amp; Semester 3), Gold Medal of Academic Distinction.</li>
                <li><strong className="text-foreground">Core Coursework:</strong> Cryptography &amp; Network Security, Secure Software Engineering, Penetration Testing &amp; Vulnerability Assessment, Operating Systems &amp; Linux Hardening, Database Systems.</li>
                <li><strong className="text-foreground">Final Capstone:</strong> Authenticated SRC Elections Balloting Architecture with SHA-256 Verification Ledgers.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-2 font-heading text-base font-bold text-foreground border-b border-border pb-2">
              <Code className="h-4 w-4 text-violet" />
              <span>TECHNICAL COMPETENCIES</span>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="rounded-xl border border-border p-3.5 bg-surface-2/60">
                <p className="font-semibold text-foreground font-mono">Security &amp; Architecture</p>
                <p className="mt-1 text-muted leading-relaxed">
                  Zero-Trust Architecture, Threat Modeling, SHA-256 Hashing, Blind Signatures, Role-Based Access Control (RBAC), Least Privilege, OWASP Top 10 Mitigation.
                </p>
              </div>
              <div className="rounded-xl border border-border p-3.5 bg-surface-2/60">
                <p className="font-semibold text-foreground font-mono">Development &amp; Cloud</p>
                <p className="mt-1 text-muted leading-relaxed">
                  React, TypeScript, Node.js, Express, PostgreSQL, RESTful APIs, Docker, Linux (Ubuntu/Debian), Nginx Reverse Proxy, Git / GitHub Actions.
                </p>
              </div>
              <div className="rounded-xl border border-border p-3.5 bg-surface-2/60">
                <p className="font-semibold text-foreground font-mono">Automation &amp; Scripting</p>
                <p className="mt-1 text-muted leading-relaxed">
                  Python Security Scripting, Bash / Shell Automation, CIS Benchmark Hardening, Nmap, OpenSSL, Vulnerability Triage.
                </p>
              </div>
              <div className="rounded-xl border border-border p-3.5 bg-surface-2/60">
                <p className="font-semibold text-foreground font-mono">IoT &amp; Hardware</p>
                <p className="mt-1 text-muted leading-relaxed">
                  ESP32 Microcontroller, C++, MQTT / WebSockets, Soil Moisture &amp; pH Sensor Calibration, Relay Actuators, Telemetry Dashboards.
                </p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <div className="flex items-center gap-2 font-heading text-base font-bold text-foreground border-b border-border pb-2">
              <Briefcase className="h-4 w-4 text-teal" />
              <span>KEY PROJECTS &amp; SYSTEM DELIVERIES</span>
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-semibold text-foreground text-sm">
                    Secure Voting System — SRC Elections Ballot Infrastructure
                  </h4>
                  <span className="font-mono text-xs text-subtle">AIU Elections</span>
                </div>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Engineered an authenticated voting portal eliminating duplicate voting through single-use cryptographically signed tokens. Generated immutable SHA-256 audit ledgers, reducing ballot tally duration from 14 hours to under 2 minutes.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-semibold text-foreground text-sm">
                    Employer Management System — Enterprise HR Automation
                  </h4>
                  <span className="font-mono text-xs text-subtle">Full-Stack System</span>
                </div>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Built a centralized portal enforcing multi-tier RBAC permissions. Automated employee payroll calculations, leave request authorizations, and compliance reporting, cutting admin turnaround time by 65%.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-semibold text-foreground text-sm">
                    IoT Smart Watering System — Telemetry &amp; Actuation
                  </h4>
                  <span className="font-mono text-xs text-subtle">Edge IoT</span>
                </div>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Developed ESP32 C++ firmware sampling soil moisture and pH probes every 10 seconds. Automated relay pump triggers and cloud notifications, achieving 40% water waste reduction and 100% telemetry uptime.
                </p>
              </div>
            </div>
          </div>

          {/* Awards & Certifications */}
          <div>
            <div className="flex items-center gap-2 font-heading text-base font-bold text-foreground border-b border-border pb-2">
              <Award className="h-4 w-4 text-amber" />
              <span>HONORS &amp; CERTIFICATIONS</span>
            </div>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>Dean's List Award — Academic Excellence (Semester 2 &amp; 3)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-amber shrink-0" />
                <span>Gold Medal of Academic Distinction &amp; Achievement</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-violet shrink-0" />
                <span>Google Cybersecurity Professional Certificate</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-rose shrink-0" />
                <span>Cisco Certified Support Technician (CCST) Cybersecurity</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-teal shrink-0" />
                <span>IBM Cybersecurity Analyst Professional Certificate</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>AWS Academy Graduate — Cloud &amp; Security Foundations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 flex justify-end gap-3 border-t border-border pt-6">
          <button
            type="button"
            onClick={handleDownload}
            className="btn-primary"
          >
            <Download className="h-4 w-4" />
            <span>Download Document</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
