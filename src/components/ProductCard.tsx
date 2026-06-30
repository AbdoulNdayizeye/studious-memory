import Link from "next/link";
import Watch from "./Watch";
import { THEMES, type Product } from "@/lib/content";
import { IconArrow, IconZoom } from "./Icons";

export default function ProductCard({ product }: { product: Product }) {
  const theme = THEMES[product.themeKey];
  return (
    <article className="card-product group flex flex-col">
      <div className="glow" />
      {product.badge && (
        <span className="absolute top-5 left-5 z-10 glass-gold px-3 py-1 text-[0.62rem] tracking-[0.2em] uppercase text-gold-light">
          {product.badge}
        </span>
      )}
      {/* Quick view */}
      <Link
        href={`/collections/${product.slug}`}
        aria-label={`Quick view ${product.name}`}
        className="absolute top-4 right-4 z-10 w-10 h-10 grid place-items-center rounded-full glass text-bone/80 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:text-gold"
      >
        <IconZoom className="w-4 h-4" />
      </Link>

      <div className="relative px-8 pt-12 pb-4" style={{ background: `radial-gradient(circle at 50% 40%, ${theme.glow}, transparent 70%)` }}>
        <Watch theme={theme} id={`card-${product.slug}`} className="watch-float w-full max-w-[260px] mx-auto drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]" />
      </div>

      <div className="px-7 pb-7 pt-3 flex flex-col flex-1 border-t border-white/5">
        <span className="text-[0.66rem] tracking-[0.24em] uppercase text-gold mb-2">{product.line}</span>
        <h3 className="font-display text-3xl tracking-wide text-bone leading-none">{product.name}</h3>
        <p className="mt-3 text-sm text-fog font-light leading-relaxed flex-1">{product.tagline}</p>
        <div className="mt-6 flex items-end justify-between">
          <div>
            <span className="block text-[0.6rem] tracking-[0.2em] uppercase text-smoke">From</span>
            <span className="font-display text-2xl text-bone tracking-wide">${product.price.toLocaleString()}</span>
          </div>
          <Link href={`/collections/${product.slug}`} className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase font-semibold text-gold hover:gap-3 transition-all">
            Learn More <IconArrow className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
