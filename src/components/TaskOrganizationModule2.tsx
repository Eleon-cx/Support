"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { List, CheckSquare, AlertTriangle, HelpCircle } from "lucide-react"
import { useActivities } from "@/contexts/ActivityContext"

const taskCategories = [
  {
    name: "Documentation",
    tasks: ["Update FAQs", "Create user guides", "Revise troubleshooting docs"],
    icon: List,
  },
  {
    name: "Training",
    tasks: ["Schedule team training", "Prepare training materials", "Conduct practice sessions"],
    icon: CheckSquare,
  },
  {
    name: "System Setup",
    tasks: ["Configure new tools", "Set up integrations", "Test system workflows"],
    icon: AlertTriangle,
  },
]

export default function TaskOrganization() {
  const [activeCategory, setActiveCategory] = useState(0)
  const { markActivityCompleted } = useActivities()

  useEffect(() => {
    markActivityCompleted("module2_taskOrganization")
  }, [markActivityCompleted])

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-blue-50">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
        Mastering Task Organization
      </h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-8 text-center text-gray-700">
          Effective task organization is crucial for project success. Learn how to break down and categorize tasks in
          the Support Readiness Tracker.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {taskCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                activeCategory === index ? "bg-blue-100 ring-2 ring-blue-400" : "bg-white hover:shadow-lg"
              }`}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <category.icon
                className={`mb-4 ${activeCategory === index ? "text-blue-600" : "text-gray-600"}`}
                size={32}
              />
              <h3
                className={`text-xl font-semibold mb-2 ${activeCategory === index ? "text-blue-700" : "text-gray-800"}`}
              >
                {category.name}
              </h3>
              <p className="text-sm text-gray-600">{category.tasks.length} tasks</p>
            </motion.div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">{taskCategories[activeCategory].name} Tasks</h3>
            <ul className="space-y-3">
              {taskCategories[activeCategory].tasks.map((task, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckSquare className="mr-2 text-green-500" size={20} />
                  {task}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
        <motion.div
          className="mt-12 p-6 bg-blue-50 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
            <HelpCircle className="mr-2" size={24} />
            Pro Tip: Task Organization
          </h3>
          <p className="text-gray-700">
            When organizing tasks in the Support Readiness Tracker, group related items together and use clear,
            action-oriented language. This approach helps team members quickly understand their responsibilities and how
            they fit into the larger project context.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

