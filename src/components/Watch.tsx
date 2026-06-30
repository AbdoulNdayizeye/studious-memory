import type { WatchTheme } from "@/lib/content";

/* A SOROSHA timepiece: the real product photograph (white background keyed
   out) layered over a slowly spinning gear movement, which shows through the
   skeleton dial and the gaps in the bracelet — keeping the mechanical motion
   alive while using authentic product imagery.
   `id` scopes the gradient so multiple instances don't collide. */

function Gear({ cx, cy, r, teeth, stroke, className }: { cx: number; cy: number; r: number; teeth: number; stroke: string; className?: string }) {
  const inner = r * 0.78;
  const pts: string[] = [];
  const step = (Math.PI * 2) / (teeth * 2);
  for (let i = 0; i < teeth * 2; i++) {
    const rad = i % 2 === 0 ? r : inner;
    pts.push(`${cx + Math.cos(i * step) * rad},${cy + Math.sin(i * step) * rad}`);
  }
  return (
    <g className={className} style={{ transformOrigin: `${cx}px ${cy}px` }}>
      <polygon points={pts.join(" ")} fill="none" stroke={stroke} strokeWidth={1.5} />
      <circle cx={cx} cy={cy} r={inner * 0.66} fill="none" stroke={stroke} strokeWidth={1} />
      <circle cx={cx} cy={cy} r={r * 0.2} fill="none" stroke={stroke} strokeWidth={1.2} />
    </g>
  );
}

export default function Watch({
  theme, id, animated = true, priority = false, className, ariaLabel = "SOROSHA skeleton timepiece",
}: {
  theme: WatchTheme; id: string; animated?: boolean; priority?: boolean; className?: string; ariaLabel?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center ${className ?? ""}`}>
      {/* spinning movement behind the watch */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        <svg viewBox="0 0 200 200" className="w-[88%] h-[88%] opacity-60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`${id}-gear`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D8B570" />
              <stop offset="55%" stopColor="#B68D40" />
              <stop offset="100%" stopColor="#8A6A2E" />
            </linearGradient>
          </defs>
          <Gear cx={100} cy={100} r={88} teeth={44} stroke={`url(#${id}-gear)`} className={animated ? "spin-slower" : undefined} />
          <Gear cx={100} cy={100} r={58} teeth={30} stroke={`url(#${id}-gear)`} className={animated ? "spin-rev" : undefined} />
          <Gear cx={44} cy={48} r={26} teeth={16} stroke={`url(#${id}-gear)`} className={animated ? "spin-slow" : undefined} />
          <Gear cx={158} cy={152} r={22} teeth={14} stroke={`url(#${id}-gear)`} className={animated ? "spin-rev" : undefined} />
        </svg>
      </div>

      {/* real product photograph */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={theme.image}
        alt={ariaLabel}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        className="relative w-full h-auto select-none"
        style={{ filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.55))" }}
      />
    </div>
  );
}
