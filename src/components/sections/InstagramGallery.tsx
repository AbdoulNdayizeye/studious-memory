import Reveal from "../Reveal";
import Watch from "../Watch";
import { GALLERY, THEMES } from "@/lib/content";
import { IconHeart } from "../Icons";

export default function InstagramGallery() {
  return (
    <section className="relative py-28 lg:py-36 bg-ink">
      <div className="container-lux">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
          <div>
            <span className="eyebrow">@SOROSHA</span>
            <h2 className="mt-4 display-xl text-bone">Seen in the <span className="gold-text">wild.</span></h2>
          </div>
          <a href="#" className="text-sm tracking-[0.16em] uppercase font-semibold text-bone/80 hover:text-gold transition-colors">Follow the journey</a>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {GALLERY.map((g, i) => (
            <Reveal
              key={i}
              variant="scale"
              delay={(i % 4) * 80}
              className={`group relative overflow-hidden bg-ink-3 ${g.span ? "md:col-span-2 md:row-span-2 row-span-1 col-span-2" : ""}`}
            >
              <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 45%, ${THEMES[g.key].glow}, transparent 70%)` }} />
              <Watch theme={THEMES[g.key]} id={`ig-${i}`} className="absolute inset-0 m-auto w-[70%] h-[70%] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-bone text-xs tracking-wide">{g.caption}</span>
                <IconHeart className="w-4 h-4 text-gold" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
