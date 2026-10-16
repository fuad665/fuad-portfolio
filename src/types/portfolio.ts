export interface MetricItem {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryColor: 'accent' | 'violet' | 'teal' | 'amber';
  summary: string;
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  metrics: MetricItem[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Award {
  id: string;
  title: string;
  badge: string;
  organization: string;
  category: 'academic' | 'security' | 'leadership';
  color: 'accent' | 'rose' | 'amber' | 'violet' | 'teal';
  date: string;
  description: string;
  verificationDetails?: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  verifyUrl: string;
  badgeType: 'coursera' | 'ibm' | 'google' | 'aws' | 'cisco' | 'generic';
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  location: string;
  summary: string;
  isCurrent?: boolean;
  skills: string[];
  responsibilities: string[];
}

export interface NewsStory {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  tags: string[];
}
