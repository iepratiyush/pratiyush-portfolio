export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
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
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Publication {
  id: string;
  title: string;
  type: 'paper' | 'article' | 'award';
  date: string;
  description: string;
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
  rating?: number;
  review?: string;
  coverUrl?: string;
}

export interface Entertainment {
  id: string;
  title: string;
  type: 'movie' | 'series';
  genre: string;
  rating?: number;
  review?: string;
  posterUrl?: string;
  year?: number;
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
