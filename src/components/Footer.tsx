import Link from "next/link";
import { Emblem } from "./Brand";
import { IconArrow } from "./Icons";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Collections",
    links: [
      { label: "Silver Collection", href: "/collections" },
      { label: "Black Collection", href: "/collections" },
      { label: "Rose Gold Collection", href: "/collections" },
      { label: "Titanium Collection", href: "/collections" },
      { label: "Limited Editions", href: "/collections" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Warranty", href: "/contact" },
      { label: "Shipping", href: "/contact" },
      { label: "Returns", href: "/contact" },
      { label: "Servicing", href: "/contact" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "The House",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Craftsmanship", href: "/about" },
      { label: "The Journal", href: "/journal" },
      { label: "Boutiques", href: "/contact" },
      { label: "Careers", href: "/contact" },
    ],
  },
];

const SOCIALS = ["Instagram", "Pinterest", "YouTube", "LinkedIn"];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/8 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
      <div className="container-lux relative">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Emblem id="footer-emblem" className="w-10 h-10" />
              <span className="font-display text-3xl tracking-[0.3em] text-bone pl-1">SOROSHA</span>
            </div>
            <p className="mt-6 max-w-sm text-fog font-light leading-relaxed text-sm">
              Mechanical timepieces conceived and assembled in Ontario, Canada — built for those who
              measure life not in hours, but in moments worth keeping.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <a key={s} href="#" className="text-[0.7rem] tracking-[0.18em] uppercase text-steel hover:text-gold border border-white/10 hover:border-gold/40 px-4 py-2 transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="eyebrow mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-fog/80 hover:text-bone text-sm transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="eyebrow mb-5">The Circle</h4>
            <p className="text-fog/80 text-sm mb-4">Private releases, before anyone else.</p>
            <form className="flex border border-white/12 focus-within:border-gold/50 transition-colors">
              <input type="email" placeholder="Email" aria-label="Email" className="bg-transparent flex-1 min-w-0 px-3 py-3 text-sm text-bone outline-none placeholder:text-smoke" />
              <button type="submit" aria-label="Subscribe" className="px-3 text-gold hover:bg-gold hover:text-ink transition-colors"><IconArrow className="w-4 h-4" /></button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-smoke text-xs tracking-wide">© {new Date().getFullYear()} SOROSHA Watch Company · Ontario, Canada. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-smoke">
            <Link href="/contact" className="hover:text-gold transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
