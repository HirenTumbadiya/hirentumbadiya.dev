import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mt-4 mb-6"></div>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Get to know more about me, my background, and what drives me as a
            developer.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Who am I?</h3>
            <p className="text-muted-foreground">
              I&apos;m a passionate MERN Stack Developer with 2.5+ years of
              experience building web applications that deliver exceptional user
              experiences. I specialize in creating responsive, scalable, and
              maintainable applications using MongoDB, Express.js, React, and
              Node.js.
            </p>
            <p className="text-muted-foreground">
              My journey in web development began during my computer science
              studies, where I discovered my passion for creating interactive
              web experiences. Since then, I&apos;ve worked on various projects,
              from small business websites to complex enterprise applications.
            </p>
            <p className="text-muted-foreground">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or sharing my
              knowledge through technical blog posts.
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
                  <strong>Name:</strong> John Doe
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>
                  <strong>Email:</strong> john@example.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>
                  <strong>Location:</strong> San Francisco, CA
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>
                  <strong>Experience:</strong> 2.5+ Years
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
                  "UI/UX Design",
                  "Open Source",
                  "Tech Writing",
                  "Problem Solving",
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
