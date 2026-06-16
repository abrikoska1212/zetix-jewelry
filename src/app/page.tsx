"use client";

import { useState, useCallback } from "react";
import LogoReveal from "./components/LogoReveal";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import FeaturedPiece from "./components/FeaturedPiece";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [revealDone, setRevealDone] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("zetix-reveal") === "done";
    }
    return false;
  });

  const handleRevealComplete = useCallback(() => {
    sessionStorage.setItem("zetix-reveal", "done");
    setRevealDone(true);
  }, []);

  return (
    <>
      {!revealDone && <LogoReveal onComplete={handleRevealComplete} />}
      <CustomCursor />
      <main
        className="m-0 min-h-screen p-0 transition-opacity duration-700"
        style={{ opacity: revealDone ? 1 : 0 }}
      >
        <Navbar />
        <Hero />
        <Collections />
        <FeaturedPiece />
        <About />
        <Showcase />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
