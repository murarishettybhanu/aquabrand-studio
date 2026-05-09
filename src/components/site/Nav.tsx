export function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-gradient-deep" />
          <span className="font-display text-xl tracking-tight text-foreground">Aqualume</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
          <a href="#sustainability" className="hover:text-foreground transition">Sustainability</a>
          <a href="#gallery" className="hover:text-foreground transition">Gallery</a>
        </nav>
        <a href="#quote" className="text-sm font-medium px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition">
          Get a Quote
        </a>
      </div>
    </header>
  );
}
