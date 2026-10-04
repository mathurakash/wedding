import { wedding } from "../data/wedding";
import { Divider } from "./Ornaments";

export default function Footer() {
  return (
    <footer className="relative text-center text-ivory px-5 pt-16 pb-12" style={{ background: "linear-gradient(180deg,#5b0f1f,#3d0914)" }}>
      <div className="absolute top-0 inset-x-0 h-2" style={{ background: "repeating-linear-gradient(90deg,#c9a04a 0 10px,#8a1c2b 10px 20px)" }} aria-hidden="true" />
      <p className="font-script text-5xl md:text-6xl gold-text">{wedding.groom.name} ❤️ {wedding.bride.name}</p>
      <p className="font-display text-2xl text-gold-light mt-3">{wedding.dateLabel} {wedding.year}</p>
      <Divider light />
      <p className="font-display italic text-xl">“With love, laughter, and happily ever after.”</p>
      <p className="mt-4 text-sm tracking-widest uppercase text-gold-light/90">Thank you for being a part of our special day.</p>
    </footer>
  );
}
