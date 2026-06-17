import Link from "next/link";
import Image from "next/image";
import { getDict } from "@/lib/translations";

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = getDict(lang);

  const timeline = [
    { year: d.about.t1y, event: d.about.t1e },
    { year: d.about.t2y, event: d.about.t2e },
    { year: d.about.t3y, event: d.about.t3e },
    { year: d.about.t4y, event: d.about.t4e },
    { year: d.about.t5y, event: d.about.t5e },
    { year: d.about.t6y, event: d.about.t6e },
  ];

  const values = [
    { icon: "🌿", title: d.about.v1Title, body: d.about.v1Body },
    { icon: "👨‍👩‍👧", title: d.about.v2Title, body: d.about.v2Body },
    { icon: "🏛️", title: d.about.v3Title, body: d.about.v3Body },
    { icon: "🤝", title: d.about.v4Title, body: d.about.v4Body },
  ];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 px-5 md:px-8 text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1800&q=85"
          alt="Italian restaurant ambiance"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "rgba(26,19,9,0.75)" }} />
        <div className="relative">
          <p className="section-label mb-3" style={{ color: "#C9A84C" }}>{d.about.heroLabel}</p>
          <h1
            className="section-title mb-5"
            style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2.5rem,6vw,4rem)", color: "#FAF6EF" }}
          >
            {d.about.heroTitle}
          </h1>
          <div className="divider-gold-sm mb-6" />
          <p className="text-[#FAF6EF]/80 max-w-2xl mx-auto text-base leading-relaxed">
            {d.about.heroTagline}
          </p>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────── */}
      <section className="py-24 px-5 md:px-8" style={{ background: "#FAF6EF" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">{d.about.storyLabel}</p>
            <h2
              className="section-title mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {d.about.storyTitle1}<br />{d.about.storyTitle2}
            </h2>
            <div className="divider-gold-sm !mx-0 mb-7" />
            <div className="space-y-5 text-[#6B5341] leading-relaxed text-sm">
              <p>{d.about.storyP1}</p>
              <p>{d.about.storyP2}</p>
              <p>{d.about.storyP3}</p>
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden border border-[rgba(201,168,76,0.2)]">
              <Image
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=900&q=85"
                alt="Italian kitchen craft"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,19,9,0.75) 0%, transparent 55%)" }} />
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <div className="divider-gold-sm mb-4" />
                <p className="text-[#FAF6EF] text-base italic" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  {d.about.quoteText}
                </p>
                <p className="text-[#C9A84C] text-xs tracking-widest mt-2 uppercase">{d.about.quoteSource}</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-20 h-20 border-b border-r border-[rgba(201,168,76,0.3)] pointer-events-none" />
            <div className="absolute -top-5 -left-5 w-20 h-20 border-t border-l border-[rgba(201,168,76,0.3)] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── VINCENZO ─────────────────────────────────────── */}
      <section className="py-24 px-5 md:px-8" style={{ background: "#F2E8D9" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto overflow-hidden border border-[rgba(201,168,76,0.2)]">
              <Image
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=85"
                alt="Restaurant owner and hospitality"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,19,9,0.75) 0%, transparent 50%)" }} />
              <div className="absolute bottom-8 left-8">
                <div className="divider-gold-sm !mx-0 mb-4" />
                <p className="text-[#FAF6EF] text-lg font-semibold" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  {d.about.vincTitle}
                </p>
                <p className="text-[#C9A84C] text-xs tracking-widest uppercase mt-1">{d.about.vincRole}</p>
              </div>
            </div>
            <div className="absolute top-8 right-0 translate-x-1/2 w-16 h-16 border border-[rgba(201,168,76,0.2)] rotate-45 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="section-label mb-3">{d.about.vincLabel}</p>
            <h2
              className="section-title mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {d.about.vincTitle}
            </h2>
            <div className="divider-gold-sm !mx-0 mb-7" />
            <div className="space-y-5 text-[#6B5341] leading-relaxed text-sm">
              <p>{d.about.vincP1}</p>
              <p>{d.about.vincP2}</p>
              <p className="italic">{d.about.vincP3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUILDING HISTORY ─────────────────────────────── */}
      <section className="py-24 px-5 md:px-8" style={{ background: "#FAF6EF" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">{d.about.buildingLabel}</p>
            <h2
              className="section-title"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {d.about.buildingTitle1}<br />{d.about.buildingTitle2}
            </h2>
            <div className="divider-gold-sm mt-5 mb-8" />
            <p className="text-[#6B5341] leading-relaxed max-w-2xl mx-auto text-sm">
              {d.about.buildingIntro}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.4), transparent)" }}
            />

            <div className="space-y-10">
              {timeline.map(({ year, event }, i) => (
                <div
                  key={year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#C9A84C] rounded-full border-2 border-[#FAF6EF] mt-1.5 flex-shrink-0 z-10" />
                  <div
                    className={`ml-10 md:ml-0 md:w-[45%] ${
                      i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:ml-[55%] md:text-left"
                    }`}
                  >
                    <p className="text-[#C9A84C] font-semibold text-sm tracking-wide mb-1">{year}</p>
                    <p className="text-[#6B5341] text-sm leading-relaxed">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE NAME ──────────────────────────────────────── */}
      <section
        className="py-20 px-5 md:px-8"
        style={{ background: "#F2E8D9", borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-3">{d.about.nameLabel}</p>
          <h2
            className="section-title mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {d.about.nameTitle}
          </h2>
          <div className="divider-gold-sm mb-7" />
          <p className="text-[#6B5341] leading-relaxed text-sm">
            {d.about.nameText}
          </p>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────── */}
      <section className="py-24 px-5 md:px-8" style={{ background: "#FAF6EF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">{d.about.valuesLabel}</p>
            <h2
              className="section-title"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {d.about.valuesTitle}
            </h2>
            <div className="divider-gold-sm mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ icon, title, body }) => (
              <div
                key={title}
                className="card-lift p-8 border border-[rgba(201,168,76,0.15)]"
                style={{ background: "#FFFFFF", boxShadow: "0 2px 20px rgba(26,19,9,0.06)" }}
              >
                <span className="text-3xl block mb-4">{icon}</span>
                <h3
                  className="text-[#1C1409] font-semibold text-lg mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {title}
                </h3>
                <p className="text-[#6B5341] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────── */}
      <section
        className="py-20 px-5 md:px-8 text-center"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%), #F2E8D9",
          borderTop: "1px solid rgba(201,168,76,0.1)"
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="section-label mb-5">{d.about.philLabel}</p>
          <blockquote
            className="text-[#1C1409] text-base md:text-lg leading-loose italic whitespace-pre-line"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {d.about.philQuote}
            <br />
            <span className="text-[#C9A84C] not-italic">{d.about.philEnd}</span>
          </blockquote>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        className="py-20 px-5 md:px-8 text-center"
        style={{ background: "#FAF6EF", borderTop: "1px solid rgba(201,168,76,0.1)" }}
      >
        <h2
          className="section-title mb-5 whitespace-pre-line"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {d.about.ctaTitle}
        </h2>
        <p className="text-[#6B5341] mb-8 max-w-md mx-auto text-sm">
          {d.about.ctaText}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`/${lang}/reservations`} className="btn-gold">
            {d.about.reserveTable}
          </Link>
          <Link href={`/${lang}/menu`} className="btn-outline">
            {d.about.viewMenu}
          </Link>
        </div>
      </section>
    </>
  );
}
