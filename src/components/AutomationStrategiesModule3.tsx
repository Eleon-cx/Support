"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BotIcon as Robot, Bell, Mail, RefreshCw } from "lucide-react"

const automationStrategies = [
  {
    title: "Task Assignment",
    description: "Automatically assign tasks based on team members' skills and workload.",
    icon: Robot,
    example:
      "When a new support ticket is created, the system automatically assigns it to the most suitable agent based on their expertise and current workload.",
  },
  {
    title: "Notifications",
    description: "Set up automated notifications for task updates, deadlines, and milestones.",
    icon: Bell,
    example:
      "Team members receive automatic notifications 48 hours before a task deadline, ensuring timely completion of projects.",
  },
  {
    title: "Report Generation",
    description: "Automate the creation and distribution of project status reports.",
    icon: Mail,
    example:
      "Every Friday at 5 PM, the system generates a weekly progress report and emails it to all stakeholders, saving hours of manual reporting work.",
  },
  {
    title: "Workflow Triggers",
    description: "Create automated workflows triggered by specific events or conditions.",
    icon: RefreshCw,
    example:
      "When a task is marked as 'Completed', the system automatically moves it to the 'Review' stage and notifies the project manager.",
  },
]

export default function AutomationStrategies() {
  const [selectedStrategy, setSelectedStrategy] = useState<number | null>(null)

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-green-100">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
        Automation Strategies
      </h2>
      <div className="max-w-6xl mx-auto">
        <p className="text-xl text-center mb-12 text-gray-700">
          Discover how automation can revolutionize your CX project management and boost team productivity.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {automationStrategies.map((strategy, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                selectedStrategy === index ? "bg-white ring-2 ring-green-400" : "bg-white hover:shadow-lg"
              }`}
              onClick={() => setSelectedStrategy(selectedStrategy === index ? null : index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <strategy.icon
                className={`mb-4 ${selectedStrategy === index ? "text-green-600" : "text-gray-600"}`}
                size={32}
              />
              <h3
                className={`text-xl font-semibold mb-2 ${selectedStrategy === index ? "text-green-700" : "text-gray-800"}`}
              >
                {strategy.title}
              </h3>
              <p className="text-gray-600">{strategy.description}</p>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedStrategy !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-green-700">
                {automationStrategies[selectedStrategy].title} Example
              </h3>
              <p className="text-gray-700">{automationStrategies[selectedStrategy].example}</p>
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <h4 className="text-lg font-semibold text-green-700 mb-2">Implementation Tips:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Identify repetitive tasks in your CX projects that can be automated</li>
                  <li>Use workflow automation tools compatible with your Support Readiness Tracker</li>
                  <li>Start with simple automations and gradually increase complexity</li>
                  <li>Regularly review and optimize your automated processes</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

