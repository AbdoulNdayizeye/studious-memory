import Reveal from "../Reveal";
import { PILLARS } from "@/lib/content";
import { ICONS } from "../Icons";

export default function WhySorosha() {
  return (
    <section className="relative py-28 lg:py-36 bg-ink-2 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
      <div className="container-lux relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow">Why SOROSHA</span>
          <h2 className="mt-4 display-xl text-bone">Engineered without <span className="gold-text">compromise.</span></h2>
          <p className="mt-5 lead">
            Six promises, sealed into every timepiece. Not features to advertise — convictions to live by.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 border border-white/8">
          {PILLARS.map((p, i) => {
            const Icon = ICONS[p.icon];
            return (
              <Reveal key={p.title} delay={(i % 3) * 90} className="bg-ink-2">
                <div className="card-feature h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="feature-icon"><Icon className="w-9 h-9" /></span>
                    <span className="font-display text-5xl text-white/5 leading-none ml-auto">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-2xl tracking-wide text-bone mb-3">{p.title}</h3>
                  <p className="text-sm text-fog font-light leading-relaxed">{p.copy}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
