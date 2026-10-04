import { useCallback, useEffect, useState } from "react";
import { wedding } from "../data/wedding";
import { Divider } from "./Ornaments";

export default function Gallery() {
  const imgs = wedding.gallery;
  const [open, setOpen] = useState<number | null>(null);
  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + imgs.length) % imgs.length)), [imgs.length]);

  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open, go]);

  return (
    <section id="gallery" className="paper">
      <div className="section">
        <h2 className="h2 reveal">Our Moments</h2>
        <Divider />
        <div className="mt-10 columns-2 md:columns-3 gap-4">
          {imgs.map((src, i) => (
            <button key={src} onClick={() => setOpen(i)} aria-label={`Open photo ${i + 1}`}
              className="reveal group block w-full mb-4 overflow-hidden rounded-xl border-2 border-gold/60 shadow-lg break-inside-avoid">
              <img src={src} alt={`Couple moment ${i + 1}`} loading="lazy" className={`w-full object-cover transition duration-700 group-hover:scale-110 ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`} />
            </button>
          ))}
        </div>
      </div>
      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-[100] bg-maroon-deep/95 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          <button onClick={() => setOpen(null)} aria-label="Close" className="absolute top-4 right-5 text-4xl text-gold-light">×</button>
          <button onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous photo" className="absolute left-3 md:left-8 text-5xl text-gold-light">‹</button>
          <img src={imgs[open]} alt={`Couple moment ${open + 1}`} onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-full rounded-lg border-2 border-gold shadow-2xl" />
          <button onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next photo" className="absolute right-3 md:right-8 text-5xl text-gold-light">›</button>
        </div>
      )}
    </section>
  );
}
