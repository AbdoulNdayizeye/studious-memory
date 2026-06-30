import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Watch from "@/components/Watch";
import CraftsmanshipTimeline from "@/components/sections/CraftsmanshipTimeline";
import { THEMES, STATS } from "@/lib/content";

export const metadata: Metadata = {
  title: "The House of SOROSHA",
  description: "The story of SOROSHA — a mechanical watchmaker based in Ontario, Canada, devoted to the art of the exhibition movement and the beauty of the build.",
};

const VALUES = [
  { t: "Exhibition Movement", d: "Witness the heartbeat of your watch through a clear exhibition back. Nothing is hidden, because nothing needs to be." },
  { t: "The Beauty of the Build", d: "Every gear, bridge and jewel is set in motion behind intricate cutouts — engineering elevated to art." },
  { t: "Patient by Design", d: "We measure progress in months, not minutes. A SOROSHA is finished only when it is faultless." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-44 pb-24 overflow-hidden bg-ink">
        <div className="absolute inset-0 radial-spot" />
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="container-lux relative grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="eyebrow">The House · Ontario, Canada</span>
            <h1 className="mt-5 display-hero text-bone leading-[0.9]">Born of <span className="gold-text">obsession.</span></h1>
            <p className="mt-7 lead max-w-lg">
              SOROSHA was founded on a single, stubborn belief: that a timepiece should reveal its soul,
              not conceal it. From a quiet atelier in Ontario, we build mechanical watches for people who
              find beauty in the way things work.
            </p>
          </Reveal>
          <Reveal variant="scale" className="flex justify-center">
            <div className="relative w-[min(70vw,420px)] aspect-[3/5]">
              <div className="absolute inset-0 rounded-full blur-3xl opacity-50" style={{ background: "radial-gradient(circle, rgba(182,141,64,0.22), transparent 60%)" }} />
              <Watch theme={THEMES.gold} id="about-hero" animated className="relative w-full h-full float-soft" />
            </div>
          </Reveal>
        </div>
      </header>

      {/* Statement */}
      <section className="py-24 bg-ink-2 border-y border-white/8">
        <div className="container-lux max-w-4xl">
          <Reveal>
            <p className="font-display text-bone leading-[1.05]" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.4rem)" }}>
              &ldquo;We do not make watches to keep time. We make them to make time <span className="gold-text">matter.</span>&rdquo;
            </p>
            <span className="block mt-6 text-sm tracking-[0.2em] uppercase text-smoke">— The Founders, SOROSHA</span>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-ink">
        <div className="container-lux grid md:grid-cols-3 gap-px bg-white/8 border border-white/8">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={i * 90} className="bg-ink">
              <div className="p-9 h-full card-feature">
                <span className="font-display text-5xl text-white/8 leading-none">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-2xl tracking-wide text-bone">{v.t}</h3>
                <p className="mt-3 text-sm text-fog font-light leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CraftsmanshipTimeline />

      {/* Stats */}
      <section className="py-20 bg-ink-2 border-t border-white/8">
        <div className="container-lux grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 border border-white/8">
          {STATS.map((s) => (
            <div key={s.label} className="bg-ink-2 p-8 text-center">
              <span className="stat-value gold-text">{s.value}</span>
              <span className="block mt-2 text-[0.66rem] tracking-[0.2em] uppercase text-steel">{s.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
