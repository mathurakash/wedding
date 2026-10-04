import { useEffect, useState } from "react";
import { wedding } from "../data/wedding";
import { Mandala } from "./Ornaments";

const calc = () => {
  const diff = new Date(wedding.ceremonyISO).getTime() - Date.now();
  if (diff <= 0) return null;
  return { Days: Math.floor(diff / 864e5), Hours: Math.floor(diff / 36e5) % 24, Minutes: Math.floor(diff / 6e4) % 60, Seconds: Math.floor(diff / 1e3) % 60 };
};

export default function Countdown() {
  const [t, setT] = useState(calc());
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);
  return (
    <section aria-labelledby="cd" className="relative overflow-hidden text-ivory" style={{ background: "linear-gradient(160deg,#5b0f1f,#3d0914)" }}>
      <Mandala className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmin] max-w-none spin-slow" opacity={0.12} />
      <div className="section text-center reveal">
        <h2 id="cd" className="font-display text-4xl md:text-5xl font-semibold gold-text">The Countdown Begins</h2>
        <p className="mt-2 font-display italic text-gold-light">to {wedding.dateLabel} {wedding.year}</p>
        {t ? (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto" role="timer" aria-live="off">
            {Object.entries(t).map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-gold/50 bg-black/20 py-6">
                <div key={v} className="tick font-display text-5xl md:text-6xl gold-text tabular-nums">{String(v).padStart(2, "0")}</div>
                <div className="mt-2 text-xs tracking-[0.35em] uppercase text-gold-light">{k}</div>
              </div>
            ))}
          </div>
        ) : <p className="mt-10 font-script text-6xl gold-text">Today is the day! ❤️</p>}
      </div>
    </section>
  );
}
