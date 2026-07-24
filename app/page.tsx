import AuroraBackground from "@/components/home/AuroraBackground";
import Hero from "@/components/home/Hero";
import FloatingShapes from "@/components/home/FloatingShapes";
import FeatureCards from "@/components/home/FeatureCards";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <FloatingShapes />
      <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop pt-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] pointer-events-none" />
        <Hero />
        <FeatureCards />
      </main>
    </>
  );
}
