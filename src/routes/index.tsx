import { createFileRoute } from "@tanstack/react-router";

import { Navbar, BottomNav } from "@/components/vamu/Navbar";
import { Hero } from "@/components/vamu/Hero";
import { Portfolio } from "@/components/vamu/Portfolio";
import { About } from "@/components/vamu/About";
import { Contact } from "@/components/vamu/Contact";
import { Footer } from "@/components/vamu/Footer";
import { PhoneFrame } from "@/components/vamu/PhoneFrame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unique Arts & Crafts — Celebrating Life Through Art" },
      {
        name: "description",
        content:
          "A soulful mobile experience for bespoke embroidery, hoop art and handcrafted keepsakes for weddings, birthdays and life's most beautiful moments.",
      },
      { property: "og:title", content: "Unique Arts & Crafts — Celebrating Life Through Art" },
      {
        property: "og:description",
        content:
          "Handmade hoop art, dressed dolls, painted vases and bespoke keepsakes for the moments worth remembering.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PhoneFrame>
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <BottomNav />
    </PhoneFrame>
  );
}
