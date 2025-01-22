"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, PieChart, BarChart, LineChart } from "lucide-react"

const reportTypes = [
  {
    name: "Executive Summary",
    description: "A high-level overview of project performance and key insights.",
    icon: FileText,
    tips: [
      "Keep it concise and focused on the most important metrics",
      "Use clear, jargon-free language",
      "Include actionable recommendations",
    ],
  },
  {
    name: "KPI Dashboard",
    description: "A visual representation of key performance indicators over time.",
    icon: PieChart,
    tips: [
      "Use a mix of charts and graphs for different KPIs",
      "Include trend lines to show progress over time",
      "Add brief explanations for each metric",
    ],
  },
  {
    name: "Customer Feedback Analysis",
    description: "A detailed breakdown of customer feedback and sentiment.",
    icon: BarChart,
    tips: [
      "Categorize feedback into themes or topics",
      "Use word clouds to visualize common phrases",
      "Include both quantitative and qualitative data",
    ],
  },
  {
    name: "Trend Report",
    description: "An analysis of long-term trends in CX performance and customer behavior.",
    icon: LineChart,
    tips: [
      "Focus on year-over-year or quarter-over-quarter comparisons",
      "Highlight significant changes or shifts in trends",
      "Provide context for trend changes (e.g., market conditions, internal changes)",
    ],
  },
]

export default function ReportCreation() {
  const [selectedReport, setSelectedReport] = useState<number | null>(null)

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-teal-100">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
        Creating Insightful CX Reports
      </h2>
      <div className="max-w-6xl mx-auto">
        <p className="text-xl text-center mb-12 text-gray-700">
          Effective reporting is crucial for communicating project outcomes and driving improvements. Let's explore
          different types of CX reports:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {reportTypes.map((report, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                selectedReport === index ? "bg-white ring-2 ring-teal-400" : "bg-white hover:shadow-lg"
              }`}
              onClick={() => setSelectedReport(selectedReport === index ? null : index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <report.icon
                className={`mb-4 ${selectedReport === index ? "text-teal-600" : "text-gray-600"}`}
                size={32}
              />
              <h3
                className={`text-xl font-semibold mb-2 ${selectedReport === index ? "text-teal-700" : "text-gray-800"}`}
              >
                {report.name}
              </h3>
              <p className="text-gray-600">{report.description}</p>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedReport !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-teal-700">
                Tips for Creating {reportTypes[selectedReport].name}
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {reportTypes[selectedReport].tips.map((tip, index) => (
                  <li key={index} className="text-gray-700">
                    {tip}
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-teal-50 rounded-lg">
                <h4 className="text-lg font-semibold text-teal-700 mb-2">Best Practice:</h4>
                <p className="text-gray-700">
                  When creating a {reportTypes[selectedReport].name}, always consider your audience and tailor the
                  content and format to their needs and preferences. Use clear visualizations and concise language to
                  make your insights easily digestible.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

