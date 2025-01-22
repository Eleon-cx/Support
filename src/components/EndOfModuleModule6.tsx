"use client"

import { motion } from "framer-motion"
import { Award, ArrowLeft, Home } from "lucide-react"
import { useRouter } from "next/navigation"
import { useActivities } from "@/contexts/ActivityContext"

export default function EndOfModule() {
  const router = useRouter()
  const { areActivitiesCompleted } = useActivities()

  const requiredActivities = ["module6_miniQuiz"]
  const hasCompletedAllActivities = areActivitiesCompleted(requiredActivities)

  const navigateToPreviousModule = () => {
    router.push("/module-5")
    window.scrollTo(0, 0)
  }

  const navigateToHome = () => {
    router.push("/")
    window.scrollTo(0, 0)
  }

  return (
    <motion.section
      className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100 }}>
        <Award className="mx-auto mb-6" size={64} />
      </motion.div>
      <h2 className="text-4xl font-bold mb-4">Congratulations! You've Completed the Entire Course</h2>
      <p className="text-xl max-w-2xl mx-auto mb-8">
        You've mastered project management, the Support Readiness Tracker, and continuous improvement practices. You're
        now equipped to excel in CX project management!
      </p>
      <div className="flex justify-center space-x-4">
        <motion.button
          onClick={navigateToPreviousModule}
          className="bg-white text-indigo-600 py-2 px-6 rounded-md hover:bg-indigo-100 transition duration-300 text-lg font-semibold inline-flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="mr-2" size={20} />
          Previous Module
        </motion.button>
        <motion.button
          onClick={navigateToHome}
          className="bg-white bg-opacity-20 backdrop-blur-sm text-white py-2 px-6 rounded-md hover:bg-opacity-30 transition duration-300 text-lg font-semibold inline-flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Course Home
          <Home className="ml-2" size={20} />
        </motion.button>
      </div>
      {!hasCompletedAllActivities && (
        <p className="mt-4 text-yellow-300">
          Don't forget to complete all activities to get the most out of this course!
        </p>
      )}
    </motion.section>
  )
}

