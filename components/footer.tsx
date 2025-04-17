"use client"

import { motion } from "framer-motion"
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-900 py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="#home"
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
            >
              Raviprabha Sanduni Jayalal
            </Link>
            <p className="text-gray-400 mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-4 mt-6 md:mt-0"
          >
            <a
              href="https://github.com/raviprabha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Github className="h-5 w-5 text-gray-300" />
            </a>
            <a
              href="https://linkedin.com/in/raviprabha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-gray-300" />
            </a>
            <a
              href="mailto:raviprabha@example.com"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Mail className="h-5 w-5 text-gray-300" />
            </a>
          </motion.div>
        </div>

        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg transition-all duration-300 z-50"
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </button>
      </div>
    </footer>
  )
}
