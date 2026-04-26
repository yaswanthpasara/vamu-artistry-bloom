export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background/60 backdrop-blur">
      <div className="container mx-auto px-6 py-14 flex flex-col items-center text-center gap-4">
        <div className="flex items-center gap-2">
          <span className="font-script text-4xl text-primary leading-none">Vamu</span>
          <span className="font-display tracking-[0.35em] uppercase text-foreground/70">
            Arts
          </span>
        </div>
        <p className="font-display italic text-lg text-foreground/70">
          Celebrating Life Through Art
        </p>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-2" />
        <p className="text-xs tracking-[0.3em] uppercase text-foreground/50">
          © {new Date().getFullYear()} Vamu Arts · Handcrafted with love
        </p>
      </div>
    </footer>
  );
}
