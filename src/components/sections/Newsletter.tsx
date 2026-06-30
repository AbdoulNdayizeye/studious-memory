"use client";
import { useState } from "react";
import Reveal from "../Reveal";
import { Emblem } from "../Brand";
import { IconArrow, IconCheck } from "../Icons";

export default function Newsletter() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-ink-2">
      <div className="absolute inset-0 radial-spot" />
      <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-screen" />
      <div className="container-lux relative">
        <Reveal className="max-w-2xl mx-auto text-center">
          <Emblem id="news-emblem" className="w-14 h-14 mx-auto mb-7 float-y" />
          <span className="eyebrow">Membership</span>
          <h2 className="mt-4 display-xl text-bone">Become Part of the <span className="gold-text">SOROSHA Circle.</span></h2>
          <p className="mt-5 lead">
            Private previews of new releases, invitations to atelier events, and first access to
            limited editions — reserved for those on the inside.
          </p>

          {sent ? (
            <div className="mt-10 inline-flex items-center gap-3 glass-gold px-7 py-4 text-gold-light">
              <IconCheck className="w-5 h-5" /> Welcome to the Circle. Watch your inbox.
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" aria-label="Email address" className="input-lux flex-1"
              />
              <button type="submit" className="btn btn-gold shrink-0">Join Now <IconArrow className="w-4 h-4" /></button>
            </form>
          )}
          <p className="mt-5 text-xs text-smoke tracking-wide">No noise. Only what matters. Unsubscribe anytime.</p>
        </Reveal>
      </div>
    </section>
  );
}
