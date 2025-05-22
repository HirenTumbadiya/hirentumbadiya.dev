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

export default function Home() {
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
