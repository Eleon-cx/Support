"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { XCircle, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useActivities } from "@/contexts/ActivityContext"

const scenarios = {
  without: [
    "Missed deadlines, last-minute scrambles.",
    "Confusion about roles and responsibilities.",
    "Repetitive questions or repeated mistakes.",
  ],
  with: [
    "Clear timelines and milestones.",
    "Defined owners and accountability.",
    "Streamlined communication across teams.",
  ],
}

export default function WhyProjectManagement() {
  const [activeScenario, setActiveScenario] = useState<"without" | "with">("without")
  const { markActivityCompleted } = useActivities()

  useEffect(() => {
    markActivityCompleted("module1_whyProjectManagement")
  }, [markActivityCompleted])

  return (
    <section id="module1_whyProjectManagement" className="py-16 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        Why Project Management in CX?
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-3 rounded-l-full font-semibold ${
              activeScenario === "without" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveScenario("without")}
          >
            Without PM
          </button>
          <button
            className={`px-6 py-3 rounded-r-full font-semibold ${
              activeScenario === "with" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveScenario("with")}
          >
            With PM
          </button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`p-8 rounded-lg shadow-lg ${activeScenario === "without" ? "bg-red-100" : "bg-green-100"}`}
          >
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-6">
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=${
                    activeScenario === "without" ? "Chaos" : "Organization"
                  }`}
                  alt={activeScenario === "without" ? "Chaotic workspace" : "Organized workspace"}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3
                  className={`text-2xl font-semibold mb-4 flex items-center ${
                    activeScenario === "without" ? "text-red-700" : "text-green-700"
                  }`}
                >
                  {activeScenario === "without" ? (
                    <>
                      <XCircle className="mr-2" size={28} />
                      Without project management:
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-2" size={28} />
                      With project management:
                    </>
                  )}
                </h3>
                <ul className="space-y-4">
                  {scenarios[activeScenario].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {activeScenario === "without" ? (
                        <XCircle className="mr-2 text-red-500 flex-shrink-0" size={20} />
                      ) : (
                        <CheckCircle className="mr-2 text-green-500 flex-shrink-0" size={20} />
                      )}
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

