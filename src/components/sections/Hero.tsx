import Link from "next/link";
import Watch from "../Watch";
import { THEMES } from "@/lib/content";
import { IconArrow } from "../Icons";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink">
      {/* cinematic backdrop */}
      <div className="absolute inset-0 radial-spot" />
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-screen" />
      <div className="absolute inset-0 vignette" />
      {/* drifting light */}
      <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(182,141,64,0.16), transparent 65%)" }} />

      <div className="container-lux relative z-10 grid lg:grid-cols-12 gap-10 items-center pt-28 pb-20">
        {/* Copy */}
        <div className="lg:col-span-6 text-center lg:text-left">
          <div className="overflow-hidden">
            <span className="eyebrow inline-block anim-rise d1">Ontario, Canada · Est. 2019</span>
          </div>
          <h1 className="mt-6 display-hero text-bone">
            <span className="block overflow-hidden"><span className="inline-block anim-rise d2">TIME.</span></span>
            <span className="block overflow-hidden"><span className="inline-block anim-rise d3 gold-text-shimmer">REDEFINED.</span></span>
          </h1>
          <p className="mt-7 lead max-w-md mx-auto lg:mx-0 anim-rise d4">
            Crafted for those who demand excellence. Every SOROSHA is a skeletonised
            mechanical movement, laid bare and built to outlive trends, seasons — and time itself.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start anim-rise d5">
            <Link href="/collections" className="btn btn-gold">Explore Collection <IconArrow className="w-4 h-4" /></Link>
            <Link href="/about" className="btn btn-outline">Discover Craftsmanship</Link>
          </div>
        </div>

        {/* Watch */}
        <div className="lg:col-span-6 flex justify-center anim-rise d3">
          <div className="relative w-[min(78vw,520px)] aspect-square">
            <div className="absolute inset-0 rounded-full blur-2xl opacity-60"
              style={{ background: "radial-gradient(circle, rgba(182,141,64,0.22), transparent 60%)" }} />
            {/* slow orbit ring */}
            <div className="absolute inset-[6%] rounded-full border border-gold/10 spin-slower" />
            <div className="absolute inset-[14%] rounded-full border border-white/5" />
            <Watch theme={THEMES.silver} id="hero-watch" animated className="relative w-full h-full float-soft drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]" />
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-smoke">
        <span className="text-[0.62rem] tracking-[0.3em] uppercase">Scroll</span>
        <span className="block w-px h-12 bg-gradient-to-b from-gold/70 to-transparent" />
      </div>
    </section>
  );
}
