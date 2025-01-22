"use client"

import { motion } from "framer-motion"
import { Home, FileText } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function CourseCompletion() {
  const router = useRouter()

  const navigateToHome = () => {
    router.push("/")
  }

  const navigateToSurvey = () => {
    router.push("/feedback-survey")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Image
            src="/placeholder.svg?height=200&width=200&text=Achievement"
            alt="Course Completion Achievement"
            width={200}
            height={200}
            className="mx-auto mb-8"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Congratulations!
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-700">
            You've Completed the Support Readiness Training
          </h2>
          <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto">
            You've mastered CX project management, the Support Readiness Tracker, and continuous improvement practices.
            You're now equipped to excel in your CX projects!
          </p>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Your Achievements</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li>✅ Completed 6 comprehensive modules</li>
                <li>✅ Mastered the Support Readiness Tracker</li>
                <li>✅ Learned advanced CX project management techniques</li>
                <li>✅ Developed skills in measuring success and continuous improvement</li>
              </ul>
            </motion.div>

            <div className="flex flex-col items-center space-y-4">
              <motion.button
                onClick={navigateToSurvey}
                className="bg-purple-600 text-white py-4 px-8 rounded-md hover:bg-purple-700 transition duration-300 text-xl font-semibold inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="mr-2" size={24} />
                Complete Feedback Survey
              </motion.button>
              <p className="text-sm text-gray-600">Your feedback is crucial for improving our training program!</p>

              <motion.button
                onClick={navigateToHome}
                className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition duration-300 text-lg font-semibold inline-flex items-center mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="mr-2" size={20} />
                Return to Homepage
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

