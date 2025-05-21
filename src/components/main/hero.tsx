"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [text, setText] = useState("");

useEffect(() => {
    const roles = [
  "Frontend Engineer",
  "Backend Engineer",
  "Fullstack Developer",
  "Software Engineer",
];


  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;

  const type = () => {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      setText(currentRole.substring(0, charIndex--));
    } else {
      setText(currentRole.substring(0, charIndex++));
    }

    if (!isDeleting && charIndex === currentRole.length + 1) {
      setTimeout(() => {
        isDeleting = true;
      }, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(type, isDeleting ? 50 : typingSpeed);
  };

  type();
}, []);

  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m{" "}
                <span className="text-primary">Hiren Tumbadiya</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold h-8">
                {text}
                <span className="animate-blink">|</span>
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I craft performant, scalable web and mobile apps using React,
                Next.js, and React Native. With 2.5+ years of experience, I
                focus on delivering clean UIs and seamless user experiences
                from dashboards to real-time systems.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Hire Me</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Link
                href="https://github.com/HirenTumbadiya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="www.linkedin.com/in/tumbadiya-hiren-6722551a6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://x.com/HirenTumbadiya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-primary">
              <Image src={"/images/hero.png"} alt="Hiren Tumbadiya" fill />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about">
            <Button variant="ghost" size="icon" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
