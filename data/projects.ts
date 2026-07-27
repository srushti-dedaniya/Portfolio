import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "BagFix Pro",
    slug: "bagfix-pro",
    description:
      "An Android app for bag repair shop owners to digitally manage repair orders, customers, payments, and delivery tracking.",
    longDescription:
      "BagFix Pro is a mobile application designed specifically for bag repair shop owners. Many small repair businesses still maintain repair records manually in notebooks or WhatsApp chats, making it difficult to track customers, repair status, payments, and delivery dates. This application digitizes the entire repair workflow, allowing shop owners to efficiently manage repair orders, customer history, payments, and reports from a single Android application. Built as part of the Mobile Application Development (MAD) Self Learning Activity at Shah and Anchor Kutchhi Engineering College.",
    imageUrl: "/images/certificates/BagFix-Pro.jpg",
    imageAlt: "BagFix Pro Android App Screenshot",
    status: "Completed",
    techStack: ["Kotlin", "Android Studio", "Room Database", "Material Design 3", "SharedPreferences", "RecyclerView"],
    category: "Mobile App",
    featured: true,
    color: "blue",
    stats: [
      { label: "Screens", value: "10+" },
      { label: "Features", value: "20+" },
    ],
    githubUrl: "https://github.com/srushti-dedaniya/BagFix-Pro",
    downloadUrl: "/apk/BagFixPro.apk",
  },
  {
    id: "2",
    title: "Ocean Pollution Management System",
    slug: "ocean-pollution",
    description:
      "A Django-based web application to raise awareness about ocean pollution, collect community feedback, and share research resources.",
    longDescription:
      "The Ocean Pollution Management System is a Django-based web application designed to raise awareness about ocean pollution, collect community feedback, and share research resources. It features an awareness section with educational content, a research resource hub for uploading and browsing papers, a community survey for collecting feedback, and a user authentication system for researchers. Built with Python, Django, SQLite, HTML, and CSS.",
    imageUrl: "",
    imageAlt: "Ocean Pollution Management System Dashboard",
    status: "Completed",
    techStack: ["Python", "Django", "SQLite", "HTML", "CSS", "Django Templates"],
    category: "Web Platform",
    featured: true,
    color: "purple",
    stats: [
      { label: "Pages", value: "7+" },
      { label: "Features", value: "6+" },
    ],
    liveUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7486843987807559680/",
    githubUrl: "https://github.com/srushti-dedaniya/Ocean-Pollution-Management-System",
  },
  {
    id: "3",
    title: "SafetyTravel App",
    slug: "safetytravel",
    description:
      "A safety app for women travelers. It uses real-time data and community reports to help users stay safe while exploring new places.",
    longDescription:
      "SafetyTravel App is built to keep women travelers safe. The app combines real-time location data, community-driven safety reports, and smart route suggestions to help users feel confident and secure wherever they go.",
    imageUrl: "",
    imageAlt: "",
    status: "In Development",
    techStack: ["Kotlin", "Firebase", "Google Maps API", "ML Kit"],
    category: "Mobile App",
    featured: true,
    color: "red",
    githubUrl: "#",
  },
  {
    id: "4",
    title: "CivicSmart Portal",
    slug: "civicsmart",
    description:
      "A dashboard that makes it easy for citizens to report issues and track city services. One place for all civic complaints and updates.",
    longDescription:
      "CivicSmart Portal makes it simple for people to interact with their local government. Citizens can report problems, track the status of their complaints, and see what is happening in their neighborhood.",
    imageUrl: "",
    imageAlt: "",
    status: "Completed",
    techStack: ["React", "Python", "FastAPI", "PostGIS"],
    category: "Civic Tech",
    featured: true,
    color: "emerald",
    stats: [
      { label: "Efficiency", value: "+40%" },
      { label: "Uptime", value: "99.9%" },
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];
