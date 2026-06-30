import Link from "next/link";
import { Emblem } from "@/components/Brand";
import { IconArrow } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="relative min-h-screen grid place-items-center pt-40 pb-24 bg-ink overflow-hidden">
      <div className="absolute inset-0 radial-spot" />
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="container-lux relative text-center">
        <Emblem id="nf-emblem" className="w-16 h-16 mx-auto mb-8 spin-slower" />
        <span className="font-display text-bone leading-none" style={{ fontSize: "clamp(5rem, 18vw, 14rem)" }}>4<span className="gold-text">0</span>4</span>
        <h1 className="display-lg text-bone mt-2">This moment has slipped away.</h1>
        <p className="mt-4 lead max-w-md mx-auto">The page you seek is no longer here — but time moves forward. Let us guide you back.</p>
        <Link href="/" className="btn btn-gold mt-9">Return Home <IconArrow className="w-4 h-4" /></Link>
      </div>
    </section>
  );
}
