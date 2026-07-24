export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  tags: { label: string; variant: "primary" | "tertiary" | "secondary" }[];
  imageUrl: string;
  imageAlt: string;
  status?: "Live" | "In Development" | "Completed";
  progress?: number;
  techStack: string[];
  category: string;
  featured: boolean;
  stats?: { label: string; value: string; color: "primary" | "tertiary" | "secondary" }[];
  link?: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Mobile" | "Systems" | "Tools";
  icon: string;
  color: "primary" | "tertiary" | "secondary" | "on-surface-variant" | "white";
  proficiency: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
  color: "primary" | "tertiary" | "secondary";
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl?: string;
  credentialUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  color: "primary" | "tertiary" | "secondary";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: "primary" | "tertiary" | "secondary" | "error";
}
