"use client";

interface MarqueeProps {
  text: string;
  className?: string;
}

export default function Marquee({ text, className = "" }: MarqueeProps) {
  const repeated = `${text}\u00A0\u00A0\u00A0`.repeat(6);

  return (
    <div className={`w-full overflow-hidden bg-primary-container/10 border-y border-primary/10 py-4 ${className}`}>
      <div className="marquee-track whitespace-nowrap">
        <span className="font-label-md text-primary/70 uppercase tracking-[0.15em]">
          {repeated}
        </span>
        <span className="font-label-md text-primary/70 uppercase tracking-[0.15em]">
          {repeated}
        </span>
      </div>
    </div>
  );
}
