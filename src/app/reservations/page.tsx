"use client";

import { useState } from "react";

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

const occasions = [
  "None / Regular Dinner",
  "Birthday Celebration",
  "Anniversary",
  "Business Dinner",
  "Date Night",
  "Family Celebration",
  "Other",
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

export default function ReservationsPage() {
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

  // Get tomorrow's date as minimum
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

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
        <p className="section-label mb-3">Plan Your Evening</p>
        <h1
          className="section-title mb-5"
          style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2.5rem,6vw,4rem)" }}
        >
          Reserve a Table
        </h1>
        <div className="divider-gold-sm mb-5" />
        <p className="text-cream-dark max-w-lg mx-auto text-sm leading-relaxed">
          Reservations are strongly recommended, particularly on weekends.
          For parties of 8 or more, please call us directly to make arrangements.
        </p>
      </section>

      {/* ── FORM / CONFIRMATION ──────────────────────────── */}
      <section className="py-16 px-5 md:px-8 min-h-[60vh]">
        <div className="max-w-2xl mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label" htmlFor="name">Full Name *</label>
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
                  <label className="form-label" htmlFor="guests">Number of Guests *</label>
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
                      <option key={n} value={String(n)} style={{ background: "#1A1309" }}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                    <option value="8+" style={{ background: "#1A1309" }}>8+ (call us)</option>
                  </select>
                </div>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                <div>
                  <label className="form-label" htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(613) 555-0000"
                    value={form.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label" htmlFor="date">Preferred Date *</label>
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
                  <label className="form-label" htmlFor="time">Preferred Time *</label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={form.time}
                    onChange={handleChange}
                    className="form-input"
                    style={{ appearance: "none" }}
                  >
                    <option value="" style={{ background: "#1A1309" }}>Select a time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t} style={{ background: "#1A1309" }}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="form-label" htmlFor="occasion">Occasion</label>
                <select
                  id="occasion"
                  name="occasion"
                  value={form.occasion}
                  onChange={handleChange}
                  className="form-input"
                  style={{ appearance: "none" }}
                >
                  <option value="" style={{ background: "#1A1309" }}>Select an occasion (optional)</option>
                  {occasions.map((o) => (
                    <option key={o} value={o} style={{ background: "#1A1309" }}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Special requests */}
              <div>
                <label className="form-label" htmlFor="requests">Special Requests or Dietary Requirements</label>
                <textarea
                  id="requests"
                  name="requests"
                  rows={4}
                  placeholder="Allergies, high chair needed, preferred seating, wine pairing request..."
                  value={form.requests}
                  onChange={handleChange}
                  className="form-input resize-none"
                />
              </div>

              {/* Notice */}
              <p className="text-cream-dark text-xs leading-relaxed">
                We are open <strong className="text-cream-muted">Tuesday through Saturday, 4:00 PM to 9:00 PM</strong>.
                We are closed on Sundays and Mondays, and on public holidays. A member of our team
                will confirm your reservation by phone or email within 24 hours.
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
                    Sending Request…
                  </span>
                ) : (
                  "Request Reservation"
                )}
              </button>
            </form>
          ) : (
            /* Confirmation */
            <div
              className="text-center p-12 border border-gold/25"
              style={{ background: "linear-gradient(145deg, #2A200D, #1A1309)" }}
            >
              <div className="text-5xl mb-6">✅</div>
              <h2
                className="text-cream text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Reservation Request Received
              </h2>
              <div className="divider-gold-sm mb-6" />
              <p className="text-cream-dark leading-relaxed mb-2">
                Thank you, <strong className="text-cream">{form.name}</strong>! Your reservation
                request for <strong className="text-gold">{form.guests} {Number(form.guests) === 1 ? "guest" : "guests"}</strong>{" "}
                on <strong className="text-gold">{form.date}</strong> at <strong className="text-gold">{form.time}</strong> has been received.
              </p>
              <p className="text-cream-dark text-sm mb-8">
                A member of our team will confirm your booking by phone or email
                within 24 hours. We look forward to welcoming you.
              </p>
              <button onClick={handleReset} className="btn-outline text-sm">
                Make Another Reservation
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── INFO CARDS ───────────────────────────────────── */}
      <section className="py-16 px-5 md:px-8 border-t border-gold/10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: "📞",
              title: "Prefer to Call?",
              body: "For immediate assistance, large parties (8+), or special event inquiries, please reach us by phone.",
            },
            {
              icon: "🕔",
              title: "Hours",
              body: "Tuesday through Saturday, 4:00 PM to 9:00 PM. Closed Sunday & Monday and on public holidays.",
            },
            {
              icon: "🅿️",
              title: "Parking",
              body: "Ample free parking is available on-site. The restaurant is located on Hazeldean Road.",
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className="p-6 border border-gold/15 text-center"
              style={{ background: "linear-gradient(145deg, #1A1309, #0D0A06)" }}
            >
              <span className="text-3xl block mb-3">{icon}</span>
              <h3
                className="text-cream font-semibold mb-2"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {title}
              </h3>
              <p className="text-cream-dark text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
