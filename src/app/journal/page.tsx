import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Watch from "@/components/Watch";
import { THEMES } from "@/lib/content";
import { IconArrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "The Journal",
  description: "Stories of craft, mechanics and design from the SOROSHA atelier.",
};

const POSTS: { key: keyof typeof THEMES; tag: string; title: string; excerpt: string; read: string; feature?: boolean }[] = [
  { key: "onyx", tag: "Craft", title: "Anatomy of an Exhibition Caseback", excerpt: "Why we refuse to hide the movement — and what you are really looking at when you turn a SOROSHA over.", read: "6 min", feature: true },
  { key: "rose", tag: "Design", title: "The Case for Rose Gold", excerpt: "A metal that holds light long after the sun has gone. The story of the Aurelia.", read: "4 min" },
  { key: "gold", tag: "Craft", title: "Casting Light", excerpt: "Three days by hand: how a SOROSHA gold case earns its glow.", read: "5 min" },
  { key: "silver", tag: "Heritage", title: "On Patience", excerpt: "Eleven months, six pairs of hands, one timepiece. A meditation on slow making.", read: "7 min" },
];

export default function JournalPage() {
  const [feature, ...rest] = POSTS;
  return (
    <>
      <header className="relative pt-44 pb-16 overflow-hidden bg-ink">
        <div className="absolute inset-0 radial-spot" />
        <div className="container-lux relative text-center">
          <Reveal>
            <span className="eyebrow">The Journal</span>
            <h1 className="mt-5 display-hero text-bone">Notes on <span className="gold-text">time.</span></h1>
            <p className="mt-6 lead max-w-xl mx-auto">Stories of craft, mechanics and design from inside the SOROSHA atelier.</p>
          </Reveal>
        </div>
      </header>

      <section className="pb-24 bg-ink">
        <div className="container-lux">
          {/* Feature */}
          <Reveal variant="scale">
            <article className="group grid lg:grid-cols-2 gap-10 items-center card-product p-8 lg:p-12 mb-8">
              <div className="relative aspect-square" style={{ background: `radial-gradient(circle at 50% 45%, ${THEMES[feature.key].glow}, transparent 70%)` }}>
                <Watch theme={THEMES[feature.key]} id="journal-feature" animated className="w-full h-full float-soft" />
              </div>
              <div>
                <span className="eyebrow">{feature.tag} · {feature.read} read</span>
                <h2 className="mt-4 display-lg text-bone group-hover:text-gold transition-colors">{feature.title}</h2>
                <p className="mt-4 lead">{feature.excerpt}</p>
                <span className="inline-flex items-center gap-2 mt-7 text-gold text-sm tracking-[0.16em] uppercase font-semibold">Read the story <IconArrow className="w-4 h-4" /></span>
              </div>
            </article>
          </Reveal>

          {/* Grid */}
          <div className="grid sm:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <article className="card-product group h-full flex flex-col">
                  <div className="relative aspect-[4/3]" style={{ background: `radial-gradient(circle at 50% 45%, ${THEMES[p.key].glow}, transparent 70%)` }}>
                    <Watch theme={THEMES[p.key]} id={`journal-${i}`} className="absolute inset-0 m-auto w-[70%] h-[70%]" />
                  </div>
                  <div className="p-6 flex flex-col flex-1 border-t border-white/5">
                    <span className="eyebrow">{p.tag} · {p.read}</span>
                    <h3 className="mt-3 font-display text-2xl tracking-wide text-bone group-hover:text-gold transition-colors">{p.title}</h3>
                    <p className="mt-2 text-sm text-fog font-light leading-relaxed flex-1">{p.excerpt}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/collections" className="btn btn-outline">Explore the Collection <IconArrow className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
