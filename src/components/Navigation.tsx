"use client";
import Link from "next/link";
import Image from "next/image";
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

  const otherLang = lang === "en" ? "fr" : "en";
  const otherPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  const isActive = (href: string) => pathname === href || (href !== `/${lang}` && pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          scrolled || menuOpen ? "shadow-xl shadow-[rgba(0,0,0,0.4)]" : ""
        }`}
        style={{ background: "#6B1010" }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between py-1">
          {/* Logo — JPEG background matches nav so it blends flush */}
          <Link href={`/${lang}`} className="flex-shrink-0">
            <Image
              src="/images/cabottos-logo.jpeg"
              alt="Cabotto's Fine Italian Cuisine"
              width={210}
              height={63}
              className="h-14 w-auto object-contain"
              priority
            />
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

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={otherPath}
              className="text-[#F2E8D9] text-xs tracking-widest uppercase border border-[rgba(242,232,217,0.35)] px-3 py-1.5 hover:border-[#F2E8D9] hover:text-white transition-all"
            >
              {d.nav.langLabel}
            </Link>
            <Link
              href={`/${lang}/reservations`}
              className="text-[#6B1010] bg-[#FAF6EF] hover:bg-[#E8D9C0] text-xs py-2.5 px-5 font-semibold tracking-widest uppercase transition-colors duration-200"
            >
              {d.nav.reserveBtn}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="lg:hidden flex flex-col gap-1.5 p-2">
            <span className={`block w-6 h-px bg-[#FAF6EF] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-4 h-px bg-[#F2E8D9] transition-all duration-300 ${menuOpen ? "opacity-0 w-6" : ""}`} />
            <span className={`block w-6 h-px bg-[#FAF6EF] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "#6B1010" }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map(({ href, label }, i) => (
            <Link key={href} href={href}
              className={`text-2xl font-bold transition-all duration-300 hover:text-white ${isActive(href) ? "text-white" : "text-[#F2E8D9]/80"} ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ fontFamily: "var(--font-playfair), serif", transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}>
              {label}
            </Link>
          ))}
          <div className="flex gap-3 mt-2">
            <Link href={otherPath} className="text-[#F2E8D9] text-xs tracking-widest uppercase border border-[rgba(242,232,217,0.4)] px-3 py-2">
              {d.nav.langFull}
            </Link>
            <Link href={`/${lang}/reservations`} className="text-[#6B1010] bg-[#FAF6EF] text-sm py-2 px-5 font-semibold tracking-widest uppercase">
              {d.nav.reserveBtn}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
