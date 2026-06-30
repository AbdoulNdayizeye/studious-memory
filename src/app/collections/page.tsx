import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES, STATS } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Collections",
  description: "Explore the SOROSHA collections — Silver, Black, Rose Gold and Titanium skeleton automatic timepieces, each a study in mechanical excellence.",
};

export default function CollectionsPage() {
  return (
    <>
      {/* Header */}
      <header className="relative pt-44 pb-20 overflow-hidden bg-ink">
        <div className="absolute inset-0 radial-spot" />
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="container-lux relative text-center">
          <Reveal>
            <span className="eyebrow">Explore Our Stunning Collection of Timepieces</span>
            <h1 className="mt-5 display-hero text-bone">The <span className="gold-text">Collections.</span></h1>
            <p className="mt-6 lead max-w-2xl mx-auto">
              Four expressions of a single obsession. Every SOROSHA shares the same beating
              mechanical heart — only the metal, and the mood, are yours to choose.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Grid */}
      <section id="new" className="py-12 lg:py-20 bg-ink">
        <div className="container-lux">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} variant="scale" delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Categories strip */}
      <section className="py-20 bg-ink-2 border-y border-white/8">
        <div className="container-lux grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 border border-white/8">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.line} delay={i * 80} className="bg-ink-2">
              <div className="p-8 h-full">
                <span className="eyebrow">{c.tag}</span>
                <h3 className="mt-3 font-display text-3xl tracking-wide text-bone">{c.name}</h3>
                <p className="mt-3 text-sm text-fog font-light leading-relaxed">{c.blurb}</p>
                <span className="mt-5 block font-display text-xl text-gold">From ${c.from.toLocaleString()}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-ink">
        <div className="container-lux grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 border border-white/8">
          {STATS.map((s) => (
            <div key={s.label} className="bg-ink p-8 text-center">
              <span className="stat-value gold-text">{s.value}</span>
              <span className="block mt-2 text-[0.66rem] tracking-[0.2em] uppercase text-steel">{s.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
