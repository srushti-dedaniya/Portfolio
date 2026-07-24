import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-24",
        align === "center" && "text-center max-w-3xl mx-auto",
        className
      )}
    >
      {label && (
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">
            {label}
          </span>
        </div>
      )}
      <h1 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface mb-6">
        {title}
      </h1>
      {description && (
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
