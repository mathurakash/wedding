import { wedding } from "../data/wedding";

export interface RsvpData {
  name: string; email: string; phone: string; guests: number;
  attending: "yes" | "no"; meal: string; message: string;
}

/** Swap this one function to connect any backend. */
export async function submitRsvp(data: RsvpData): Promise<void> {
  const payload = { ...data, submittedAt: new Date().toISOString() };
  if (wedding.rsvpEndpoint) {
    const res = await fetch(wedding.rsvpEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    if (!res.ok) throw new Error("RSVP failed");
    return;
  }
  const all = JSON.parse(localStorage.getItem("rsvps") || "[]");
  all.push(payload);
  localStorage.setItem("rsvps", JSON.stringify(all));
  await new Promise((r) => setTimeout(r, 500));
}
