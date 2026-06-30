"use client";
import { useEffect, useState } from "react";
import { Emblem } from "./Brand";

/* Cinematic loading screen: the emblem draws in, a counter climbs to 100,
   then the panel lifts away. Shown once per session. */
export default function Loader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("sorosha-loaded")) {
      const id = requestAnimationFrame(() => setDone(true));
      return () => cancelAnimationFrame(id);
    }
    let n = 0;
    const tick = setInterval(() => {
      n += Math.floor(Math.random() * 9) + 4;
      if (n >= 100) {
        n = 100;
        clearInterval(tick);
        setTimeout(() => {
          setDone(true);
          sessionStorage.setItem("sorosha-loaded", "1");
        }, 450);
      }
      setCount(n);
    }, 90);
    return () => clearInterval(tick);
  }, []);

  return (
    <div className={`loader ${done ? "done" : ""}`} aria-hidden={done}>
      <div className="flex flex-col items-center gap-7">
        <Emblem id="loader-emblem" className="w-20 h-20 float-y" />
        <div className="overflow-hidden">
          <span className="font-display text-3xl tracking-[0.4em] text-bone anim-rise pl-[0.4em]">SOROSHA</span>
        </div>
        <div className="w-44 h-px bg-charcoal-2 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-gold transition-[width] duration-200 ease-out" style={{ width: `${count}%` }} />
        </div>
        <span className="text-[0.7rem] tracking-[0.3em] text-smoke tabular-nums">{count.toString().padStart(3, "0")}</span>
      </div>
    </div>
  );
}
