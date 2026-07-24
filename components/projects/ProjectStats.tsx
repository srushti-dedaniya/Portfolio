interface ProjectStatsProps {
  stats: { label: string; value: string; color: "primary" | "tertiary" | "secondary" }[];
}

export default function ProjectStats({ stats }: ProjectStatsProps) {
  const colorMap = {
    primary: "text-primary",
    tertiary: "text-tertiary",
    secondary: "text-secondary",
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="p-4 bg-white/5 rounded-xl border border-white/5">
          <div className={`font-label-sm text-label-sm ${colorMap[stat.color]} mb-1`}>
            {stat.label}
          </div>
          <div className="font-display-lg text-headline-md text-on-surface">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
}
