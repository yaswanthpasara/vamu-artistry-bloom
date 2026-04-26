export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background/60 backdrop-blur px-5">
      <div className="py-10 flex flex-col items-center text-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className="font-script text-3xl text-primary leading-none">Unique</span>
          <span className="font-display tracking-[0.3em] uppercase text-[10px] text-foreground/70">
            Arts &amp; Crafts
          </span>
        </div>
        <p className="font-display italic text-base text-foreground/70">
          Celebrating Life Through Art
        </p>
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-1" />
        <p className="text-[9px] tracking-[0.3em] uppercase text-foreground/50">
          © {new Date().getFullYear()} · Handcrafted with love
        </p>
      </div>
    </footer>
  );
}
