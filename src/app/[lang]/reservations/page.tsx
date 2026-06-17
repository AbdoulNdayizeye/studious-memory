"use client";

import { useState, use } from "react";
import { getDict } from "@/lib/translations";

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  requests: string;
};

const timeSlots = [
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM",
];

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  occasion: "",
  requests: "",
};

export default function ReservationsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const d = getDict(lang);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  const handleReset = () => {
    setForm(initialForm);
    setSubmitted(false);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="pt-36 pb-16 px-5 md:px-8 text-center"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(139,26,26,0.07) 0%, transparent 65%), linear-gradient(180deg, #F2E8D9 0%, #FAF6EF 100%)",
        }}
      >
        <p className="section-label mb-3">{d.reservations.heroLabel}</p>
        <h1
          className="section-title mb-5"
          style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2.5rem,6vw,4rem)" }}
        >
          {d.reservations.heroTitle}
        </h1>
        <div className="divider-gold-sm mb-5" />
        <p className="text-[#6B5341] max-w-lg mx-auto text-sm leading-relaxed">
          {d.reservations.heroTagline}
        </p>
      </section>

      {/* ── FORM / CONFIRMATION ──────────────────────────── */}
      <section className="py-16 px-5 md:px-8 min-h-[60vh]" style={{ background: "#FAF6EF" }}>
        <div className="max-w-2xl mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label" htmlFor="name">{d.reservations.nameLabel} *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={d.reservations.namePlaceholder}
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="guests">{d.reservations.guestsLabel} *</label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={form.guests}
                    onChange={handleChange}
                    className="form-input"
                    style={{ appearance: "none", backgroundImage: "none" }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <option key={n} value={String(n)}>
                        {n} {n === 1 ? d.reservations.guest : d.reservations.guests}
                      </option>
                    ))}
                    <option value="8+">{d.reservations.guestsPlus}</option>
                  </select>
                </div>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label" htmlFor="email">{d.reservations.emailLabel} *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={d.reservations.emailPlaceholder}
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="phone">{d.reservations.phoneLabel} *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder={d.reservations.phonePlaceholder}
                    value={form.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label" htmlFor="date">{d.reservations.dateLabel} *</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    min={minDate}
                    value={form.date}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="time">{d.reservations.timeLabel} *</label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={form.time}
                    onChange={handleChange}
                    className="form-input"
                    style={{ appearance: "none" }}
                  >
                    <option value="">{d.reservations.timeDefault}</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="form-label" htmlFor="occasion">{d.reservations.occasionLabel}</label>
                <select
                  id="occasion"
                  name="occasion"
                  value={form.occasion}
                  onChange={handleChange}
                  className="form-input"
                  style={{ appearance: "none" }}
                >
                  <option value="">{d.reservations.occasionDefault}</option>
                  {d.reservations.occasions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Special requests */}
              <div>
                <label className="form-label" htmlFor="requests">{d.reservations.requestsLabel}</label>
                <textarea
                  id="requests"
                  name="requests"
                  rows={4}
                  placeholder={d.reservations.requestsPlaceholder}
                  value={form.requests}
                  onChange={handleChange}
                  className="form-input resize-none"
                />
              </div>

              {/* Notice */}
              <p className="text-[#9E8068] text-xs leading-relaxed">
                {d.reservations.notice}
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-gold w-full justify-center py-4 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    {d.reservations.submitting}
                  </span>
                ) : (
                  d.reservations.submitBtn
                )}
              </button>
            </form>
          ) : (
            /* Confirmation */
            <div
              className="text-center p-12 border border-[rgba(139,26,26,0.25)]"
              style={{ background: "#F2E8D9" }}
            >
              <div className="text-5xl mb-6">✅</div>
              <h2
                className="text-[#1C1409] text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {d.reservations.confirmTitle}
              </h2>
              <div className="divider-gold-sm mb-6" />
              <p className="text-[#6B5341] leading-relaxed mb-2">
                {d.reservations.confirmText1} <strong className="text-[#1C1409]">{form.name}</strong>! {d.reservations.confirmText2}{" "}
                <strong className="text-[#8B1A1A]">{form.guests} {Number(form.guests) === 1 ? d.reservations.guest : d.reservations.guests}</strong>{" "}
                {d.reservations.confirmText3} <strong className="text-[#8B1A1A]">{form.date}</strong>{" "}
                {d.reservations.confirmText4} <strong className="text-[#8B1A1A]">{form.time}</strong>{" "}
                {d.reservations.confirmText5}
              </p>
              <p className="text-[#9E8068] text-sm mb-8">
                {d.reservations.confirmNote}
              </p>
              <button onClick={handleReset} className="btn-outline text-sm">
                {d.reservations.anotherBtn}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── INFO CARDS ───────────────────────────────────── */}
      <section className="py-16 px-5 md:px-8" style={{ background: "#F2E8D9", borderTop: "1px solid rgba(139,26,26,0.1)" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: "📞", title: d.reservations.info1Title, body: d.reservations.info1Body },
            { icon: "🕔", title: d.reservations.info2Title, body: d.reservations.info2Body },
            { icon: "🅿️", title: d.reservations.info3Title, body: d.reservations.info3Body },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className="p-6 border border-[rgba(139,26,26,0.15)] text-center"
              style={{ background: "#FFFFFF", boxShadow: "0 2px 20px rgba(26,19,9,0.06)" }}
            >
              <span className="text-3xl block mb-3">{icon}</span>
              <h3
                className="text-[#1C1409] font-semibold mb-2"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {title}
              </h3>
              <p className="text-[#6B5341] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
