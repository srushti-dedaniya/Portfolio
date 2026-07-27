import { SkillCategory } from "@/types/project";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: "code",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "Kotlin", "C++"],
  },
  {
    category: "Frontend",
    icon: "palette",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: "dns",
    skills: ["Node.js", "Express.js", "FastAPI", "Spring Boot", "REST APIs", "GraphQL"],
  },
  {
    category: "Mobile",
    icon: "phone_android",
    skills: ["React Native", "Kotlin", "Android SDK", "Firebase"],
  },
  {
    category: "Database",
    icon: "storage",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
  },
  {
    category: "Tools",
    icon: "build",
    skills: ["Git", "Docker", "AWS", "Linux", "Figma", "Postman"],
  },
];
