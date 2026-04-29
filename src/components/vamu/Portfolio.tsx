import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { X } from "lucide-react";

import img01 from "@/assets/portfolio/01.jpg";
import img02 from "@/assets/portfolio/02.jpg";
import img03 from "@/assets/portfolio/03.jpg";
import img04 from "@/assets/portfolio/04.jpg";
import img05 from "@/assets/portfolio/05.jpg";
import img06 from "@/assets/portfolio/06.jpg";
import img07 from "@/assets/portfolio/07.jpg";
import img08 from "@/assets/portfolio/08.jpg";
import img09 from "@/assets/portfolio/09.jpg";
import img10 from "@/assets/portfolio/10.jpg";

type Category = "All" | "Weddings" | "Birthdays" | "Custom";

type Piece = {
  src: string;
  title: string;
  category: Exclude<Category, "All">;
};

const pieces: Piece[] = [
  { src: img01, title: "Naveen ♥ Vani", category: "Weddings" },
  { src: img02, title: "Together Forever", category: "Weddings" },
  { src: img04, title: "Royal Couple Dolls", category: "Weddings" },
  { src: img07, title: "Sweet Memories", category: "Birthdays" },
  { src: img03, title: "Celebration Set", category: "Birthdays" },
  { src: img05, title: "Floral Bangles", category: "Custom" },
  { src: img08, title: "Crystal Cuff", category: "Custom" },
  { src: img06, title: "Warli Bowl", category: "Custom" },
  { src: img09, title: "Painted Vase", category: "Custom" },
  { src: img10, title: "Jute Bouquet", category: "Custom" },
];

const categories: Category[] = ["All", "Weddings", "Birthdays", "Custom"];

// Tilt card — pointer-driven 3D parallax (GPU-only transforms, spring smoothed)
function TiltCard({ p, onOpen, index }: { p: Piece; onOpen: () => void; index: number }) {
  const ref = useRef<HTMLElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 220, damping: 18, mass: 0.4 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 220, damping: 18, mass: 0.4 });
  const gx = useTransform(mx, [-0.5, 0.5], ["20%", "80%"]);
  const gy = useTransform(my, [-0.5, 0.5], ["20%", "80%"]);

  const handleMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.figure
      ref={ref}
      layout
      layoutId={`piece-${p.title}`}
      onClick={onOpen}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
      transition={{
        duration: 0.7,
        delay: (index % 6) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileTap={{ scale: 0.97 }}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className="group relative overflow-hidden rounded-2xl bg-card shadow-soft border border-border/60 cursor-pointer"
    >
      <motion.div
        layoutId={`piece-image-${p.title}`}
        className="aspect-square overflow-hidden"
        style={{ transform: "translateZ(0)" }}
      >
        <img
          src={p.src}
          alt={p.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover will-change-transform transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />
      </motion.div>

      {/* Spotlight that follows the cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-soft-light"
        style={{
          background: useTransform(
            [gx, gy] as never,
            ([x, y]: string[]) =>
              `radial-gradient(220px circle at ${x} ${y}, rgba(255,255,255,0.55), transparent 60%)`,
          ),
        }}
      />

      {/* Shine sweep */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute -inset-y-8 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[300%] transition-all duration-[1100ms] ease-out" />
      </div>

      {/* Caption */}
      <figcaption
        className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-background/95 via-background/70 to-transparent translate-y-1 group-hover:translate-y-0 transition-transform duration-500"
        style={{ transform: "translateZ(30px)" }}
      >
        <p className="text-[8px] tracking-[0.25em] uppercase text-primary">{p.category}</p>
        <p className="font-display text-sm leading-tight mt-0.5 truncate group-hover:text-primary transition-colors duration-300">
          {p.title}
        </p>
      </figcaption>

      {/* Glow ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-primary/40 transition-all duration-500" />
    </motion.figure>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<Piece | null>(null);
  const filtered = useMemo(
    () => (active === "All" ? pieces : pieces.filter((p) => p.category === active)),
    [active],
  );

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="portfolio" className="relative py-16 px-5">
      <div className="text-center mb-8">
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary/80 mb-3">The Gallery</p>
        <h2 className="text-4xl font-display leading-tight">
          Made by <span className="font-script text-primary text-5xl">hand</span>
        </h2>
        <p className="mt-3 text-foreground/65 font-display italic text-base px-4">
          Each piece — stitched, painted, assembled with love.
        </p>
      </div>

      {/* Category pills */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-6 -mx-5 px-5">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`shrink-0 glow-btn rounded-full px-4 py-1.5 text-[11px] tracking-[0.2em] uppercase transition ${
              active === c
                ? "bg-primary text-primary-foreground"
                : "bg-background/80 border border-border text-foreground/70"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <motion.div layout className="grid grid-cols-2 gap-3" style={{ perspective: "1400px" }}>
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <TiltCard key={p.title} p={p} index={i} onOpen={() => setSelected(p)} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/90 backdrop-blur-xl cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelected(null);
              }}
              className="absolute top-5 right-5 z-10 h-10 w-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </motion.button>

            <motion.figure
              layoutId={`piece-${selected.title}`}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[92vw] max-h-[88vh] rounded-3xl overflow-hidden shadow-2xl bg-card border border-border/60 cursor-default"
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
            >
              <motion.div layoutId={`piece-image-${selected.title}`} className="overflow-hidden">
                <img
                  src={selected.src}
                  alt={selected.title}
                  className="block max-w-[92vw] max-h-[78vh] w-auto h-auto object-contain"
                />
              </motion.div>
              <motion.figcaption
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.25, duration: 0.35 }}
                className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background via-background/85 to-transparent"
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-1">
                  {selected.category}
                </p>
                <p className="font-display text-2xl text-foreground">{selected.title}</p>
              </motion.figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
