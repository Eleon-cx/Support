"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, AlertTriangle, CheckCircle } from "lucide-react"

const deadlineStrategies = [
  {
    title: "Set Realistic Timelines",
    description: "Estimate task durations accurately and add buffer time for unexpected issues.",
    icon: Calendar,
  },
  {
    title: "Use Milestones",
    description: "Break the project into smaller, manageable milestones to track progress effectively.",
    icon: Clock,
  },
  {
    title: "Identify Dependencies",
    description: "Recognize task dependencies to prevent bottlenecks and delays.",
    icon: AlertTriangle,
  },
  {
    title: "Regular Check-ins",
    description: "Schedule frequent check-ins to monitor progress and address potential delays early.",
    icon: CheckCircle,
  },
]

export default function DeadlineManagement() {
  const [hoveredStrategy, setHoveredStrategy] = useState<number | null>(null)

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-yellow-50 to-orange-100">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-600">
        Effective Deadline Management
      </h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-8 text-center text-gray-700">
          Managing deadlines is crucial for project success. Learn strategies to set and track deadlines effectively
          using the Support Readiness Tracker.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {deadlineStrategies.map((strategy, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              onHoverStart={() => setHoveredStrategy(index)}
              onHoverEnd={() => setHoveredStrategy(null)}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="mb-4"
                animate={{
                  scale: hoveredStrategy === index ? 1.2 : 1,
                  rotate: hoveredStrategy === index ? 360 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <strategy.icon className="text-orange-500" size={32} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{strategy.title}</h3>
              <p className="text-gray-600">{strategy.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 p-6 bg-orange-50 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-orange-700 flex items-center">
            <AlertTriangle className="mr-2" size={24} />
            Remember:
          </h3>
          <p className="text-gray-700">
            Effective deadline management in the Support Readiness Tracker not only keeps your project on track but also
            helps manage stakeholder expectations. Regularly update deadlines and communicate changes to ensure everyone
            is aligned.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

