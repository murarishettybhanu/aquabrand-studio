import React from "react";
import { createRoot } from "react-dom/client";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { Sustainability } from "@/components/site/Sustainability";
import { Gallery } from "@/components/site/Gallery";
import { Quote } from "@/components/site/Quote";
import { Footer } from "@/components/site/Footer";
import "./styles.css";

function App() {
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

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
