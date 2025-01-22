"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Welcome() {
  const scrollToLearningObjectives = () => {
    const learningObjectivesSection = document.getElementById("module5_learningObjectives")
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
        src="/placeholder.svg?height=600&width=1200&text=End-to-End%20Project%20Simulation"
        alt="End-to-End Project Simulation Background"
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
          Module 5: End-to-End Project Simulation
        </motion.h1>
        <motion.h2
          className="text-3xl mb-8 font-light text-gray-700"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        >
          Apply Your Skills in a Realistic CX Project Scenario
        </motion.h2>
        <motion.p
          className="text-xl max-w-3xl mx-auto leading-relaxed mb-12 text-gray-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          Welcome to Module 5! In this comprehensive simulation, you'll manage a complete CX project from start to
          finish, applying all the skills you've learned so far. Get ready to tackle real-world challenges and make
          critical decisions using the Support Readiness Tracker.
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
          Start the Simulation
          <ChevronDown className="ml-2" size={20} />
        </motion.button>
      </div>
    </motion.section>
  )
}

