// ============================================================
//  ALL wedding-specific content lives here. Edit freely.
// ============================================================
export interface WeddingEvent {
  id: string; icon: string; title: string; date: string; time: string;
  venue: string; description: string; mapsUrl: string; side: string;
}
const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const dir = (q: string) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;

const FARM = "Arun Dev Farm, Village Majri, Post Office Karala, Delhi 110081";
const MAJRI = "Village Majri, Delhi 110081";
const KUTUB = "Kutubgarh, Delhi 110081";

export const wedding = {
  groom: { name: "Akash", parents: "Sh. Ravinder Mathur & Smt. Kamlesh", image: "/images/groom.JPG" },
  bride: { name: "Richa", parents: "Sh. Sanjay Kumar & Smt. Savita", image: "/images/bride.JPG" },

  year: 2026,
  dateLabel: "20 November",
  // Countdown target = Baraat departure, 20 Nov 6:00 PM IST. Remove "+05:30" to use each viewer's local time.
  ceremonyISO: "2026-11-20T18:00:00+05:30",
  ceremonyDurationHours: 5,

  tagline: "Two hearts, two families, one beautiful beginning.",

  // Main wedding venue (bride's side) used by highlight section + calendar
  venue: {
    name: "Kutubgarh (Bride's Side)",
    address: KUTUB,
    time: "Baraat departs Village Majri at 6:00 PM",
    mapsUrl: maps(KUTUB),
    directionsUrl: dir(KUTUB),
    embedUrl: "", // paste a Google Maps embed src to show a map
  },

  venues: [
    { label: "Groom's Side · 19 November", name: "Arun Dev Farm", address: "Village Majri, Post Office Karala, Delhi 110081", mapsUrl: maps(FARM), directionsUrl: dir(FARM) },
    { label: "Bride's Side · 20 November", name: "Kutubgarh", address: KUTUB, mapsUrl: maps(KUTUB), directionsUrl: dir(KUTUB) },
  ],

  events: [
    { id: "mehndi", icon: "🪷", title: "Mehndi", date: "[DATE]", time: "[TIME]", venue: "[VENUE]", description: "An afternoon of henna, music and laughter.", mapsUrl: "#venue", side: "Details to be announced" },
    { id: "sangeet", icon: "🥁", title: "Sangeet", date: "[DATE]", time: "[TIME]", venue: "[VENUE]", description: "A night of song, dance and celebration.", mapsUrl: "#venue", side: "Details to be announced" },
    { id: "haldi", icon: "🕉️", title: "Haldi", date: "[DATE]", time: "[TIME]", venue: "[VENUE]", description: "A golden blessing before the big day.", mapsUrl: "#venue", side: "Details to be announced" },
    { id: "dinner", icon: "🍽️", title: "Dinner", date: "19 November", time: "6:00 PM", venue: "Arun Dev Farm, Village Majri", description: "An evening of good food, family and warm hospitality.", mapsUrl: maps(FARM), side: "Groom's Side" },
    { id: "lagan", icon: "🪔", title: "Lagan Sagai", date: "19 November", time: "7:00 PM", venue: "Arun Dev Farm, Village Majri", description: "Tilak, shagun and blessings to begin the celebrations.", mapsUrl: maps(FARM), side: "Groom's Side" },
    { id: "ghurchari", icon: "🐎", title: "Ghurchari", date: "20 November", time: "5:00 PM", venue: "Village Majri, Delhi", description: "The groom mounts the mare, blessed by loving family.", mapsUrl: maps(MAJRI), side: "Groom's Side" },
    { id: "barat", icon: "🥁", title: "Departure of Baraat", date: "20 November", time: "6:00 PM", venue: "Village Majri, Delhi", description: "Dhol, dance and joy as the baraat sets off.", mapsUrl: maps(MAJRI), side: "Groom's Side" },
    { id: "wedding", icon: "💍", title: "Wedding Ceremony", date: "20 November", time: "On arrival of Baraat", venue: "Kutubgarh, Delhi", description: "Milni, Jaimala, ring exchange and the sacred pheras.", mapsUrl: maps(KUTUB), side: "Bride's Side" },
    { id: "reception", icon: "🎉", title: "Reception", date: "[DATE]", time: "[TIME]", venue: "[VENUE]", description: "Dinner, blessings and a toast to forever.", mapsUrl: "#venue", side: "Details to be announced" },
  ] as WeddingEvent[],

  story: [
    { title: "The First Meeting", text: "Sometimes the most beautiful stories begin unexpectedly." },
    { title: "The Beginning", text: "Two strangers became friends, sharing little moments that felt like home." },
    { title: "The Journey", text: "Friendship slowly turned into something more." },
    { title: "The Proposal", text: "And then came the question that changed everything." },
    { title: "Forever Begins", text: "Now, we begin the next chapter together." },
  ],

  gallery: ["/images/couple-1.svg", "/images/couple-2.svg", "/images/couple-3.svg", "/images/couple-4.svg", "/images/couple-5.svg", "/images/couple-6.svg"],

  families: {
    groom: { title: "Groom's Family", names: "Sh. Ravinder Mathur & Smt. Kamlesh", address: "R/o Village Majri, Delhi 110081" },
    bride: { title: "Bride's Family", names: "Sh. Sanjay Kumar & Smt. Savita", address: "R/o Kutubgarh, Delhi 110081" },
  },

  dressCode: { enabled: true, text: "Traditional Indian / Festive Wear", icons: ["👗", "🕺", "🪷", "✨"] },
  hashtag: "#AkashWedsRicha",
  music: { src: "/music/wedding-song.mp3" },
  rsvpEndpoint: "", // JSON POST endpoint; "" = save in localStorage only
  showRsvp: false, // set true to bring back the RSVP section + nav link
  meals: ["Vegetarian", "Jain", "Vegan", "Non-Vegetarian"],
};
