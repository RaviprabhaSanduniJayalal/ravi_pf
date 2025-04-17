

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

        <div className="grid md:grid-cols-2 gap-12">
          {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 h-full">
              <h3 className="text-xl font-semibold mb-6 text-white">Get In Touch</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-gray-700/50 border-gray-600 focus:border-purple-500 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      required
                      className="bg-gray-700/50 border-gray-600 focus:border-purple-500 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                    required
                    className="bg-gray-700/50 border-gray-600 focus:border-purple-500 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    required
                    className="bg-gray-700/50 border-gray-600 focus:border-purple-500 text-white resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : isSubmitted ? (
                    <>Message Sent Successfully!</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 h-full">
              <h3 className="text-xl font-semibold mb-6 text-white">Connect With Me</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-purple-500/20 mr-4">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <a
                      href="mailto:sanduniraviprabha@gmail.com"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      sanduniraviprabha@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-blue-500/20 mr-4">
                    <Linkedin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">LinkedIn</h4>
                    <a
                      href="www.linkedin.com/in/raviprabha-sanduni-7b2999279"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      www.linkedin.com/in/raviprabha-sanduni-7b2999279
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-gray-500/20 mr-4">
                    <Github className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">GitHub</h4>
                    <a
                      href="https://github.com/RaviprabhaSanduniJayalal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      https://github.com/RaviprabhaSanduniJayalal
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-white font-medium mb-4">Available For</h4>
                <div className="flex flex-wrap gap-3">
                  {["Full-time Internship", "Part-time Internship", "Remote Work", "Project Collaboration"].map(
                    (item, index) => (
                      <span key={index} className="bg-gray-700/50 px-3 py-1 rounded-full text-gray-300 text-sm">
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
