

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Download, Send, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ParticlesBackground from "./particles-background"


const backgrounds = [
  { id: "particles", component: ParticlesBackground, name: "Particles" }

]

// Technical skills list
const skills = [
  "React",
  "Spring Boot",
  "Java",
  "TypeScript",
  "Node.js",
  "JavaScript",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  
  "Git",
  "RESTful APIs",
  ,
]

export default function Hero() {
  const [currentBackground, setCurrentBackground] = useState(0)

  const nextBackground = () => {
    setCurrentBackground((prev) => (prev + 1) % backgrounds.length)
  }

  const BackgroundComponent = backgrounds[currentBackground].component

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background */}
      <BackgroundComponent />

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
           <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-500/20 shadow-lg bg-white">
              <Image
                src="/images/raviprabha-profile.png"
                alt="Raviprabha Sanduni Jayalal"
                width={224} // same as w-56
                height={224}
                className="object-cover"
                priority
              />
            </div>


            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-30 -z-10"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Raviprabha Sanduni Jayalal
            </h1>

            <h2 className="text-xl md:text-2xl mb-4 text-gray-300">Passionate Full Stack Developer</h2>

            <p className="text-gray-400 mb-6 max-w-2xl mx-auto lg:mx-0">
              Building elegant, user-centered web applications with modern technologies. I specialize in creating
              responsive, performant solutions for complex problems.
            </p>

            {/* Skills List */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800/60 rounded-full text-sm text-gray-300 backdrop-blur-sm border border-gray-700/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-md">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
              <Link href="#contact" >
                <Button
                  variant="outline"
                  className="border-purple-500 text-white hover:bg-purple-500/10 px-6 py-2 rounded-md"
                >
                  <Send className="mr-2 h-4 w-4" /> contact me
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/raviprabha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800/60 text-gray-300 hover:text-white hover:bg-gray-700/80 transition-colors backdrop-blur-sm"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/raviprabha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800/60 text-gray-300 hover:text-white hover:bg-gray-700/80 transition-colors backdrop-blur-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:raviprabha@example.com"
                className="p-2 rounded-full bg-gray-800/60 text-gray-300 hover:text-white hover:bg-gray-700/80 transition-colors backdrop-blur-sm"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Switcher
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="outline"
          size="sm"
          className="bg-gray-900/50 border-gray-700 text-gray-300 hover:bg-gray-800/70 backdrop-blur-sm"
          onClick={nextBackground}
        >
          <span className="text-xs">Change Theme</span>
        </Button>
      </div> */}

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
        }}
      >
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </motion.div>
    </section>
  )
}
