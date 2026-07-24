import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-pane rounded-[24px] p-8",
        hover && "hover:-translate-y-2 transition-transform duration-500",
        className
      )}
    >
      {children}
    </div>
  );
}
