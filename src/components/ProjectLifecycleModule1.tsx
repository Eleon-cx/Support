import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ClipboardList, Cog, Search, CheckSquare } from "lucide-react"
import Image from "next/image"

const phases = [
  {
    name: "Planning",
    description: ["Define goals, tasks, stakeholders.", "Identify resources & potential risks."],
    icon: ClipboardList,
    image: "Project%20Planning%20Whiteboard",
  },
  {
    name: "Execution",
    description: ["Carry out the tasks.", "Monitor progress; maintain communication."],
    icon: Cog,
    image: "Team%20Working%20on%20Tasks",
  },
  {
    name: "Validation",
    description: ["Review work in progress.", "Adjust timelines or tasks as needed."],
    icon: Search,
    image: "Quality%20Assurance%20Check",
  },
  {
    name: "Close-Out",
    description: ["Final checks and sign-off.", "Post-project review or retrospective."],
    icon: CheckSquare,
    image: "Project%20Completion%20Celebration",
  },
]

export default function ProjectLifecycle() {
  const [activePhase, setActivePhase] = useState<number | null>(null)

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-blue-100">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
        4 Phases of a Typical Project Lifecycle
      </h2>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center mb-8">
          {phases.map((phase, index) => (
            <motion.button
              key={phase.name}
              className={`m-2 px-6 py-3 rounded-full font-semibold ${activePhase === index ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border border-indigo-600"}`}
              onClick={() => setActivePhase(activePhase === index ? null : index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {phase.name}
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {activePhase !== null && (
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-6">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=${phases[activePhase].image}`}
                    alt={`${phases[activePhase].name} phase`}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center text-indigo-700">
                    {activePhase !== null &&
                      (phases[activePhase].name === "Planning" ? (
                        <ClipboardList className="mr-2" size={28} />
                      ) : phases[activePhase].name === "Execution" ? (
                        <Cog className="mr-2" size={28} />
                      ) : phases[activePhase].name === "Validation" ? (
                        <Search className="mr-2" size={28} />
                      ) : (
                        <CheckSquare className="mr-2" size={28} />
                      ))}
                    {phases[activePhase].name}
                  </h3>
                  <ul className="space-y-4">
                    {phases[activePhase].description.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckSquare className="mr-2 text-green-500 flex-shrink-0" size={20} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

