import { wedding } from "../data/wedding";
import { Divider } from "./Ornaments";

export default function Events() {
  return (
    <section id="events" className="paper">
      <div className="section">
        <h2 className="h2 reveal">Wedding Celebrations</h2>
        <Divider />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wedding.events.map((e) => {
            const main = e.id === "wedding";
            return (
              <article key={e.id} className={`card reveal text-center ${main ? "ring-2 ring-saffron/60 bg-gradient-to-b from-saffron/10 to-white/60" : ""}`}>
                <span className="inline-block text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-full bg-maroon text-gold-light">{e.side}</span>
                <div className="text-5xl mt-3" aria-hidden="true">{e.icon}</div>
                <h3 className="font-display text-3xl font-semibold mt-2">{e.title}</h3>
                <dl className="mt-3 space-y-1 text-sm">
                  <div><dt className="sr-only">Date</dt><dd className="font-medium">{e.date}</dd></div>
                  <div><dt className="sr-only">Time</dt><dd>{e.time}</dd></div>
                  <div><dt className="sr-only">Venue</dt><dd>{e.venue}</dd></div>
                </dl>
                <p className="font-display italic text-lg text-maroon/75 mt-3">{e.description}</p>
                <a href={e.mapsUrl} target={e.mapsUrl.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="btn btn-ghost mt-5">View Location</a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
