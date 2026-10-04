import { wedding } from "../data/wedding";
import { Mandala, Lotus } from "./Ornaments";

function Profile({ role, p, rel }: { role: string; p: typeof wedding.bride; rel: string }) {
  return (
    <div className="text-center reveal">
      <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto">
        <Mandala className="absolute -inset-8 spin-slow" opacity={0.5} />
        <img src={p.image} alt={`${role} ${p.name}`} loading="lazy" className="relative w-full h-full rounded-full object-cover border-4 border-gold shadow-xl" />
      </div>
      <p className="mt-6 text-xs tracking-[0.4em] uppercase text-saffron">{role}</p>
      <h3 className="font-script text-5xl gold-text mt-1">{p.name}</h3>
      <p className="font-display italic text-lg text-maroon/80 mt-2">{rel} of {p.parents}</p>
    </div>
  );
}

export default function Couple() {
  return (
    <section id="couple" className="section">
      <h2 className="h2 mb-14 reveal">The Bride &amp; Groom</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8">
        <Profile role="The Groom" p={wedding.groom} rel="Son" />
        <div className="flex md:flex-col items-center gap-3 reveal" aria-hidden="true">
          <Lotus className="w-14" /><span className="text-4xl floaty">❤️</span><Lotus className="w-14" />
        </div>
        <Profile role="The Bride" p={wedding.bride} rel="Daughter" />
      </div>
    </section>
  );
}
