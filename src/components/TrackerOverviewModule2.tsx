"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Layers, Clock, Users, CheckSquare, HelpCircle } from "lucide-react"

const trackerFeatures = [
  { name: "Task Management", icon: Layers, description: "Organize and prioritize project tasks" },
  { name: "Deadline Tracking", icon: Clock, description: "Set and monitor project timelines" },
  { name: "Ownership Assignment", icon: Users, description: "Assign responsibilities to team members" },
  { name: "Progress Monitoring", icon: CheckSquare, description: "Track completion status of tasks" },
]

export default function TrackerOverview() {
  const [selectedFeature, setSelectedFeature] = useState(0)

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        Support Readiness Tracker Overview
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Support Readiness Tracker</h3>
            <p className="text-lg text-gray-700">
              A powerful tool designed to streamline your CX projects. It helps you organize tasks, manage deadlines,
              and assign ownership effectively.
            </p>
          </motion.div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Key Features:</h3>
            <ul className="space-y-4">
              {trackerFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                    selectedFeature === index ? "bg-indigo-100" : "hover:bg-indigo-50"
                  }`}
                  onClick={() => setSelectedFeature(index)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <feature.icon className="mr-3 text-indigo-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-indigo-800">{feature.name}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <motion.div
          className="mt-12 p-6 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-indigo-700 flex items-center">
            <HelpCircle className="mr-2" size={24} />
            Why Use the Support Readiness Tracker?
          </h3>
          <p className="text-lg text-gray-700">
            The Support Readiness Tracker centralizes project information, enhances team collaboration, and ensures
            nothing falls through the cracks. By providing a clear overview of tasks, deadlines, and responsibilities,
            it empowers your team to deliver exceptional customer experiences consistently.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

