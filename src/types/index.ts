export type ProjectStatus = "completed" | "in-progress" | "exploring";
export type ProjectCategory = "analytics" | "data-science" | "technology" | "business";
export type SkillStatus = "current" | "learning";

export interface SocialLinks {
  email?: string;
  linkedin?: string;
  github?: string;
}

export interface WhatIBringItem {
  title: string;
  description: string;
  iconName: string;
}

export interface SolutionsData {
  heading: string;
  intro: string;
  areas: string[];
}

export interface PhilosophyData {
  heading: string;
  body: string;
}

export interface ContactData {
  heading: string;
  body: string;
}

export interface SeoData {
  title: string;
  description: string;
}

export interface ProfileData {
  name: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  site_url: string;
  resume: string;
  positioning: {
    title: string;
    tagline: string;
    intro: string;
  };
  what_i_bring: WhatIBringItem[];
  solutions: SolutionsData;
  philosophy: PhilosophyData;
  contact: ContactData;
  seo: SeoData;
}

export interface CareerMilestone {
  id: string;
  title: string;
  stage: string;
  timeframe: string;
  description: string;
  skills: string[];
  highlight?: string;
  isCurrent?: boolean;
  isFuture?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  stack: string[];
  focus: string[];
  summary?: string;
  problem?: string;
  solution?: string;
  outcomes?: string[];
  github?: string;
  demo?: string;
  hasCaseStudy?: boolean;
}

export interface CaseStudy {
  projectSlug: string;
  title: string;
  subtitle?: string;
  problem: string;
  context: string;
  data: string;
  approach: string;
  tools: string[];
  analysis: string;
  insights: string[];
  recommendations: string[];
  outcome: string;
}

export interface SkillCategoryGroup {
  id: string;
  name: string;
  current: string[];
  learning: string[];
}

export interface LearningTrack {
  id: string;
  track: string;
  steps: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  branch: string;
  institution: string;
  graduation_year: string;
  coursework?: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  provider: string;
  year: string;
  credential_id?: string;
  url?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  context: string;
  year: string;
}
