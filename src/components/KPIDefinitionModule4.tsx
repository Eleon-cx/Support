"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BarChart2, TrendingUp, Users, Clock } from "lucide-react"

const kpis = [
  {
    name: "Customer Satisfaction Score (CSAT)",
    description:
      "Measures the level of satisfaction that customers report for their experiences with your product or service.",
    icon: Users,
    example: "A CSAT score of 4.5 out of 5 indicates high customer satisfaction with recent support interactions.",
  },
  {
    name: "Net Promoter Score (NPS)",
    description:
      "Measures customer experience and predicts business growth by asking customers how likely they are to recommend your product or service.",
    icon: TrendingUp,
    example:
      "An NPS of +50 suggests that your customers are likely to recommend your product, indicating strong loyalty.",
  },
  {
    name: "First Response Time",
    description: "Measures the average time it takes for a customer to receive an initial response to their inquiry.",
    icon: Clock,
    example: "A first response time of under 5 minutes for chat support indicates excellent responsiveness.",
  },
  {
    name: "Resolution Rate",
    description: "Measures the percentage of customer issues that are resolved in a single interaction.",
    icon: BarChart2,
    example:
      "A resolution rate of 85% suggests that most customer issues are being efficiently addressed without escalation.",
  },
]

export default function KPIDefinition() {
  const [selectedKPI, setSelectedKPI] = useState<number | null>(null)

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-blue-100">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
        Defining Key Performance Indicators (KPIs)
      </h2>
      <div className="max-w-6xl mx-auto">
        <p className="text-xl text-center mb-12 text-gray-700">
          Effective KPIs are crucial for measuring the success of your CX projects. Let&apos;s explore some key metrics:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                selectedKPI === index ? "bg-white ring-2 ring-blue-400" : "bg-white hover:shadow-lg"
              }`}
              onClick={() => setSelectedKPI(selectedKPI === index ? null : index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <kpi.icon className={`mb-4 ${selectedKPI === index ? "text-blue-600" : "text-gray-600"}`} size={32} />
              <h3 className={`text-xl font-semibold mb-2 ${selectedKPI === index ? "text-blue-700" : "text-gray-800"}`}>
                {kpi.name}
              </h3>
              <p className="text-gray-600">{kpi.description}</p>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedKPI !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Example Application</h3>
              <p className="text-gray-700">{kpis[selectedKPI].example}</p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">Implementation Tip:</h4>
                <p className="text-gray-700">
                  When implementing {kpis[selectedKPI].name}, ensure that you have a reliable system for data collection
                  and analysis. Regularly review this KPI in your project meetings and use it to drive decision-making
                  and improvements in your CX processes.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

