"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Database,
  Globe,
  Layout,
  Server,
  Settings,
  Smartphone,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillCategories = {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Redux", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "RESTful APIs", level: 85 },
      { name: "GraphQL", level: 70 },
      { name: "Authentication", level: 75 },
      { name: "Websockets", level: 65 },
    ],
    database: [
      { name: "MongoDB", level: 85 },
      { name: "Mongoose", level: 80 },
      { name: "SQL Basics", level: 60 },
      { name: "Redis", level: 50 },
      { name: "Data Modeling", level: 75 },
      { name: "Aggregation", level: 70 },
    ],
    tools: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 65 },
      { name: "AWS Basics", level: 60 },
      { name: "CI/CD", level: 70 },
      { name: "Jest", level: 75 },
      { name: "Webpack", level: 65 },
    ],
  };

  const icons = {
    frontend: <Layout className="h-5 w-5" />,
    backend: <Server className="h-5 w-5" />,
    database: <Database className="h-5 w-5" />,
    tools: <Settings className="h-5 w-5" />,
  };

  return (
    <section id="skills" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-primary mt-4 mb-6"></div>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Here are my technical skills and proficiency levels in various
            technologies of the MERN stack and beyond.
          </p>
        </div>

        <Tabs
          defaultValue="frontend"
          className="w-full max-w-4xl mx-auto"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="frontend" className="flex items-center gap-2">
              {icons.frontend} Frontend
            </TabsTrigger>
            <TabsTrigger value="backend" className="flex items-center gap-2">
              {icons.backend} Backend
            </TabsTrigger>
            <TabsTrigger value="database" className="flex items-center gap-2">
              {icons.database} Database
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              {icons.tools} Tools
            </TabsTrigger>
          </TabsList>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{
                          width: activeTab === category ? `${skill.level}%` : 0,
                        }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="text-muted-foreground">
              Building responsive and dynamic web applications using modern
              frameworks and best practices.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Backend Solutions</h3>
            <p className="text-muted-foreground">
              Creating robust APIs, server-side logic, and database integrations
              for seamless functionality.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
            <p className="text-muted-foreground">
              Ensuring applications work flawlessly across all devices with
              intuitive user interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
