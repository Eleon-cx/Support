"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle, ArrowRight } from "lucide-react"
import { useActivities } from "@/contexts/ActivityContext"

const simulationSteps = [
  {
    title: "Project Initiation",
    description: "A new CX improvement project has been approved. What's your first step?",
    options: [
      { text: "Start assigning tasks to team members", correct: false },
      { text: "Set up the project in the Support Readiness Tracker", correct: true },
      { text: "Schedule a kick-off meeting with stakeholders", correct: false },
    ],
    feedback: {
      correct:
        "Excellent! Setting up the project in the Support Readiness Tracker ensures a solid foundation for project management.",
      incorrect: "Consider the importance of having a centralized project management tool from the start.",
    },
  },
  {
    title: "Task Management",
    description: "You've identified key tasks. How do you organize them in the Support Readiness Tracker?",
    options: [
      { text: "List all tasks chronologically", correct: false },
      { text: "Group tasks by team or department", correct: false },
      { text: "Organize tasks into milestones and set dependencies", correct: true },
    ],
    feedback: {
      correct:
        "Great job! Organizing tasks into milestones and setting dependencies provides a clear project structure and timeline.",
      incorrect: "Think about how to best structure tasks for clarity and efficient project progression.",
    },
  },
  {
    title: "Stakeholder Communication",
    description: "A key stakeholder requests a project update. What's your approach?",
    options: [
      { text: "Schedule an immediate meeting to discuss", correct: false },
      { text: "Send a detailed email with all project information", correct: false },
      { text: "Share a concise update from the Support Readiness Tracker", correct: true },
    ],
    feedback: {
      correct: "Perfect! Utilizing the Support Readiness Tracker for updates ensures consistency and saves time.",
      incorrect: "Consider how to provide timely, consistent updates without disrupting workflow.",
    },
  },
  {
    title: "Risk Management",
    description: "You identify a potential delay in a critical task. What's your next step?",
    options: [
      { text: "Immediately inform all stakeholders", correct: false },
      { text: "Update the risk register and develop a mitigation plan", correct: true },
      { text: "Extend the project timeline to accommodate the delay", correct: false },
    ],
    feedback: {
      correct:
        "Excellent approach! Updating the risk register and developing a mitigation plan is proactive risk management.",
      incorrect: "Think about how to address risks systematically without causing unnecessary alarm.",
    },
  },
  {
    title: "Project Closure",
    description: "The project is nearing completion. What's a crucial step in the closure phase?",
    options: [
      { text: "Immediately start planning the next project", correct: false },
      { text: "Conduct a thorough project retrospective", correct: true },
      { text: "Delete all project files to save space", correct: false },
    ],
    feedback: {
      correct: "Well done! A project retrospective is crucial for continuous improvement and learning.",
      incorrect: "Consider the importance of reflection and learning from completed projects.",
    },
  },
]

export default function ProjectSimulation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [stepsCompleted, setStepsCompleted] = useState<boolean[]>(Array(simulationSteps.length).fill(false))
  const { markActivityCompleted } = useActivities()

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index)
    setShowFeedback(true)
    const isCorrect = simulationSteps[currentStep].options[index].correct
    const newStepsCompleted = [...stepsCompleted]
    newStepsCompleted[currentStep] = isCorrect
    setStepsCompleted(newStepsCompleted)

    if (isCorrect && newStepsCompleted.every((step) => step)) {
      markActivityCompleted("module5_projectSimulation")
    }
  }

  const handleNextStep = () => {
    if (currentStep < simulationSteps.length - 1) {
      setCurrentStep(currentStep + 1)
      setSelectedOption(null)
      setShowFeedback(false)
    }
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-teal-100">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
        Project Simulation: Make Critical Decisions
      </h2>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6 flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-teal-700">Progress</h3>
          <div className="flex gap-2">
            {stepsCompleted.map((completed, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  completed ? "bg-green-500" : index === currentStep ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-teal-700">{simulationSteps[currentStep].title}</h3>
          <p className="text-lg mb-6">{simulationSteps[currentStep].description}</p>
          <div className="space-y-4">
            {simulationSteps[currentStep].options.map((option, index) => (
              <motion.button
                key={index}
                className={`w-full text-left p-4 rounded-lg border ${
                  selectedOption === index
                    ? option.correct
                      ? "bg-green-100 border-green-500"
                      : "bg-red-100 border-red-500"
                    : "bg-gray-100 border-gray-300 hover:bg-gray-200"
                }`}
                onClick={() => handleOptionSelect(index)}
                disabled={showFeedback}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {option.text}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-4 rounded-lg"
            >
              {simulationSteps[currentStep].options[selectedOption!].correct ? (
                <div className="flex items-center text-green-700 bg-green-100 p-4 rounded-lg">
                  <CheckCircle className="mr-2 flex-shrink-0" size={24} />
                  <p>{simulationSteps[currentStep].feedback.correct}</p>
                </div>
              ) : (
                <div className="flex items-center text-red-700 bg-red-100 p-4 rounded-lg">
                  <XCircle className="mr-2 flex-shrink-0" size={24} />
                  <p>{simulationSteps[currentStep].feedback.incorrect}</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {showFeedback && currentStep < simulationSteps.length - 1 && (
          <motion.button
            className="mt-6 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300 flex items-center"
            onClick={handleNextStep}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next Step
            <ArrowRight className="ml-2" size={20} />
          </motion.button>
        )}

        {stepsCompleted.every((step) => step) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 p-4 bg-teal-100 rounded-lg"
          >
            <h4 className="text-xl font-semibold mb-2 text-teal-800">Simulation Complete!</h4>
            <p className="text-teal-700">
              Congratulations! You've successfully navigated through a complete CX project lifecycle using the Support
              Readiness Tracker. You're now ready to apply these skills in real-world scenarios.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

