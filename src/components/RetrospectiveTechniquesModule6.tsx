"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, ThumbsUp, ThumbsDown, Lightbulb } from "lucide-react"

const techniques = [
  {
    name: "Start, Stop, Continue",
    description: "Identify actions to start doing, stop doing, and continue doing.",
    icon: MessageSquare,
    steps: [
      "Divide a whiteboard into three columns: Start, Stop, Continue",
      "Have team members add sticky notes to each column",
      "Discuss each item and create action plans",
    ],
  },
  {
    name: "Sailboat Retrospective",
    description: "Visualize the project as a sailboat, identifying winds (helps) and anchors (hindrances).",
    icon: ThumbsUp,
    steps: [
      "Draw a sailboat with wind and anchors",
      "Team members add 'winds' (positives) and 'anchors' (negatives)",
      "Discuss how to capitalize on winds and overcome anchors",
    ],
  },
  {
    name: "5 Whys",
    description: "Dig deep into issues by asking 'why' five times to get to the root cause.",
    icon: ThumbsDown,
    steps: [
      "Identify a problem that occurred during the project",
      "Ask 'Why did this happen?' and note the answer",
      "Repeat 'Why?' for each answer until you reach the root cause",
    ],
  },
  {
    name: "Glad, Sad, Mad",
    description: "Categorize project experiences into positive, negative, and frustrating aspects.",
    icon: Lightbulb,
    steps: [
      "Have team members write down project experiences on cards",
      "Categorize each card as Glad, Sad, or Mad",
      "Discuss items in each category and brainstorm improvements",
    ],
  },
]

export default function RetrospectiveTechniques() {
  const [selectedTechnique, setSelectedTechnique] = useState<number | null>(null)

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-blue-100">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
        Effective Retrospective Techniques
      </h2>
      <div className="max-w-6xl mx-auto">
        <p className="text-xl text-center mb-12 text-gray-700">
          Explore these powerful techniques to conduct insightful post-project reviews:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {techniques.map((technique, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                selectedTechnique === index ? "bg-white ring-2 ring-blue-400" : "bg-white hover:shadow-lg"
              }`}
              onClick={() => setSelectedTechnique(selectedTechnique === index ? null : index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <technique.icon
                className={`mb-4 ${selectedTechnique === index ? "text-blue-600" : "text-gray-600"}`}
                size={32}
              />
              <h3
                className={`text-xl font-semibold mb-2 ${selectedTechnique === index ? "text-blue-700" : "text-gray-800"}`}
              >
                {technique.name}
              </h3>
              <p className="text-gray-600">{technique.description}</p>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedTechnique !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                How to Use: {techniques[selectedTechnique].name}
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                {techniques[selectedTechnique].steps.map((step, index) => (
                  <li key={index} className="text-gray-700">
                    {step}
                  </li>
                ))}
              </ol>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">Pro Tip:</h4>
                <p className="text-gray-700">
                  When using the {techniques[selectedTechnique].name} technique, encourage open and honest
                  communication. Ensure all team members have an equal opportunity to share their thoughts and insights.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

