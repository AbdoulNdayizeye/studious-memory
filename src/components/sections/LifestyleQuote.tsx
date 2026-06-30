import Link from "next/link";
import Reveal from "../Reveal";
import Watch from "../Watch";
import { THEMES } from "@/lib/content";
import { IconArrow } from "../Icons";

export default function LifestyleQuote() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden bg-black">
      {/* cinematic field */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(40,33,18,0.9), #050505 70%)" }} />
      <div className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[70vw] max-w-[760px] aspect-square opacity-25 blur-[1px] float-soft">
        <Watch theme={THEMES.rose} id="life-watch" animated className="w-full h-full float-soft" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-screen" />

      <div className="container-lux relative z-10">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">The SOROSHA Life</span>
          <blockquote className="mt-7 font-display text-bone leading-[0.98]" style={{ fontSize: "clamp(2.2rem, 6vw, 4.8rem)" }}>
            Wearing SOROSHA isn&apos;t about telling time.<br />
            It&apos;s about making every second <span className="gold-text">unforgettable.</span>
          </blockquote>
          <p className="mt-8 max-w-lg text-fog font-light leading-relaxed">
            A timepiece is the only luxury you wear every waking hour — the quiet companion to your
            sharpest decisions and your finest moments. Make sure it is worthy of them.
          </p>
          <Link href="/collections" className="btn btn-gold mt-10">Own Yours <IconArrow className="w-4 h-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}
