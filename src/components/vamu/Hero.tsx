import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-hero-gradient pt-6 pb-16 px-6"
    >
      {/* Decorative leaves */}
      <motion.svg
        aria-hidden
        className="absolute -left-10 top-10 w-44 text-primary/20"
        viewBox="0 0 200 200"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4 }}
      >
        <path
          fill="currentColor"
          d="M100 10c50 30 70 80 60 130-40 0-90-30-100-80C50 30 80 20 100 10z"
        />
      </motion.svg>
      <motion.svg
        aria-hidden
        className="absolute -right-8 bottom-8 w-52 text-secondary/35 animate-float-slow"
        viewBox="0 0 200 200"
      >
        <path
          fill="currentColor"
          d="M30 100c20-60 80-90 140-70-10 60-50 110-110 120-30 5-40-25-30-50z"
        />
      </motion.svg>
      <div className="absolute inset-0 leaf-deco pointer-events-none" />

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[10px] tracking-[0.5em] uppercase text-foreground/55 mb-5"
        >
          Handcrafted · Soulful · Bespoke
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-script text-7xl leading-[0.9] shimmer-text"
        >
          Unique
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-display tracking-[0.45em] uppercase text-foreground/75 text-sm mt-3"
        >
          Arts &amp; Crafts
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-display italic text-lg text-foreground/75 mt-5 max-w-xs mx-auto leading-relaxed"
        >
          Where every stitch tells a story, and every brushstroke holds a heartbeat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <a
            href="#portfolio"
            className="glow-btn pulse-ring w-full max-w-[260px] rounded-full bg-primary text-primary-foreground py-3.5 text-[11px] tracking-[0.35em] uppercase font-medium"
          >
            Explore the Gallery
          </a>
          <a
            href="#contact"
            className="glow-btn w-full max-w-[260px] rounded-full border border-primary/30 bg-background/70 backdrop-blur py-3.5 text-[11px] tracking-[0.35em] uppercase text-foreground/80"
          >
            Commission a Piece
          </a>
        </motion.div>
      </div>
    </section>
  );
}
