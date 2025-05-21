"use client";

import { motion, useInView } from "motion/react";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRef } from "react";

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const workExperience = [
    {
      id: 1,
      role: "Software Developer",
      company: "Mundrisoft Solutions",
      duration: "Dec 2023 - Present",
      description: [
        "Built responsive and accessible web apps using React.js and Next.js, improving Lighthouse performance by 30%",
        "Implemented SSR and dynamic routing in Next.js for better SEO and performance",
        "Refactored components into reusable modules, reducing code duplication by 40%",
        "Worked with WebSockets, AG Grid, and TinyMCE to deliver complex interactive features",
      ],
    },
    {
      id: 2,
      role: "React Developer",
      company: "Cosmonaut Technologies Pvt. Ltd",
      duration: "Apr 2023 - Dec 2023",
      description: [
        "Developed and deployed cross-platform mobile apps using React Native",
        "Integrated payment gateways (Stripe, PayPal, CCAvenue) into mobile/web apps",
        "Built an admin dashboard using React, Tailwind CSS, Redux Toolkit, and Zod for validation",
        "Added analytics and visualizations using Chart.js for enhanced user experience",
      ],
    },
  ];
  const education = [
    {
      id: 1,
      degree:
        "Bachelor of Science in Electronics and Communication Engineering",
      institution: "Gujarat Technological University",
      duration: "2019 - 2023",
      description: [
        "Graduated with a CGPA of 7.5, with a strong emphasis on Web Development and Database Systems",
        "Developed a capstone project: A full-stack e-learning platform built with React.js, Node.js, MongoDB, and WebRTC for real-time communication",
        "Gained hands-on experience in embedded systems, digital communication, and microprocessors alongside web development",
        "Undertook multiple online courses to further enhance skills in MERN stack, AWS, and cloud computing",
      ],
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "CodeChef Certified in Problem Solving",
      issuer: "CodeChef",
      date: "2024",
      description:
        "Certificate for completing all practice problems in the Problem Solving track, validating skills in algorithmic problem solving and competitive programming.",
    },
    {
      id: 2,
      name: "Top JavaScript Interview Questions",
      issuer: "CodeChef",
      date: "2025",
      description:
        "Certificate for completing all the practice problems in the Top JavaScript Interview Questions track, strengthening JavaScript fundamentals and interview skills.",
    },
  ];

  return (
    <section id="experience" className="py-16" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Experience & Education
          </h2>
          <motion.div
            className="w-20 h-1 bg-primary mt-4 mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: "5rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            My professional journey and educational background that have shaped
            my career as a MERN stack developer.
          </p>
        </motion.div>

        <Tabs defaultValue="work" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="work" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" /> Work
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" /> Education
            </TabsTrigger>
            <TabsTrigger
              value="certifications"
              className="flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" /> Certifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="work" className="space-y-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{job.role}</CardTitle>
                        <CardDescription className="text-primary font-medium mt-1">
                          {job.company}
                        </CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md">
                        {job.duration}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {job.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription className="text-primary font-medium mt-1">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md">
                        {edu.duration}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {edu.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="certifications" className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{cert.name}</CardTitle>
                        <CardDescription className="text-primary font-medium mt-1">
                          {cert.issuer}
                        </CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md">
                        {cert.date}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
