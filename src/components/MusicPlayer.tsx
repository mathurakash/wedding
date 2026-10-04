import { useEffect, useRef, useState } from "react";
import { wedding } from "../data/wedding";

export default function MusicPlayer() {
  const ref = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);
  const [missing, setMissing] = useState(false);

  async function start() {
    try { await ref.current?.play(); setOn(true); sessionStorage.setItem("music", "on"); } catch { setMissing(true); }
  }
  // "Open Invitation" is a user click, so browsers allow playback then.
  useEffect(() => {
    const h = () => { if (sessionStorage.getItem("music") !== "off") start(); };
    window.addEventListener("invite:open", h);
    return () => window.removeEventListener("invite:open", h);
  }, []);

  function toggle() {
    const a = ref.current; if (!a) return;
    if (on) { a.pause(); setOn(false); sessionStorage.setItem("music", "off"); } else { sessionStorage.removeItem("music"); start(); }
  }

  return (
    <>
      <audio ref={ref} src={wedding.music.src} loop preload="none" onError={() => setMissing(true)} />
      <button onClick={toggle} aria-pressed={on} aria-label={on ? "Mute music" : "Play music"}
        title={missing ? "Add public/music/wedding-song.mp3" : undefined}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-gold-light to-gold-dark text-maroon-deep text-2xl shadow-xl border-2 border-maroon/30 hover:scale-105 transition">
        {on ? "🔊" : "🔇"}
      </button>
    </>
  );
}
