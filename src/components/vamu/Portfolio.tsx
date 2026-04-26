import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

export function Portfolio() {
  const [active, setActive] = useState<Category>("All");
  const filtered = useMemo(
    () => (active === "All" ? pieces : pieces.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="portfolio" className="relative py-16 px-5">
      <div className="text-center mb-8">
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary/80 mb-3">
          The Gallery
        </p>
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

      {/* 2-column gallery — uniform square thumbs */}
      <motion.div layout className="grid grid-cols-2 gap-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.figure
              key={p.title}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-soft border border-border/60"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-active:scale-110"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-background/95 via-background/70 to-transparent">
                <p className="text-[8px] tracking-[0.25em] uppercase text-primary">
                  {p.category}
                </p>
                <p className="font-display text-sm leading-tight mt-0.5 truncate">
                  {p.title}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
