"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Filter, BarChart, GitBranch } from "lucide-react"

const advancedTechniques = [
  {
    title: "Advanced Filtering",
    description: "Learn how to use complex filters to quickly find and manage specific tasks or projects.",
    icon: Filter,
  },
  {
    title: "Custom Dashboards",
    description: "Create personalized dashboards to visualize key metrics and project progress at a glance.",
    icon: BarChart,
  },
  {
    title: "Workflow Automation",
    description: "Set up automated workflows to streamline repetitive processes and save time.",
    icon: Zap,
  },
  {
    title: "Version Control",
    description: "Implement version control for your tracker to manage changes and collaborate effectively.",
    icon: GitBranch,
  },
]

export default function AdvancedTrackerTechniques() {
  const [selectedTechnique, setSelectedTechnique] = useState<number | null>(null)

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-purple-100">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
        Advanced Tracker Techniques
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {advancedTechniques.map((technique, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                selectedTechnique === index ? "bg-white ring-2 ring-purple-400" : "bg-white hover:shadow-lg"
              }`}
              onClick={() => setSelectedTechnique(selectedTechnique === index ? null : index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <technique.icon
                className={`mb-4 ${selectedTechnique === index ? "text-purple-600" : "text-gray-600"}`}
                size={32}
              />
              <h3
                className={`text-xl font-semibold mb-2 ${selectedTechnique === index ? "text-purple-700" : "text-gray-800"}`}
              >
                {technique.title}
              </h3>
              <p className="text-gray-600">{technique.description}</p>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedTechnique !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-700">
                {advancedTechniques[selectedTechnique].title}
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Implementing {advancedTechniques[selectedTechnique].title.toLowerCase()} in your Support Readiness
                  Tracker can significantly enhance your project management capabilities.
                </p>
                <h4 className="text-lg font-semibold text-purple-600">Key Benefits:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Improved efficiency in task management</li>
                  <li>Enhanced visibility into project progress</li>
                  <li>Better decision-making based on real-time data</li>
                  <li>Increased team collaboration and productivity</li>
                </ul>
                <p className="text-gray-700">
                  To get started with this technique, consider exploring the advanced settings in your Support Readiness
                  Tracker or consult with your project management tools administrator.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

