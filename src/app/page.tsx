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
import NumberLoader from "@/components/loaders/number-loader";
import { useState } from "react";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && <NumberLoader onComplete={handleLoaderComplete} />}
      <div className="min-h-screen bg-background relative overflow-hidden">
        <AnimatedBackground />
        <Header />
        <main>
          <Hero startAnimation={!showLoader} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
