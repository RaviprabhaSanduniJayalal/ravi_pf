"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import SectionHeading from "./section-heading"
import { Button } from "@/components/ui/button"
import {
  Code,
  Globe,
  Server,
  Terminal,
  GraduationCap,
  Award,
  Calendar,
  ExternalLink,
  Github,
  ChevronRight,
} from "lucide-react"

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
  const [activeSection, setActiveSection] = useState("profile")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const profileRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)

  const profileInView = useInView(profileRef, { margin: "-100px 0px -100px 0px" })
  const skillsInView = useInView(skillsRef, { margin: "-100px 0px -100px 0px" })
  const projectsInView = useInView(projectsRef, { margin: "-100px 0px -100px 0px" })
  const educationInView = useInView(educationRef, { margin: "-100px 0px -100px 0px" })

  // Update active section based on scroll position
  useEffect(() => {
    if (profileInView) setActiveSection("profile")
    else if (skillsInView) setActiveSection("skills")
    else if (projectsInView) setActiveSection("projects")
    else if (educationInView) setActiveSection("education")
  }, [profileInView, skillsInView, projectsInView, educationInView])

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

  return (
    <section id="about" className="py-20 bg-gray-950/50">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="Get to know more about me and my journey" />

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mx-auto lg:mx-0 max-w-xs"
              >
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
              </motion.div>

              {/* Navigation Menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50"
              >
                <nav className="space-y-2">
                  <button
                    onClick={() => scrollToSection(profileRef)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      activeSection === "profile"
                        ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-700/30"
                    }`}
                  >
                    <span className="flex items-center">
                      <span className="mr-3">👤</span>
                      Profile
                    </span>
                    {activeSection === "profile" && <ChevronRight className="h-4 w-4" />}
                  </button>

                  <button
                    onClick={() => scrollToSection(skillsRef)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      activeSection === "skills"
                        ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-700/30"
                    }`}
                  >
                    <span className="flex items-center">
                      <span className="mr-3">🛠️</span>
                      Skills
                    </span>
                    {activeSection === "skills" && <ChevronRight className="h-4 w-4" />}
                  </button>

                  <button
                    onClick={() => scrollToSection(projectsRef)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      activeSection === "projects"
                        ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-700/30"
                    }`}
                  >
                    <span className="flex items-center">
                      <span className="mr-3">💼</span>
                      Projects
                    </span>
                    {activeSection === "projects" && <ChevronRight className="h-4 w-4" />}
                  </button>

                  <button
                    onClick={() => scrollToSection(educationRef)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      activeSection === "education"
                        ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-700/30"
                    }`}
                  >
                    <span className="flex items-center">
                      <span className="mr-3">🎓</span>
                      Education
                    </span>
                    {activeSection === "education" && <ChevronRight className="h-4 w-4" />}
                  </button>
                </nav>
              </motion.div>

              {/* Contact Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50"
              >
                <h3 className="text-lg font-medium mb-3 text-white">Connect With Me</h3>
                <div className="flex justify-between">
                  <Link
                    href="https://github.com/raviprabha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/raviprabha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Link>
                  <Link
                    href="mailto:raviprabha@example.com"
                    className="p-2 rounded-lg bg-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="p-2 rounded-lg bg-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-download"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-24">
            {/* Profile Section */}
            <div ref={profileRef} id="profile-section" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-gray-800/40 to-gray-800/20 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 relative overflow-hidden"
              >
                {/* Background decorative elements */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>

                <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Raviprabha Sanduni Jayalal
                </h2>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    Undergraduate
                  </span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    Aspiring Software Engineer
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                    Full-Stack Developer
                  </span>
                </div>

                <p className="text-gray-300 text-lg mb-6 max-w-3xl">
                  I'm an undergraduate student at the University of Ruhuna, passionate about software engineering and
                  full-stack development. My journey in technology began with a curiosity about how digital solutions
                  can solve real-world problems.
                </p>

                <p className="text-gray-300 mb-6 max-w-3xl">
                  Currently focusing on expanding my knowledge in modern web technologies, I enjoy building interactive
                  and user-friendly applications. I'm particularly interested in the intersection of frontend design and
                  backend functionality.
                </p>

                <p className="text-gray-300 mb-8 max-w-3xl">
                  My goal is to secure a Software Engineering or Full-Stack internship where I can apply my skills,
                  learn from industry professionals, and contribute to meaningful projects that make a difference.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-purple-400 mr-2" />
                    <span className="text-gray-300">BSc in Computer Science</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-400 mr-2" />
                    <span className="text-gray-300">Expected Graduation: 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-purple-400 mr-2" />
                    <span className="text-gray-300">Dean's List 2021-2022</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Skills Section */}
            <div ref={skillsRef} id="skills-section" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">
                  <span className="mr-3">🛠️</span>
                  Technical Skills
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {skillCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                    >
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
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Projects Section */}
            <div ref={projectsRef} id="projects-section" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">
                  <span className="mr-3">💼</span>
                  Projects
                </h3>

                <div className="space-y-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative"
                      onMouseEnter={() => setHoveredProject(index)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div
                        className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 transition-transform duration-300"
                        style={{
                          transform:
                            hoveredProject === index
                              ? "perspective(1000px) rotateX(2deg)"
                              : "perspective(1000px) rotateX(0)",
                        }}
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-2/5 relative">
                            <div className="relative h-60 md:h-full w-full">
                              <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="flex gap-3">
                                <Link
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-3 rounded-full bg-gray-900/80 text-white hover:bg-purple-600 transition-colors"
                                >
                                  <Github className="h-5 w-5" />
                                </Link>
                                <Link
                                  href={project.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-3 rounded-full bg-gray-900/80 text-white hover:bg-blue-600 transition-colors"
                                >
                                  <ExternalLink className="h-5 w-5" />
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="p-6 md:w-3/5">
                            <h4 className="text-xl font-semibold mb-2 text-white">{project.title}</h4>
                            <p className="text-gray-300 mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300"
                                >
                                  {tech}
                                </span>
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
                      </div>

                      {/* Glow effect */}
                      <div
                        className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"
                        style={{ zIndex: -1 }}
                      ></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Education Section */}
            <div ref={educationRef} id="education-section" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">
                  <span className="mr-3">🎓</span>
                  Education & Activities
                </h3>

                <div className="space-y-8">
                  {/* Education Timeline */}
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

                    {educationData.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative pl-16 pb-10"
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gray-800 border-4 border-purple-500 flex items-center justify-center">
                          <GraduationCap className="h-5 w-5 text-purple-400" />
                        </div>

                        <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h4 className="text-xl font-semibold text-white">{item.degree}</h4>
                            <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{item.duration}</span>
                            </div>
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
                      </motion.div>
                    ))}
                  </div>

                  {/* Coursework */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                  >
                    <h4 className="text-lg font-semibold text-white mb-4">Relevant Coursework</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                  </motion.div>

                  {/* Extracurricular Activities */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-4">Extracurricular Activities</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {extracurriculars.map((item, index) => (
                        <div
                          key={index}
                          className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h5 className="text-lg font-medium text-white">{item.title}</h5>
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
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
