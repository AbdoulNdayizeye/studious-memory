const WORDS = ["Mechanical Excellence", "Skeleton Dials", "Automatic Movement", "Swiss-Inspired", "316L Steel", "Sapphire Crystal", "Hand-Finished", "Timeless"];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <section className="marquee-track relative py-7 border-y border-white/8 bg-ink-2 overflow-hidden select-none" aria-hidden>
      <div className="marquee items-center gap-10">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            <span className="font-display text-2xl md:text-3xl tracking-[0.14em] text-bone/70 whitespace-nowrap">{w}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
}
