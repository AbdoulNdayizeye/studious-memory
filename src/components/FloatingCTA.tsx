"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconBag } from "./Icons";

/* Floating purchase button — slides in after the hero, hides near the footer. */
export default function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom = y + window.innerHeight > document.body.scrollHeight - 700;
      setShow(y > window.innerHeight * 0.9 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/collections"
      className={`fixed bottom-6 right-6 z-[90] btn btn-gold !px-6 !py-4 shadow-2xl transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      data-cursor="hover"
    >
      <IconBag className="w-4 h-4" /> Shop the Collection
    </Link>
  );
}
