import { wedding } from "../data/wedding";
import { Mandala, Diya, Marigold, Corner } from "./Ornaments";

const petals = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 37) % 100}%`, size: 10 + (i % 4) * 4, dur: 11 + (i % 6) * 2, delay: -(i * 1.7),
  dx: `${(i % 2 ? 1 : -1) * (40 + (i % 5) * 20)}px`, color: i % 3 ? "#e8892b" : "#f0a63a",
}));
const sparks = Array.from({ length: 22 }, (_, i) => ({ left: `${(i * 53) % 100}%`, top: `${(i * 29) % 100}%`, s: 2 + (i % 3), d: 3 + (i % 5), delay: -(i % 7) }));

export default function Hero() {
  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden text-center text-ivory"
      style={{ background: "radial-gradient(ellipse at 50% 30%, #8a1c2b 0%, #5b0f1f 55%, #3d0914 100%)" }}>
      <Mandala className="absolute w-[150vmin] max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 spin-slow" opacity={0.22} />
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {petals.map((p, i) => <span key={i} className="petal" style={{ left: p.left, width: p.size, height: p.size, background: p.color, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`, ["--dx" as string]: p.dx }} />)}
        {sparks.map((p, i) => <span key={i} className="spark" style={{ left: p.left, top: p.top, width: p.s, height: p.s, animationDuration: `${p.d}s`, animationDelay: `${p.delay}s` }} />)}
      </div>
      <Corner className="absolute top-4 left-4 w-16 md:w-24" />
      <Corner className="absolute top-4 right-4 w-16 md:w-24 -scale-x-100" />
      <Corner className="absolute bottom-4 left-4 w-16 md:w-24 -scale-y-100" />
      <Corner className="absolute bottom-4 right-4 w-16 md:w-24 scale-[-1]" />
      <Marigold className="absolute -left-6 top-1/3 w-24 opacity-70 floaty hidden md:block" />
      <Marigold className="absolute -right-6 top-1/2 w-24 opacity-70 floaty hidden md:block" />

      <div className="relative z-10 px-6 py-24 max-w-3xl hero-in">
        <p className="font-deva text-xl md:text-2xl gold-text">॥ श्री गणेशाय नमः ॥</p>
        <p className="mt-6 font-display italic text-lg md:text-xl text-gold-light tracking-wide">Together with their families</p>
        <h1 className="mt-4 font-script text-6xl sm:text-7xl md:text-8xl leading-tight gold-text">
          {wedding.groom.name}
          <span className="block text-3xl md:text-4xl text-saffron my-1" aria-label="and">❤️</span>
          {wedding.bride.name}
        </h1>
        <p className="mt-4 font-display italic text-lg md:text-xl text-ivory/90">are getting married</p>
        <div className="mt-8">
          <p className="font-display text-5xl md:text-7xl font-semibold tracking-wider gold-text">{wedding.dateLabel}</p>
          <p className="font-display text-2xl md:text-3xl tracking-[0.5em] text-gold-light mt-1">{wedding.year}</p>
        </div>
        <p className="mt-8 font-display italic text-lg md:text-2xl text-ivory/85">“{wedding.tagline}”</p>
        <div className="mt-8 flex justify-center gap-6"><Diya /><Diya /><Diya /></div>
      </div>
      <a href="#blessing" aria-label="Scroll down" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold-light floaty text-2xl">⌄</a>
    </header>
  );
}
