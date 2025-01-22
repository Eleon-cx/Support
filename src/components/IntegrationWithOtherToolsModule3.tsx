"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Calendar, BarChart2, GitPullRequest } from "lucide-react"

const integrationTools = [
  {
    name: "Slack",
    description: "Integrate with Slack for real-time notifications and updates.",
    icon: MessageSquare,
    benefits: [
      "Instant notifications for task updates",
      "Create and assign tasks directly from Slack",
      "Share project status with team members easily",
    ],
  },
  {
    name: "Google Calendar",
    description: "Sync project deadlines and milestones with Google Calendar.",
    icon: Calendar,
    benefits: [
      "Automatically add project deadlines to team calendars",
      "Receive reminders for upcoming milestones",
      "View project timeline alongside other commitments",
    ],
  },
  {
    name: "Tableau",
    description: "Connect to Tableau for advanced data visualization and analytics.",
    icon: BarChart2,
    benefits: [
      "Create custom dashboards for project insights",
      "Analyze trends and patterns in project data",
      "Generate visual reports for stakeholders",
    ],
  },
  {
    name: "GitHub",
    description: "Integrate with GitHub for seamless code and documentation management.",
    icon: GitPullRequest,
    benefits: [
      "Link tasks to specific code changes or pull requests",
      "Track development progress alongside project tasks",
      "Automate task status updates based on code commits",
    ],
  },
]

export default function IntegrationWithOtherTools() {
  const [selectedTool, setSelectedTool] = useState<number | null>(null)

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-cyan-50 to-blue-100">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
        Integration with Other Tools
      </h2>
      <div className="max-w-6xl mx-auto">
        <p className="text-xl text-center mb-12 text-gray-700">
          Enhance your Support Readiness Tracker by integrating with powerful third-party tools.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrationTools.map((tool, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                selectedTool === index ? "bg-white ring-2 ring-blue-400" : "bg-white hover:shadow-lg"
              }`}
              onClick={() => setSelectedTool(selectedTool === index ? null : index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tool.icon className={`mb-4 ${selectedTool === index ? "text-blue-600" : "text-gray-600"}`} size={32} />
              <h3
                className={`text-xl font-semibold mb-2 ${selectedTool === index ? "text-blue-700" : "text-gray-800"}`}
              >
                {tool.name}
              </h3>
              <p className="text-gray-600">{tool.description}</p>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedTool !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                {integrationTools[selectedTool].name} Integration Benefits
              </h3>
              <ul className="space-y-2">
                {integrationTools[selectedTool].benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="mr-2 text-green-500 flex-shrink-0" size={20} />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">Implementation Tip:</h4>
                <p className="text-gray-700">
                  When integrating {integrationTools[selectedTool].name} with your Support Readiness Tracker, start by
                  identifying the key touchpoints between the two systems. Focus on automating the most frequent
                  interactions to maximize efficiency gains.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

