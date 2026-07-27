export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  imageAlt: string;
  status?: "Live" | "In Development" | "Completed";
  techStack: string[];
  category: string;
  featured: boolean;
  color: "blue" | "purple" | "red" | "emerald";
  stats?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
