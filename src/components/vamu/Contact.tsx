import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-primary/80 mb-4">
            Let's Create
          </p>
          <h2 className="text-5xl md:text-6xl font-display">
            Commission <span className="font-script text-primary">your</span> piece
          </h2>
          <p className="mt-4 text-foreground/65 max-w-xl mx-auto">
            Tell me about the moment you'd like to celebrate — names, date, a
            color you love. I'll reply within two days with sketches.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="relative rounded-3xl bg-background/70 backdrop-blur-xl border border-border/60 shadow-soft p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Your name" name="name" placeholder="Aanya" />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            <Field label="Occasion" name="occasion" placeholder="Wedding, birthday…" />
            <Field label="Date" name="date" type="date" />
          </div>
          <div className="mt-6">
            <label className="text-xs tracking-[0.3em] uppercase text-foreground/60">
              Tell me about it
            </label>
            <textarea
              required
              rows={5}
              placeholder="Names, colors, story, anything that matters…"
              className="mt-2 w-full rounded-2xl bg-background/80 border border-border px-5 py-4 text-foreground placeholder:text-foreground/40 outline-none focus:border-primary focus:shadow-glow transition"
            />
          </div>
          <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-foreground/55 italic font-display">
              {sent ? "Thank you — I'll be in touch soon ♥" : "Replies within 48 hours."}
            </p>
            <button
              type="submit"
              className="glow-btn rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase"
            >
              {sent ? "Sent" : "Send Message"}
            </button>
          </div>
        </motion.form>

        <div className="mt-12 flex justify-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="glow-btn h-12 w-12 rounded-full border border-border bg-background/70 flex items-center justify-center text-foreground/70 hover:text-primary"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs tracking-[0.3em] uppercase text-foreground/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl bg-background/80 border border-border px-5 py-3 text-foreground placeholder:text-foreground/40 outline-none focus:border-primary focus:shadow-glow transition"
      />
    </div>
  );
}

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M11 8c2 0 4 1 4 3.5S13 16 11.5 16c-1 0-1.5-.5-1.5-.5L9 20" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M21 12a9 9 0 1 1-3.5-7.1L21 4l-1 3.5A9 9 0 0 1 21 12z" />
        <path d="M8 11c.5 2 2 3.5 4 4 1 .3 2-1 2-1l-2-1-1 .5c-.7-.3-1.2-.8-1.5-1.5L10 11l-1-2s-1.3 1-1 2z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@vamuarts.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
];
