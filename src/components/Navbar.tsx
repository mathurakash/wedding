import { useEffect, useState } from "react";

import { wedding } from "../data/wedding";

const links = [["Home", "#home"], ["Our Story", "#story"], ["Events", "#events"], ["Gallery", "#gallery"], ["Venue", "#venue"], ["RSVP", "#rsvp"]].filter(([l]) => l !== "RSVP" || wedding.showRsvp);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => { const f = () => setSolid(window.scrollY > 40); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  return (
    <nav aria-label="Main" className={`fixed top-0 inset-x-0 z-50 transition duration-500 ${solid || open ? "bg-maroon-deep/95 backdrop-blur shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#home" className="font-script text-3xl gold-text">❖</a>
        <ul className="hidden md:flex gap-8">
          {links.map(([l, h]) => <li key={h}><a href={h} className="text-sm tracking-[0.25em] uppercase text-gold-light hover:text-white transition">{l}</a></li>)}
        </ul>
        <button className="md:hidden text-gold-light text-3xl" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
      </div>
      {open && (
        <ul className="md:hidden px-5 pb-5 space-y-3 text-center">
          {links.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-2 tracking-[0.25em] uppercase text-gold-light">{l}</a></li>)}
        </ul>
      )}
    </nav>
  );
}
