import hero from "@/assets/hero-bottle.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-gradient-mist">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Bottled with intent</p>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-balance text-foreground">
            Water, refined to <em className="not-italic text-primary">your</em> brand.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Custom bottling for weddings, corporate events, and premium retail.
            Glass and PET. 100% recyclable. Crafted in small, considered runs.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#quote" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-elegant hover:translate-y-[-1px] transition">
              Get a Quote
              <span aria-hidden>→</span>
            </a>
            <a href="#gallery" className="inline-flex items-center px-7 py-4 rounded-full border border-border text-sm font-medium hover:bg-muted transition">
              View the gallery
            </a>
          </div>
          <dl className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {[
              ["500+", "Brands bottled"],
              ["48h", "Label proofing"],
              ["100%", "Recyclable"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl text-primary">{k}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-10 bg-gradient-deep opacity-10 blur-3xl rounded-full" />
          <img
            src={hero}
            alt="Premium custom-labeled glass water bottle"
            width={1600}
            height={1600}
            className="relative rounded-3xl shadow-elegant w-full object-cover aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
