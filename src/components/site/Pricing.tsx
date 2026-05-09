export function Pricing() {
  const tiers = [
    {
      name: "Essential",
      qty: "144 — 999 bottles",
      price: "$2.40",
      unit: "per bottle",
      perks: ["Single-color label", "PET 500ml", "Standard cap", "5–7 day delivery"],
      featured: false,
    },
    {
      name: "Signature",
      qty: "1,000 — 4,999 bottles",
      price: "$1.85",
      unit: "per bottle",
      perks: ["Full-color label", "Glass or PET", "Premium cap options", "3–5 day delivery", "Dedicated proofing"],
      featured: true,
    },
    {
      name: "Reserve",
      qty: "5,000+ bottles",
      price: "Custom",
      unit: "volume pricing",
      perks: ["Private label program", "Custom bottle molds", "Foil & embossing", "Account manager", "Logistics support"],
      featured: false,
    },
  ];
  return (
    <section id="pricing" className="py-32 px-6 lg:px-10 bg-mist">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Bulk pricing</p>
          <h2 className="text-4xl md:text-5xl text-balance">Transparent rates that scale with you.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative p-10 rounded-3xl border ${
                t.featured
                  ? "bg-gradient-deep text-primary-foreground border-transparent shadow-elegant md:-translate-y-4"
                  : "bg-card border-border"
              }`}
            >
              {t.featured && (
                <span className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/15 backdrop-blur">
                  Most chosen
                </span>
              )}
              <h3 className={`text-2xl ${t.featured ? "text-primary-foreground" : "text-foreground"}`}>{t.name}</h3>
              <p className={`text-sm mt-1 ${t.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{t.qty}</p>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl">{t.price}</span>
                <span className={`text-sm ${t.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{t.unit}</span>
              </div>
              <ul className="mt-10 space-y-3 text-sm">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className={`mt-2 h-1 w-1 rounded-full ${t.featured ? "bg-primary-foreground" : "bg-accent"}`} />
                    <span className={t.featured ? "text-primary-foreground/90" : "text-foreground/80"}>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className={`mt-10 inline-flex w-full justify-center px-6 py-3.5 rounded-full text-sm font-medium transition ${
                  t.featured
                    ? "bg-primary-foreground text-primary hover:opacity-90"
                    : "border border-border hover:bg-muted"
                }`}
              >
                Request quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
