"use client";
import { useState } from "react";
import Reveal from "../Reveal";
import { FAQ } from "@/lib/content";
import { IconPlus } from "../Icons";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-28 lg:py-36 bg-ink">
      <div className="container-lux grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <span className="eyebrow">Answered</span>
          <h2 className="mt-4 display-xl text-bone">Questions, <span className="gold-text">considered.</span></h2>
          <p className="mt-5 lead">Everything you might wonder before welcoming a SOROSHA into your life.</p>
        </Reveal>

        <div className="lg:col-span-8">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div className="border-b border-white/10">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                  >
                    <span className={`text-lg lg:text-xl font-light transition-colors ${isOpen ? "text-gold" : "text-bone group-hover:text-gold/80"}`}>
                      {item.q}
                    </span>
                    <span className={`shrink-0 text-gold transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>
                      <IconPlus className="w-5 h-5" />
                    </span>
                  </button>
                  <div className={`acc-panel ${isOpen ? "open" : ""}`}>
                    <div>
                      <p className="pb-7 pr-10 text-fog font-light leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
