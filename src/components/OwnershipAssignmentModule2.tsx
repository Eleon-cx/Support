"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, UserCheck, UserPlus, UserMinus } from "lucide-react"

const ownershipTips = [
  {
    title: "Clear Responsibilities",
    description: "Clearly define and communicate the responsibilities associated with each task.",
    icon: UserCheck,
  },
  {
    title: "Skill Matching",
    description: "Assign tasks to team members based on their skills and expertise.",
    icon: UserPlus,
  },
  {
    title: "Balanced Workload",
    description: "Ensure tasks are distributed evenly to prevent overloading team members.",
    icon: Users,
  },
  {
    title: "Accountability",
    description: "Foster a culture of accountability where owners take responsibility for their tasks.",
    icon: UserMinus,
  },
]

export default function OwnershipAssignment() {
  const [selectedTip, setSelectedTip] = useState<number | null>(null)

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-100">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
        Mastering Ownership Assignment
      </h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-8 text-center text-gray-700">
          Effective ownership assignment is key to project success. Learn how to assign and manage task ownership using
          the Support Readiness Tracker.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {ownershipTips.map((tip, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                selectedTip === index ? "bg-purple-100 ring-2 ring-purple-400" : "bg-white hover:shadow-lg"
              }`}
              onClick={() => setSelectedTip(selectedTip === index ? null : index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <tip.icon className={`mb-4 ${selectedTip === index ? "text-purple-600" : "text-gray-600"}`} size={32} />
              <h3
                className={`text-xl font-semibold mb-2 ${selectedTip === index ? "text-purple-700" : "text-gray-800"}`}
              >
                {tip.title}
              </h3>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedTip !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-700">{ownershipTips[selectedTip].title}</h3>
              <p className="text-gray-700">{ownershipTips[selectedTip].description}</p>
              <div className="mt-4">
                <h4 className="font-semibold text-purple-600 mb-2">
                  How to implement in the Support Readiness Tracker:
                </h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Use the "Owner" column to assign tasks to specific team members</li>
                  <li>Add comments to provide additional context or instructions</li>
                  <li>Regularly review and update assignments as needed</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

