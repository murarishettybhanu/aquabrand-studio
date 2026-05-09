export function Footer() {
  return (
    <footer className="px-6 lg:px-10 py-16 border-t border-border">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-full bg-gradient-deep" />
          <div>
            <div className="font-display text-lg">Aqualume</div>
            <div className="text-xs text-muted-foreground">Bottled with intent · Est. 2018</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#sustainability" className="hover:text-foreground">Sustainability</a>
          <a href="#quote" className="hover:text-foreground">Contact</a>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Aqualume Bottling Co.</div>
      </div>
    </footer>
  );
}
