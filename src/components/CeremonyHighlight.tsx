import { wedding } from "../data/wedding";
import { Corner, Diya } from "./Ornaments";

export default function CeremonyHighlight() {
  const v = wedding.venue;
  return (
    <section aria-labelledby="cer" className="px-5 py-10">
      <div className="relative max-w-4xl mx-auto rounded-3xl text-center text-ivory px-6 py-16 md:py-20 border-2 border-gold shadow-2xl"
        style={{ background: "radial-gradient(ellipse at top,#8a1c2b,#3d0914)" }}>
        <Corner className="absolute top-3 left-3 w-14" /><Corner className="absolute top-3 right-3 w-14 -scale-x-100" />
        <Corner className="absolute bottom-3 left-3 w-14 -scale-y-100" /><Corner className="absolute bottom-3 right-3 w-14 scale-[-1]" />
        <div className="flex justify-center gap-4"><Diya className="w-9" /><Diya className="w-9" /></div>
        <h2 id="cer" className="font-display text-4xl md:text-6xl font-semibold gold-text mt-4">The Wedding Ceremony</h2>
        <p className="mt-6 font-display text-3xl md:text-4xl text-gold-light">{wedding.dateLabel} {wedding.year}</p>
        <p className="mt-2 tracking-[0.3em] uppercase text-sm">{v.time}</p>
        <p className="mt-6 font-display text-2xl md:text-3xl">{v.name}</p>
        <p className="mt-1 text-ivory/80">{v.address}</p>
        <a href={v.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-8">View on Google Maps</a>
      </div>
    </section>
  );
}
