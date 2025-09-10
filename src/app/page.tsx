"use client";
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
} from "@/components/main";
import { AnimatedBackground } from "@/components/main/animated-background";
import TerminalLoader from "@/components/loaders/terminal-loader";
import { CSSProperties, useState } from "react";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [reveal, setReveal] = useState(false);

  const handleLoaderComplete = () => {
    setShowLoader(false);
    // Trigger radial reveal
    requestAnimationFrame(() => setReveal(true));
    // remove reveal after animation completes
    window.setTimeout(() => setReveal(false), 1200);
  };

  if (showLoader) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        <TerminalLoader onComplete={handleLoaderComplete} />
      </div>
    );
  }

  const maskStyle: CSSProperties | undefined = reveal
    ? { maskImage: "radial-gradient(circle at 50% 50%, transparent var(--r), black calc(var(--r) + 1px))" }
    : undefined;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main
        className={
          reveal
            ? "[--r:0%] animate-[reveal_1.2s_ease-out_forwards]"
            : ""
        }
        style={maskStyle}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <style jsx global>{`
        @keyframes reveal {
          0% { --r: 0%; }
          100% { --r: 140%; }
        }
      `}</style>
    </div>
  );
}
