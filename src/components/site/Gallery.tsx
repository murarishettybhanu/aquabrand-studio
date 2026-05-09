import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

export function Gallery() {
  const items = [
    { src: g1, label: "Wedding — The Pendings", tag: "Glass · Letterpress" },
    { src: g2, label: "Corporate — Northshore Capital", tag: "PET · Matte navy" },
    { src: g3, label: "Retail — Private Label", tag: "Glass · Foil emboss" },
  ];
  return (
    <section id="gallery" className="py-32 px-6 lg:px-10 bg-mist">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Gallery</p>
            <h2 className="text-4xl md:text-5xl max-w-2xl text-balance">A few labels we've poured ourselves into.</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <figure key={it.label} className="group">
              <div className="overflow-hidden rounded-3xl bg-card">
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="w-full aspect-[4/5] object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <span className="text-foreground">{it.label}</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{it.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
