import Reveal from "../Reveal";
import { STAGES } from "@/lib/content";

export default function CraftsmanshipTimeline() {
  return (
    <section className="relative py-28 lg:py-36 bg-ink overflow-hidden">
      <div className="container-lux relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <span className="eyebrow">From Sketch To Wrist</span>
          <h2 className="mt-4 display-xl text-bone">Eleven months in the <span className="gold-text">making.</span></h2>
          <p className="mt-5 lead">Every SOROSHA passes through six pairs of hands before it ever meets yours.</p>
        </Reveal>

        <div className="relative">
          {/* center spine */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

          <div className="space-y-12 md:space-y-0">
            {STAGES.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <div key={s.no} className="md:grid md:grid-cols-2 md:gap-12 items-center md:min-h-[150px]">
                  {/* card */}
                  <Reveal
                    variant="up"
                    className={`relative ${left ? "md:order-1 md:text-right md:pr-14" : "md:order-2 md:col-start-2 md:pl-14"}`}
                  >
                    <div className="card-feature">
                      <div className={`flex items-center gap-4 mb-3 ${left ? "md:justify-end" : ""}`}>
                        <span className="font-display text-5xl gold-text leading-none">{s.no}</span>
                        <span className="hairline flex-1 max-w-[60px]" />
                      </div>
                      <h3 className="font-display text-2xl tracking-wide text-bone mb-2">{s.title}</h3>
                      <p className="text-sm text-fog font-light leading-relaxed">{s.copy}</p>
                    </div>
                  </Reveal>

                  {/* node */}
                  <div className={`hidden md:flex ${left ? "md:order-2 justify-start" : "md:order-1 justify-end"} relative`}>
                    <span className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold ring-4 ring-ink shadow-[0_0_0_4px_rgba(182,141,64,0.18)]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
