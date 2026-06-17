import Link from "next/link";

const featuredDishes = [
  {
    name: "Osso Buco alla Milanese",
    description:
      "Slow-braised veal shank in white wine with saffron risotto and gremolata",
    price: "$42",
    icon: "🍖",
  },
  {
    name: "Linguine alle Vongole",
    description:
      "Fresh clams, white wine, garlic, chilli, and fresh parsley over artisan pasta",
    price: "$28",
    icon: "🍝",
  },
  {
    name: "Vitello al Limone",
    description:
      "Tender veal escalope in a delicate lemon butter sauce with capers and sage",
    price: "$38",
    icon: "🥩",
  },
  {
    name: "Tiramisù della Casa",
    description:
      "Our legendary house tiramisù — a recipe unchanged since 1976",
    price: "$12",
    icon: "🍮",
  },
];

const testimonials = [
  {
    quote:
      "We have been coming to Cabotto's for over 20 years and it never disappoints. The food is spectacular and Vince makes every guest feel like family. Truly Ottawa's finest Italian.",
    author: "Margaret T.",
    location: "Kanata",
  },
  {
    quote:
      "The atmosphere in that beautiful heritage building is magical. The osso buco is the best I've had outside of Milan. Absolutely outstanding service from start to finish.",
    author: "David & Claire R.",
    location: "Ottawa",
  },
  {
    quote:
      "Voted #1 for a reason. We celebrated our anniversary here and Vincenzo personally came to our table. The tiramisù alone is worth the drive from anywhere in the city.",
    author: "Sophie M.",
    location: "Barrhaven",
  },
];

const awards = [
  "Voted #1 Best Italian Food in Ottawa — CTV Viewers",
  "Consumer's Choice Award — 6 Consecutive Years (2006–2011)",
  "Best Italian Restaurant — Faces Magazine (2020–2024)",
  "Ottawa Chamber of Commerce Small Business Finalist (2010 & 2011)",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-center"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.06) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(139,26,26,0.05) 0%, transparent 50%), linear-gradient(160deg, #1a1309 0%, #0d0a06 45%, #120c04 100%)",
        }}
      >
        {/* Decorative vertical lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 left-1/4 w-px h-full opacity-5"
            style={{ background: "linear-gradient(180deg, transparent, #C9A84C, transparent)" }}
          />
          <div
            className="absolute top-0 right-1/4 w-px h-full opacity-5"
            style={{ background: "linear-gradient(180deg, transparent, #C9A84C, transparent)" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-28 pb-20">
          <div className="max-w-2xl">
            <p className="section-label animate-fade-in-up mb-4">
              Ottawa · Since 1976
            </p>

            <h1
              className="hero-title animate-fade-in-up animate-delay-200 mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              A Taste of{" "}
              <span className="text-shimmer">Italy</span>
              <br />in the Heart of
              <br />Ottawa
            </h1>

            <p className="text-cream-muted text-lg leading-relaxed max-w-lg animate-fade-in-up animate-delay-400 mb-10">
              Family-run since 1976, Cabotto&apos;s has earned its first-class
              reputation by serving authentic Italian cuisine in a stunning
              Gothic Revival heritage building on Hazeldean Road.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-600">
              <Link href="/menu" className="btn-gold">
                View Our Menu
              </Link>
              <Link href="/reservations" className="btn-outline">
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animate-delay-800">
          <span className="text-cream-dark text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* ── VALUE STRIP ────────────────────────────────── */}
      <section className="bg-dark-2 border-y border-gold/10 py-10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: "🏛️",
              title: "Heritage Building",
              sub: "Stunning 1868 Gothic Revival landmark on Hazeldean Road",
            },
            {
              icon: "👨‍🍳",
              title: "Authentic Recipes",
              sub: "Time-honoured Italian traditions, crafted with the finest ingredients",
            },
            {
              icon: "🏆",
              title: "Award-Winning",
              sub: "Voted Best Italian in Ottawa by Faces Magazine 5 years running",
            },
          ].map(({ icon, title, sub }) => (
            <div key={title} className="flex flex-col items-center gap-3">
              <span className="text-3xl">{icon}</span>
              <h3
                className="text-cream font-semibold text-base"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {title}
              </h3>
              <p className="text-cream-dark text-sm leading-relaxed max-w-xs">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR STORY TEASER ───────────────────────────── */}
      <section className="py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual panel */}
          <div className="relative">
            <div
              className="aspect-[4/3] rounded-sm overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #2A200D 0%, #3D2E14 50%, #1A1309 100%)",
              }}
            >
              {/* Decorative quote */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                <span className="text-gold text-7xl leading-none mb-4" style={{ fontFamily: "Georgia, serif" }}>
                  &ldquo;
                </span>
                <p
                  className="text-cream text-xl leading-relaxed italic"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Because of the customer,<br />we exist.
                </p>
                <div className="divider-gold-sm mt-6" />
                <p className="text-gold-muted text-xs tracking-widest uppercase mt-4">
                  Cabotto&apos;s Philosophy
                </p>
              </div>
            </div>
            {/* Corner accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-gold/30" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-gold/30" />
          </div>

          {/* Text */}
          <div>
            <p className="section-label mb-3">Our Heritage</p>
            <h2 className="section-title mb-5" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Nearly 50 Years of<br />Italian Excellence
            </h2>
            <div className="divider-gold-sm !mx-0 mb-7" />
            <p className="text-cream-dark leading-relaxed mb-5">
              Since 1976, Cabotto&apos;s has been creating a piece of Italy in the
              west end of Ottawa. With its charismatic owner Vincenzo Pucci
              presiding over every facet of the daily operation, the restaurant is
              known and appreciated for its warmth and desire to please each and
              every guest.
            </p>
            <p className="text-cream-dark leading-relaxed mb-8">
              In 2003, the restaurant moved to a distinctive heritage building on
              Hazeldean Road — with its castle-like appearance, stunning artwork,
              elegant French doors and luxurious fireplaces — the perfect setting
              for an unforgettable Italian dining experience.
            </p>
            <Link href="/about" className="btn-outline">
              Read Our Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED DISHES ────────────────────────────── */}
      <section
        className="py-24 px-5 md:px-8"
        style={{ background: "linear-gradient(180deg, #0D0A06 0%, #1A1309 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">From Our Kitchen</p>
            <h2 className="section-title" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Signature Dishes
            </h2>
            <div className="divider-gold-sm mt-5 mb-0" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish) => (
              <div
                key={dish.name}
                className="card-lift border border-gold/15 p-6 flex flex-col gap-4"
                style={{ background: "linear-gradient(145deg, #2A200D, #1A1309)" }}
              >
                <div className="text-4xl">{dish.icon}</div>
                <div className="flex-1">
                  <h3
                    className="text-cream font-semibold text-base mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {dish.name}
                  </h3>
                  <p className="text-cream-dark text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
                <div className="text-gold font-semibold text-lg border-t border-gold/15 pt-4">
                  {dish.price}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="btn-gold">
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── AWARDS ─────────────────────────────────────── */}
      <section
        className="py-14 px-5 md:px-8 border-y border-gold/10"
        style={{ background: "rgba(201,168,76,0.03)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-5">
            {awards.map((award) => (
              <div key={award} className="flex items-center gap-3 text-sm text-cream-muted max-w-xs text-center">
                <span className="text-gold text-lg flex-shrink-0">★</span>
                <span>{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────── */}
      <section className="py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What Our Guests Say</p>
            <h2 className="section-title" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Guest Reviews
            </h2>
            <div className="divider-gold-sm mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="card-lift p-8 border border-gold/15 flex flex-col gap-5"
                style={{ background: "linear-gradient(145deg, #1A1309, #0D0A06)" }}
              >
                <div className="stars text-sm">★★★★★</div>
                <p
                  className="text-cream-muted text-sm leading-relaxed italic flex-1"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-gold/15 pt-4">
                  <p className="text-cream text-sm font-medium">{t.author}</p>
                  <p className="text-cream-dark text-xs mt-0.5">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOURS & LOCATION ───────────────────────────── */}
      <section
        className="py-24 px-5 md:px-8"
        style={{ background: "linear-gradient(180deg, #0D0A06 0%, #1A1309 100%)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Hours */}
          <div>
            <p className="section-label mb-3">Plan Your Visit</p>
            <h2
              className="section-title mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Opening Hours
            </h2>
            <div className="divider-gold-sm !mx-0 mb-8" />
            <table className="w-full text-sm">
              <tbody>
                {[
                  { day: "Sunday", hours: "Closed", closed: true },
                  { day: "Monday", hours: "Closed", closed: true },
                  { day: "Tuesday", hours: "4:00 PM – 9:00 PM", closed: false },
                  { day: "Wednesday", hours: "4:00 PM – 9:00 PM", closed: false },
                  { day: "Thursday", hours: "4:00 PM – 9:00 PM", closed: false },
                  { day: "Friday", hours: "4:00 PM – 9:00 PM", closed: false },
                  { day: "Saturday", hours: "4:00 PM – 9:00 PM", closed: false },
                ].map(({ day, hours, closed }) => (
                  <tr
                    key={day}
                    className="border-b border-gold/10 last:border-0"
                  >
                    <td className="py-3 text-cream-muted w-36">{day}</td>
                    <td
                      className={`py-3 font-medium ${
                        closed ? "text-cream-dark" : "text-gold"
                      }`}
                    >
                      {hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-cream-dark text-xs mt-5 italic">
              Special closures apply to public holidays. Please call ahead to confirm.
            </p>
          </div>

          {/* Location */}
          <div>
            <p className="section-label mb-3">Find Us</p>
            <h2
              className="section-title mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Our Location
            </h2>
            <div className="divider-gold-sm !mx-0 mb-8" />
            <div className="space-y-5 text-sm">
              <div>
                <p className="text-cream-muted text-xs tracking-widest uppercase mb-1">Address</p>
                <p className="text-cream">
                  Hazeldean Road (between Iber Rd &amp; Main St)<br />
                  Ottawa (Kanata–Stittsville), Ontario
                </p>
              </div>
              <div>
                <p className="text-cream-muted text-xs tracking-widest uppercase mb-1">Parking</p>
                <p className="text-cream">Ample free parking available on-site</p>
              </div>
              <div>
                <p className="text-cream-muted text-xs tracking-widest uppercase mb-1">Reservations</p>
                <p className="text-cream">Strongly recommended, especially weekends</p>
              </div>
              <div>
                <p className="text-cream-muted text-xs tracking-widest uppercase mb-1">Payment</p>
                <p className="text-cream">Cash · Visa · Mastercard · American Express</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/reservations" className="btn-gold">
                Reserve a Table
              </Link>
              <Link href="/contact" className="btn-outline">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────── */}
      <section
        className="py-28 px-5 md:px-8 text-center border-t border-gold/10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%), #0D0A06",
        }}
      >
        <div className="max-w-xl mx-auto">
          <p className="section-label mb-4">Dine With Us</p>
          <h2
            className="section-title mb-5"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            An Evening You&apos;ll
            <br />Never Forget
          </h2>
          <div className="divider-gold-sm mt-0 mb-7" />
          <p className="text-cream-dark leading-relaxed mb-10">
            Whether it&apos;s an anniversary, a birthday, or simply a night out for
            the finest Italian food in Ottawa, Cabotto&apos;s is ready to welcome you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/reservations" className="btn-gold">
              Reserve a Table
            </Link>
            <Link href="/menu" className="btn-outline">
              Browse the Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
