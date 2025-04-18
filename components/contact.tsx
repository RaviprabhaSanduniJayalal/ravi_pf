"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Linkedin, Github, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SectionHeading from "./section-heading"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after submission
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-gray-950/50">
      <div className="container mx-auto px-4">
        <SectionHeading title="Contact Me" subtitle="Let's connect and discuss opportunities" />

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl" // Responsive width
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700/50">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white text-center">Connect With Me</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-purple-500/20 mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <a
                      href="mailto:sanduniraviprabha@gmail.com"
                      className="text-gray-300 hover:text-purple-400 transition-colors break-all"
                    >
                      sanduniraviprabha@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-blue-500/20 mr-4 flex-shrink-0">
                    <Linkedin className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/raviprabha-sanduni-7b2999279"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition-colors break-all"
                    >
                      linkedin.com/in/raviprabha-sanduni-7b2999279
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-gray-500/20 mr-4 flex-shrink-0">
                    <Github className="h-5 w-5 md:h-6 md:w-6 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">GitHub</h4>
                    <a
                      href="https://github.com/RaviprabhaSanduniJayalal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors break-all"
                    >
                      github.com/RaviprabhaSanduniJayalal
                    </a>
                  </div>
                </div>
              </div>

              {/* Available For Section */}
              <div className="mt-10">
                <h4 className="text-white font-medium mb-4 text-center">Available For</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Full-time Internship", "Part-time Internship", "Remote Work", "Project Collaboration"].map(
                    (item, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-700/50 px-3 py-1 rounded-full text-gray-300 text-sm md:text-base"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Optional Contact Form Button */}
              <div className="mt-8 text-center">
                <Button
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  onClick={() => {
                    // You can add functionality to show a contact form modal here
                    window.location.href = "mailto:sanduniraviprabha@gmail.com"
                  }}
                >
                  <Mail className="mr-2 h-4 w-4" /> Email Me Directly
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}