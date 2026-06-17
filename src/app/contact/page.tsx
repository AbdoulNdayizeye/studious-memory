"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="pt-36 pb-16 px-5 md:px-8 text-center"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 65%), linear-gradient(180deg, #1A1309 0%, #0D0A06 100%)",
        }}
      >
        <p className="section-label mb-3">We&apos;d Love to Hear From You</p>
        <h1
          className="section-title mb-5"
          style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2.5rem,6vw,4rem)" }}
        >
          Contact Us
        </h1>
        <div className="divider-gold-sm mb-5" />
        <p className="text-cream-dark max-w-md mx-auto text-sm leading-relaxed">
          Whether you have a question about the menu, want to arrange a private
          event, or simply want to say hello — we&apos;re always happy to hear from you.
        </p>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <section className="py-16 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Info */}
          <div>
            <p className="section-label mb-3">Find Us</p>
            <h2
              className="section-title mb-6"
              style={{ fontFamily: "var(--font-playfair), serif", fontSize: "2rem" }}
            >
              Visit Cabotto&apos;s
            </h2>
            <div className="divider-gold-sm !mx-0 mb-8" />

            <div className="space-y-7">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold/25 flex items-center justify-center flex-shrink-0 text-gold">
                  📍
                </div>
                <div>
                  <p className="text-cream text-xs tracking-widest uppercase mb-1">Address</p>
                  <p className="text-cream-dark text-sm leading-relaxed">
                    Hazeldean Road<br />
                    (between Iber Road &amp; Main Street)<br />
                    Ottawa (Kanata–Stittsville), Ontario
                  </p>
                  <a
                    href="https://maps.google.com/?q=Cabotto%27s+Restaurant+Ottawa+ON"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs mt-2 inline-block hover:text-gold-light transition-colors underline underline-offset-2"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold/25 flex items-center justify-center flex-shrink-0 text-gold">
                  📞
                </div>
                <div>
                  <p className="text-cream text-xs tracking-widest uppercase mb-1">Phone</p>
                  <a
                    href="tel:+16137267300"
                    className="text-cream-dark text-sm hover:text-gold transition-colors"
                  >
                    (613) 726-7300
                  </a>
                  <p className="text-cream-dark text-xs mt-0.5">Click to call</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold/25 flex items-center justify-center flex-shrink-0 text-gold">
                  ✉️
                </div>
                <div>
                  <p className="text-cream text-xs tracking-widest uppercase mb-1">Email</p>
                  <a
                    href="mailto:info@cabottos.com"
                    className="text-cream-dark text-sm hover:text-gold transition-colors"
                  >
                    info@cabottos.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold/25 flex items-center justify-center flex-shrink-0 text-gold">
                  🕔
                </div>
                <div>
                  <p className="text-cream text-xs tracking-widest uppercase mb-2">Hours</p>
                  <table className="text-sm">
                    <tbody className="text-cream-dark">
                      <tr>
                        <td className="pr-8 py-0.5">Sunday – Monday</td>
                        <td className="text-cream-dark italic">Closed</td>
                      </tr>
                      <tr>
                        <td className="pr-8 py-0.5">Tuesday – Saturday</td>
                        <td className="text-gold">4:00 PM – 9:00 PM</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-cream-dark text-xs mt-2 italic">
                    Closed on statutory holidays — check before visiting.
                  </p>
                </div>
              </div>

              {/* Parking */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-gold/25 flex items-center justify-center flex-shrink-0 text-gold">
                  🅿️
                </div>
                <div>
                  <p className="text-cream text-xs tracking-widest uppercase mb-1">Parking</p>
                  <p className="text-cream-dark text-sm">Ample free parking on-site</p>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="mt-10 border border-gold/15 overflow-hidden">
              <iframe
                title="Cabotto's Restaurant Location"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Cabotto%27s+Restaurant+Ottawa&output=embed"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <p className="section-label mb-3">Send a Message</p>
            <h2
              className="section-title mb-6"
              style={{ fontFamily: "var(--font-playfair), serif", fontSize: "2rem" }}
            >
              Get In Touch
            </h2>
            <div className="divider-gold-sm !mx-0 mb-8" />

            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="name">Your Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Menu question, private event, general inquiry..."
                    value={form.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={handleChange}
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full justify-center py-4 text-sm disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            ) : (
              <div
                className="p-10 text-center border border-gold/20"
                style={{ background: "linear-gradient(145deg, #2A200D, #1A1309)" }}
              >
                <div className="text-4xl mb-4">✉️</div>
                <h3
                  className="text-cream text-xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Message Sent!
                </h3>
                <p className="text-cream-dark text-sm leading-relaxed mb-6">
                  Thank you, <strong className="text-cream">{form.name}</strong>. We&apos;ve received
                  your message and will be in touch within one business day.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="btn-outline text-sm"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── PRIVATE EVENTS BANNER ────────────────────────── */}
      <section
        className="py-20 px-5 md:px-8 text-center border-t border-gold/10 mt-8"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%), #1A1309",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="section-label mb-3">Private Events</p>
          <h2
            className="section-title mb-5"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Host Your Special Event<br />at Cabotto&apos;s
          </h2>
          <div className="divider-gold-sm mb-7" />
          <p className="text-cream-dark leading-relaxed text-sm mb-8 max-w-lg mx-auto">
            Cabotto&apos;s stunning heritage building is the perfect backdrop for
            private dinners, corporate events, anniversary celebrations, and more.
            Contact us to discuss a menu and arrangement tailored to your event.
          </p>
          <a href="mailto:info@cabottos.com" className="btn-gold">
            Enquire About Events
          </a>
        </div>
      </section>
    </>
  );
}
