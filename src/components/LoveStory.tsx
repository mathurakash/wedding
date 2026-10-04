import { wedding } from "../data/wedding";
import { Divider } from "./Ornaments";

export default function LoveStory() {
  return (
    <section id="story" className="section">
      <h2 className="h2 reveal">Our Story</h2>
      <Divider />
      <ol className="relative mt-12 max-w-3xl mx-auto">
        <span className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-saffron to-gold" aria-hidden="true" />
        {wedding.story.map((s, i) => (
          <li key={s.title} className={`reveal relative pl-12 md:pl-0 pb-12 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-12 md:text-left" : "md:pr-12 md:text-right"}`}>
            <span className={`absolute left-[10px] md:left-auto ${i % 2 ? "md:-left-[6px]" : "md:-right-[6px]"} top-2 w-3 h-3 rounded-full bg-saffron ring-4 ring-gold/40`} aria-hidden="true" />
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-maroon">{s.title}</h3>
            <p className="font-display italic text-lg text-maroon-deep/75 mt-1">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
