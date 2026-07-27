export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  color: string;
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Hackathon Winner",
    issuer: "State-level Hackathon",
    date: "2024",
    icon: "emoji_events",
    color: "#F59E0B",
  },
  {
    id: "2",
    title: "AI/ML Workshop",
    issuer: "Tech Fest 2024",
    date: "2024",
    icon: "smart_toy",
    color: "#8B5CF6",
  },
  {
    id: "3",
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2024",
    icon: "code",
    color: "#3B82F6",
  },
  {
    id: "4",
    title: "Open Source Contributor",
    issuer: "GitHub",
    date: "2024",
    icon: "merge_type",
    color: "#10B981",
  },
  {
    id: "5",
    title: "Cloud Computing Basics",
    issuer: "AWS Academy",
    date: "2024",
    icon: "cloud",
    color: "#F97316",
  },
  {
    id: "6",
    title: "Python for Data Science",
    issuer: "Coursera",
    date: "2023",
    icon: "terminal",
    color: "#06B6D4",
  },
];
