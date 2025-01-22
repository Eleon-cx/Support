"use client"

import { motion } from "framer-motion"
import { Award, ArrowRight, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useActivities } from "@/contexts/ActivityContext"

export default function EndOfModule() {
  const router = useRouter()
  const { areActivitiesCompleted } = useActivities()

  const requiredActivities = ["module3_miniQuiz"]
  const canProceedToNextModule = areActivitiesCompleted(requiredActivities)

  const navigateToNextModule = () => {
    router.push("/module-4")
    window.scrollTo(0, 0)
  }

  const navigateToPreviousModule = () => {
    router.push("/module-2")
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
      <h2 className="text-4xl font-bold mb-4">Congratulations! You've Completed Module 3</h2>
      <p className="text-xl max-w-2xl mx-auto mb-8">
        You've mastered advanced techniques for the Support Readiness Tracker, including automation, integration, and
        data-driven decision making. You're now equipped to take your CX project management to the next level!
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
        {canProceedToNextModule ? (
          <motion.button
            onClick={navigateToNextModule}
            className="bg-white bg-opacity-20 backdrop-blur-sm text-white py-2 px-6 rounded-md hover:bg-opacity-30 transition duration-300 text-lg font-semibold inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next Module
            <ArrowRight className="ml-2" size={20} />
          </motion.button>
        ) : (
          <motion.button
            onClick={navigateToNextModule}
            className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600 transition duration-300 text-lg font-semibold inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Bypass for Testing
            <ArrowRight className="ml-2" size={20} />
          </motion.button>
        )}
      </div>
    </motion.section>
  )
}

