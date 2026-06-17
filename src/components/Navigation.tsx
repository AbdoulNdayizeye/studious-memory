"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Lang } from "@/lib/translations";
import { getDict } from "@/lib/translations";

type Props = { lang: Lang; d: ReturnType<typeof getDict> };

export default function Navigation({ lang, d }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { href: `/${lang}`, label: d.nav.home },
    { href: `/${lang}/menu`, label: d.nav.menu },
    { href: `/${lang}/about`, label: d.nav.story },
    { href: `/${lang}/reservations`, label: d.nav.reservations },
    { href: `/${lang}/contact`, label: d.nav.contact },
  ];

  // Build the alternate language URL
  const otherLang = lang === "en" ? "fr" : "en";
  const otherPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  const isActive = (href: string) => pathname === href || (href !== `/${lang}` && pathname.startsWith(href));

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled || menuOpen
          ? "bg-white shadow-sm border-b border-[rgba(139,26,26,0.12)] py-3"
          : "bg-white/90 backdrop-blur-sm py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex flex-col leading-none group">
            <span className="text-[#8B1A1A] font-bold tracking-wide group-hover:text-[#A52828] transition-colors text-xl md:text-2xl" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Cabotto&apos;s
            </span>
            <span className="text-[#9E8068] text-[9px] tracking-[0.3em] uppercase mt-0.5">Ristorante · Ottawa</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}
                className={`nav-link ${isActive(href) ? "active" : ""}`}>
                {label}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href={otherPath} className="text-[#6B5341] text-xs tracking-widest uppercase border border-[rgba(139,26,26,0.3)] px-3 py-1.5 hover:border-[#8B1A1A] hover:text-[#8B1A1A] transition-all">
              {d.nav.langLabel}
            </Link>
            <Link href={`/${lang}/reservations`} className="btn-gold text-xs py-2.5 px-5">{d.nav.reserveBtn}</Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="lg:hidden flex flex-col gap-1.5 p-2">
            <span className={`block w-6 h-px bg-[#1C1409] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-4 h-px bg-[#8B1A1A] transition-all duration-300 ${menuOpen ? "opacity-0 w-6" : ""}`} />
            <span className={`block w-6 h-px bg-[#1C1409] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 bg-white ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map(({ href, label }, i) => (
            <Link key={href} href={href}
              className={`text-[#1C1409] text-2xl font-bold transition-all duration-300 hover:text-[#8B1A1A] ${isActive(href) ? "text-[#8B1A1A]" : ""} ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ fontFamily: "var(--font-playfair), serif", transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}>
              {label}
            </Link>
          ))}
          <div className="flex gap-3 mt-2">
            <Link href={otherPath} className="text-[#6B5341] text-xs tracking-widest uppercase border border-[rgba(139,26,26,0.3)] px-3 py-2">
              {d.nav.langFull}
            </Link>
            <Link href={`/${lang}/reservations`} className="btn-gold text-sm">{d.nav.reserveBtn}</Link>
          </div>
        </nav>
      </div>
    </>
  );
}
