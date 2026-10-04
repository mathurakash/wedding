import { wedding } from "../data/wedding";
import { Divider, Mandala } from "./Ornaments";

function Ganesha() {
  return (
    <svg viewBox="-60 -60 120 120" className="w-28 mx-auto" role="img" aria-label="Lord Ganesha symbol" fill="none" stroke="#c9a04a" strokeWidth="1.6">
      <circle r="52" strokeDasharray="2 4" />
      <path d="M0 -30C-22 -30-30 -14-26 4-24 16-14 22-8 24-10 34-4 42 4 40 10 38 8 30 6 24 14 22 24 16 26 4 30-14 22-30 0-30z" fill="#8a1c2b" />
      <path d="M-26 -4C-44 -8-48 12-34 20-28 24-22 16-24 6zM26 -4C44 -8 48 12 34 20 28 24 22 16 24 6z" fill="#e8892b" fillOpacity=".5" />
      <path d="M-12 -30L0 -46 12 -30z" fill="#c9a04a" /><circle cx="-9" cy="-6" r="2" fill="#c9a04a" /><circle cx="9" cy="-6" r="2" fill="#c9a04a" />
      <path d="M-5 -16L0 -22 5 -16" />
    </svg>
  );
}

export default function GaneshBlessing() {
  return (
    <section id="blessing" className="paper relative overflow-hidden">
      <Mandala className="absolute -right-32 -top-20 w-96" opacity={0.15} />
      <div className="section text-center max-w-3xl reveal">
        <Ganesha />
        <h2 className="h2 mt-6">With the blessings of Lord Ganesha</h2>
        <Divider />
        <p className="font-display italic text-xl md:text-2xl leading-relaxed text-maroon-deep/85">
          “With immense joy and the blessings of our families, we invite you to celebrate the beginning of a beautiful new chapter in the lives of”
        </p>
        <p className="mt-8 font-script text-5xl md:text-6xl gold-text">{wedding.groom.name} &amp; {wedding.bride.name}</p>
      </div>
    </section>
  );
}
