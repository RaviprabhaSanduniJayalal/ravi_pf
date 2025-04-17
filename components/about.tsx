"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import SectionHeading from "./section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, GraduationCap, Award, Code, Globe, Server, Terminal, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Skills data
const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-5 w-5 text-purple-400" />,
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Frameworks",
    icon: <Globe className="h-5 w-5 text-blue-400" />,
    skills: [
      { name: "React", level: 85 },
      { name: "Spring Boot", level: 75 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Tools",
    icon: <Terminal className="h-5 w-5 text-purple-400" />,
    skills: [
      { name: "Git", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Docker", level: 70 },
    ],
  },
  {
    title: "Other",
    icon: <Server className="h-5 w-5 text-blue-400" />,
    skills: [
      { name: "RESTful APIs", level: 85 },
      { name: "UI/UX Design", level: 75 },
      { name: "Agile/Scrum", level: 70 },
      { name: "Testing", level: 75 },
    ],
  },
]

// Projects data
const projects = [
  {
    title: "E-Learning Platform",
    description: "A comprehensive platform for online education with interactive courses and quizzes.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity tool for managing tasks with drag-and-drop functionality and team collaboration.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Dashboard",
    description: "An admin dashboard for managing products, orders, and customer data for online stores.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Spring Boot", "MySQL", "Material UI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Forecast App",
    description: "A weather application providing real-time forecasts and historical weather data visualization.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "HTML/CSS"],
    github: "#",
    demo: "#",
  },
]

// Education data
const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Ruhuna",
    duration: "2020 - 2024 (Expected)",
    description:
      "Focusing on software engineering, web development, and database management systems. Maintaining a strong academic record with a focus on practical project implementation.",
    achievements: [
      "Dean's List for Academic Excellence (2021-2022)",
      "Best Group Project Award for Innovative Web Application",
      "Participated in IEEE Programming Competition",
    ],
  },
]

const extracurriculars = [
  {
    title: "IEEE Student Branch",
    role: "Active Member",
    duration: "2021 - Present",
    description: "Participating in technical workshops and community projects.",
  },
  {
    title: "Coding Club",
    role: "Team Lead",
    duration: "2022 - Present",
    description: "Organizing coding challenges and mentoring junior students.",
  },
]

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="about" className="py-20 bg-gray-950/50">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="Get to know more about me and my journey" />

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <div className="relative mb-8 mx-auto lg:mx-0 max-w-xs">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-purple-500/20">
                  <Image
                    src="/images/raviprabha-profile.png"
                    alt="Raviprabha Sanduni Jayalal"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
              </div>

              <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-2xl font-semibold mb-4 text-white">Raviprabha Sanduni Jayalal</h3>
                <p className="text-gray-300 mb-6">
                  Undergraduate at University of Ruhuna, passionate about software engineering and full-stack
                  development. Currently seeking internship opportunities to apply my skills in a professional
                  environment.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">BSc in Computer Science</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">Expected Graduation: 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Dean's List 2021-2022</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Tabs defaultValue="skills" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>

              {/* Skills Tab */}
              <TabsContent value="skills" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {skillCategories.map((category, index) => (
                    <Card key={index} className="bg-gray-800/40 backdrop-blur-sm border-gray-700/50">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="p-2 rounded-lg bg-gray-700/50 mr-3">{category.icon}</div>
                          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                        </div>

                        <div className="space-y-4">
                          {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex}>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-300">{skill.name}</span>
                                <span className="text-gray-400">{skill.level}%</span>
                              </div>
                              <div className="w-full bg-gray-700 rounded-full h-2">
                                <motion.div
                                  className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: 0.2 }}
                                ></motion.div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Projects Tab */}
              <TabsContent value="projects" className="space-y-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      transform:
                        hoveredIndex === index
                          ? "perspective(1000px) rotateY(3deg) rotateX(3deg)"
                          : "perspective(1000px) rotateY(0) rotateX(0)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <Card className="bg-gray-800/40 backdrop-blur-sm border-gray-700/50 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-3 gap-0">
                          <div className="relative h-48 md:h-full">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent md:bg-gradient-to-t md:from-gray-900 md:to-transparent opacity-60"></div>
                          </div>

                          <div className="p-6 md:col-span-2">
                            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="outline"
                                  className="bg-gray-700/30 text-gray-300 border-gray-600"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex gap-3">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-purple-500 text-white hover:bg-purple-500/10"
                                asChild
                              >
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="mr-1 h-4 w-4" /> GitHub
                                </Link>
                              </Button>
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                                asChild
                              >
                                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Glow effect */}
                    <div
                      className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"
                      style={{ zIndex: -1 }}
                    ></div>
                  </motion.div>
                ))}
              </TabsContent>

              {/* Education Tab */}
              <TabsContent value="education" className="space-y-8">
                <Card className="bg-gray-800/40 backdrop-blur-sm border-gray-700/50">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-full bg-purple-500/20 mr-4">
                        <GraduationCap className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">Academic Education</h3>
                        <p className="text-gray-400">University of Ruhuna</p>
                      </div>
                    </div>

                    {educationData.map((item, index) => (
                      <div key={index} className="mb-6">
                        <h4 className="text-lg font-medium text-white mb-1">{item.degree}</h4>
                        <div className="flex items-center text-gray-400 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{item.duration}</span>
                        </div>
                        <p className="text-gray-300 mb-4">{item.description}</p>

                        <h5 className="text-sm font-medium text-purple-400 mb-2">Achievements:</h5>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <span className="text-purple-500 mr-2">•</span>
                              <span className="text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-white mb-4">Relevant Coursework</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Data Structures & Algorithms",
                          "Object-Oriented Programming",
                          "Database Management Systems",
                          "Web Development",
                          "Software Engineering",
                          "Computer Networks",
                          "Mobile Application Development",
                          "Cloud Computing",
                        ].map((course, courseIndex) => (
                          <div key={courseIndex} className="bg-gray-700/30 px-3 py-2 rounded-lg text-gray-300 text-sm">
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/40 backdrop-blur-sm border-gray-700/50">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-full bg-blue-500/20 mr-4">
                        <Award className="h-6 w-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">Extracurricular Activities</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {extracurriculars.map((item, index) => (
                        <div key={index} className="bg-gray-700/30 p-4 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="text-lg font-medium text-white">{item.title}</h4>
                              <p className="text-blue-400">{item.role}</p>
                            </div>
                            <div className="flex items-center text-gray-400">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{item.duration}</span>
                            </div>
                          </div>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
