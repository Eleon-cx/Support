"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle, ArrowRight, RefreshCw } from "lucide-react"
import { useActivities } from "@/contexts/ActivityContext"

const caseStudySteps = [
  {
    title: "Situation",
    description:
      "A large e-commerce company is experiencing a surge in customer support tickets due to a new product launch.",
    question: "What's the first step you should take using the Support Readiness Tracker?",
    options: [
      { text: "Immediately hire more support staff", correct: false },
      { text: "Analyze current ticket data and team capacity", correct: true },
      { text: "Ignore the surge and continue as usual", correct: false },
    ],
    feedback: {
      correct: "Excellent! Analyzing current data helps you understand the situation and make informed decisions.",
      incorrect:
        "Consider the importance of data-driven decision making. Analyzing current ticket data and team capacity would be a more strategic first step.",
    },
  },
  // ... other case study steps remain the same
]

export default function CaseStudy() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [stepsCompleted, setStepsCompleted] = useState<boolean[]>(Array(caseStudySteps.length).fill(false))
  const { markActivityCompleted } = useActivities()

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index)
    setShowFeedback(true)
    const isCorrect = caseStudySteps[currentStep].options[index].correct
    const newStepsCompleted = [...stepsCompleted]
    newStepsCompleted[currentStep] = isCorrect
    setStepsCompleted(newStepsCompleted)

    if (isCorrect && newStepsCompleted.every((step) => step)) {
      markActivityCompleted("module1_caseStudy")
    }
  }

  const handleRetry = () => {
    setSelectedOption(null)
    setShowFeedback(false)
    setCurrentStep(0)
    setStepsCompleted(Array(caseStudySteps.length).fill(false))
  }

  const handleNextStep = () => {
    if (currentStep < caseStudySteps.length - 1) {
      setCurrentStep(currentStep + 1)
      setSelectedOption(null)
      setShowFeedback(false)
    }
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-teal-100">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
        Case Study: Optimizing Support with Advanced Techniques
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
          <h3 className="text-2xl font-semibold mb-4 text-teal-700">{caseStudySteps[currentStep].title}</h3>
          <p className="text-lg mb-6">{caseStudySteps[currentStep].description}</p>
          <p className="text-xl font-semibold mb-4 text-teal-800">{caseStudySteps[currentStep].question}</p>
          <div className="space-y-4">
            {caseStudySteps[currentStep].options.map((option, index) => (
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
              {caseStudySteps[currentStep].options[selectedOption!].correct ? (
                <div className="flex items-center text-green-700 bg-green-100 p-4 rounded-lg">
                  <CheckCircle className="mr-2 flex-shrink-0" size={24} />
                  <p>{caseStudySteps[currentStep].feedback.correct}</p>
                </div>
              ) : (
                <div className="flex items-center text-red-700 bg-red-100 p-4 rounded-lg">
                  <XCircle className="mr-2 flex-shrink-0" size={24} />
                  <p>{caseStudySteps[currentStep].feedback.incorrect}</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 flex justify-between">
          {!stepsCompleted[currentStep] && showFeedback && (
            <motion.button
              onClick={handleRetry}
              className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className="mr-2" size={20} />
              Start Over
            </motion.button>
          )}
          {stepsCompleted[currentStep] && currentStep < caseStudySteps.length - 1 && (
            <motion.button
              className="ml-auto bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300 flex items-center"
              onClick={handleNextStep}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next Step
              <ArrowRight className="ml-2" size={20} />
            </motion.button>
          )}
        </div>

        {stepsCompleted.every((step) => step) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 p-4 bg-teal-100 rounded-lg"
          >
            <h4 className="text-xl font-semibold mb-2 text-teal-800">Case Study Complete!</h4>
            <p className="text-teal-700">
              Congratulations! You've successfully completed the case study and demonstrated your understanding of
              advanced Support Readiness Tracker techniques.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

