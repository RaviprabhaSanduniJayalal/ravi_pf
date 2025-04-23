
"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import SectionHeading from "./section-heading"
import { Button } from "@/components/ui/button"
import { Code, Globe, Server, Terminal, GraduationCap, Calendar, ExternalLink, Github } from "lucide-react"


// Skills data
const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="h-5 w-5 text-purple-400" />,
    skills: [
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "C", level: 80 },
      { name: "C#", level: 75 },
      { name: "PHP", level: 70 },
      { name: "MATLAB", level: 65 },
    ],
  },
  {
    title: "Web Technologies",
    icon: <Globe className="h-5 w-5 text-blue-400" />,
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "React", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Laravel", level: 75 },
      { name: "jQuery", level: 70 },
    ],
  },
  {
    title: "Tools & Databases",
    icon: <Terminal className="h-5 w-5 text-purple-400" />,
    skills: [
      { name: "Git", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 80 },
      { name: "Docker", level: 70 },
    ],
  },
  {
    title: "Soft Skills",
    icon: <Server className="h-5 w-5 text-blue-400" />,
    skills: [
      { name: "Problem-solving", level: 90 },
      { name: "Teamwork", level: 85 },
      { name: "Communication", level: 85 },
      { name: "Time management", level: 80 },
    ],
  },
]

// Projects data from CV
const projects = [
  {
    title: "Ceylon Fusion (Final Year Project)",
    description:
      "A web-based e-commerce and booking platform tailored for a business in a Cinnamon Estate. Simplifies online sales and booking processes, enhancing customer interaction and management efficiency.",
    image: "/images/Ceylon fusion.png",
    technologies: ["Spring Boot", "React", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com/Ceylon-Fusion-Project",
   
    period: "December 2024 – April 2025",
  },
  {
    title: "Point of Sales Application",
    description:
      "Developed a Spring Boot and MySQL backend designed to handle sales transactions, inventory management, and customer data.",
    image: "/images/pos-system.jpg",
    technologies: ["Spring Boot", "MySQL", "Java"],
    github: "https://github.com/RaviprabhaSanduniJayalal/POS-sb",
    
    period: "December 2024",
  },
  {
    title: "Web-based Product Store",
    description:
      "Built a product management platform using MERN Stack (MongoDB, Express.js, React, Node.js) with responsive UI and efficient backend API. Enables users to add, edit, and display products seamlessly.",
    image: "/images/product-store.jpg",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/RaviprabhaSanduniJayalal/Product-Store",
    
    period: "February 2025",
  },
  {
    title: "ORFOO - Food Ordering System",
    description:
      "A C#-based food ordering system built with Visual Studio that lets restaurant customers order from their tables. Streamlines order processing and enhances the dining experience.",
    image: "/images/food-ordering.jpg",
    technologies: ["C#", ".NET", "Visual Studio"],
    github: "https://github.com/RaviprabhaSanduniJayalal/ORFOO",
    
    period: "December 2024 – Present",
  },
  {
    title: "Rave - Voice Bot Mobile App",
    description:
      "Developed a voice bot mobile app using Flutter and Dart to help users practice English speaking skills. Features real-time voice interaction and feedback for improved language learning.",
    image: "/images/voice-app.jpg",
    technologies: ["Flutter", "Dart", "Voice Recognition"],
    github: "https://github.com/RaviprabhaSanduniJayalal/Rave_bot",
    
    period: "March 2025",
  },
  {
    title: "Sri Lankan Wild Explorer",
    description:
      "A Java, JavaFX based educational application designed to teach children about Sri Lanka's wildlife. Provides interactive lessons, quizzes, and fun facts about various animal species native to the country.",
    image: "/images/wildlife-app.jpg",
    technologies: ["Java", "JavaFX", "Educational Software"],
    github: "https://github.com/RaviprabhaSanduniJayalal/JavaQuiz",
    
    period: "November 2023 – April 2024",
  },
]

// Education data from CV
const educationData = [
  {
    degree: "Bachelor of Computer Science",
    institution: "University of Ruhuna",
    duration: "August 2022 – Present",
    description: "Focusing on software engineering, web development, and database management systems.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Web Development",
      "Software Engineering",
      "Computer Networks",
    ],
  },
  {
    degree: "GCE Advanced Level",
    institution: "Royal College Wayamba",
    duration: "2007 – 2020",
  },
]

export default function About() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [currentProject, setCurrentProject] = useState(0)
  const projectsRef = useRef<HTMLDivElement>(null)

  // Auto-rotate projects every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-950/50">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="Get to know more about me and my journey" />

        {/* Profile Section */}
        <div id="profile-section" className="scroll-mt-24 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-gray-800/40 to-gray-800/20 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 relative overflow-hidden"
          >
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
              A dedicated computer science undergraduate with a strong passion for software development. Enthusiastic
              about problem-solving, writing clean code, and learning new technologies.
            </p>

            <p className="text-gray-300 mb-6 max-w-3xl">
              Currently pursuing a Bachelor's degree in Computer Science at University of Ruhuna. My goal is to secure a
              Software Engineering or Full-Stack Development position.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
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
                  className="lucide lucide-github mr-2 text-purple-400"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <Link
                  href="https://github.com/RaviprabhaSanduniJayalal"
                  target="_blank"
                  className="text-gray-300 hover:text-purple-400"
                >
                  github.com/RaviprabhaSanduniJayalal
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div id="skills-section" className="scroll-mt-24 mb-24">
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

                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-br from-purple-600 to-indigo-500 rounded-full shadow-sm"
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Projects Section with Paradox Effect */}
        <div id="projects-section" className="scroll-mt-24 mb-24 relative overflow-hidden">
          {/* Paradox Background Effect */}
          <div className="absolute inset-0 overflow-hidden z-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              <span className="mr-3">💼</span>
              Projects
            </h3>

            <div className="relative overflow-hidden h-[500px] sm:h-[550px] w-full rounded-xl">
              {/* Project Carousel */}
              <div
                ref={projectsRef}
                className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <motion.div key={index} className="w-full flex-shrink-0 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full max-w-4xl mx-auto">
                        <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 h-[450px] sm:h-[500px] flex flex-col md:flex-row">
                          {/* Image container - Fixed height on mobile */}
                          <div className="h-[200px] md:h-auto md:w-1/2 relative">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover"
                              priority={index === currentProject}
                            />
                            {/* Adjusted gradient overlay for better visibility on mobile */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent md:bg-gradient-to-r md:from-gray-900/80 md:to-transparent"></div>
                          </div>
                          <div className="flex-1 md:w-1/2 p-6 flex flex-col overflow-y-auto">
                            <h4 className="text-xl font-semibold mb-2 text-white">{project.title}</h4>
                            <p className="text-gray-400 text-sm mb-2">{project.period}</p>
                            <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

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

                            <div className="flex gap-3 mt-auto">
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
                                
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all ${currentProject === index ? "bg-purple-500 w-6" : "bg-gray-600"}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <div id="education-section" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              <span className="mr-3">🎓</span>
              Education
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
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pl-16 pb-10"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gray-800 border-4 border-purple-500 flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-purple-400" />
                    </div>

                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-white">{item.degree}</h4>
                          <p className="text-gray-400">{item.institution}</p>
                        </div>
                        <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{item.duration}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4">{item.description}</p>

                      {/* Coursework */}
                      {item.degree !== "GCE Advanced Level" && item.coursework && (
                        <div className="mt-6">
                          <h5 className="text-lg font-medium text-white mb-3">Relevant Coursework</h5>
                          <div className="grid grid-cols-2 gap-3">
                            {item.coursework.map((course, courseIndex) => (
                              <div
                                key={courseIndex}
                                className="bg-gray-700/30 px-3 py-2 rounded-lg text-gray-300 text-sm"
                              >
                                {course}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
