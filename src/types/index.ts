export interface SocialLink {
  name: string;
  url: string;
  icon?: 'github' | 'linkedin' | 'medium' | 'instagram';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  technologies: string[];
  location?: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  duration: string;
  organization: string;
  description: string;
  skills: string[];
  link?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Publication {
  id: string;
  title: string;
  type: 'paper' | 'conference' | 'award';
  date: string;
  description: string;
  venue?: string;
  organization?: string;
  url?: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  publishedDate: string;
  url: string;
  tags?: string[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  description?: string;
  bookUrl?: string;
  authorUrl?: string;
}

export interface Entertainment {
  id: string;
  title: string;
  type: 'movie' | 'series';
  genre: string;
  description?: string;
  year?: number;
  url?: string;
  rating?: number;
}

export interface AboutMe {
  name: string;
  title: string;
  bio: string;
  longBio: string;
  email?: string;
  location?: string;
  socialLinks: SocialLink[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  grade: string;
  activities?: string;
  achievements?: string[];
}
