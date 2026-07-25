import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "BagFix Pro",
    slug: "bagfix-pro",
    description:
      "An app that helps luxury bag owners find trusted repair professionals. Clients can track repairs, get diagnostics, and communicate easily with craftspeople.",
    longDescription:
      "BagFix Pro connects people who own luxury bags with skilled repair professionals. The platform makes it easy to request repairs, track progress in real-time, and communicate directly with the craftsman. It brings a traditional service into the digital age.",
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
      "A modern online store for a family-owned bag shop. We brought their decades-old business online while keeping the brand feel their customers love.",
    longDescription:
      "Patel Bag House is a family business that has been around for decades. This project took their physical store online with a modern eCommerce website, making it easy for customers to browse and buy from anywhere while keeping the brand's heritage and feel intact.",
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
      "A safety app for women travelers. It uses real-time data and community reports to help users stay safe while exploring new places.",
    longDescription:
      "Guardian Path is built to keep women travelers safe. The app combines real-time location data, community-driven safety reports, and smart route suggestions to help users feel confident and secure wherever they go.",
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
      "A dashboard that makes it easy for citizens to report issues and track city services. One place for all civic complaints and updates.",
    longDescription:
      "Civic Pulse makes it simple for people to interact with their local government. Citizens can report problems like potholes or broken lights, track the status of their complaints, and see what is happening in their neighborhood — all from one easy-to-use dashboard.",
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
