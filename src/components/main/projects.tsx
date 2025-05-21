"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with product management, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["react", "node", "mongodb", "express"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates using Socket.io.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["react", "node", "mongodb", "socket.io"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      category: "fullstack",
    },
    {
      id: 3,
      title: "Personal Blog",
      description: "A content management system for a personal blog with markdown support.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["react", "node", "mongodb"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      category: "frontend",
    },
    {
      id: 4,
      title: "API Service",
      description: "A RESTful API service for managing user data with authentication and authorization.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["node", "express", "mongodb"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      category: "backend",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data from an external API.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["react", "api"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      category: "frontend",
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with private messaging and group chat functionality.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["react", "node", "socket.io", "mongodb"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      category: "fullstack",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <div className="w-20 h-1 bg-primary mt-4 mb-6"></div>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Check out some of my recent projects that showcase my skills and experience with the MERN stack.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
              All
            </Button>
            <Button variant={filter === "frontend" ? "default" : "outline"} onClick={() => setFilter("frontend")}>
              Frontend
            </Button>
            <Button variant={filter === "backend" ? "default" : "outline"} onClick={() => setFilter("backend")}>
              Backend
            </Button>
            <Button variant={filter === "fullstack" ? "default" : "outline"} onClick={() => setFilter("fullstack")}>
              Full Stack
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <div className="relative overflow-hidden h-48">
                {/* <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                /> */}
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
