"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useActivities } from "@/contexts/ActivityContext"

export default function RecapNextSteps() {
  const recapPoints = [
    "Successfully managed a full project lifecycle using the Support Readiness Tracker",
    "Effectively communicated updates and escalated blockers via Slack",
    "Handled unexpected issues promptly to keep the project on track",
    "Applied project management skills in a realistic, simulated environment",
  ]

  const router = useRouter()
  const { areActivitiesCompleted } = useActivities()

  const requiredActivities = ["module5_miniQuiz"]
  const canProceedToNextModule = areActivitiesCompleted(requiredActivities)

  const handleNextModule = () => {
    if (canProceedToNextModule) {
      router.push("/module-6")
      window.scrollTo(0, 0)
    } else {
      const element = document.getElementById("module5_miniQuiz")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-blue-100">
      <h2 className="text-4xl font-bold mb-10 text-center text-indigo-700">Module 5 Recap & What's Next</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Recap</h3>
          <ul className="space-y-4">
            {recapPoints.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-center text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <CheckCircle className="mr-2 text-green-500 flex-shrink-0" size={20} />
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Coming Up</h3>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 flex items-center text-indigo-700">
              <ArrowRight className="mr-2 text-indigo-500" size={24} />
              Module 6: Post-Project Review & Continuous Improvement
            </h4>
            <p className="text-gray-600 mb-4">
              Learn how to effectively close out projects, gather lessons learned, and refine your project management
              practices for continuous improvement.
            </p>
            <motion.button
              onClick={handleNextModule}
              className={`inline-flex items-center bg-indigo-600 text-white py-2 px-4 rounded-md transition duration-300 ${
                canProceedToNextModule ? "hover:bg-indigo-700" : "opacity-50 cursor-not-allowed"
              }`}
              whileHover={canProceedToNextModule ? { scale: 1.05 } : {}}
              whileTap={canProceedToNextModule ? { scale: 0.95 } : {}}
              disabled={!canProceedToNextModule}
            >
              {canProceedToNextModule ? (
                <>
                  Next Module
                  <ArrowRight className="ml-2" size={20} />
                </>
              ) : (
                "Complete all activities to proceed"
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

