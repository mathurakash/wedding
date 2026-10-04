import { wedding } from "../data/wedding";
import { Divider } from "./Ornaments";
import { googleCalendarUrl, downloadIcs } from "../lib/calendar";

export default function Venue() {
  const v = wedding.venue;
  const d = wedding.dressCode;
  return (
    <section id="venue" className="section text-center">
      <h2 className="h2 reveal">The Celebration Awaits</h2>
      <Divider />
      <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {wedding.venues.map((x) => (
          <div key={x.name} className="card reveal">
            <p className="text-xs tracking-[0.3em] uppercase text-saffron">{x.label}</p>
            <p className="font-display text-3xl font-semibold mt-2">{x.name}</p>
            <p className="mt-1 text-maroon/80">{x.address}</p>
            <div className="mt-5 flex flex-wrap gap-3 justify-center">
              <a href={x.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Open in Google Maps</a>
              <a href={x.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Get Directions</a>
            </div>
          </div>
        ))}
      </div>
      {v.embedUrl && <iframe title="Venue map" src={v.embedUrl} loading="lazy" className="mt-8 w-full h-80 rounded-2xl border-2 border-gold" referrerPolicy="no-referrer-when-downgrade" />}

      {!wedding.showRsvp && (
        <div className="mt-12 reveal">
          <h3 className="font-display text-3xl font-semibold">Save the Date</h3>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a className="btn btn-ghost" href={googleCalendarUrl()} target="_blank" rel="noopener noreferrer">Add to Google Calendar</a>
            <button className="btn btn-ghost" onClick={downloadIcs}>Download Calendar Event</button>
          </div>
        </div>
      )}

      {d.enabled && (
        <div className="card mt-16 max-w-xl mx-auto reveal">
          <h3 className="font-display text-3xl font-semibold">Dress Code</h3>
          <p className="text-3xl mt-3 tracking-widest" aria-hidden="true">{d.icons.join(" ")}</p>
          <p className="font-display italic text-xl mt-2">{d.text}</p>
        </div>
      )}

      <div className="mt-16 reveal">
        <h3 className="font-display text-3xl font-semibold">Celebrate With Us</h3>
        <p className="font-script text-5xl gold-text mt-3">{wedding.hashtag}</p>
        <p className="font-display italic text-lg mt-2">Share your favorite moments with us.</p>
      </div>
    </section>
  );
}
