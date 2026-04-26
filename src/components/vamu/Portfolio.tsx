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

type Category = "All" | "Weddings" | "Birthdays" | "Custom Art";

type Piece = {
  src: string;
  title: string;
  category: Exclude<Category, "All">;
};

const pieces: Piece[] = [
  { src: img01, title: "Naveen ♥ Vani Hoop", category: "Weddings" },
  { src: img02, title: "Together Forever", category: "Weddings" },
  { src: img04, title: "Royal Couple Dolls", category: "Weddings" },
  { src: img07, title: "Sweet Memories Frame", category: "Birthdays" },
  { src: img03, title: "Celebration Set", category: "Birthdays" },
  { src: img05, title: "Floral Bangles", category: "Custom Art" },
  { src: img08, title: "Crystal Cuff", category: "Custom Art" },
  { src: img06, title: "Warli Bowl", category: "Custom Art" },
  { src: img09, title: "Painted Glass Vase", category: "Custom Art" },
  { src: img10, title: "Jute Floral Bouquet", category: "Custom Art" },
];

const categories: Category[] = ["All", "Weddings", "Birthdays", "Custom Art"];

export function Portfolio() {
  const [active, setActive] = useState<Category>("All");
  const filtered = useMemo(
    () => (active === "All" ? pieces : pieces.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="portfolio" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-primary/80 mb-4">
            The Gallery
          </p>
          <h2 className="text-5xl md:text-6xl font-display">
            A <span className="font-script text-primary">collection</span> made
            by hand
          </h2>
          <p className="mt-5 text-foreground/65 font-display italic text-lg">
            Each piece is stitched, painted and assembled with care — no two
            ever the same.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`glow-btn rounded-full px-6 py-2 text-sm tracking-wide transition ${
                active === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-background/70 border border-border text-foreground/70 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.figure
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl bg-card shadow-soft border border-border/60"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background/95 via-background/60 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-primary">
                    {p.category}
                  </p>
                  <p className="font-display text-xl mt-1">{p.title}</p>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
