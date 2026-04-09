"use client";

import { useState } from "react";
import Preloader from "@/components/ui/preloader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Bookings from "@/components/sections/Bookings";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}

      <Navbar />

      <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
        <Hero />
        <About />
        <Portfolio />
        <Bookings />
      </main>

      <Footer />
    </>
  );
}
