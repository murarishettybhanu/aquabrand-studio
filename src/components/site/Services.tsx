export function Services() {
  const items = [
    {
      tag: "01 — Events",
      title: "Custom Branded Water",
      copy: "From intimate weddings to keynote stages — your logo, colors, and story on every bottle. Full-color labels, foil stamping, custom caps.",
      bullets: ["Min. order 144 bottles", "5–7 day turnaround", "Glass & PET options"],
    },
    {
      tag: "02 — Retail",
      title: "Private Label",
      copy: "Launch your own premium water line. We handle sourcing, design support, regulatory compliance, and consistent fulfillment at scale.",
      bullets: ["MOQ from 5,000 units", "FDA-compliant facility", "Dedicated account lead"],
    },
  ];
  return (
    <section id="services" className="py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">What we do</p>
            <h2 className="text-4xl md:text-5xl max-w-2xl text-balance">Two services. One obsessive standard.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Whether for a single celebration or a national rollout, every bottle leaves our line the same way: perfectly.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((s) => (
            <article key={s.title} className="group relative p-10 rounded-3xl bg-card border border-border hover:shadow-soft transition">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.tag}</p>
              <h3 className="mt-6 text-3xl text-foreground">{s.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.copy}</p>
              <ul className="mt-8 space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-foreground/80">
                    <span className="h-1 w-6 bg-accent rounded-full" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
