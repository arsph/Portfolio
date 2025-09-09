export type Language = 'en' | 'de';

export interface Content {
  en: string;
  de: string;
}

export interface ResumeDescription {
  en: string | string[];
  de: string | string[];
}

export interface ResumeExperience {
  date: Content;
  role: Content;
  company: Content;
  description: ResumeDescription;
}

export interface ResumeEducation {
  date: Content;
  degree: Content;
  institution: Content;
  description?: ResumeDescription;
}

export interface NavItem {
  id: string;
  label: Content;
  href: string;
}
