import type { Metadata } from "next";
import Link from "next/link";
import { Emblem } from "@/components/Brand";
import { IconArrow, IconHeart } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Your saved SOROSHA timepieces.",
};

export default function WishlistPage() {
  return (
    <section className="relative min-h-screen grid place-items-center pt-40 pb-24 bg-ink overflow-hidden">
      <div className="absolute inset-0 radial-spot" />
      <div className="container-lux relative text-center max-w-lg">
        <Emblem id="wish-emblem" className="w-16 h-16 mx-auto mb-8 float-y" />
        <span className="eyebrow">Your Wishlist</span>
        <h1 className="mt-4 display-xl text-bone flex items-center justify-center gap-4">
          Nothing saved <IconHeart className="w-9 h-9 text-gold" /> yet
        </h1>
        <p className="mt-5 lead">
          Every great collection begins with a single desire. Browse the atelier and save the
          pieces that move you — they will be waiting here.
        </p>
        <Link href="/collections" className="btn btn-gold mt-9">Explore the Collection <IconArrow className="w-4 h-4" /></Link>
      </div>
    </section>
  );
}
