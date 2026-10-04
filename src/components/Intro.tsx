import { useEffect, useState } from "react";
import { wedding } from "../data/wedding";
import { Mandala } from "./Ornaments";

const seen = () => { try { return !!sessionStorage.getItem("opened"); } catch { return false; } };

export default function Intro() {
  const [phase, setPhase] = useState<"closed" | "opening" | "gone">(seen() ? "gone" : "closed");
  useEffect(() => { document.body.style.overflow = phase === "gone" ? "" : "hidden"; return () => { document.body.style.overflow = ""; }; }, [phase]);
  if (phase === "gone") return null;
  const op = phase === "opening";
  const open = () => {
    try { sessionStorage.setItem("opened", "1"); } catch { /* ignore */ }
    window.dispatchEvent(new Event("invite:open"));
    setPhase("opening");
    setTimeout(() => setPhase("gone"), 1500);
  };
  const panel = "absolute inset-y-0 w-1/2 bg-maroon transition-transform duration-[1400ms] ease-in-out motion-reduce:transition-none";
  return (
    <div className="fixed inset-0 z-[300]" role="dialog" aria-label="Wedding invitation welcome">
      <div className={`${panel} left-0 border-r-2 border-gold`} style={{ transform: op ? "translateX(-100%)" : "none" }} />
      <div className={`${panel} right-0 border-l-2 border-gold`} style={{ transform: op ? "translateX(100%)" : "none" }} />
      <div className={`absolute inset-0 flex flex-col items-center justify-center text-center text-ivory px-6 transition-opacity duration-700 ${op ? "opacity-0" : ""}`}>
        <Mandala className="absolute w-[110vmin] spin-slow" opacity={0.3} />
        <p className="relative font-deva text-2xl gold-text">॥ श्री गणेशाय नमः ॥</p>
        <p className="relative mt-6 font-display italic text-xl text-gold-light">You are cordially invited to the wedding of</p>
        <p className="relative mt-3 font-script text-6xl md:text-7xl gold-text">{wedding.groom.name} &amp; {wedding.bride.name}</p>
        <p className="relative mt-3 font-display text-2xl tracking-widest text-gold-light">{wedding.dateLabel} {wedding.year}</p>
        <button autoFocus onClick={open} className="btn btn-gold relative mt-10">Open Invitation</button>
      </div>
    </div>
  );
}
