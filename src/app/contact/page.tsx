import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Emblem } from "@/components/Brand";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SOROSHA — based in Ontario, Canada. Book a private viewing, ask about a timepiece, or simply share your ideas with us.",
};

const DETAILS = [
  { label: "Atelier", value: "Ontario, Canada" },
  { label: "Telephone", value: "+1 613 900 7544", href: "tel:+16139007544" },
  { label: "Online", value: "sorosha.co", href: "https://sorosha.co" },
  { label: "Hours", value: "Mon – Sat · 9am – 7pm ET" },
];

export default function ContactPage() {
  return (
    <section className="relative pt-44 pb-28 overflow-hidden bg-ink min-h-screen">
      <div className="absolute inset-0 radial-spot" />
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="container-lux relative grid lg:grid-cols-2 gap-16">
        {/* Left */}
        <Reveal>
          <span className="eyebrow">Contact Us</span>
          <h1 className="mt-5 display-hero text-bone leading-[0.9]">Let&apos;s <span className="gold-text">talk.</span></h1>
          <p className="mt-6 lead max-w-md">
            Whether you are ready to choose your timepiece or simply curious about the craft —
            better yet, share your ideas with us. We would love to hear from you.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-px bg-white/8 border border-white/8 max-w-md">
            {DETAILS.map((d) => (
              <div key={d.label} className="bg-ink p-6">
                <span className="block text-[0.62rem] tracking-[0.2em] uppercase text-smoke mb-2">{d.label}</span>
                {d.href ? (
                  <a href={d.href} className="text-bone hover:text-gold transition-colors font-light">{d.value}</a>
                ) : (
                  <span className="text-bone font-light">{d.value}</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-4 text-smoke">
            <Emblem id="contact-emblem" className="w-12 h-12" />
            <p className="text-sm font-light max-w-xs">Every enquiry is read by a person, not a queue. Expect a reply within one business day.</p>
          </div>
        </Reveal>

        {/* Right — form */}
        <Reveal delay={120}>
          <div className="glass p-8 lg:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
