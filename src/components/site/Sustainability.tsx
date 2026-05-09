import img from "@/assets/sustainability.jpg";

export function Sustainability() {
  return (
    <section id="sustainability" className="py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={img}
            alt="Pure water poured into glass"
            loading="lazy"
            width={1400}
            height={1000}
            className="rounded-3xl w-full object-cover aspect-[4/5] shadow-soft"
          />
          <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-elegant">
            <div className="font-display text-4xl text-primary">100%</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Recyclable packaging</div>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Sustainability</p>
          <h2 className="text-4xl md:text-5xl text-balance leading-tight">
            A lighter footprint, by design.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Every bottle, label, and cap we ship is fully recyclable. Our glass line uses
            up to 60% post-consumer cullet; our PET is 100% rPET-ready. We measure every batch.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {[
              ["rPET ready", "100% recycled PET available on all SKUs."],
              ["Low-impact glass", "Lightweight glass, 30% less freight CO₂."],
              ["Plant-based labels", "Stone-paper and FSC-certified options."],
              ["Carbon offset", "Every order ships climate-neutral by default."],
            ].map(([t, d]) => (
              <div key={t} className="border-t border-border pt-5">
                <div className="font-medium text-foreground">{t}</div>
                <div className="text-sm text-muted-foreground mt-1">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
