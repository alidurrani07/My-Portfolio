export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'Mobile' | 'AI' | 'Game' | 'UI/UX';
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Will match Lucide icon names dynamically
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  tech: string[];
  logoText: string;
}

export interface ProcessStep {
  step: string; // e.g., "01"
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'Frontend' | 'Backend' | 'Game Development' | 'Cloud' | 'Database' | 'Design';
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  institution: string;
  achievements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  avatar: string;
  companyLogo?: string; // Standardized brand name e.g. "Google", "Stripe", "Vercel"
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  value: number;
  label: string;
  suffix: string;
}
