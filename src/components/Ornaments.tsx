export function Mandala({ className = "", opacity = 0.2 }: { className?: string; opacity?: number }) {
  const petals = Array.from({ length: 16 }, (_, i) => i * 22.5);
  return (
    <svg viewBox="-100 -100 200 200" className={className} style={{ opacity }} aria-hidden="true" fill="none" stroke="#c9a04a" strokeWidth="0.8">
      {[90, 70, 50, 30].map((r) => <circle key={r} r={r} strokeDasharray={r % 20 ? "2 3" : undefined} />)}
      {petals.map((a) => <path key={a} transform={`rotate(${a})`} d="M0 -90 Q10 -72 0 -52 Q-10 -72 0 -90Z" />)}
      {petals.map((a) => <path key={"i" + a} transform={`rotate(${a + 11})`} d="M0 -50 Q7 -40 0 -28 Q-7 -40 0 -50Z" />)}
      <circle r="6" fill="#c9a04a" fillOpacity=".5" />
    </svg>
  );
}

export function Divider({ light = false }: { light?: boolean }) {
  const c = light ? "#e6c776" : "#c9a04a";
  return (
    <div className="flex items-center justify-center gap-3 my-6" aria-hidden="true">
      <span className="h-px w-16 md:w-28" style={{ background: `linear-gradient(90deg,transparent,${c})` }} />
      <svg width="34" height="34" viewBox="-17 -17 34 34" fill="none" stroke={c} strokeWidth="1.2">
        {[0, 45, 90, 135].map((a) => <ellipse key={a} rx="3.5" ry="11" transform={`rotate(${a})`} />)}
        <circle r="2.5" fill={c} />
      </svg>
      <span className="h-px w-16 md:w-28" style={{ background: `linear-gradient(270deg,transparent,${c})` }} />
    </div>
  );
}

export function Diya({ className = "w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <ellipse className="glow" cx="30" cy="22" rx="20" ry="20" fill="#e8892b" opacity=".25" />
      <path className="flame" d="M30 6c5 7 8 11 8 16a8 8 0 0 1-16 0c0-5 3-9 8-16z" fill="#f6b042" />
      <path className="flame" d="M30 14c2.5 3.5 4 5.5 4 8a4 4 0 0 1-8 0c0-2.500 1.500-4.500 4-8z" fill="#fff3c4" />
      <path d="M8 34h44c0 12-9 20-22 20S8 46 8 34z" fill="#8a1c2b" stroke="#c9a04a" strokeWidth="1.5" />
      <path d="M14 38h32" stroke="#c9a04a" strokeWidth="1" strokeDasharray="2 3" />
    </svg>
  );
}

export function Marigold({ className = "w-16" }: { className?: string }) {
  return (
    <svg viewBox="-30 -30 60 60" className={className} aria-hidden="true">
      {Array.from({ length: 14 }, (_, i) => <ellipse key={i} rx="5" ry="13" cy="-14" transform={`rotate(${i * (360 / 14)})`} fill={i % 2 ? "#e8892b" : "#f0a63a"} />)}
      {Array.from({ length: 10 }, (_, i) => <ellipse key={"b" + i} rx="4" ry="8" cy="-8" transform={`rotate(${i * 36 + 18})`} fill="#f6b042" />)}
      <circle r="5" fill="#8a4b0f" />
    </svg>
  );
}

export function Corner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true" fill="none" stroke="#c9a04a" strokeWidth="1.2">
      <path d="M4 76V20Q4 4 20 4h56" /><path d="M12 76V26Q12 12 26 12h50" strokeOpacity=".5" />
      <circle cx="20" cy="20" r="5" /><circle cx="20" cy="20" r="1.500" fill="#c9a04a" />
    </svg>
  );
}

export function Lotus({ className = "w-12" }: { className?: string }) {
  return (
    <svg viewBox="-30 -25 60 40" className={className} aria-hidden="true" fill="#fbf4e4" stroke="#c9a04a" strokeWidth="1.2">
      <path d="M0 10C-6 0-6-10 0-20 6-10 6 0 0 10z" />
      <path d="M-4 10C-18 8-24-4-26-12-14-10-6-4-4 10zM4 10C18 8 24-4 26-12 14-10 6-4 4 10z" />
      <path d="M-8 12C-22 16-30 6-30 0-18 0-10 4-8 12zM8 12C22 16 30 6 30 0 18 0 10 4 8 12z" opacity=".7" />
    </svg>
  );
}
