"use client";
import { useState } from "react";
import Link from "next/link";
import Watch from "../Watch";
import { CATEGORIES, THEMES } from "@/lib/content";
import { IconArrow } from "../Icons";

export default function CollectionsCarousel() {
  const [active, setActive] = useState(0);
  const cat = CATEGORIES[active];
  const theme = THEMES[cat.key];
  const go = (d: number) => setActive((a) => (a + d + CATEGORIES.length) % CATEGORIES.length);

  return (
    <section className="relative py-28 lg:py-36 bg-ink-2 overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-700"
        style={{ background: `radial-gradient(ellipse 70% 60% at 50% 45%, ${theme.glow}, transparent 70%)` }} />
      <div className="container-lux relative">
        <div className="flex items-end justify-between mb-12 gap-6">
          <div>
            <span className="eyebrow">Explore By Style</span>
            <h2 className="mt-4 display-xl text-bone">The <span className="gold-text">Collections.</span></h2>
          </div>
          <div className="hidden sm:flex gap-3">
            <button onClick={() => go(-1)} aria-label="Previous" className="w-12 h-12 grid place-items-center border border-white/15 text-bone hover:border-gold hover:text-gold transition-colors">
              <IconArrow className="w-5 h-5 rotate-180" />
            </button>
            <button onClick={() => go(1)} aria-label="Next" className="w-12 h-12 grid place-items-center border border-white/15 text-bone hover:border-gold hover:text-gold transition-colors">
              <IconArrow className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[460px]">
          {/* Stage */}
          <div className="relative aspect-square max-w-[480px] mx-auto w-full">
            {CATEGORIES.map((c, i) => (
              <div key={c.line}
                className={`absolute inset-0 transition-all duration-700 ${i === active ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}>
                <Watch theme={THEMES[c.key]} id={`carousel-${c.key}`} animated={i === active} className="w-full h-full float-soft drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]" />
              </div>
            ))}
          </div>

          {/* Detail */}
          <div key={active} className="anim-rise">
            <span className="font-display text-[6rem] leading-none text-white/5">{String(active + 1).padStart(2, "0")}</span>
            <span className="eyebrow block -mt-4">{cat.tag} · {cat.line}</span>
            <h3 className="mt-3 display-lg text-bone">{cat.name}</h3>
            <p className="mt-5 lead max-w-md">{cat.blurb}</p>
            <div className="mt-7 flex items-center gap-6">
              <span className="font-display text-3xl text-bone tracking-wide">From ${cat.from.toLocaleString()}</span>
              <Link href="/collections" className="inline-flex items-center gap-2 text-sm tracking-[0.16em] uppercase font-semibold text-gold hover:gap-3 transition-all">
                Discover <IconArrow className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/8 border border-white/8">
          {CATEGORIES.map((c, i) => (
            <button key={c.line} onClick={() => setActive(i)}
              className={`relative p-5 text-left transition-colors ${i === active ? "bg-ink" : "bg-ink-2 hover:bg-ink/60"}`}>
              <span className={`block font-display text-xl tracking-wide ${i === active ? "text-gold" : "text-bone/70"}`}>{c.name}</span>
              <span className="block text-[0.62rem] tracking-[0.18em] uppercase text-smoke mt-1">{c.tag}</span>
              {i === active && <span className="absolute top-0 left-0 h-0.5 w-full bg-gold" />}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
