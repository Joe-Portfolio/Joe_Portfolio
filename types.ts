
export type Language = 'ko' | 'en';

export interface Project {
  id: string;
  title: string;
  company: string;
  year: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface GalleryItem {
  id: number;
  name: string;
  sketch: string;
  result: string;
}

export interface Translation {
  nav_home: string;
  nav_experience: string;
  nav_projects: string;
  nav_skills: string;
  hero_title: string;
  hero_subtitle: string;
  hero_description: string;
  view_portfolio_video: string;
  experience_title: string;
  projects_title: string;
  projects_subtitle: string;
  skills_title: string;
  gallery_title: string;
  gallery_description: string;
  gallery_label_sketch: string;
  gallery_label_ai: string;
  exp_hover_hint: string;
  exp_hover_full: string;
  contact_title: string;
  footer_text: string;
  view_history: string;
  minimize_history: string;
}
