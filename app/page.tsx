import AuroraBackground from "@/components/home/AuroraBackground";
import FloatingShapes from "@/components/home/FloatingShapes";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import AboutSection from "@/components/home/AboutSection";
import FeatureCards from "@/components/home/FeatureCards";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import AchievementsSection from "@/components/home/AchievementsSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <FloatingShapes />
      <Hero />
      <Marquee text="Get to know me" />
      <AboutSection />
      <FeatureCards />
      <Marquee text="What I work with" />
      <SkillsSection />
      <Marquee text="My projects" />
      <ProjectsSection />
      <Marquee text="My journey" />
      <ExperienceSection />
      <Marquee text="Milestones and wins" />
      <AchievementsSection />
      <Marquee text="Let's connect" />
      <ContactSection />
    </>
  );
}
