import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { Sustainability } from "@/components/site/Sustainability";
import { Gallery } from "@/components/site/Gallery";
import { Quote } from "@/components/site/Quote";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aqualume — Custom Bottled Water & Private Label" },
      { name: "description", content: "Premium custom-branded water for events, weddings, and private label retail. 100% recyclable glass and PET. Get a quote in 24 hours." },
      { property: "og:title", content: "Aqualume — Custom Bottled Water & Private Label" },
      { property: "og:description", content: "Premium custom-branded water for events, weddings, and private label retail. 100% recyclable." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Pricing />
      <Sustainability />
      <Gallery />
      <Quote />
      <Footer />
    </main>
  );
}
