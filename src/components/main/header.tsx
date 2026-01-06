"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { toast } from "sonner";
import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleResumeClick = () => {
    toast("Your resume download has started");
    const link = document.createElement("a");
    link.href = "/files/hiren_tumbadiya.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-md shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="#home"
          className={`${playfair_display.className} text-xl font-bold`}
        >
          HT
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-foreground transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:left-0 group-hover:w-full" />
            </Link>
          ))}
          <Button onClick={handleResumeClick} variant="default" className="cursor-pointer">
            Resume
          </Button>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
        {isMobile && isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b shadow-lg md:hidden">
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="py-2 text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                onClick={handleResumeClick}
                variant="default"
                className="mt-2"
              >
                Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
