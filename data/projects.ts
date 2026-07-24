import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "BagFix Pro",
    slug: "bagfix-pro",
    description:
      "The ultimate ecosystem for luxury bag restoration. Streamlining craftsman workflows with high-tech diagnostic tools and solar-smooth client interfaces.",
    longDescription:
      "BagFix Pro revolutionizes the luxury bag restoration industry by providing a comprehensive digital platform that connects skilled craftspeople with discerning clients. The platform features real-time diagnostic assessment tools, progress tracking, and a seamless communication system that bridges the gap between traditional craftsmanship and modern technology.",
    tags: [
      { label: "Web Platform", variant: "primary" },
      { label: "Luxury Service", variant: "tertiary" },
    ],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRaaMJH-wdP0jR-4jXPQ9VfvKLPZQvefE-exOM7N0oHEoz2rKiqnJclPAkFfrQxO85iDqe4l8tCDLuJc2E4iPTDgX-HRVAUGzbZWtcCKJ3D92PyDcplEyNF8RVis4Uz0YGfa3o4OnhKWrGv4lZjegtogkqtPLyP7qsBF81t29VJK7J7BFgNl0YwUvv-fQ1pps2ekMoKv-6DvDeZi6JNDfKHDB61cXZ-h4GsQ2QTzguA-gqouNL-HsUwcBojNSCEOi08hk4Yj5YTvda",
    imageAlt:
      "A sleek, high-end photography of luxury leather bags being meticulously repaired in a modern, well-lit studio.",
    status: "Live",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "Web Platform",
    featured: true,
  },
  {
    id: "2",
    title: "Patel Bag House",
    slug: "patel-bag-house",
    description:
      "A digital transformation for a legacy retail brand, merging tradition with an experimental eCommerce experience.",
    longDescription:
      "Patel Bag House represents the perfect blend of heritage and innovation. This project transformed a decades-old retail business into a modern eCommerce powerhouse while preserving the brand's rich history and customer relationships.",
    tags: [],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5eygCMLcRCG5Cv28HHSOTlGYcxCgkyz8XpSxUGgi6GIl4ED6ggGrb0s3u-GX89W4hbGen4PK5M-mSnn2GZhcGslAvJtlKhg2stTVuf3loaD4e40Bw4HvMuGAnpGKpKkmfr_HWSwIPS49UaLkiYtPDyDAYr2dz52oz8BlnUKj18f71s9XMC3RMfSbLQqp7eZnTktnfd46PoGkKZZHVaf6b9n587X-NgjVRsPTW-Rj19LQ0WYc6FP7XXNcVtLduR2Kp_V0GhUFkU0fp",
    imageAlt:
      "A vibrant, busy commercial storefront at night, illuminated by warm orange neon lights and deep red glows.",
    status: "Completed",
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    category: "eCommerce",
    featured: false,
  },
  {
    id: "3",
    title: "Guardian Path",
    slug: "women-safety",
    description:
      "A safety-focused travel application utilizing real-time data and community signals to empower women travelers.",
    longDescription:
      "Guardian Path is a safety-first travel application designed to empower women travelers through real-time data analysis, community-driven safety signals, and intelligent route optimization. The app combines cutting-edge technology with intuitive design to create a reliable companion for women exploring the world.",
    tags: [],
    imageUrl: "",
    imageAlt: "",
    status: "In Development",
    progress: 75,
    techStack: ["Kotlin", "Firebase", "Google Maps API", "ML Kit"],
    category: "Mobile App",
    featured: true,
  },
  {
    id: "4",
    title: "Civic Pulse",
    slug: "smart-civic",
    description:
      "Reimagining government-citizen interactions through a unified, liquid-motion dashboard for smart city services.",
    longDescription:
      "Civic Pulse transforms how citizens interact with their local government. This smart city dashboard provides real-time civic reporting, service tracking, and community engagement tools that make urban living more responsive and transparent.",
    tags: [],
    imageUrl: "",
    imageAlt: "",
    status: "Completed",
    techStack: ["React", "Python", "FastAPI", "PostGIS"],
    category: "Civic Tech",
    featured: true,
    stats: [
      { label: "Efficiency", value: "+40%", color: "tertiary" },
      { label: "Uptime", value: "99.9%", color: "primary" },
    ],
  },
];
