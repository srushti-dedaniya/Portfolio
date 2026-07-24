import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "glass-pane rounded-[24px] p-8 flex flex-col gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}
