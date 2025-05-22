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
import { Loader } from "@/components/main/loader";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const finishLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [loading]);

  if (loading) {
    return (
      <AnimatePresence>
        {loading && <Loader finishLoading={finishLoading} />}
      </AnimatePresence>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
