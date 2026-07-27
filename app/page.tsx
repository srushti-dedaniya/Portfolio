import Hero from "@/components/home/Hero";
import CertificatesMarquee from "@/components/home/CertificatesMarquee";
import AboutSection from "@/components/home/AboutSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CertificatesMarquee />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
