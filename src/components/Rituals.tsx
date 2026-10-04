import type { ReactNode } from "react";
import { wedding } from "../data/wedding";
import { Divider } from "./Ornaments";

function Person({ groom }: { groom?: boolean }) {
  return (
    <g>
      <path d="M-34 90 L-24 -10 Q0 -24 24 -10 L34 90Z" fill={groom ? "#f1e5c8" : "#b3202f"} stroke="#c9a04a" strokeWidth="2" />
      <path d={groom ? "M-22 -8 L22 40" : "M-30 78 Q0 58 30 78"} stroke="#c9a04a" strokeWidth="3" fill="none" />
      <circle cy="-40" r="17" fill="#e3b48a" />
      {groom
        ? <path d="M-20 -48 Q0 -84 20 -48 Q0 -40 -20 -48Z" fill="#e8892b" stroke="#c9a04a" />
        : <path d="M-23 -32 Q-26 -72 0 -72 Q26 -72 23 -32 Q16 -56 0 -56 Q-16 -56 -23 -32Z" fill="#8a1c2b" stroke="#c9a04a" />}
      {!groom && <circle cy="-54" r="2.500" fill="#e6c776" />}
    </g>
  );
}

const Mandap = () => (
  <g fill="none" stroke="#c9a04a" strokeLinecap="round">
    <path d="M170 350V150Q400 10 630 150V350" strokeWidth="6" />
    <path d="M170 150Q400 10 630 150" stroke="#e8892b" strokeWidth="9" strokeDasharray="1 13" />
    <path d="M140 350H660" strokeWidth="4" />
  </g>
);

const Sparks = () => (
  <g fill="#e6c776">
    {[[120, 80], [690, 70], [90, 250], [720, 240], [400, 40], [250, 60], [560, 50]].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="3" className="twk" style={{ animationDelay: `${i * 0.4}s` }} />
    ))}
  </g>
);

function Stage({ title, desc, wide, children }: { title: string; desc: string; wide?: boolean; children: ReactNode }) {
  return (
    <figure className={`stage reveal card !p-3 md:!p-4 ${wide ? "md:col-span-2" : ""}`}>
      <svg viewBox="0 0 800 400" className="w-full rounded-xl" role="img" aria-label={title}
        style={{ background: "radial-gradient(ellipse at 50% 30%,#8a1c2b,#3d0914)" }}>
        <Sparks />{children}
      </svg>
      <figcaption className="text-center pt-4 pb-2">
        <h3 className="font-display text-3xl font-semibold text-maroon">{title}</h3>
        <p className="font-display italic text-lg text-maroon-deep/75">{desc}</p>
      </figcaption>
    </figure>
  );
}

const label = (x: number, t: string) => <text x={x} y="385" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="26" fill="#e6c776">{t}</text>;

export default function Rituals() {
  const g = wedding.groom.name, b = wedding.bride.name;
  const ring = (x: number, ch: string) => (
    <g transform={`translate(${x},200)`}>
      <circle r="46" fill="none" stroke="#e6c776" strokeWidth="12" />
      <circle r="46" fill="none" stroke="#fff3c4" strokeWidth="2" opacity=".6" />
      <path d="M-11 -54 L0 -70 L11 -54 L0 -42Z" fill="#fff" stroke="#e6c776" />
      <text textAnchor="middle" y="12" fontFamily="Great Vibes, cursive" fontSize="38" fill="#e6c776">{ch}</text>
    </g>
  );
  return (
    <section id="rituals" className="relative paper">
      <div className="section">
        <h2 className="h2 reveal">The Sacred Moments</h2>
        <Divider />
        <p className="text-center font-display italic text-xl text-maroon-deep/75 max-w-xl mx-auto reveal">A glimpse of the beautiful rituals that will unite {g} &amp; {b}.</p>
        <div className="mt-12 grid md:grid-cols-2 gap-6">

          <Stage wide title="The Grand Entry" desc={`${g} arrives with the baraat, ${b} walks in beneath a canopy of blossoms.`}>
            <Mandap />
            <g transform="translate(290,250)"><g className="a-walkL"><Person groom /></g></g>
            <g transform="translate(510,250)"><g className="a-walkR">
              <path d="M-62 -92 Q0 -128 62 -92 Q0 -108 -62 -92Z" fill="#f0a63a" stroke="#e8892b" strokeWidth="3" />
              <Person />
            </g></g>
            <text className="a-pop" x="400" y="150" textAnchor="middle" fontSize="48" style={{ animationDelay: "2.6s" }}>❤️</text>
            {label(290, g)}{label(510, b)}
          </Stage>

          <Stage title="Jaimala · Varmala" desc="Garlands are exchanged, and two families become one.">
            <g transform="translate(260,250)"><Person groom /></g>
            <g transform="translate(540,250)"><Person /></g>
            <g transform="translate(260,212)"><g className="a-garA" style={{ animationDelay: "0.5s" }}>
              <ellipse rx="27" ry="32" fill="none" stroke="#f0a63a" strokeWidth="10" strokeDasharray="2 8" strokeLinecap="round" />
              <circle cy="40" r="6" fill="#e8892b" />
            </g></g>
            <g transform="translate(540,212)"><g className="a-garB" style={{ animationDelay: "2.2s" }}>
              <ellipse rx="27" ry="32" fill="none" stroke="#e8892b" strokeWidth="10" strokeDasharray="2 8" strokeLinecap="round" />
              <circle cy="40" r="6" fill="#f0a63a" />
            </g></g>
            {label(260, g)}{label(540, b)}
          </Stage>

          <Stage title="Ring Ceremony" desc="Two rings, one promise, a love that has no end.">
            <g className="a-ringL" style={{ animationDelay: "0.3s" }}>{ring(362, g[0])}</g>
            <g className="a-ringR" style={{ animationDelay: "0.3s" }}>{ring(438, b[0])}</g>
            {[[300, 110], [500, 110], [400, 300], [330, 290], [470, 290]].map(([x, y], i) => (
              <path key={i} className="twk" style={{ animationDelay: `${2 + i * 0.3}s` }} transform={`translate(${x},${y})`} d="M0 -12 L3 -3 12 0 3 3 0 12 -3 3 -12 0 -3 -3Z" fill="#fff3c4" />
            ))}
          </Stage>

          <Stage wide title="Saat Phere · Saptapadi" desc="Seven steps around the sacred fire, seven promises for seven lifetimes.">
            <g transform="translate(400,200)">
              <g className="a-orbit">
                <circle r="125" fill="none" stroke="#c9a04a" strokeDasharray="3 8" opacity=".7" />
                {Array.from({ length: 7 }, (_, i) => {
                  const a = (i / 7) * Math.PI * 2;
                  return <circle key={i} cx={Math.cos(a) * 125} cy={Math.sin(a) * 125} r="10" fill={i % 2 ? "#e8892b" : "#e6c776"} />;
                })}
              </g>
              <circle r="60" fill="#e8892b" opacity=".22" className="glow" />
              <path className="flame" d="M0 -55 C12 -36 24 -24 24 -8 A24 24 0 0 1 -24 -8 C-24 -24 -12 -36 0 -55Z" fill="#f6b042" />
              <path className="flame" d="M0 -30 C6 -20 12 -14 12 -4 A12 12 0 0 1 -12 -4 C-12 -14 -6 -20 0 -30Z" fill="#fff3c4" />
              <path d="M-40 30 H40 L28 48 H-28Z" fill="#8a1c2b" stroke="#c9a04a" strokeWidth="2" />
            </g>
          </Stage>
        </div>
      </div>
    </section>
  );
}
