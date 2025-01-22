"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useActivities } from "@/contexts/ActivityContext"

export default function RecapNextSteps() {
  const recapPoints = [
    "Learned effective retrospective techniques",
    "Mastered documenting project outcomes and lessons learned",
    "Practiced sharing lessons across teams for broader improvement",
    "Implemented continuous improvement practices in project management",
  ]

  const router = useRouter()
  const { areActivitiesCompleted } = useActivities()

  const requiredActivities = ["module6_miniQuiz"]
  const hasCompletedAllActivities = areActivitiesCompleted(requiredActivities)

  const handleCourseCompletion = () => {
    if (hasCompletedAllActivities) {
      router.push("/course-completion")
      window.scrollTo(0, 0)
    } else {
      const element = document.getElementById("module6_miniQuiz")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-blue-100">
      <h2 className="text-4xl font-bold mb-10 text-center text-indigo-700">Course Recap & Next Steps</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Module 6 Recap</h3>
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
          <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Next Steps</h3>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 flex items-center text-indigo-700">
              <ArrowRight className="mr-2 text-indigo-500" size={24} />
              Apply Your Knowledge
            </h4>
            <p className="text-gray-600 mb-4">
              Congratulations on completing the course! It's time to apply your new skills to real-world projects.
              Remember to use the Support Readiness Tracker and implement continuous improvement practices in your
              day-to-day work.
            </p>
            <motion.button
              onClick={handleCourseCompletion}
              className={`inline-flex items-center bg-indigo-600 text-white py-2 px-4 rounded-md transition duration-300 ${
                hasCompletedAllActivities ? "hover:bg-indigo-700" : "opacity-50 cursor-not-allowed"
              }`}
              whileHover={hasCompletedAllActivities ? { scale: 1.05 } : {}}
              whileTap={hasCompletedAllActivities ? { scale: 0.95 } : {}}
              disabled={!hasCompletedAllActivities}
            >
              {hasCompletedAllActivities ? (
                <>
                  View Course Completion
                  <ArrowRight className="ml-2" size={20} />
                </>
              ) : (
                "Complete all activities to finish the course"
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

