import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import CertificatesMarquee from "@/components/home/CertificatesMarquee";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <CertificatesMarquee />
      <ContactSection />
    </>
  );
}
