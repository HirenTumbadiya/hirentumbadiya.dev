"use client"
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-16 bg-muted/30" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <motion.div
            className="w-20 h-1 bg-primary mt-4 mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: "5rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Get to know more about me, my background, and what drives me as a
            developer.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Who am I?</h3>
            <p className="text-muted-foreground">
              I&apos;m a product-minded Frontend Developer with 2.5+ years of
              experience building modern web and mobile applications using
              React, Next.js, and React Native. I focus on creating fast,
              accessible, and scalable user interfaces that solve real-world
              problems.
            </p>
            <p className="text-muted-foreground">
              I started my journey in development while studying engineering,
              and quickly became passionate about building intuitive digital
              products. Over time, I&apos;ve contributed to cross-functional
              teams, improved legacy systems, and built full-stack features from
              scratch using the MERN stack.
            </p>
            <p className="text-muted-foreground">
              Outside of coding, I stay active in the dev community through
              open-source, technical writing, and continuous learning especially
              around system design, performance optimization, and frontend
              architecture.
            </p>
            <div className="pt-2">
              <Button asChild>
                <Link href="#contact">Let&apos;s Talk</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Personal Information</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>
                  <strong>Name:</strong> Hiren Tumbadiya
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>
                  <strong>Email:</strong> tumbadiyahiren@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>
                  <strong>Location:</strong> Gujarat, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>
                  <strong>Experience:</strong> 2.5+ years
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>
                  <strong>Availability:</strong> Full-time
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>
                  <strong>Remote:</strong> Available
                </span>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-bold mb-3">My Interests</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "Mobile Development",
                  "UI/UX Design",
                  "Open Source",
                  "Tech Writing",
                  "Problem Solving",
                  "System Design",
                  "Frontend Architecture",
                  "Developer Tools",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
