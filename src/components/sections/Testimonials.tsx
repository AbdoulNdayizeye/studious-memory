import Reveal from "../Reveal";
import { REVIEWS } from "@/lib/content";
import { IconStar } from "../Icons";

export default function Testimonials() {
  return (
    <section className="relative py-28 lg:py-36 bg-ink-2 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="container-lux relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow">The Owners</span>
          <h2 className="mt-4 display-xl text-bone">Worn by the <span className="gold-text">discerning.</span></h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={(i % 2) * 110}>
              <figure className="glass h-full p-8 lg:p-10 flex flex-col">
                <div className="flex items-center gap-1 text-gold mb-5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => <IconStar key={s} filled className="w-4 h-4" />)}
                </div>
                <blockquote className="text-bone/90 text-lg lg:text-xl font-light leading-relaxed flex-1">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 pt-6 border-t border-white/8">
                  <span className="w-12 h-12 rounded-full grid place-items-center font-display text-lg text-ink"
                    style={{ background: "linear-gradient(135deg, #D8B570, #B68D40)" }}>{r.initials}</span>
                  <span>
                    <span className="block text-bone font-medium">{r.name}</span>
                    <span className="block text-smoke text-xs tracking-wide">{r.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
