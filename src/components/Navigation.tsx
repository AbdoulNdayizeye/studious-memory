"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-dark/97 border-b border-gold/10 py-3 backdrop-blur-sm"
            : "bg-transparent py-5"
        }`}
        style={{ backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="text-gold font-serif text-xl md:text-2xl font-bold tracking-wide group-hover:text-gold-light transition-colors"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Cabotto&apos;s
            </span>
            <span className="text-cream-muted text-[9px] tracking-[0.3em] uppercase mt-0.5">
              Ristorante · Ottawa
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link ${pathname === href ? "active" : ""}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/reservations" className="btn-gold text-xs py-2.5 px-5">
              Reserve a Table
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col gap-1.5 p-2 z-10"
          >
            <span
              className={`block w-6 h-px bg-cream transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-4 h-px bg-gold transition-all duration-300 ${
                menuOpen ? "opacity-0 w-6" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-cream transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(13,10,6,0.98)" }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className={`text-cream text-2xl font-serif tracking-wide transition-all duration-300 hover:text-gold ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } ${pathname === href ? "text-gold" : ""}`}
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/reservations"
            className="btn-gold mt-4 text-sm"
            style={{
              transitionDelay: menuOpen ? "360ms" : "0ms",
            }}
          >
            Reserve a Table
          </Link>
        </nav>
      </div>
    </>
  );
}
