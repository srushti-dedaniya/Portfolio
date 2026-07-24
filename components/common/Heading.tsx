import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

export default function Heading({
  children,
  className,
  as: Tag = "h1",
}: HeadingProps) {
  const styles = {
    h1: "font-display-lg text-display-lg",
    h2: "font-display-lg text-headline-lg",
    h3: "font-headline-md text-headline-md",
    h4: "font-headline-md text-headline-md",
  };

  return (
    <Tag className={cn(styles[Tag], "text-on-surface leading-tight", className)}>
      {children}
    </Tag>
  );
}
