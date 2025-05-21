"use client"

import { motion } from "motion/react"
import { Briefcase, Calendar, GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Experience() {
  const workExperience = [
    {
      id: 1,
      role: "Senior MERN Stack Developer",
      company: "Tech Innovations Inc.",
      duration: "Jan 2023 - Present",
      description: [
        "Led the development of a customer portal that improved user engagement by 40%",
        "Implemented real-time features using Socket.io for collaborative editing",
        "Optimized MongoDB queries resulting in a 30% improvement in application performance",
        "Mentored junior developers and conducted code reviews to maintain code quality",
      ],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Digital Solutions LLC",
      duration: "Jun 2021 - Dec 2022",
      description: [
        "Developed and maintained multiple React applications with Express.js backends",
        "Created RESTful APIs for mobile and web applications",
        "Implemented authentication and authorization using JWT",
        "Collaborated with UI/UX designers to implement responsive designs",
      ],
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "WebCraft Studios",
      duration: "Jan 2021 - May 2021",
      description: [
        "Assisted in the development of client websites using React.js",
        "Built and maintained MongoDB databases",
        "Fixed bugs and implemented new features for existing applications",
        "Participated in daily stand-ups and sprint planning meetings",
      ],
    },
  ]

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Tech University",
      duration: "2017 - 2021",
      description: [
        "Graduated with honors (3.8 GPA)",
        "Specialized in Web Development and Database Systems",
        "Completed a capstone project building a full-stack e-learning platform",
        "Active member of the university's coding club",
      ],
    },
    {
      id: 2,
      degree: "Full Stack Web Development Bootcamp",
      institution: "Code Academy",
      duration: "2020 (3 months)",
      description: [
        "Intensive program focused on MERN stack development",
        "Built 5 full-stack projects from scratch",
        "Collaborated with peers on group projects using Git and GitHub",
        "Received recognition for best final project",
      ],
    },
  ]

  const certifications = [
    {
      id: 1,
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      description: "Comprehensive certification validating expertise in MongoDB database design and operations.",
    },
    {
      id: 2,
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Certification demonstrating proficiency in developing and maintaining applications on AWS.",
    },
    {
      id: 3,
      name: "React.js Advanced Concepts",
      issuer: "Frontend Masters",
      date: "2022",
      description: "In-depth course covering advanced React patterns, hooks, and performance optimization.",
    },
  ]

  return (
    <section id="experience" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mt-4 mb-6"></div>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            My professional journey and educational background that have shaped my career as a MERN stack developer.
          </p>
        </div>

        <Tabs defaultValue="work" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="work" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" /> Work
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" /> Education
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2">
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
                        <CardDescription className="text-primary font-medium mt-1">{job.company}</CardDescription>
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
                        <CardDescription className="text-primary font-medium mt-1">{edu.institution}</CardDescription>
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
                        <CardDescription className="text-primary font-medium mt-1">{cert.issuer}</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md">{cert.date}</span>
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
  )
}