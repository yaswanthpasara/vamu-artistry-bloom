import { motion } from "framer-motion";

const stats = [
  { n: "150+", l: "Pieces" },
  { n: "5y", l: "Crafting" },
  { n: "100%", l: "Handmade" },
];

export function About() {
  return (
    <section id="about" className="relative py-16 px-5 bg-soft-gradient">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9 }}
        className="relative mx-auto w-44 h-44"
      >
        <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 blur-2xl" />
        <div className="relative rounded-full overflow-hidden border-4 border-background shadow-soft h-full w-full">
          <img
            src={new URL("@/assets/portfolio/07.jpg", import.meta.url).href}
            alt="Handcrafted memory hoop"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-background/95 backdrop-blur border border-border px-3 py-1 shadow-soft whitespace-nowrap">
          <p className="font-script text-base text-primary leading-none">
            made with love
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mt-10"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary/80 mb-3">
          The Story
        </p>
        <h2 className="text-3xl font-display leading-tight">
          Where <span className="font-script text-primary text-4xl">thread</span>
          <br /> meets memory
        </h2>
        <p className="mt-5 text-foreground/70 leading-relaxed text-[15px]">
          Unique Arts &amp; Crafts began as a quiet practice — a needle, a hoop,
          and the wish to make moments last. Every commission is a small love
          letter: hand-embroidered hoops, painted keepsakes, dressed dolls and
          floral compositions for the days you'll never forget.
        </p>
        <p className="mt-4 text-foreground/65 italic font-display text-base">
          "I don't make products — I make the things you'll hand down."
        </p>
      </motion.div>

      <div className="mt-8 grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div
            key={s.l}
            className="rounded-2xl bg-background/80 backdrop-blur border border-border/60 py-4 text-center shadow-soft"
          >
            <div className="font-display text-2xl text-primary">{s.n}</div>
            <div className="text-[9px] tracking-[0.2em] uppercase text-foreground/60 mt-1">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
