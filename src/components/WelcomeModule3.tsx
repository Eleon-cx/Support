"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Welcome() {
  const scrollToLearningObjectives = () => {
    const learningObjectivesSection = document.getElementById("module3_learningObjectives")
    if (learningObjectivesSection) {
      learningObjectivesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative text-center py-24 px-6 overflow-hidden"
    >
      <Image
        src="/placeholder.svg?height=600&width=1200&text=Advanced%20Support%20Readiness%20Techniques"
        alt="Advanced Support Readiness Techniques Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-20"
      />
      <div className="relative z-10">
        <motion.h1
          className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          Module 3: Advanced Support Readiness Techniques
        </motion.h1>
        <motion.h2
          className="text-3xl mb-8 font-light text-gray-700"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        >
          Elevating Your CX Project Management with Cutting-Edge Strategies
        </motion.h2>
        <motion.p
          className="text-xl max-w-3xl mx-auto leading-relaxed mb-12 text-gray-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          Welcome to Module 3! In this advanced module, we'll explore cutting-edge techniques to optimize your support
          readiness process. You'll learn about automation strategies, integration with other tools, and how to leverage
          data for better decision-making in your CX projects.
        </motion.p>
        <motion.button
          onClick={scrollToLearningObjectives}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition duration-300 flex items-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Dive into Advanced Techniques
          <ChevronDown className="ml-2" size={20} />
        </motion.button>
      </div>
    </motion.section>
  )
}

