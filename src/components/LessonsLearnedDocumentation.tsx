"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, CheckSquare, AlertTriangle, Lightbulb } from "lucide-react"

const documentationSections = [
  {
    name: "Project Overview",
    description: "Summarize the project's goals, scope, and timeline.",
    icon: FileText,
    tips: [
      "Include the project's original objectives",
      "Highlight any changes in scope during the project",
      "Provide a brief timeline of key milestones",
    ],
  },
  {
    name: "Successes",
    description: "Document what went well and why.",
    icon: CheckSquare,
    tips: [
      "List major achievements and positive outcomes",
      "Explain factors that contributed to these successes",
      "Include metrics or KPIs that demonstrate success",
    ],
  },
  {
    name: "Challenges",
    description: "Identify obstacles faced and how they were addressed.",
    icon: AlertTriangle,
    tips: [
      "Describe significant challenges encountered",
      "Explain how these challenges were overcome (or not)",
      "Discuss the impact of these challenges on the project",
    ],
  },
  {
    name: "Lessons Learned",
    description: "Summarize key takeaways and insights for future projects.",
    icon: Lightbulb,
    tips: [
      "Highlight major learnings from both successes and challenges",
      "Provide actionable recommendations for future projects",
      "Include feedback from team members and stakeholders",
    ],
  },
]

export default function LessonsLearnedDocumentation() {
  const [selectedSection, setSelectedSection] = useState<number | null>(null)

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-teal-100">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
        Documenting Lessons Learned
      </h2>
      <div className="max-w-6xl mx-auto">
        <p className="text-xl text-center mb-12 text-gray-700">
          Explore the key sections of an effective lessons learned document:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {documentationSections.map((section, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                selectedSection === index ? "bg-white ring-2 ring-teal-400" : "bg-white hover:shadow-lg"
              }`}
              onClick={() => setSelectedSection(selectedSection === index ? null : index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <section.icon
                className={`mb-4 ${selectedSection === index ? "text-teal-600" : "text-gray-600"}`}
                size={32}
              />
              <h3
                className={`text-xl font-semibold mb-2 ${selectedSection === index ? "text-teal-700" : "text-gray-800"}`}
              >
                {section.name}
              </h3>
              <p className="text-gray-600">{section.description}</p>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedSection !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-teal-700">
                Tips for {documentationSections[selectedSection].name}
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {documentationSections[selectedSection].tips.map((tip, index) => (
                  <li key={index} className="text-gray-700">
                    {tip}
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-teal-50 rounded-lg">
                <h4 className="text-lg font-semibold text-teal-700 mb-2">Best Practice:</h4>
                <p className="text-gray-700">
                  When documenting the {documentationSections[selectedSection].name.toLowerCase()}, be specific and
                  provide concrete examples. This will make your lessons learned document more valuable for future
                  projects.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

