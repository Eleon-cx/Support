"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, Clock, Users, AlertTriangle } from "lucide-react"

const dataMetrics = [
  {
    name: "Task Completion Rate",
    description: "Measure the percentage of tasks completed on time.",
    icon: TrendingUp,
    insights: [
      "Identify bottlenecks in your workflow",
      "Assess team productivity and capacity",
      "Predict project timelines more accurately",
    ],
  },
  {
    name: "Average Resolution Time",
    description: "Track the average time taken to resolve support issues.",
    icon: Clock,
    insights: [
      "Improve customer satisfaction by reducing wait times",
      "Identify areas where additional training may be needed",
      "Optimize resource allocation for faster issue resolution",
    ],
  },
  {
    name: "Team Workload Distribution",
    description: "Analyze how work is distributed among team members.",
    icon: Users,
    insights: [
      "Ensure balanced workloads across the team",
      "Identify opportunities for skill development",
      "Improve overall team efficiency and satisfaction",
    ],
  },
  {
    name: "Risk Identification",
    description: "Use data to proactively identify potential project risks.",
    icon: AlertTriangle,
    insights: [
      "Anticipate and mitigate issues before they escalate",
      "Improve project planning and risk management",
      "Increase stakeholder confidence with proactive risk handling",
    ],
  },
]

export default function DataDrivenDecisionMaking() {
  const [selectedMetric, setSelectedMetric] = useState<number | null>(null)

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-yellow-50 to-orange-100">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-600">
        Data-Driven Decision Making
      </h2>
      <div className="max-w-6xl mx-auto">
        <p className="text-xl text-center mb-12 text-gray-700">
          Leverage data analytics to make informed decisions and improve your CX project outcomes.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {dataMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                selectedMetric === index ? "bg-white ring-2 ring-orange-400" : "bg-white hover:shadow-lg"
              }`}
              onClick={() => setSelectedMetric(selectedMetric === index ? null : index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <metric.icon
                className={`mb-4 ${selectedMetric === index ? "text-orange-600" : "text-gray-600"}`}
                size={32}
              />
              <h3
                className={`text-xl font-semibold mb-2 ${selectedMetric === index ? "text-orange-700" : "text-gray-800"}`}
              >
                {metric.name}
              </h3>
              <p className="text-gray-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedMetric !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-orange-700">
                Key Insights from {dataMetrics[selectedMetric].name}
              </h3>
              <ul className="space-y-2">
                {dataMetrics[selectedMetric].insights.map((insight, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="mr-2 text-green-500 flex-shrink-0" size={20} />
                    {insight}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <h4 className="text-lg font-semibold text-orange-700 mb-2">Implementation Tip:</h4>
                <p className="text-gray-700">
                  To effectively use {dataMetrics[selectedMetric].name} in your decision-making process, establish clear
                  benchmarks and regularly review the data. Use visualization tools to make the insights more accessible
                  to your team and stakeholders.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

