import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-16 px-5">
      <div className="text-center mb-8">
        <p className="text-[10px] tracking-[0.4em] uppercase text-primary/80 mb-3">
          Let's Create
        </p>
        <h2 className="text-4xl font-display leading-tight">
          Commission <span className="font-script text-primary text-5xl">your</span>
          <br /> piece
        </h2>
        <p className="mt-3 text-foreground/65 px-4 text-sm">
          Tell me about the moment you'd like to celebrate. I'll reply within
          two days with sketches.
        </p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="relative rounded-3xl bg-background/85 backdrop-blur-xl border border-border/60 shadow-soft p-5 space-y-4"
      >
        <Field label="Your name" name="name" placeholder="Aanya" />
        <Field label="Email" name="email" type="email" placeholder="you@example.com" />
        <Field label="Occasion" name="occasion" placeholder="Wedding, birthday…" />
        <Field label="Date" name="date" type="date" />
        <div>
          <label className="text-[10px] tracking-[0.3em] uppercase text-foreground/60">
            Tell me about it
          </label>
          <textarea
            required
            rows={4}
            placeholder="Names, colors, story, anything that matters…"
            className="mt-2 w-full rounded-2xl bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-primary focus:shadow-glow transition"
          />
        </div>
        <button
          type="submit"
          className="glow-btn w-full rounded-full bg-primary text-primary-foreground py-3.5 text-[11px] tracking-[0.35em] uppercase"
        >
          {sent ? "Sent ♥" : "Send Message"}
        </button>
        <p className="text-center text-xs text-foreground/55 italic font-display">
          {sent ? "Thank you — I'll be in touch soon" : "Replies within 48 hours"}
        </p>
      </motion.form>

      <div className="mt-8 flex justify-center gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="glow-btn h-11 w-11 rounded-full border border-border bg-background/80 flex items-center justify-center text-foreground/70 hover:text-primary"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] tracking-[0.3em] uppercase text-foreground/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-primary focus:shadow-glow transition"
      />
    </div>
  );
}

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
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
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M11 8c2 0 4 1 4 3.5S13 16 11.5 16c-1 0-1.5-.5-1.5-.5L9 20" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M21 12a9 9 0 1 1-3.5-7.1L21 4l-1 3.5A9 9 0 0 1 21 12z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@uniqueartsandcrafts.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
];
