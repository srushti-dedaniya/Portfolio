interface TechStackProps {
  technologies: string[];
}

export default function TechStack({ technologies }: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <div
          key={tech}
          className="px-4 py-2 glass-pane rounded-xl border border-white/10 font-label-md text-on-surface-variant"
        >
          {tech}
        </div>
      ))}
    </div>
  );
}
