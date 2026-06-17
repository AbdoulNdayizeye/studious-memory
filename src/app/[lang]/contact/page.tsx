"use client";

import { useState, use } from "react";
import { getDict } from "@/lib/translations";

export default function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const d = getDict(lang);
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
          background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 65%), linear-gradient(180deg, #F2E8D9 0%, #FAF6EF 100%)",
        }}
      >
        <p className="section-label mb-3">{d.contact.heroLabel}</p>
        <h1
          className="section-title mb-5"
          style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2.5rem,6vw,4rem)" }}
        >
          {d.contact.heroTitle}
        </h1>
        <div className="divider-gold-sm mb-5" />
        <p className="text-[#6B5341] max-w-md mx-auto text-sm leading-relaxed">
          {d.contact.heroTagline}
        </p>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <section className="py-16 px-5 md:px-8" style={{ background: "#FAF6EF" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Info */}
          <div>
            <p className="section-label mb-3">{d.contact.findUsLabel}</p>
            <h2
              className="section-title mb-6"
              style={{ fontFamily: "var(--font-playfair), serif", fontSize: "2rem" }}
            >
              {d.contact.findUsTitle}
            </h2>
            <div className="divider-gold-sm !mx-0 mb-8" />

            <div className="space-y-7">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[rgba(201,168,76,0.3)] flex items-center justify-center flex-shrink-0 text-[#C9A84C]">
                  📍
                </div>
                <div>
                  <p className="text-[#1C1409] text-xs tracking-widest uppercase mb-1">{d.contact.addressLabel}</p>
                  <p className="text-[#6B5341] text-sm leading-relaxed whitespace-pre-line">
                    {d.contact.addressValue}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Cabotto%27s+Restaurant+Ottawa+ON"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A84C] text-xs mt-2 inline-block hover:text-[#8B6914] transition-colors underline underline-offset-2"
                  >
                    {d.contact.mapsLink}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[rgba(201,168,76,0.3)] flex items-center justify-center flex-shrink-0 text-[#C9A84C]">
                  📞
                </div>
                <div>
                  <p className="text-[#1C1409] text-xs tracking-widest uppercase mb-1">{d.contact.phoneLabel}</p>
                  <a
                    href="tel:+16137267300"
                    className="text-[#6B5341] text-sm hover:text-[#C9A84C] transition-colors"
                  >
                    (613) 726-7300
                  </a>
                  <p className="text-[#9E8068] text-xs mt-0.5">Click to call</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[rgba(201,168,76,0.3)] flex items-center justify-center flex-shrink-0 text-[#C9A84C]">
                  ✉️
                </div>
                <div>
                  <p className="text-[#1C1409] text-xs tracking-widest uppercase mb-1">{d.contact.emailLabel}</p>
                  <a
                    href="mailto:info@cabottos.com"
                    className="text-[#6B5341] text-sm hover:text-[#C9A84C] transition-colors"
                  >
                    info@cabottos.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[rgba(201,168,76,0.3)] flex items-center justify-center flex-shrink-0 text-[#C9A84C]">
                  🕔
                </div>
                <div>
                  <p className="text-[#1C1409] text-xs tracking-widest uppercase mb-2">{d.contact.hoursLabel}</p>
                  <table className="text-sm">
                    <tbody className="text-[#6B5341]">
                      <tr>
                        <td className="pr-8 py-0.5">{d.contact.hoursSun}</td>
                        <td className="text-[#9E8068] italic">{d.contact.closedLabel}</td>
                      </tr>
                      <tr>
                        <td className="pr-8 py-0.5">{d.contact.hoursTue}</td>
                        <td className="text-[#C9A84C]">{d.contact.hoursTime}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-[#9E8068] text-xs mt-2 italic">
                    {d.contact.hoursNote}
                  </p>
                </div>
              </div>

              {/* Parking */}
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-[rgba(201,168,76,0.3)] flex items-center justify-center flex-shrink-0 text-[#C9A84C]">
                  🅿️
                </div>
                <div>
                  <p className="text-[#1C1409] text-xs tracking-widest uppercase mb-1">{d.contact.parkingLabel}</p>
                  <p className="text-[#6B5341] text-sm">{d.contact.parkingValue}</p>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="mt-10 border border-[rgba(201,168,76,0.15)] overflow-hidden">
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
            <p className="section-label mb-3">{d.contact.formLabel}</p>
            <h2
              className="section-title mb-6"
              style={{ fontFamily: "var(--font-playfair), serif", fontSize: "2rem" }}
            >
              {d.contact.formTitle}
            </h2>
            <div className="divider-gold-sm !mx-0 mb-8" />

            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="name">{d.contact.nameLabel} *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder={d.contact.namePlaceholder}
                      value={form.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="email">{d.contact.emailFormLabel} *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={d.contact.emailPlaceholder}
                      value={form.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="subject">{d.contact.subjectLabel}</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder={d.contact.subjectPlaceholder}
                    value={form.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="message">{d.contact.messageLabel} *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder={d.contact.messagePlaceholder}
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
                      {d.contact.sending}
                    </span>
                  ) : (
                    d.contact.sendBtn
                  )}
                </button>
              </form>
            ) : (
              <div
                className="p-10 text-center border border-[rgba(201,168,76,0.2)]"
                style={{ background: "#F2E8D9" }}
              >
                <div className="text-4xl mb-4">✉️</div>
                <h3
                  className="text-[#1C1409] text-xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {d.contact.sentTitle}
                </h3>
                <p className="text-[#6B5341] text-sm leading-relaxed mb-6">
                  {d.contact.sentText1} <strong className="text-[#1C1409]">{form.name}</strong>. {d.contact.sentText2}
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="btn-outline text-sm"
                >
                  {d.contact.anotherBtn}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── PRIVATE EVENTS BANNER ────────────────────────── */}
      <section
        className="py-20 px-5 md:px-8 text-center mt-8"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%), #F2E8D9",
          borderTop: "1px solid rgba(201,168,76,0.1)"
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="section-label mb-3">{d.contact.eventsLabel}</p>
          <h2
            className="section-title mb-5 whitespace-pre-line"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {d.contact.eventsTitle}
          </h2>
          <div className="divider-gold-sm mb-7" />
          <p className="text-[#6B5341] leading-relaxed text-sm mb-8 max-w-lg mx-auto">
            {d.contact.eventsText}
          </p>
          <a href="mailto:info@cabottos.com" className="btn-gold">
            {d.contact.eventsBtn}
          </a>
        </div>
      </section>
    </>
  );
}
