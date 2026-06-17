import Link from "next/link";
import Image from "next/image";
import { getDict } from "@/lib/translations";

const featuredDishes = [
  {
    name: "Osso Buco alla Milanese",
    description: "Slow-braised veal shank in white wine with saffron risotto and gremolata",
    price: "$42",
    img: "https://images.unsplash.com/photo-1555396273-122f1f3b47cb?w=600&q=80",
    badgeKey: "houseSig" as const,
  },
  {
    name: "Linguine alle Vongole",
    description: "Fresh clams, white wine, garlic, chilli, and fresh parsley over artisan pasta",
    price: "$28",
    img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80",
  },
  {
    name: "Vitello al Limone",
    description: "Tender veal escalope in a delicate lemon butter sauce with capers and sage",
    price: "$38",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
  },
  {
    name: "Tiramisù della Casa",
    description: "Our legendary house tiramisù — a recipe unchanged since 1976",
    price: "$12",
    img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
    badgeKey: "since" as const,
  },
];

const testimonials = [
  {
    quote: "We have been coming to Cabotto's for over 20 years and it never disappoints. The food is spectacular and Vince makes every guest feel like family. Truly Ottawa's finest Italian.",
    author: "Margaret T.",
    location: "Kanata",
    stars: 5,
  },
  {
    quote: "The atmosphere in that beautiful heritage building is magical. The osso buco is the best I've had outside of Milan. Absolutely outstanding service from start to finish.",
    author: "David & Claire R.",
    location: "Ottawa",
    stars: 5,
  },
  {
    quote: "Voted #1 for a reason. We celebrated our anniversary here and Vincenzo personally came to our table. The tiramisù alone is worth the drive from anywhere in the city.",
    author: "Sophie M.",
    location: "Barrhaven",
    stars: 5,
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Elegant Italian dining room", tall: true },
  { src: "https://images.unsplash.com/photo-1555396273-122f1f3b47cb?w=800&q=80", alt: "Osso Buco signature dish" },
  { src: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80", alt: "Classic tiramisù dessert" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Heritage building interior", tall: true },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", alt: "Italian cuisine spread" },
  { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Fresh pasta preparation" },
];

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = getDict(lang);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85"
          alt="Elegant Italian dining"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Warm dark overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(26,19,9,0.82) 0%, rgba(26,19,9,0.65) 55%, rgba(26,19,9,0.35) 100%)",
          }}
        />
        {/* Decorative vertical lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full opacity-10"
            style={{ background: "linear-gradient(180deg, transparent, #C9A84C, transparent)" }} />
          <div className="absolute top-0 right-1/3 w-px h-full opacity-5"
            style={{ background: "linear-gradient(180deg, transparent, #C9A84C, transparent)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-28 pb-20 w-full">
          <div className="max-w-2xl">
            <p className="section-label animate-fade-in-up mb-5" style={{ color: "#C9A84C" }}>
              {d.home.heroSub}
            </p>
            <h1
              className="hero-title animate-fade-in-up animate-delay-200 mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {d.home.heroLine1}{" "}
              <span className="text-shimmer">{d.home.heroHighlight}</span>
              <br />{d.home.heroLine2}
              <br />{d.home.heroLine3}
            </h1>
            <p className="text-[#FAF6EF]/85 text-lg leading-relaxed max-w-lg animate-fade-in-up animate-delay-400 mb-10">
              {d.home.heroTagline}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-600">
              <Link href={`/${lang}/menu`} className="btn-gold">{d.home.viewMenu}</Link>
              <Link href={`/${lang}/reservations`} className="btn-outline" style={{ color: "#FAF6EF", borderColor: "rgba(250,246,239,0.5)" }}>{d.home.reserveTable}</Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animate-delay-800">
          <span className="text-[#FAF6EF]/40 text-xs tracking-[0.2em] uppercase">{d.home.discoverLabel}</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" />
        </div>
      </section>

      {/* ── VALUE STRIP ─────────────────────────────────────── */}
      <section style={{ background: "#F2E8D9", borderTop: "1px solid rgba(201,168,76,0.15)", borderBottom: "1px solid rgba(201,168,76,0.15)" }} className="py-10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: "🏛️", title: d.home.v1Title, sub: d.home.v1Sub },
            { icon: "👨‍🍳", title: d.home.v2Title, sub: d.home.v2Sub },
            { icon: "🏆", title: d.home.v3Title, sub: d.home.v3Sub },
          ].map(({ icon, title, sub }) => (
            <div key={title} className="flex flex-col items-center gap-3">
              <span className="text-3xl">{icon}</span>
              <h3 className="text-[#1C1409] font-semibold" style={{ fontFamily: "var(--font-playfair), serif" }}>{title}</h3>
              <p className="text-[#6B5341] text-sm leading-relaxed max-w-xs">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR STORY TEASER ─────────────────────────────────── */}
      <section className="py-24 px-5 md:px-8" style={{ background: "#FAF6EF" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=85"
                alt="Cabotto's restaurant interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,19,9,0.4) 0%, transparent 60%)" }} />
            </div>
            {/* Corner accents */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-[rgba(201,168,76,0.3)] pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-[rgba(201,168,76,0.3)] pointer-events-none" />
            {/* Badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 border border-[rgba(201,168,76,0.3)] px-5 py-3 backdrop-blur-sm">
              <p className="text-[#C9A84C] text-xs tracking-widest uppercase">{d.home.estBadge}</p>
              <p className="text-[#1C1409] text-sm font-semibold mt-0.5" style={{ fontFamily: "var(--font-playfair), serif" }}>{d.home.estBadgeSub}</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="section-label mb-3">{d.home.storyLabel}</p>
            <h2 className="section-title mb-5" style={{ fontFamily: "var(--font-playfair), serif" }}>
              {d.home.storyTitle1}<br />{d.home.storyTitle2}
            </h2>
            <div className="divider-gold-sm !mx-0 mb-7" />
            <p className="text-[#6B5341] leading-relaxed mb-5">
              {d.home.storyP1}
            </p>
            <p className="text-[#6B5341] leading-relaxed mb-8">
              {d.home.storyP2}
            </p>
            <Link href={`/${lang}/about`} className="btn-outline">{d.home.storyBtn}</Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED DISHES ──────────────────────────────────── */}
      <section className="py-24 px-5 md:px-8" style={{ background: "#F2E8D9" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">{d.home.dishesLabel}</p>
            <h2 className="section-title" style={{ fontFamily: "var(--font-playfair), serif" }}>{d.home.dishesTitle}</h2>
            <div className="divider-gold-sm mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish) => (
              <div key={dish.name} className="card-lift group border border-[rgba(201,168,76,0.15)] overflow-hidden flex flex-col"
                style={{ background: "#FFFFFF", boxShadow: "0 2px 20px rgba(26,19,9,0.06)" }}>
                {/* Photo */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={dish.img}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,19,9,0.5) 0%, transparent 60%)" }} />
                  {dish.badgeKey && (
                    <span className="absolute top-3 left-3 bg-[#C9A84C] text-[#1C1409] text-[10px] font-bold tracking-wider uppercase px-2 py-1">
                      {d.menu[dish.badgeKey]}
                    </span>
                  )}
                </div>
                {/* Info */}
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <h3 className="text-[#1C1409] font-semibold leading-snug" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    {dish.name}
                  </h3>
                  <p className="text-[#6B5341] text-sm leading-relaxed flex-1">{dish.description}</p>
                  <div className="text-[#C9A84C] font-semibold text-lg border-t border-[rgba(201,168,76,0.2)] pt-3">{dish.price}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={`/${lang}/menu`} className="btn-gold">{d.home.exploreMenu}</Link>
          </div>
        </div>
      </section>

      {/* ── AWARDS ───────────────────────────────────────────── */}
      <section className="py-14 px-5 md:px-8" style={{ background: "rgba(201,168,76,0.05)", borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-5">
            {[d.home.a1, d.home.a2, d.home.a3, d.home.a4].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-[#6B5341] max-w-xs text-center">
                <span className="text-xl flex-shrink-0 text-[#C9A84C]">★</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 px-5 md:px-8" style={{ background: "#FAF6EF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">{d.home.reviewsLabel}</p>
            <h2 className="section-title" style={{ fontFamily: "var(--font-playfair), serif" }}>{d.home.reviewsTitle}</h2>
            <div className="divider-gold-sm mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card-lift p-8 border border-[rgba(201,168,76,0.15)] flex flex-col gap-5"
                style={{ background: "#FFFFFF", boxShadow: "0 2px 20px rgba(26,19,9,0.06)" }}>
                <div className="stars text-sm">{"★".repeat(t.stars)}</div>
                <p className="text-[#6B5341] text-sm leading-relaxed italic flex-1" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-[rgba(201,168,76,0.15)] pt-4">
                  <p className="text-[#1C1409] text-sm font-medium">{t.author}</p>
                  <p className="text-[#9E8068] text-xs mt-0.5">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIVATE DINING ───────────────────────────────────── */}
      <section className="py-24 px-5 md:px-8" style={{ background: "#F2E8D9" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="section-label mb-3">{d.home.privateDiningLabel}</p>
            <h2 className="section-title mb-5 whitespace-pre-line" style={{ fontFamily: "var(--font-playfair), serif" }}>
              {d.home.privateDiningTitle}
            </h2>
            <div className="divider-gold-sm !mx-0 mb-7" />
            <p className="text-[#6B5341] leading-relaxed mb-8">
              {d.home.privateDiningText}
            </p>
            <Link href={`/${lang}/contact`} className="btn-gold">{d.home.privateDiningBtn}</Link>
          </div>
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=900&q=85"
                alt="Private dining at Cabotto's"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: "rgba(250,246,239,0.08)" }} />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-[rgba(201,168,76,0.3)] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <section className="py-24 px-5 md:px-8" style={{ background: "#FAF6EF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Gallery</p>
            <h2 className="section-title" style={{ fontFamily: "var(--font-playfair), serif" }}>A Glimpse Inside</h2>
            <div className="divider-gold-sm mt-5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={{ gridAutoRows: "240px" }}>
            {galleryImages.map((img, i) => (
              <div key={i}
                className="relative overflow-hidden group"
                style={{ gridRow: img.tall ? "span 2" : "span 1" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(201,168,76,0.12)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH FOOD BANNER ────────────────────────────── */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1800&q=85"
          alt="Italian cuisine spread"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(26,19,9,0.65)" }}>
          <div className="text-center px-5">
            <p className="section-label mb-4" style={{ color: "#C9A84C" }}>Dine With Us</p>
            <h2 className="text-[#FAF6EF] text-3xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}>
              {d.home.bannerDay}<br />
              <span className="text-shimmer">{d.home.bannerTime}</span>
            </h2>
            <Link href={`/${lang}/reservations`} className="btn-gold">{d.home.reserveYourTable}</Link>
          </div>
        </div>
      </section>

      {/* ── HOURS & LOCATION ─────────────────────────────────── */}
      <section className="py-24 px-5 md:px-8" style={{ background: "#F2E8D9" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="section-label mb-3">{d.home.hoursLabel}</p>
            <h2 className="section-title mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>{d.home.hoursTitle}</h2>
            <div className="divider-gold-sm !mx-0 mb-8" />
            <table className="w-full text-sm">
              <tbody>
                {[
                  { dayKey: "sunday" as const, isClosed: true },
                  { dayKey: "monday" as const, isClosed: true },
                  { dayKey: "tuesday" as const, isClosed: false },
                  { dayKey: "wednesday" as const, isClosed: false },
                  { dayKey: "thursday" as const, isClosed: false },
                  { dayKey: "friday" as const, isClosed: false },
                  { dayKey: "saturday" as const, isClosed: false },
                ].map(({ dayKey, isClosed }) => (
                  <tr key={dayKey} style={{ borderBottom: "1px solid rgba(201,168,76,0.12)" }} className="last:border-0">
                    <td className="py-3 text-[#6B5341] w-36">{d.home[dayKey]}</td>
                    <td className={`py-3 font-medium ${isClosed ? "text-[#9E8068]" : "text-[#C9A84C]"}`}>
                      {isClosed ? d.home.closed : d.home.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[#9E8068] text-xs mt-5 italic">{d.home.holidayNote}</p>
          </div>
          <div>
            <p className="section-label mb-3">{d.home.locationLabel}</p>
            <h2 className="section-title mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>{d.home.locationTitle}</h2>
            <div className="divider-gold-sm !mx-0 mb-8" />
            <div className="space-y-5 text-sm">
              <div>
                <p className="text-[#9E8068] text-xs tracking-widest uppercase mb-1">{d.home.addressLabel}</p>
                <p className="text-[#1C1409] whitespace-pre-line">{d.home.addressValue}</p>
              </div>
              <div>
                <p className="text-[#9E8068] text-xs tracking-widest uppercase mb-1">{d.home.parkingLabel}</p>
                <p className="text-[#1C1409]">{d.home.parkingValue}</p>
              </div>
              <div>
                <p className="text-[#9E8068] text-xs tracking-widest uppercase mb-1">{d.home.paymentLabel}</p>
                <p className="text-[#1C1409]">{d.home.paymentValue}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href={`/${lang}/reservations`} className="btn-gold">{d.home.reserveTable}</Link>
              <Link href={`/${lang}/contact`} className="btn-outline">Get Directions</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-28 px-5 md:px-8 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%), #FAF6EF", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="max-w-xl mx-auto">
          <p className="section-label mb-4">{d.home.ctaLabel}</p>
          <h2 className="section-title mb-5" style={{ fontFamily: "var(--font-playfair), serif" }}>
            {d.home.ctaTitle1}<br />{d.home.ctaTitle2}
          </h2>
          <div className="divider-gold-sm mt-0 mb-7" />
          <p className="text-[#6B5341] leading-relaxed mb-10">
            {d.home.ctaText}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${lang}/reservations`} className="btn-gold">{d.home.reserveTable}</Link>
            <Link href={`/${lang}/menu`} className="btn-outline">{d.home.browseMenu}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
