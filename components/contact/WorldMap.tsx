"use client";

export default function WorldMap() {
  return (
    <div className="h-[400px] md:h-[600px] relative glass-panel rounded-[24px] overflow-hidden group">
      <div
        className="absolute inset-0 z-0 opacity-40 mix-blend-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNthcOtLNKThfEELL7-oV3tD0b3uMX4SYZqbtlMJymAkIWTvh2KQyrYzqgWgwCWE53zsZDJ6y-wPa-btcaaSg4WIXOCKR2bxt9fFUOYsp7ZKhYVqo1JGnv6G6qsLuzrRmUDJPNKOo2qVZXH02It8M4xfZ_LemPfj_bgyjNYQjN8U30LtiWr3bzX3WNQh-piAYxy2P1Vq_WDu8zi-2So1wl0-SwcLtFaT2UFFVIJcHxSdhHhrLDhDU-TUA60aalOPr6HiW0d4cP4zFw')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />

      <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between items-start">
          <div className="glass-panel px-4 py-2 rounded-xl pointer-events-auto">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-sm text-primary">UPLINK ACTIVE</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 pointer-events-auto items-end">
            <div className="font-label-sm text-on-surface-variant">
              NODE: 27.2044° N, 77.4977° E
            </div>
            <div className="font-label-sm text-on-surface-variant">
              LATENCY: 14MS
            </div>
          </div>
        </div>

        <div className="flex gap-4 pointer-events-auto">
          <div className="glass-panel p-4 rounded-xl flex-1">
            <div className="text-on-surface-variant font-label-sm mb-1 uppercase tracking-wider">
              Atmosphere
            </div>
            <div className="text-primary font-display-lg text-headline-md">
              1013.2 <span className="text-label-sm">hPa</span>
            </div>
          </div>
          <div className="glass-panel p-4 rounded-xl flex-1">
            <div className="text-on-surface-variant font-label-sm mb-1 uppercase tracking-wider">
              Radiation
            </div>
            <div className="text-tertiary font-display-lg text-headline-md">
              Nominal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
