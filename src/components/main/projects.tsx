"use client";

import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useInView, motion } from "motion/react";
import PlaceholderImage from "./PlaceholderImage";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const projects = [
    {
      id: 1,
      title: "TweetNest",
      description:
        "TweetNest is a full-stack social media web app inspired by Twitter, developed with Next.js, PostgreSQL, and Prisma. It leverages Next.js for a smooth, server-side rendered experience and uses PostgreSQL and Prisma for efficient data management. TweetNest enables users to share updates and interact with content in a modern, scalable environment.",
      image: "/images/tweetnest.png",
      tags: [
        "react",
        "next.js",
        "node",
        "mongodb",
        "prisma",
        "postgresql",
        "tailwind",
        "uploadthing",
        "shadcn",
        "tanstack-query",
      ],
      demoLink: "https://tweet-nest-two.vercel.app/",
      githubLink: "https://github.com/HirenTumbadiya/TweetNest",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Ozone-Realm",
      description:
        "Ozone-Realm is an interactive online Tic-Tac-Toe game that allows players to engage in a 1v1 match while using WebSocket for real-time gameplay updates and WebRTC for seamless video and voice calls during the match. This project leverages Next.js, Node.js, and TurboRepo for efficient development, offering a modern and immersive gaming experience with instant communication features.",
      image: "/images/ozone.png",
      tags: [
        "react",
        "next.js",
        "node",
        "express",
        "turbo-repo",
        "webrtc",
        "websocket",
        "tailwind",
      ],
      demoLink: "https://ozone-realm-ui.vercel.app/",
      githubLink: "https://github.com/HirenTumbadiya/ozone-realm",
      category: "fullstack",
    },
    {
      id: 3,
      title: "DevTalk",
      description:
        "DevTalk is a real-time chat application built with React, Go, and MongoDB. It enables users to engage in instant messaging, create private or group chats, receive message notifications, and browse message history. Experience seamless communication with DevTalk.",
      image: null,
      tags: [
        "react",
        "golang",
        "mongodb",
        "mongodb-driver",
        "gorilla/websocket",
        "yup",
        "tailwind",
        "axios",
      ],
      demoLink: null,
      githubLink: "https://github.com/HirenTumbadiya/DevTalk",
      category: "fullstack",
    },
    // {
    //   id: 4,
    //   title: "Fabbrica Clone",
    //   description:
    //     "A clone of Fabbrica, an online store with a clean, modern UI and interactive product features.",
    //   image: null,
    //   tags: ["react", "css", "html"],
    //   demoLink: "https://example.com", // Replace with actual link
    //   githubLink: "https://github.com",
    //   category: "frontend",
    // },
    {
      id: 4,
      title: "Eduflex",
      description:
        "EduFlex is a compact React template project for a stock market education website. It offers user-friendly resources like video tutorials, articles, and quizzes to help individuals learn about investing in stocks. Users can create accounts, track their progress, and engage in community discussions.",
      image: "/images/eduflex.png",
      tags: ["react", "react router", "tailwind", "css", "react dom"],
      demoLink: null,
      githubLink: "https://github.com/HirenTumbadiya/eduflex",
      category: "frontend",
    },
    // {
    //   id: 6,
    //   title: "AnimeHub",
    //   description:
    //     "A project to display an anime list with detailed information about each anime.",
    //   image: null,
    //   tags: ["react", "api", "css"],
    //   demoLink: "https://example.com", // Replace with actual link
    //   githubLink: "https://github.com", // Replace with actual link
    //   category: "frontend",
    // },
    // {
    //   id: 7,
    //   title: "Youtube Clone",
    //   description:
    //     "A backend-focused project that simulates a YouTube clone's server and video upload functionality.",
    //   image: null,
    //   tags: ["node", "express", "mongodb"],
    //   demoLink: "https://example.com", // Replace with actual link
    //   githubLink: "https://github.com", // Replace with actual link
    //   category: "backend",
    // },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-16 bg-muted/30" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <motion.div
            className="w-20 h-1 bg-primary mt-4 mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: "5rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Check out some of my recent projects that showcase my skills and
            experience with the MERN stack.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-8"
          variants={filterVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10">All</span>
              {filter === "all" && (
                <motion.span
                  className="absolute inset-0 bg-primary"
                  layoutId="activeFilter"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Button>
            <Button
              variant={filter === "frontend" ? "default" : "outline"}
              onClick={() => setFilter("frontend")}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10">Frontend</span>
              {filter === "frontend" && (
                <motion.span
                  className="absolute inset-0 bg-primary"
                  layoutId="activeFilter"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Button>
            {/* <Button
              variant={filter === "backend" ? "default" : "outline"}
              onClick={() => setFilter("backend")}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10">Backend</span>
              {filter === "backend" && (
                <motion.span
                  className="absolute inset-0 bg-primary"
                  layoutId="activeFilter"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Button> */}
            <Button
              variant={filter === "fullstack" ? "default" : "outline"}
              onClick={() => setFilter("fullstack")}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10">Full Stack</span>
              {filter === "fullstack" && (
                <motion.span
                  className="absolute inset-0 bg-primary"
                  layoutId="activeFilter"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              custom={index}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group p-0">
                <div className="relative overflow-hidden h-48">
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  ) : (
                    <PlaceholderImage />
                  )}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between mt-auto pb-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button asChild variant="outline" size="sm">
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </motion.div>
                  {project.demoLink && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button asChild size="sm">
                        <Link
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Link>
                      </Button>
                    </motion.div>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
