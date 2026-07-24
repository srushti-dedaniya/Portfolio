"use client";

export default function AuroraBackground() {
  return (
    <div className="solar-aura">
      <div className="blob w-[600px] h-[600px] bg-primary-container -top-20 -left-20" />
      <div
        className="blob w-[500px] h-[500px] bg-secondary-container top-1/2 left-1/3"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="blob w-[700px] h-[700px] bg-primary-container -bottom-40 -right-20"
        style={{ animationDelay: "-10s" }}
      />
    </div>
  );
}
