"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react"
import { useActivities } from "@/contexts/ActivityContext"

const objectives = [
  {
    id: "apply_full_lifecycle",
    title: "Apply full project lifecycle management",
    description: "Manage a CX project from initiation to closure using the Support Readiness Tracker.",
  },
  {
    id: "handle_challenges",
    title: "Handle realistic project challenges",
    description: "Navigate and resolve common issues that arise during CX projects.",
  },
  {
    id: "utilize_tools",
    title: "Utilize integrated tools effectively",
    description: "Leverage the Support Readiness Tracker alongside other tools like Slack for project communication.",
  },
  {
    id: "make_decisions",
    title: "Make data-driven decisions",
    description: "Use project data to inform decision-making and adjust project course as needed.",
  },
]

export default function LearningObjectives() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [viewedObjectives, setViewedObjectives] = useState<Set<string>>(new Set())
  const { markActivityCompleted } = useActivities()

  useEffect(() => {
    if (expandedIndex !== null) {
      setViewedObjectives((prev) => {
        const newSet = new Set(prev)
        newSet.add(objectives[expandedIndex].id)
        return newSet
      })
    }
  }, [expandedIndex])

  useEffect(() => {
    if (viewedObjectives.size === objectives.length) {
      markActivityCompleted("module5_learningObjectives")
    }
  }, [viewedObjectives.size, markActivityCompleted])

  return (
    <section id="module5_learningObjectives" className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        Simulation Objectives
      </h2>
      <motion.ul
        className="grid gap-6 md:grid-cols-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {objectives.map((objective, index) => (
          <motion.li
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <CheckCircle
                  className={`mr-4 flex-shrink-0 transition-colors duration-300 ${
                    viewedObjectives.has(objective.id) ? "text-green-500" : "text-gray-300"
                  }`}
                  size={24}
                />
                {objective.title}
              </h3>
              {expandedIndex === index ? (
                <ChevronUp className="text-gray-500" size={20} />
              ) : (
                <ChevronDown className="text-gray-500" size={20} />
              )}
            </div>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-gray-600"
                >
                  {objective.description}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

