"use client";
import { useState } from "react";
import { IconArrow, IconCheck } from "./Icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="glass-gold p-10 text-center">
        <IconCheck className="w-8 h-8 text-gold mx-auto mb-4" />
        <h3 className="font-display text-3xl text-bone tracking-wide">Message received.</h3>
        <p className="mt-3 text-fog font-light">Thank you for reaching out. A member of our atelier will be in touch within one business day.</p>
      </div>
    );
  }
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[0.66rem] tracking-[0.2em] uppercase text-smoke mb-2">First Name</label>
          <input required className="input-lux" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-[0.66rem] tracking-[0.2em] uppercase text-smoke mb-2">Last Name</label>
          <input required className="input-lux" placeholder="Your surname" />
        </div>
      </div>
      <div>
        <label className="block text-[0.66rem] tracking-[0.2em] uppercase text-smoke mb-2">Email</label>
        <input type="email" required className="input-lux" placeholder="you@example.com" />
      </div>
      <div>
        <label className="block text-[0.66rem] tracking-[0.2em] uppercase text-smoke mb-2">How can we help?</label>
        <textarea required rows={5} className="input-lux resize-none" placeholder="Better yet, share your ideas with us…" />
      </div>
      <button type="submit" className="btn btn-gold w-full">Drop Us a Line <IconArrow className="w-4 h-4" /></button>
    </form>
  );
}
