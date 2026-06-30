"use client";
import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/* Scroll-triggered reveal. Adds `.is-visible` when the element enters
   the viewport. Lightweight: one IntersectionObserver per element,
   disconnected after first reveal. Honours prefers-reduced-motion via CSS. */
export default function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  once = true,
  ...rest
}: {
  children: ReactNode;
  as?: ElementType;
  variant?: "up" | "scale";
  delay?: number;
  className?: string;
  once?: boolean;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const baseCls = variant === "scale" ? "reveal-scale" : "reveal";
  return (
    <Tag
      ref={ref}
      className={`${baseCls} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
