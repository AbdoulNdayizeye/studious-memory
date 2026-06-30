/* Minimal, elegant line icons drawn on a 24×24 grid.
   Stroke inherits currentColor so the gold theme flows through. */
type P = { className?: string };
const base = {
  viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  xmlns: "http://www.w3.org/2000/svg",
};

export const IconMovement = (p: P) => (
  <svg {...base} className={p.className}><circle cx="12" cy="12" r="3.2" /><circle cx="12" cy="12" r="8.5" /><path d="M12 3.5v2.3M12 18.2v2.3M3.5 12h2.3M18.2 12h2.3M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18" /></svg>
);
export const IconSteel = (p: P) => (
  <svg {...base} className={p.className}><path d="M12 2.5 4 6.5v6c0 5 3.4 7.6 8 9 4.6-1.4 8-4 8-9v-6L12 2.5Z" /><path d="m8.6 12 2.4 2.4 4.4-4.8" /></svg>
);
export const IconSapphire = (p: P) => (
  <svg {...base} className={p.className}><path d="M6 3h12l3 5-9 13L3 8l3-5Z" /><path d="M3 8h18M9 3 7.5 8 12 21 16.5 8 15 3" /></svg>
);
export const IconWater = (p: P) => (
  <svg {...base} className={p.className}><path d="M12 2.7c4 4.6 6.5 7.8 6.5 11.1A6.5 6.5 0 0 1 5.5 13.8C5.5 10.5 8 7.3 12 2.7Z" /><path d="M9 14.5a3 3 0 0 0 3 3" /></svg>
);
export const IconSkeleton = (p: P) => (
  <svg {...base} className={p.className}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2.4" /><path d="M12 5.2v3M12 15.8v3M5.2 12h3M15.8 12h3" /><circle cx="12" cy="12" r="5.4" strokeDasharray="2 2.6" /></svg>
);
export const IconBracelet = (p: P) => (
  <svg {...base} className={p.className}><rect x="8.5" y="8.5" width="7" height="7" rx="1.6" /><path d="M10 8.5V5.5h4v3M10 15.5v3h4v-3M8.5 10H5.5v4h3M15.5 10h3v4h-3" /></svg>
);

export const ICONS: Record<string, (p: P) => React.ReactElement> = {
  movement: IconMovement, steel: IconSteel, sapphire: IconSapphire,
  water: IconWater, skeleton: IconSkeleton, bracelet: IconBracelet,
};

/* UI icons */
export const IconArrow = (p: P) => (
  <svg {...base} className={p.className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const IconPlus = (p: P) => (
  <svg {...base} className={p.className}><path d="M12 5v14M5 12h14" /></svg>
);
export const IconStar = (p: P & { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill={p.filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.2} strokeLinejoin="round" className={p.className} xmlns="http://www.w3.org/2000/svg"><path d="m12 3 2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.9 6.7 19.5l1.2-6L3.4 9.3l6-.7L12 3Z" /></svg>
);
export const IconHeart = (p: P) => (
  <svg {...base} className={p.className}><path d="M12 20s-7-4.4-9.2-8.3C1.2 8.6 2.7 5.3 6 5.3c2 0 3.2 1.2 4 2.4.8-1.2 2-2.4 4-2.4 3.3 0 4.8 3.3 3.2 6.4C19 15.6 12 20 12 20Z" /></svg>
);
export const IconBag = (p: P) => (
  <svg {...base} className={p.className}><path d="M6.5 8h11l1 12h-13l1-12Z" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" /></svg>
);
export const IconSearch = (p: P) => (
  <svg {...base} className={p.className}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>
);
export const IconMenu = (p: P) => (
  <svg {...base} className={p.className}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const IconClose = (p: P) => (
  <svg {...base} className={p.className}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const IconCheck = (p: P) => (
  <svg {...base} className={p.className}><path d="m5 12 4.5 4.5L19 7" /></svg>
);
export const IconRotate = (p: P) => (
  <svg {...base} className={p.className}><path d="M4 12a8 8 0 1 1 2.3 5.6" /><path d="M4 20v-4h4" /></svg>
);
export const IconZoom = (p: P) => (
  <svg {...base} className={p.className}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4M11 8.5v5M8.5 11h5" /></svg>
);
