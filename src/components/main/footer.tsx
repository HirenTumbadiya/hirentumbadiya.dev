"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import { motion } from "motion/react";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const socialItemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    <motion.footer
      className="border-t py-8 md:py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            className="flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <Link
              href="#home"
              className={`${playfair_display.className} text-xl font-extrabold `}
            >
              HT
            </Link>
            <p className="text-sm text-muted-foreground mt-2 text-center md:text-left">
              Building exceptional web experiences with the MERN stack.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center md:items-end"
            variants={itemVariants}
          >
            <motion.div className="flex space-x-4" variants={socialVariants}>
              {[
                {
                  icon: <Github className="h-5 w-5" />,
                  href: "https://github.com/HirenTumbadiya",
                  label: "GitHub",
                },
                {
                  icon: <Linkedin className="h-5 w-5" />,
                  href: "www.linkedin.com/in/tumbadiya-hiren-6722551a6",
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
                <motion.div key={index} variants={socialItemVariants}>
                  <Button
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
                </motion.div>
              ))}
            </motion.div>
            <motion.p
              className="text-sm text-muted-foreground mt-4"
              variants={itemVariants}
            >
              © {currentYear} Hiren Tumbadiya. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
