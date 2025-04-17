"use client"

import { motion } from "framer-motion"
import { Download, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InternshipCallout() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>

          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-purple-400 mr-2" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Open to Opportunities</h2>
              </div>
              <p className="text-gray-300 text-lg max-w-2xl">
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  I'm actively seeking Software Engineering Internships.
                </span>{" "}
                Looking to apply my skills in a professional environment and contribute to innovative projects. Let's
                connect and explore how I can add value to your team!
              </p>
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-6 h-auto rounded-xl shadow-lg">
              <Download className="mr-2 h-5 w-5" />
              <span className="text-base">Download My CV</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
