import type { WatchTheme } from "@/lib/content";

/* A SOROSHA timepiece rendered in pure SVG — modelled on the real product:
   an octagonal bezel with eight exposed screws, an integrated tapering
   bracelet, and a fully skeletonised exhibition dial with a balance-wheel
   opening at six o'clock. Themeable so each collection shows its own metal.
   `id` must be unique per instance to scope gradient definitions. */

const CX = 180;
const CY = 285;
const R = 122; // bezel outer radius (to vertices)

function octagon(r: number, cx = CX, cy = CY) {
  return Array.from({ length: 8 }, (_, i) => {
    const a = ((i * 45 + 22.5) * Math.PI) / 180;
    return `${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`;
  }).join(" ");
}

function Gear({ cx, cy, r, teeth, color, className }: { cx: number; cy: number; r: number; teeth: number; color: string; className?: string }) {
  const inner = r * 0.76;
  const pts: string[] = [];
  const step = (Math.PI * 2) / (teeth * 2);
  for (let i = 0; i < teeth * 2; i++) {
    const rad = i % 2 === 0 ? r : inner;
    pts.push(`${cx + Math.cos(i * step) * rad},${cy + Math.sin(i * step) * rad}`);
  }
  return (
    <g className={className} style={{ transformOrigin: `${cx}px ${cy}px` }}>
      <polygon points={pts.join(" ")} fill="none" stroke={color} strokeWidth={1.4} opacity={0.85} />
      <circle cx={cx} cy={cy} r={inner * 0.62} fill="none" stroke={color} strokeWidth={1} opacity={0.55} />
      <circle cx={cx} cy={cy} r={r * 0.22} fill={color} opacity={0.5} />
    </g>
  );
}

/* one tapering bracelet row of three links */
function BraceletRow({ y, w, h, theme, id }: { y: number; w: number; h: number; theme: WatchTheme; id: string }) {
  const gap = 3;
  const linkW = (w - gap * 2) / 3;
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={CX - w / 2 + i * (linkW + gap)}
          y={y} width={linkW} height={h} rx={5}
          fill={`url(#${id}-brace)`}
          stroke={theme.caseMetalDark} strokeWidth={0.6} opacity={0.97}
        />
      ))}
    </g>
  );
}

export default function Watch({
  theme, id, animated = false, className, ariaLabel = "SOROSHA skeleton timepiece",
}: { theme: WatchTheme; id: string; animated?: boolean; className?: string; ariaLabel?: string }) {
  const indices = Array.from({ length: 12 });
  const screws = Array.from({ length: 8 }, (_, i) => {
    const a = ((i * 45 + 22.5) * Math.PI) / 180;
    return { x: CX + Math.cos(a) * 105, y: CY + Math.sin(a) * 105, a };
  });

  // bracelet rows tapering away from the case
  const top = CY - 112, bottom = CY + 112;
  const upRows = [0, 1, 2, 3, 4];
  const rowH = 22, rowGap = 4;

  return (
    <svg viewBox="0 0 360 600" className={className} role="img" aria-label={ariaLabel} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`${id}-glow`} cx="50%" cy="48%" r="46%">
          <stop offset="0%" stopColor={theme.glow} />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <linearGradient id={`${id}-bezel`} x1="0.15" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor={theme.accentLight} stopOpacity={0.95} />
          <stop offset="30%" stopColor={theme.caseMetal} />
          <stop offset="60%" stopColor={theme.caseMetalDark} />
          <stop offset="100%" stopColor={theme.caseMetal} />
        </linearGradient>
        <linearGradient id={`${id}-brace`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={theme.caseMetalDark} />
          <stop offset="35%" stopColor={theme.accentLight} stopOpacity={0.9} />
          <stop offset="55%" stopColor={theme.caseMetal} />
          <stop offset="100%" stopColor={theme.caseMetalDark} />
        </linearGradient>
        <radialGradient id={`${id}-dial`} cx="50%" cy="42%" r="65%">
          <stop offset="0%" stopColor={theme.dial} />
          <stop offset="100%" stopColor={theme.dialDark} />
        </radialGradient>
        <radialGradient id={`${id}-screw`} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor={theme.accentLight} />
          <stop offset="100%" stopColor={theme.caseMetalDark} />
        </radialGradient>
        <linearGradient id={`${id}-hand`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={theme.accentLight} />
          <stop offset="100%" stopColor={theme.accent} />
        </linearGradient>
      </defs>

      {/* ambient glow */}
      <ellipse cx={CX} cy={CY} rx={170} ry={250} fill={`url(#${id}-glow)`} />

      {/* ── integrated bracelet (behind case) ── */}
      <g>
        {upRows.map((i) => {
          const y = top - rowH - i * (rowH + rowGap);
          const w = 150 - i * 13;
          return <BraceletRow key={`u${i}`} y={y} w={w} h={rowH} theme={theme} id={id} />;
        })}
        {upRows.map((i) => {
          const y = bottom + i * (rowH + rowGap);
          const w = 150 - i * 13;
          return <BraceletRow key={`d${i}`} y={y} w={w} h={rowH} theme={theme} id={id} />;
        })}
        {/* clasp hint */}
        <rect x={CX - 26} y={bottom + 2 * (rowH + rowGap) - 1} width={52} height={rowH + 2} rx={4} fill="none" stroke={theme.accent} strokeWidth={1} opacity={0.5} />
      </g>

      {/* ── case body ── */}
      <polygon points={octagon(R + 6)} fill={theme.caseMetalDark} opacity={0.6} />
      <polygon points={octagon(R)} fill={`url(#${id}-bezel)`} stroke={theme.caseMetalDark} strokeWidth={1.5} />
      {/* bezel inner edge */}
      <polygon points={octagon(R - 18)} fill={theme.dialDark} stroke={theme.accent} strokeWidth={0.8} opacity={0.95} />

      {/* crown + guards */}
      <rect x={CX + R - 14} y={CY - 14} width={20} height={28} rx={4} fill={`url(#${id}-bezel)`} stroke={theme.caseMetalDark} strokeWidth={0.6} />
      <circle cx={CX + R + 4} cy={CY} r={5} fill={`url(#${id}-screw)`} />

      {/* exposed bezel screws */}
      {screws.map((s, i) => (
        <g key={i}>
          <circle cx={s.x} cy={s.y} r={7} fill={`url(#${id}-screw)`} stroke={theme.caseMetalDark} strokeWidth={0.7} />
          <line x1={s.x - 4} y1={s.y} x2={s.x + 4} y2={s.y} stroke={theme.dialDark} strokeWidth={1.3}
            transform={`rotate(${(i * 45 + 22.5)} ${s.x} ${s.y})`} />
        </g>
      ))}

      {/* ── skeleton dial ── */}
      <circle cx={CX} cy={CY} r={86} fill={`url(#${id}-dial)`} />
      <circle cx={CX} cy={CY} r={86} fill="none" stroke={theme.accent} strokeWidth={1} opacity={0.3} />

      {/* movement gears */}
      <Gear cx={CX} cy={CY - 4} r={52} teeth={32} color={theme.movement} className={animated ? "spin-slow" : undefined} />
      <Gear cx={CX - 44} cy={CY - 26} r={26} teeth={20} color={theme.movement} className={animated ? "spin-rev" : undefined} />
      <Gear cx={CX + 42} cy={CY - 12} r={22} teeth={18} color={theme.accent} className={animated ? "spin-slow" : undefined} />
      <Gear cx={CX + 30} cy={CY + 34} r={18} teeth={14} color={theme.movement} className={animated ? "spin-rev" : undefined} />

      {/* bridges */}
      <g stroke={theme.movement} strokeWidth={3} opacity={0.4} fill="none" strokeLinecap="round">
        <path d={`M ${CX - 70} ${CY - 50} Q ${CX} ${CY - 80} ${CX + 70} ${CY - 50}`} />
        <path d={`M ${CX - 64} ${CY + 10} Q ${CX - 20} ${CY + 60} ${CX + 50} ${CY + 40}`} />
      </g>

      {/* balance wheel opening at 6 o'clock */}
      <g>
        <circle cx={CX} cy={CY + 52} r={24} fill={theme.dialDark} stroke={theme.accent} strokeWidth={1} opacity={0.9} />
        <g className={animated ? "sweep" : undefined} style={{ transformOrigin: `${CX}px ${CY + 52}px`, animation: animated ? "sweep 4s linear infinite" : undefined }}>
          <circle cx={CX} cy={CY + 52} r={19} fill="none" stroke={theme.accentLight} strokeWidth={2.4} opacity={0.85} />
          <line x1={CX - 19} y1={CY + 52} x2={CX + 19} y2={CY + 52} stroke={theme.accent} strokeWidth={2} />
          <line x1={CX} y1={CY + 33} x2={CX} y2={CY + 71} stroke={theme.accent} strokeWidth={1.4} opacity={0.7} />
        </g>
        <circle cx={CX} cy={CY + 52} r={3} fill={theme.accentLight} />
      </g>

      {/* applied hour indices with lume */}
      {indices.map((_, i) => {
        if (i === 6) return null; // balance opening
        const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
        const r1 = 80, r2 = i % 3 === 0 ? 66 : 72;
        return (
          <line key={i}
            x1={CX + Math.cos(a) * r1} y1={CY + Math.sin(a) * r1}
            x2={CX + Math.cos(a) * r2} y2={CY + Math.sin(a) * r2}
            stroke={theme.accentLight} strokeWidth={i % 3 === 0 ? 4 : 2.4} strokeLinecap="round" opacity={0.95} />
        );
      })}

      {/* skeleton hands ~10:10 */}
      <g strokeLinecap="round">
        <line x1={CX} y1={CY} x2={CX - 30} y2={CY - 26} stroke={`url(#${id}-hand)`} strokeWidth={6} />
        <line x1={CX} y1={CY} x2={CX + 40} y2={CY - 30} stroke={`url(#${id}-hand)`} strokeWidth={4.5} />
      </g>
      <circle cx={CX} cy={CY} r={6} fill={theme.accentLight} />
      <circle cx={CX} cy={CY} r={2.6} fill={theme.dialDark} />

      {/* sapphire reflection */}
      <path d={`M ${CX - 64} ${CY - 50} Q ${CX - 10} ${CY - 84} ${CX + 56} ${CY - 60}`}
        stroke="#ffffff" strokeWidth={8} opacity={0.07} fill="none" strokeLinecap="round" />
    </svg>
  );
}
