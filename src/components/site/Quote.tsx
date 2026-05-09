export function Quote() {
  return (
    <section id="quote" className="py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-5xl bg-gradient-deep rounded-[2rem] p-12 md:p-20 text-primary-foreground shadow-elegant relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70 mb-6">Get a quote</p>
        <h2 className="text-4xl md:text-5xl text-primary-foreground text-balance max-w-2xl leading-tight">
          Tell us about your bottles. We'll handle the rest.
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks — we'll be in touch within one business day.");
          }}
          className="mt-12 grid md:grid-cols-2 gap-4"
        >
          <input required placeholder="Your name" className="px-5 py-4 rounded-full bg-white/10 placeholder:text-primary-foreground/60 text-primary-foreground border border-white/15 focus:outline-none focus:border-white/40 transition" />
          <input required type="email" placeholder="Email" className="px-5 py-4 rounded-full bg-white/10 placeholder:text-primary-foreground/60 text-primary-foreground border border-white/15 focus:outline-none focus:border-white/40 transition" />
          <input placeholder="Company / event" className="px-5 py-4 rounded-full bg-white/10 placeholder:text-primary-foreground/60 text-primary-foreground border border-white/15 focus:outline-none focus:border-white/40 transition" />
          <input placeholder="Quantity (e.g. 500)" className="px-5 py-4 rounded-full bg-white/10 placeholder:text-primary-foreground/60 text-primary-foreground border border-white/15 focus:outline-none focus:border-white/40 transition" />
          <textarea rows={3} placeholder="A few details about your project" className="md:col-span-2 px-5 py-4 rounded-3xl bg-white/10 placeholder:text-primary-foreground/60 text-primary-foreground border border-white/15 focus:outline-none focus:border-white/40 transition" />
          <button type="submit" className="md:col-span-2 mt-2 px-7 py-4 rounded-full bg-primary-foreground text-primary font-medium hover:opacity-90 transition">
            Request my quote
          </button>
        </form>
      </div>
    </section>
  );
}
