"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useActivities } from "@/contexts/ActivityContext"

const ModulePreview = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    className="mt-24 grid md:grid-cols-3 gap-8"
  >
    {[
      { title: "Module 1", description: "Fundamentals of CX Project Management" },
      { title: "Module 2", description: "Mastering the Support Readiness Tracker" },
      { title: "Module 3", description: "Advanced Support Readiness Techniques" },
      { title: "Module 4", description: "Measuring Success and Continuous Improvement" },
      { title: "Module 5", description: "End-to-End Project Simulation" },
      { title: "Module 6", description: "Post-Project Review & Future Applications" },
    ].map((module, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">{module.title}</h3>
        <p className="text-gray-600">{module.description}</p>
      </div>
    ))}
  </motion.div>
)

export default function LandingPage() {
  const router = useRouter()
  const { markActivityCompleted } = useActivities()

  useEffect(() => {
    markActivityCompleted("landingPage")
  }, [markActivityCompleted])

  const startCourse = () => {
    router.push("/module-1")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Support Readiness Training
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Master CX project management and learn how to effectively use the Support Readiness Tracker to streamline
            your operations.
          </p>
          <motion.button
            onClick={startCourse}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Course
            <ArrowRight className="ml-2" size={20} />
          </motion.button>
        </motion.div>

        <ModulePreview />
      </div>
    </div>
  )
}

