import Reveal from "../Reveal";
import Watch from "../Watch";
import { THEMES, STATS } from "@/lib/content";

/* Decorative free-floating gear used behind the movement. */
function GearArt({ cx, cy, r, teeth, className }: { cx: number; cy: number; r: number; teeth: number; className?: string }) {
  const inner = r * 0.74;
  const pts: string[] = [];
  const step = (Math.PI * 2) / (teeth * 2);
  for (let i = 0; i < teeth * 2; i++) {
    const rad = i % 2 === 0 ? r : inner;
    pts.push(`${cx + Math.cos(i * step) * rad},${cy + Math.sin(i * step) * rad}`);
  }
  return (
    <g className={className} style={{ transformOrigin: `${cx}px ${cy}px` }}>
      <polygon points={pts.join(" ")} fill="none" stroke="#B68D40" strokeWidth={1.2} opacity={0.5} />
      <circle cx={cx} cy={cy} r={r * 0.4} fill="none" stroke="#B68D40" strokeWidth={1} opacity={0.4} />
    </g>
  );
}

export default function MechanicalBeauty() {
  return (
    <section className="relative py-28 lg:py-40 bg-ink overflow-hidden">
      <div className="absolute inset-0 radial-spot opacity-70" />
      <div className="container-lux relative grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left — movement art */}
        <Reveal variant="scale" className="order-2 lg:order-1">
          <div className="relative aspect-square max-w-[560px] mx-auto">
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" aria-hidden>
              <GearArt cx={120} cy={110} r={90} teeth={28} className="spin-slow" />
              <GearArt cx={300} cy={300} r={70} teeth={22} className="spin-rev" />
              <GearArt cx={320} cy={90} r={46} teeth={16} className="spin-slow" />
            </svg>
            <div className="absolute inset-0 rounded-full blur-3xl opacity-50"
              style={{ background: "radial-gradient(circle, rgba(182,141,64,0.2), transparent 60%)" }} />
            <Watch theme={THEMES.onyx} id="mech-watch" animated className="relative w-full h-full float-soft drop-shadow-[0_40px_70px_rgba(0,0,0,0.7)]" />
          </div>
        </Reveal>

        {/* Right — copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow">Mechanical Beauty</span>
            <h2 className="mt-4 display-xl text-bone">The Heart of <span className="gold-text">Precision.</span></h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 lead">
              Long before it touches a wrist, a SOROSHA calibre is a conversation between a watchmaker
              and a hundred and forty-two tiny souls of brass and steel.
            </p>
            <p className="mt-5 text-fog font-light leading-relaxed">
              We leave nothing hidden. Where others bury their movement beneath a closed dial, we
              suspend it in open air — every gear, every bridge, every beat of the escapement on full
              display. To wear one is to carry a small, perfect machine that asks for nothing but your
              motion, and gives back a lifetime of precision in return.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 grid grid-cols-2 gap-px bg-white/8 border border-white/8">
              {STATS.map((s) => (
                <div key={s.label} className="bg-ink p-6">
                  <span className="stat-value gold-text">{s.value}</span>
                  <span className="block mt-2 text-[0.66rem] tracking-[0.2em] uppercase text-steel">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
