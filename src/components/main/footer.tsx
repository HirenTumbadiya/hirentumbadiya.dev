"use client";
import { useState } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Track mouse position relative to the footer
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.footer
      className="border-t py-12 md:py-16 overflow-hidden relative cursor-default"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container px-4 md:px-6 flex flex-col items-center relative z-10">
        {/* Social Links & Info Row */}
        <motion.div
          className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mb-12 md:mb-24"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              Building exceptional web experiences.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            {[
              {
                icon: <Github className="h-5 w-5" />,
                href: "https://github.com/HirenTumbadiya",
                label: "GitHub",
              },
              {
                icon: <Linkedin className="h-5 w-5" />,
                href: "https://www.linkedin.com/in/tumbadiya-hiren-6722551a6",
                label: "LinkedIn",
              },
              {
                icon: <Twitter className="h-5 w-5" />,
                href: "https://x.com/HirenTumbadiya",
                label: "Twitter",
              },
              {
                icon: <Mail className="h-5 w-5" />,
                href: "mailto:tumbadiyahiren@gamil.com",
                label: "Email",
              },
            ].map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                asChild
                className="hover:scale-110 transition-transform"
              >
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  {item.icon}
                </Link>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* BIG NAME - Stacked & Responsive */}
        <motion.div variants={itemVariants} className="w-full text-center relative py-10 md:py-0">

          {/* Base Layer (Dim) */}
          <div className="flex flex-col items-center justify-center leading-none font-black tracking-tighter text-foreground/10 select-none">
            <h1 className="text-[15vw] md:text-[12vw]">HIREN</h1>
            <h1 className="text-[15vw] md:text-[12vw] -mt-[2vw] md:-mt-[1vw]">TUMBADIYA</h1>
          </div>

          {/* Spotlight Layer (Light) - Masked */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center leading-none font-black tracking-tighter text-foreground select-none pointer-events-none"
            animate={{
              maskImage: isHovered
                ? `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
                : "radial-gradient(circle 0px at 0px 0px, black, transparent)",
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
          >
            <h1 className="text-[15vw] md:text-[12vw]">HIREN</h1>
            <h1 className="text-[15vw] md:text-[12vw] -mt-[2vw] md:-mt-[1vw]">TUMBADIYA</h1>
          </motion.div>

        </motion.div>
      </div>
    </motion.footer>
  );
}
