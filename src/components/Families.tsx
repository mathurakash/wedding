import { wedding } from "../data/wedding";
import { Divider, Marigold } from "./Ornaments";

export default function Families() {
  const f = [wedding.families.groom, wedding.families.bride];
  return (
    <section className="section text-center">
      <h2 className="h2 reveal">With the Love &amp; Blessings of Our Families</h2>
      <Divider />
      <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {f.map((x) => (
          <div key={x.title} className="card reveal">
            <Marigold className="w-12 mx-auto" />
            <h3 className="font-display text-2xl font-semibold mt-3">{x.title}</h3>
            <p className="font-display italic text-xl mt-2 text-maroon/80">{x.names}</p>
            <p className="text-sm mt-2 text-maroon/70">{x.address}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
