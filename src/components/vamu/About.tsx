import { motion } from "framer-motion";

const stats = [
  { n: "150+", l: "Bespoke pieces" },
  { n: "5 yrs", l: "Of crafting" },
  { n: "100%", l: "Handmade" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 bg-soft-gradient">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary/80 mb-4">
            The Story
          </p>
          <h2 className="text-5xl md:text-6xl font-display leading-tight">
            Where <span className="font-script text-primary">thread</span>{" "}
            meets memory.
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed text-lg">
            Vamu Arts began as a quiet practice — a needle, a hoop, and the
            wish to make moments last. Today, every commission is a small love
            letter: hand-embroidered hoops, painted keepsakes, dressed dolls
            and floral compositions made to mark the days you'll never forget.
          </p>
          <p className="mt-4 text-foreground/65 italic font-display text-lg">
            "I don't make products — I make the things you'll hand down."
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.l} className="rounded-2xl bg-background/70 backdrop-blur border border-border/60 p-5 text-center shadow-soft">
                <div className="font-display text-3xl text-primary">{s.n}</div>
                <div className="text-xs tracking-widest uppercase text-foreground/60 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 blur-2xl" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-soft border border-border/60 aspect-square">
            <img
              src={new URL("@/assets/portfolio/07.jpg", import.meta.url).href}
              alt="Sweet memories embroidered hoop"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-background/90 backdrop-blur border border-border px-5 py-3 shadow-soft">
            <p className="font-script text-2xl text-primary leading-none">
              made with love
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
