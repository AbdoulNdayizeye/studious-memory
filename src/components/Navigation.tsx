"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Emblem } from "./Brand";
import { PRODUCTS, CATEGORIES } from "@/lib/content";
import { IconSearch, IconHeart, IconBag, IconMenu, IconClose, IconArrow } from "./Icons";

const LINKS = [
  { href: "/collections", label: "Collections", mega: true },
  { href: "/collections#new", label: "New Arrivals" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  // Close menus when the route changes (React-recommended derive-on-change pattern).
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setOpen(false);
    setMega(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
        solid ? "bg-ink/92 backdrop-blur-xl border-b border-white/8 py-3.5" : "bg-transparent py-6"
      }`}
      onMouseLeave={() => setMega(false)}
    >
      <nav className="container-lux relative z-50 flex items-center justify-between gap-6">
        {/* Left links (desktop) */}
        <ul className="hidden lg:flex items-center gap-9 flex-1">
          {LINKS.map((l) => (
            <li
              key={l.href}
              onMouseEnter={() => setMega(!!l.mega)}
            >
              <Link
                href={l.href}
                className={`nav-link ${pathname === l.href ? "active" : ""}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Center brand */}
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="SOROSHA home">
          <Emblem id="nav-emblem" className="w-8 h-8" />
          <span className="font-display text-2xl tracking-[0.32em] text-bone pl-1 hidden sm:block">SOROSHA</span>
        </Link>

        {/* Right utilities */}
        <div className="flex items-center gap-5 lg:gap-6 flex-1 justify-end">
          <button aria-label="Search" className="text-bone/80 hover:text-gold transition-colors hidden sm:block"><IconSearch className="w-5 h-5" /></button>
          <Link href="/wishlist" aria-label="Wishlist" className="text-bone/80 hover:text-gold transition-colors hidden sm:block"><IconHeart className="w-5 h-5" /></Link>
          <button aria-label="Cart" className="relative text-bone/80 hover:text-gold transition-colors">
            <IconBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-gold text-ink text-[0.6rem] font-bold grid place-items-center">0</span>
          </button>
          <button aria-label="Menu" className="lg:hidden text-bone" onClick={() => setOpen((v) => !v)}>
            {open ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* ── Mega menu (desktop) ── */}
      <div
        className={`hidden lg:block absolute inset-x-0 top-full origin-top transition-all duration-400 ${
          mega ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="bg-ink-2/97 backdrop-blur-xl border-y border-white/8">
          <div className="container-lux grid grid-cols-12 gap-10 py-12">
            <div className="col-span-3">
              <span className="eyebrow">The Collections</span>
              <p className="mt-4 text-fog text-sm leading-relaxed font-light">
                Four expressions of a single obsession — mechanical beauty, worn openly.
              </p>
              <Link href="/collections" className="inline-flex items-center gap-2 mt-6 text-gold text-xs tracking-[0.18em] uppercase font-semibold">
                View all <IconArrow className="w-4 h-4" />
              </Link>
            </div>
            <ul className="col-span-5 grid grid-cols-2 gap-x-8 gap-y-5">
              {CATEGORIES.map((c) => (
                <li key={c.line}>
                  <Link href="/collections" className="group block">
                    <span className="block text-bone group-hover:text-gold transition-colors font-display text-xl tracking-wide">{c.name}</span>
                    <span className="block text-smoke text-xs mt-0.5">From ${c.from.toLocaleString()}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="col-span-4 space-y-3 border-l border-white/8 pl-10">
              <span className="eyebrow">Featured Pieces</span>
              {PRODUCTS.slice(0, 3).map((p) => (
                <li key={p.slug}>
                  <Link href={`/collections/${p.slug}`} className="flex items-center justify-between group py-1">
                    <span className="text-bone/85 group-hover:text-gold transition-colors text-sm">{p.name}</span>
                    <span className="text-smoke text-xs">${p.price.toLocaleString()}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </header>

    {/* ── Mobile drawer (kept outside <header> so its backdrop-blur doesn't
        trap this fixed overlay's containing block) ── */}
    <div
      className={`lg:hidden fixed inset-0 z-[95] bg-ink transition-all duration-500 ${
        open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <div className="h-full overflow-y-auto pt-28 pb-12 px-7 flex flex-col">
        <ul className="space-y-1">
          {LINKS.map((l, i) => (
            <li key={l.href} className="border-b border-white/8">
              <Link href={l.href} className="flex items-center justify-between py-5 group" style={{ transitionDelay: `${i * 40}ms` }}>
                <span className="font-display text-3xl tracking-wide text-bone group-hover:text-gold transition-colors">{l.label}</span>
                <IconArrow className="w-5 h-5 text-smoke group-hover:text-gold transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-10 flex items-center gap-7 text-bone/80">
          <button className="flex items-center gap-2 text-xs tracking-widest uppercase"><IconSearch className="w-4 h-4" /> Search</button>
          <Link href="/wishlist" className="flex items-center gap-2 text-xs tracking-widest uppercase"><IconHeart className="w-4 h-4" /> Wishlist</Link>
        </div>
      </div>
    </div>
    </>
  );
}
