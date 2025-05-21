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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
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
