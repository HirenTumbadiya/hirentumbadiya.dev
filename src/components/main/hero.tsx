"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "MERN Stack Developer"

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m <span className="text-primary">John Doe</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold h-8">
                {text}
                <span className="animate-blink">|</span>
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Passionate about building robust web applications with MongoDB, Express, React, and Node.js. With 2.5+
                years of experience creating seamless user experiences.
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
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-primary">
              {/* <img src="/placeholder.svg?height=400&width=400" alt="John Doe" className="object-cover w-full h-full" /> */}
              <div className="w-full h-full"/>
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
  )
}
