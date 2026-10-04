import { wedding } from "../data/wedding";

const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
function range() {
  const s = new Date(wedding.ceremonyISO);
  const e = new Date(s.getTime() + wedding.ceremonyDurationHours * 3600_000);
  return { s, e };
}
const title = () => `Wedding of ${wedding.groom.name} & ${wedding.bride.name}`;
const desc = () => `${wedding.tagline} Join us for the wedding ceremony. ${wedding.hashtag}`;
const where = () => `${wedding.venue.name}, ${wedding.venue.address}`;

export function googleCalendarUrl() {
  const { s, e } = range();
  const p = new URLSearchParams({ action: "TEMPLATE", text: title(), dates: `${fmt(s)}/${fmt(e)}`, details: desc(), location: where() });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}

export function downloadIcs() {
  const { s, e } = range();
  const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Wedding Invitation//EN", "BEGIN:VEVENT",
    `UID:${Date.now()}@wedding-invitation`, `DTSTAMP:${fmt(new Date())}`, `DTSTART:${fmt(s)}`, `DTEND:${fmt(e)}`,
    `SUMMARY:${title()}`, `DESCRIPTION:${desc()}`, `LOCATION:${where().replace(/,/g, "\\,")}`, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  const a = document.createElement("a");
  a.href = url; a.download = "wedding.ics"; a.click();
  URL.revokeObjectURL(url);
}
