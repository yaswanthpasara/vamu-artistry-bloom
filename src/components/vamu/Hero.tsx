import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-24"
    >
      {/* Decorative leaves */}
      <motion.svg
        aria-hidden
        className="absolute -left-16 top-24 w-72 text-primary/25"
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
        className="absolute -right-10 bottom-10 w-80 text-secondary/40 animate-float-slow"
        viewBox="0 0 200 200"
      >
        <path
          fill="currentColor"
          d="M30 100c20-60 80-90 140-70-10 60-50 110-110 120-30 5-40-25-30-50z"
        />
      </motion.svg>
      <div className="absolute inset-0 leaf-deco pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm tracking-[0.45em] uppercase text-foreground/60 mb-6"
        >
          Handcrafted · Bespoke · Heartfelt
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-script text-7xl md:text-[10rem] leading-none shimmer-text"
        >
          Vamu Arts
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="font-display italic text-xl md:text-2xl text-foreground/75 mt-6 max-w-2xl mx-auto"
        >
          Bespoke embroidery, hoop art &amp; keepsakes for weddings, birthdays
          and the moments worth remembering.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#portfolio"
            className="glow-btn rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="glow-btn rounded-full border border-foreground/20 bg-background/60 backdrop-blur px-8 py-3 text-sm tracking-widest uppercase"
          >
            Commission a Piece
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/40 text-xs tracking-[0.4em] uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}
