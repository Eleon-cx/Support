import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { XCircle, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"

const scenarios = [
  {
    title: "Scenario A (No PM)",
    items: [
      "Random tasks assigned in Slack DMs",
      "Deadlines unclear or not communicated",
      "Confusion on who reviews final changes",
    ],
    icon: XCircle,
    color: "red",
    image: "Chaotic%20Workspace%20with%20Scattered%20Notes",
  },
  {
    title: "Scenario B (Light PM Approach)",
    items: [
      "Tasks organized in the Support Readiness Tracker",
      "Milestones & owners set in Notion",
      "Slack channel updates keep everyone aligned",
    ],
    icon: CheckCircle,
    color: "green",
    image: "Organized%20Workspace%20with%20Task%20Board",
  },
]

export default function RealWorldExample() {
  const [activeScenario, setActiveScenario] = useState(0)

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
        From Chaos to Clarity: A Real-World Example
      </h2>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          {scenarios.map((scenario, index) => (
            <motion.button
              key={index}
              className={`px-6 py-3 rounded-full font-semibold mx-2 ${
                activeScenario === index ? `bg-${scenario.color}-500 text-white` : `bg-gray-200 text-gray-700`
              }`}
              onClick={() => setActiveScenario(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {scenario.title}
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`p-8 rounded-lg shadow-lg ${activeScenario === 0 ? "bg-red-100" : "bg-green-100"}`}
          >
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-6">
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=${scenarios[activeScenario].image}`}
                  alt={scenarios[activeScenario].title}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3
                  className={`text-2xl font-semibold mb-4 flex items-center text-${scenarios[activeScenario].color}-700`}
                >
                  {activeScenario === 0 ? (
                    <XCircle className="mr-2" size={28} />
                  ) : (
                    <CheckCircle className="mr-2" size={28} />
                  )}
                  {scenarios[activeScenario].title}
                </h3>
                <ul className="space-y-4">
                  {scenarios[activeScenario].items.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {activeScenario === 0 ? (
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
            {activeScenario === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 p-4 bg-yellow-100 rounded-lg flex items-center"
              >
                <ArrowRight className="text-yellow-500 mr-2" size={24} />
                <p className="text-yellow-800">
                  See how a light PM approach can transform this scenario. Click on "Scenario B" above!
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

