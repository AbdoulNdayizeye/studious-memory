import Link from "next/link";
import Reveal from "../Reveal";
import ProductCard from "../ProductCard";
import { PRODUCTS } from "@/lib/content";
import { IconArrow } from "../Icons";

export default function FeaturedCollections() {
  return (
    <section id="collection" className="relative py-28 lg:py-36 bg-ink">
      <div className="container-lux">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <Reveal>
            <span className="eyebrow">The Featured Four</span>
            <h2 className="mt-4 display-xl text-bone max-w-xl">Choose your <span className="gold-text">complication.</span></h2>
          </Reveal>
          <Reveal delay={120} className="md:pb-2">
            <Link href="/collections" className="inline-flex items-center gap-2 text-sm tracking-[0.16em] uppercase font-semibold text-bone/80 hover:text-gold transition-colors">
              View all collections <IconArrow className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} variant="scale" delay={i * 110}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
