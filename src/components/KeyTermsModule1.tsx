"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Package, Flag, Users, AlertTriangle, Maximize } from "lucide-react"
import { useActivities } from "@/contexts/ActivityContext"

const terms = [
  {
    id: "deliverable",
    term: "Deliverable",
    definition: "A tangible output or result (e.g., updated macros, new FAQs).",
    icon: Package,
  },
  {
    id: "milestone",
    term: "Milestone",
    definition: "A significant checkpoint or event (e.g., 'Go-Live' date).",
    icon: Flag,
  },
  {
    id: "stakeholder",
    term: "Stakeholder",
    definition: "Anyone who impacts—or is impacted by—the project (e.g., Ops, Product, CX Analysts).",
    icon: Users,
  },
  {
    id: "risk",
    term: "Risk",
    definition:
      "A potential issue that could derail timelines or quality (e.g., system downtime, missing translations).",
    icon: AlertTriangle,
  },
  {
    id: "scope",
    term: "Scope",
    definition: "The boundaries of what the project will (and won't) include.",
    icon: Maximize,
  },
]

export default function KeyTerms() {
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null)
  const [viewedTerms, setViewedTerms] = useState<Set<string>>(new Set())
  const { markActivityCompleted } = useActivities()

  // Track which terms have been viewed
  useEffect(() => {
    if (expandedTerm) {
      setViewedTerms((prev) => {
        const newSet = new Set(prev)
        newSet.add(expandedTerm)
        return newSet
      })
    }
  }, [expandedTerm])

  // Mark activity as completed when all terms have been viewed
  useEffect(() => {
    if (viewedTerms.size === terms.length) {
      markActivityCompleted("module1_keyTerms")
    }
  }, [viewedTerms.size, markActivityCompleted])

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
      <h2 className="text-4xl font-bold mb-10 text-center">Project Management 101: Essential Terminology</h2>
      <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {terms.map(({ id, term, definition, icon: Icon }) => (
          <motion.div
            key={id}
            className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
              expandedTerm === id ? "bg-indigo-50 ring-2 ring-indigo-400" : "bg-white hover:shadow-lg"
            }`}
            onClick={() => setExpandedTerm(expandedTerm === id ? null : id)}
          >
            <div className="flex items-center mb-4">
              <Icon
                className={`mr-2 transition-colors duration-300 ${
                  viewedTerms.has(id) ? "text-green-500" : "text-gray-400"
                }`}
                size={24}
              />
              <h3 className="text-xl font-semibold text-indigo-700">{term}</h3>
            </div>
            <AnimatePresence>
              {expandedTerm === id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600"
                >
                  {definition}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

