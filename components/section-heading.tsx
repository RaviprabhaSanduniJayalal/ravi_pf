"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
        {title}
      </h2>
      {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto mt-4"></div>
    </motion.div>
  )
}
