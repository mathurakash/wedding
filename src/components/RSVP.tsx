import { useState, type FormEvent } from "react";
import { wedding } from "../data/wedding";
import { submitRsvp, type RsvpData } from "../lib/rsvpService";
import { googleCalendarUrl, downloadIcs } from "../lib/calendar";
import { Divider } from "./Ornaments";

const empty: RsvpData = { name: "", email: "", phone: "", guests: 1, attending: "yes", meal: wedding.meals[0], message: "" };

export default function RSVP() {
  const [d, setD] = useState<RsvpData>(empty);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const set = <K extends keyof RsvpData>(k: K, v: RsvpData[K]) => setD((p) => ({ ...p, [k]: v }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setState("sending");
    try { await submitRsvp(d); setState("done"); } catch { setState("error"); }
  }

  return (
    <section id="rsvp" className="paper">
      <div className="section max-w-2xl">
        <h2 className="h2 reveal">We Would Love to Celebrate With You</h2>
        <Divider />
        {state === "done" ? (
          <p role="status" className="card text-center font-script text-4xl gold-text py-12">Thank you! We can't wait to celebrate with you. ❤️</p>
        ) : (
          <form onSubmit={onSubmit} className="card reveal space-y-4 mt-8">
            <div><label htmlFor="n" className="block text-sm mb-1">Full Name</label><input id="n" required className="input" value={d.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" /></div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label htmlFor="e" className="block text-sm mb-1">Email</label><input id="e" type="email" required className="input" value={d.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" /></div>
              <div><label htmlFor="p" className="block text-sm mb-1">Phone</label><input id="p" type="tel" className="input" value={d.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" /></div>
            </div>
            <fieldset>
              <legend className="text-sm mb-1">Attending?</legend>
              <div className="flex gap-6">
                {(["yes", "no"] as const).map((v) => (
                  <label key={v} className="flex items-center gap-2"><input type="radio" name="att" checked={d.attending === v} onChange={() => set("attending", v)} className="accent-saffron" />{v === "yes" ? "Yes, joyfully" : "Regretfully, no"}</label>
                ))}
              </div>
            </fieldset>
            {d.attending === "yes" && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label htmlFor="g" className="block text-sm mb-1">Number of Guests</label><input id="g" type="number" min={1} max={10} className="input" value={d.guests} onChange={(e) => set("guests", Math.max(1, Number(e.target.value)))} /></div>
                <div><label htmlFor="m" className="block text-sm mb-1">Meal Preference</label>
                  <select id="m" className="input" value={d.meal} onChange={(e) => set("meal", e.target.value)}>{wedding.meals.map((m) => <option key={m}>{m}</option>)}</select></div>
              </div>
            )}
            <div><label htmlFor="msg" className="block text-sm mb-1">Message</label><textarea id="msg" rows={3} className="input" value={d.message} onChange={(e) => set("message", e.target.value)} /></div>
            {state === "error" && <p role="alert" className="text-royal text-sm">Something went wrong. Please try again.</p>}
            <button className="btn btn-gold w-full" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Confirm Attendance"}</button>
          </form>
        )}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a className="btn btn-ghost" href={googleCalendarUrl()} target="_blank" rel="noopener noreferrer">Add to Google Calendar</a>
          <button className="btn btn-ghost" onClick={downloadIcs}>Download Calendar Event</button>
        </div>
      </div>
    </section>
  );
}
