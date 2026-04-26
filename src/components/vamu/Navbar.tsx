import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#portfolio", label: "Gallery" },
  { href: "#about", label: "Story" },
  { href: "#contact", label: "Order" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroller = document.querySelector(".no-scrollbar") as HTMLElement | null;
    const target: HTMLElement | Window = scroller ?? window;
    const onScroll = () => {
      const y = scroller ? scroller.scrollTop : window.scrollY;
      setScrolled(y > 20);
    };
    onScroll();
    target.addEventListener("scroll", onScroll as EventListener, { passive: true } as AddEventListenerOptions);
    return () => target.removeEventListener("scroll", onScroll as EventListener);
  }, []);

  return (
    <header
      className={`sticky top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/60 py-3"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="px-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-1.5 leading-none">
          <span className="font-script text-2xl text-primary">Unique</span>
          <span className="font-display tracking-[0.25em] uppercase text-[10px] text-foreground/70">
            Arts &amp; Crafts
          </span>
        </a>
        <a
          href="#contact"
          className="glow-btn rounded-full bg-primary text-primary-foreground px-3.5 py-1.5 text-[11px] tracking-[0.15em] uppercase"
        >
          Order
        </a>
      </div>
    </header>
  );
}

/** Bottom tab bar — primary mobile navigation */
export function BottomNav() {
  return (
    <nav className="sticky bottom-0 inset-x-0 z-40 px-4 pb-3 pt-2 bg-gradient-to-t from-background via-background/95 to-background/0">
      <div className="mx-auto flex items-center justify-between gap-1 rounded-full bg-background/90 backdrop-blur-xl border border-border/70 shadow-soft px-2 py-2">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="flex-1 text-center text-[11px] tracking-[0.2em] uppercase text-foreground/65 hover:text-primary transition-colors py-1.5 rounded-full hover:bg-primary/5"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
