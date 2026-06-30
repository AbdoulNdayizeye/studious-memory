"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Watch from "./Watch";
import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import { THEMES, type Product } from "./../lib/content";
import { IconArrow, IconHeart, IconBag, IconRotate, IconZoom, IconStar, IconCheck } from "./Icons";

const TABS = ["Description", "Specifications", "Reviews", "Shipping", "Warranty"] as const;

const SHIPPING = [
  "Complimentary insured worldwide delivery, hand-carried and signature-required.",
  "Every order dispatched within two business days from our Ontario atelier.",
  "Discreet, unbranded packaging for your privacy and security.",
  "30-day return window — if it does not move you, it returns to us, no questions asked.",
];
const WARRANTY = [
  "Five-year international warranty against defects in materials and craftsmanship.",
  "Lifetime servicing available through any authorised SOROSHA atelier.",
  "Genuine sapphire crystal and movement components guaranteed for authenticity.",
  "Each timepiece is individually numbered and registered to its owner.",
];

export default function ProductDetail({ product, related }: { product: Product; related: Product[] }) {
  const theme = THEMES[product.themeKey];
  const [tab, setTab] = useState<(typeof TABS)[number]>("Description");
  const [view, setView] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [wish, setWish] = useState(false);
  const [added, setAdded] = useState(false);
  const [angle, setAngle] = useState(-12);
  const drag = useRef<{ x: number; a: number } | null>(null);

  const VIEWS = ["Front", "Movement", "Profile"];

  const onDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, a: angle };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    setAngle(drag.current.a + (e.clientX - drag.current.x) * 0.6);
  };
  const onUp = () => { drag.current = null; };

  return (
    <>
      <section className="pt-36 lg:pt-40 pb-24 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 radial-spot opacity-60" />
        <div className="container-lux relative">
          {/* breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-smoke mb-10 tracking-wide">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
            <Link href="/collections" className="hover:text-gold transition-colors">Collections</Link><span>/</span>
            <span className="text-fog">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* ── Gallery ── */}
            <div className="lg:sticky lg:top-28 self-start">
              <div
                className="relative aspect-[4/5] bg-gradient-to-b from-ink-3 to-ink rounded-sm overflow-hidden border border-white/8 select-none touch-none"
                style={{ perspective: "1400px" }}
                onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerLeave={onUp}
                data-cursor="hover"
              >
                <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 42%, ${theme.glow}, transparent 70%)` }} />
                <div
                  className="absolute inset-0 grid place-items-center transition-transform duration-200"
                  style={{ transform: `rotateY(${angle}deg) scale(${zoom ? 1.5 : view === 1 ? 1.35 : 1})`, transformStyle: "preserve-3d" }}
                >
                  <Watch theme={theme} id={`pdp-${product.slug}`} animated className="w-[78%] drop-shadow-[0_40px_70px_rgba(0,0,0,0.7)]" />
                </div>

                {/* controls */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <button onClick={() => setAngle((a) => a - 45)} className="w-10 h-10 grid place-items-center glass text-bone/80 hover:text-gold transition-colors" aria-label="Rotate">
                    <IconRotate className="w-4 h-4" />
                  </button>
                  <button onClick={() => setZoom((z) => !z)} className={`w-10 h-10 grid place-items-center glass transition-colors ${zoom ? "text-gold" : "text-bone/80 hover:text-gold"}`} aria-label="Zoom">
                    <IconZoom className="w-4 h-4" />
                  </button>
                </div>
                <span className="absolute top-4 right-4 glass px-3 py-1.5 text-[0.6rem] tracking-[0.2em] uppercase text-fog">Drag to rotate · 360°</span>
              </div>

              {/* thumbnails */}
              <div className="grid grid-cols-3 gap-3 mt-3">
                {VIEWS.map((v, i) => (
                  <button key={v} onClick={() => { setView(i); setAngle(i === 2 ? -32 : -12); }}
                    className={`relative aspect-square bg-ink-3 border transition-colors grid place-items-center overflow-hidden ${i === view ? "border-gold" : "border-white/8 hover:border-white/25"}`}>
                    <Watch theme={theme} id={`thumb-${product.slug}-${i}`} className="w-[80%] opacity-90" />
                    <span className="absolute bottom-1 left-0 right-0 text-center text-[0.55rem] tracking-[0.2em] uppercase text-fog">{v}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* ── Purchase ── */}
            <div>
              <span className="text-[0.66rem] tracking-[0.24em] uppercase text-gold">{product.line} · {product.reference}</span>
              <h1 className="mt-3 display-xl text-bone">{product.name}</h1>
              <div className="flex items-center gap-3 mt-4">
                <span className="flex text-gold">{Array.from({ length: 5 }).map((_, s) => <IconStar key={s} filled className="w-4 h-4" />)}</span>
                <span className="text-sm text-smoke">128 owner reviews</span>
              </div>
              <p className="mt-6 lead">{product.description}</p>

              <div className="flex items-end gap-4 mt-8 pb-8 border-b border-white/10">
                <span className="font-display text-5xl text-bone tracking-wide">${product.price.toLocaleString()}</span>
                <span className="text-sm text-smoke mb-1.5">or 12 × ${Math.round(product.price / 12).toLocaleString()} interest-free</span>
              </div>

              {/* spec quick facts */}
              <ul className="grid grid-cols-2 gap-px bg-white/8 border border-white/8 my-8">
                {product.specs.slice(0, 4).map((s) => (
                  <li key={s.label} className="bg-ink p-4">
                    <span className="block text-[0.6rem] tracking-[0.18em] uppercase text-smoke">{s.label}</span>
                    <span className="block text-sm text-bone mt-1">{s.value}</span>
                  </li>
                ))}
              </ul>

              {/* actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 2200); }} className="btn btn-gold flex-1">
                  {added ? <><IconCheck className="w-4 h-4" /> Added to Bag</> : <><IconBag className="w-4 h-4" /> Add to Bag</>}
                </button>
                <button onClick={() => setWish((w) => !w)} className={`btn btn-outline sm:w-auto ${wish ? "!border-gold !text-gold" : ""}`} aria-pressed={wish}>
                  <IconHeart className="w-4 h-4" /> {wish ? "Saved" : "Wishlist"}
                </button>
              </div>
              <Link href="/contact" className="btn btn-outline w-full mt-3">Book a Private Viewing <IconArrow className="w-4 h-4" /></Link>

              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                {["Free Insured Delivery", "5-Year Warranty", "30-Day Returns"].map((t) => (
                  <div key={t} className="glass py-4 px-2">
                    <IconCheck className="w-4 h-4 text-gold mx-auto mb-2" />
                    <span className="text-[0.62rem] tracking-wide text-fog leading-tight block">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Tabs ── */}
          <div className="mt-20 lg:mt-28">
            <div className="flex gap-8 border-b border-white/10 overflow-x-auto">
              {TABS.map((t) => (
                <button key={t} onClick={() => setTab(t)} className={`tab-btn whitespace-nowrap ${tab === t ? "active" : ""}`}>{t}</button>
              ))}
            </div>

            <div className="py-10 max-w-3xl">
              {tab === "Description" && (
                <div className="space-y-5">
                  {product.story.map((p, i) => <p key={i} className="lead">{p}</p>)}
                  <p className="text-fog font-light leading-relaxed">
                    The fully skeletonised dial offers an unobstructed, panoramic view of the oscillating
                    rotor and escapement — every gear, bridge and jewel laid bare in perpetual motion.
                  </p>
                </div>
              )}
              {tab === "Specifications" && (
                <ul className="grid sm:grid-cols-2 gap-px bg-white/8 border border-white/8">
                  {product.specs.map((s) => (
                    <li key={s.label} className="bg-ink p-5 flex justify-between gap-4">
                      <span className="text-sm text-smoke">{s.label}</span>
                      <span className="text-sm text-bone text-right">{s.value}</span>
                    </li>
                  ))}
                </ul>
              )}
              {tab === "Reviews" && (
                <div className="space-y-6">
                  {[
                    { n: "Marcus L.", q: "Photographs do not do it justice. The movement is hypnotic in person." },
                    { n: "Priya S.", q: "Impeccable finishing. Feels far beyond its price. My everyday piece now." },
                  ].map((r) => (
                    <div key={r.n} className="glass p-6">
                      <span className="flex text-gold mb-3">{Array.from({ length: 5 }).map((_, s) => <IconStar key={s} filled className="w-3.5 h-3.5" />)}</span>
                      <p className="text-bone/90 font-light">&ldquo;{r.q}&rdquo;</p>
                      <span className="block mt-3 text-xs text-smoke tracking-wide">{r.n} · Verified Owner</span>
                    </div>
                  ))}
                </div>
              )}
              {tab === "Shipping" && (
                <ul className="space-y-4">
                  {SHIPPING.map((s) => <li key={s} className="flex gap-3 text-fog font-light"><IconCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />{s}</li>)}
                </ul>
              )}
              {tab === "Warranty" && (
                <ul className="space-y-4">
                  {WARRANTY.map((s) => <li key={s} className="flex gap-3 text-fog font-light"><IconCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />{s}</li>)}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 bg-ink-2 border-t border-white/8">
        <div className="container-lux">
          <Reveal className="mb-12">
            <span className="eyebrow">You May Also Admire</span>
            <h2 className="mt-3 display-lg text-bone">Complete the <span className="gold-text">collection.</span></h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <Reveal key={p.slug} variant="scale" delay={i * 90}><ProductCard product={p} /></Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
