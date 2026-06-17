import Link from "next/link";

const timeline = [
  { year: "1976", event: "Cabotto's Restaurant opens its doors — a family tradition begins in Ottawa." },
  { year: "1985", event: "The Hazeldean Road heritage building is designated under the Ontario Heritage Act." },
  { year: "2003", event: "Vincenzo Pucci moves Cabotto's into the stunning Gothic Revival landmark on Hazeldean Road." },
  { year: "2006–2011", event: "Six consecutive wins of the Consumer's Choice Award for Best Italian Restaurant." },
  { year: "2020–2024", event: "Named Best Italian Restaurant in Ottawa by Faces Magazine for five consecutive years." },
  { year: "Today", event: "Nearly 50 years in, Cabotto's continues to welcome new guests and cherish loyal ones." },
];

const values = [
  {
    icon: "🌿",
    title: "Finest Ingredients",
    body: "We source only the highest-quality ingredients — from imported Italian DOP products to the freshest local produce — because great food begins with great ingredients.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Hospitality",
    body: "Vincenzo Pucci is personally present in every service, ensuring every guest feels the warmth and care that has made Cabotto's Ottawa's most beloved Italian dining room.",
  },
  {
    icon: "🏛️",
    title: "Authentic Tradition",
    body: "Our recipes honour the time-tested traditions of Italian cuisine. Nothing is rushed, nothing is cut short — every plate tells a story of Italian culinary heritage.",
  },
  {
    icon: "🤝",
    title: "Guest First, Always",
    body: "\"Because the customer has need, we have an opportunity.\" This philosophy guides every decision we make, every day, for every guest.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="pt-36 pb-24 px-5 md:px-8 text-center relative"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 65%), linear-gradient(180deg, #1A1309 0%, #0D0A06 100%)",
        }}
      >
        <p className="section-label mb-3">Est. 1976</p>
        <h1
          className="section-title mb-5"
          style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2.5rem,6vw,4rem)" }}
        >
          Our Story
        </h1>
        <div className="divider-gold-sm mb-6" />
        <p className="text-cream-dark max-w-2xl mx-auto text-base leading-relaxed">
          Nearly five decades of passion, tradition, and warmth — Cabotto&apos;s is
          more than a restaurant. It is a piece of Italy, lovingly crafted in
          the heart of Ottawa.
        </p>
      </section>

      {/* ── STORY ────────────────────────────────────────── */}
      <section className="py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">The Beginning</p>
            <h2
              className="section-title mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              A Family Passion<br />Since 1976
            </h2>
            <div className="divider-gold-sm !mx-0 mb-7" />
            <div className="space-y-5 text-cream-dark leading-relaxed text-sm">
              <p>
                Since 1976, Cabotto&apos;s has been on a mission: to bring the
                authentic spirit of Italy to the west end of Ottawa. What began
                as a family dream has grown into one of the city&apos;s most
                cherished dining institutions — a place where locals become
                regulars, and regulars become family.
              </p>
              <p>
                For nearly five decades, the restaurant has earned its first-class
                reputation by focusing on what matters most: the finest quality
                ingredients, authentic Italian recipes, and the kind of warm
                hospitality that makes every guest feel truly at home.
              </p>
              <p>
                In May 2003, Vincenzo Pucci moved Cabotto&apos;s into a magnificent
                heritage building on Hazeldean Road. With its castle-like
                appearance, stunning original artwork, elegant French doors and
                luxurious fireplaces, the building is a testament to the team&apos;s
                desire to make every dining experience as extraordinary as possible.
              </p>
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative">
            <div
              className="aspect-square max-w-md mx-auto flex items-center justify-center p-12"
              style={{
                background: "linear-gradient(135deg, #2A200D 0%, #3D2E14 50%, #1A1309 100%)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <div className="text-center">
                <p
                  className="text-gold text-8xl font-bold leading-none mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  48
                </p>
                <p className="text-cream-muted text-xs tracking-[0.3em] uppercase mb-6">
                  Years of Excellence
                </p>
                <div className="divider-gold-sm" />
                <p
                  className="text-cream text-base italic mt-6 leading-relaxed"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  &ldquo;Voted #1 Best Italian
                  <br />Food in Ottawa&rdquo;
                </p>
                <p className="text-gold-muted text-xs tracking-widest mt-2 uppercase">— CTV Viewers</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-20 h-20 border-b border-r border-gold/30" />
            <div className="absolute -top-5 -left-5 w-20 h-20 border-t border-l border-gold/30" />
          </div>
        </div>
      </section>

      {/* ── VINCENZO ─────────────────────────────────────── */}
      <section
        className="py-24 px-5 md:px-8"
        style={{ background: "linear-gradient(180deg, #0D0A06 0%, #1A1309 100%)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1 relative">
            <div
              className="aspect-[3/4] max-w-sm mx-auto flex items-end justify-start p-8"
              style={{
                background:
                  "linear-gradient(160deg, #3D2E14 0%, #2A200D 40%, #1A1309 100%)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <div>
                <div className="divider-gold-sm !mx-0 mb-4" />
                <p
                  className="text-cream text-lg font-semibold"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Vincenzo Pucci
                </p>
                <p className="text-gold text-xs tracking-widest uppercase mt-1">
                  Owner &amp; Host
                </p>
              </div>
            </div>
            <div className="absolute top-8 right-0 translate-x-1/2 w-16 h-16 border border-gold/20 rotate-45" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="section-label mb-3">The Heart of Cabotto&apos;s</p>
            <h2
              className="section-title mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Vincenzo Pucci
            </h2>
            <div className="divider-gold-sm !mx-0 mb-7" />
            <div className="space-y-5 text-cream-dark leading-relaxed text-sm">
              <p>
                With his charismatic and hands-on approach, Vincenzo Pucci
                is the soul of Cabotto&apos;s. He presides over every facet of the
                daily operation — greeting guests, overseeing the kitchen, and
                ensuring that every detail meets the exceptional standard the
                restaurant has built its reputation on.
              </p>
              <p>
                Vince&apos;s philosophy is simple: the customer is at the centre
                of everything. It is this genuine, deeply personal commitment
                to hospitality that has made Cabotto&apos;s not just a restaurant,
                but a beloved Ottawa institution.
              </p>
              <p>
                &ldquo;Vince and the entire staff at Cabotto&apos;s would like to thank
                all of their customers for their continued loyalty over the past
                fifty years and look forward to many more years of meeting new
                customers and getting closer to old ones.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUILDING HISTORY ─────────────────────────────── */}
      <section className="py-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">The Landmark</p>
            <h2
              className="section-title"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              A Heritage Building<br />With a Rich History
            </h2>
            <div className="divider-gold-sm mt-5 mb-8" />
            <p className="text-cream-dark leading-relaxed max-w-2xl mx-auto text-sm">
              The Cabotto&apos;s building on Hazeldean Road is a designated heritage
              property — a stunning Gothic Revival landmark built in 1868.
              Originally a tavern serving weary travellers, it has seen over
              150 years of Ottawa history unfold within its walls.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
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
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-gold rounded-full border-2 border-dark mt-1.5 flex-shrink-0 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-10 md:ml-0 md:w-[45%] ${
                      i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:ml-[55%] md:text-left"
                    }`}
                  >
                    <p className="text-gold font-semibold text-sm tracking-wide mb-1">
                      {year}
                    </p>
                    <p className="text-cream-dark text-sm leading-relaxed">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE NAME ──────────────────────────────────────── */}
      <section
        className="py-20 px-5 md:px-8 border-y border-gold/10"
        style={{ background: "rgba(201,168,76,0.03)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-3">About the Name</p>
          <h2
            className="section-title mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Giovanni Cabotto
          </h2>
          <div className="divider-gold-sm mb-7" />
          <p className="text-cream-dark leading-relaxed text-sm">
            Giovanni Cabotto (1450–1499), known in English as John Cabot, was a
            great Italian navigator and explorer popularly credited as the modern
            discoverer of Canada. Like Columbus before him, Cabot believed Asia
            could be reached by sailing west — and in 1497 he made his famous
            voyage to North America. It is fitting that a restaurant celebrating
            Italian culture and excellence should bear the name of the man who
            first brought Italy&apos;s spirit to Canadian shores.
          </p>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────── */}
      <section className="py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What We Stand For</p>
            <h2
              className="section-title"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Our Values
            </h2>
            <div className="divider-gold-sm mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ icon, title, body }) => (
              <div
                key={title}
                className="card-lift p-8 border border-gold/15"
                style={{ background: "linear-gradient(145deg, #1A1309, #0D0A06)" }}
              >
                <span className="text-3xl block mb-4">{icon}</span>
                <h3
                  className="text-cream font-semibold text-lg mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {title}
                </h3>
                <p className="text-cream-dark text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────── */}
      <section
        className="py-20 px-5 md:px-8 text-center border-t border-gold/10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%), #1A1309",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="section-label mb-5">Our Philosophy</p>
          <blockquote
            className="text-cream text-base md:text-lg leading-loose italic"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Because the customer has need, We have an opportunity.<br />
            Because the customer has choice, We must be superior.<br />
            Because the customer has urgency, We must act promptly.<br />
            Because the customer has expectations, We must exceed them.<br />
            Because the customer has memory, We must be legendary.<br />
            <span className="text-gold">Because of the customer, we exist.</span>
          </blockquote>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        className="py-20 px-5 md:px-8 text-center border-t border-gold/10"
        style={{ background: "#0D0A06" }}
      >
        <h2
          className="section-title mb-5"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Come Experience It<br />for Yourself
        </h2>
        <p className="text-cream-dark mb-8 max-w-md mx-auto text-sm">
          There is no better way to understand what Cabotto&apos;s is all about
          than to sit down at one of our tables and let us take care of you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/reservations" className="btn-gold">
            Reserve a Table
          </Link>
          <Link href="/menu" className="btn-outline">
            View Our Menu
          </Link>
        </div>
      </section>
    </>
  );
}
