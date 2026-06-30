/* SOROSHA emblem — the "SR" monogram from the caseback, set in an
   octagonal bezel that echoes the watch case. Pure SVG, scales anywhere. */
export function Emblem({ className, id = "emblem" }: { className?: string; id?: string }) {
  const oct = Array.from({ length: 8 }, (_, i) => {
    const a = ((i * 45 + 22.5) * Math.PI) / 180;
    return `${50 + Math.cos(a) * 46},${50 + Math.sin(a) * 46}`;
  }).join(" ");
  const octInner = Array.from({ length: 8 }, (_, i) => {
    const a = ((i * 45 + 22.5) * Math.PI) / 180;
    return `${50 + Math.cos(a) * 39},${50 + Math.sin(a) * 39}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="SOROSHA emblem" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D8B570" />
          <stop offset="55%" stopColor="#B68D40" />
          <stop offset="100%" stopColor="#8A6A2E" />
        </linearGradient>
      </defs>
      <polygon points={oct} fill="none" stroke={`url(#${id}-g)`} strokeWidth={2} />
      <polygon points={octInner} fill="none" stroke={`url(#${id}-g)`} strokeWidth={0.8} opacity={0.55} />
      {/* eight corner screws */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = ((i * 45 + 22.5) * Math.PI) / 180;
        return <circle key={i} cx={50 + Math.cos(a) * 42.5} cy={50 + Math.sin(a) * 42.5} r={1.5} fill={`url(#${id}-g)`} />;
      })}
      <text x="50" y="51" textAnchor="middle" dominantBaseline="central"
        fontFamily="var(--font-bebas), 'Bebas Neue', sans-serif" fontSize="34"
        fill={`url(#${id}-g)`} letterSpacing="1">SR</text>
    </svg>
  );
}

/* Full wordmark lockup */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`font-display leading-none ${className ?? ""}`} style={{ letterSpacing: "0.28em" }}>
      SOROSHA
    </span>
  );
}
