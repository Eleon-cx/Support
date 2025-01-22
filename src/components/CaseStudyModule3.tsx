"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle, ArrowRight } from "lucide-react"
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
  {
    title: "Task",
    description: "You need to organize your team to handle the increased workload efficiently.",
    question: "Which feature of the Support Readiness Tracker would be most helpful for this?",
    options: [
      { text: "Advanced filtering to categorize tickets", correct: false },
      { text: "Automation for task assignment", correct: true },
      { text: "Integration with social media platforms", correct: false },
    ],
    feedback: {
      correct:
        "Great choice! Automation for task assignment can help distribute the workload efficiently based on team members' skills and capacity.",
      incorrect:
        "While other features are useful, automation for task assignment would be most effective in efficiently organizing your team for the increased workload.",
    },
  },
  {
    title: "Action",
    description:
      "You've implemented automated task assignment. Now you need to monitor the team's progress and identify any bottlenecks.",
    question: "Which data-driven approach would be most effective?",
    options: [
      { text: "Weekly team meetings to discuss progress", correct: false },
      { text: "Creating custom dashboards to visualize key metrics", correct: true },
      { text: "Asking team members to submit daily reports", correct: false },
    ],
    feedback: {
      correct:
        "Excellent! Custom dashboards provide real-time visibility into key metrics, allowing you to quickly identify and address bottlenecks.",
      incorrect:
        "While communication is important, creating custom dashboards to visualize key metrics would provide more immediate and comprehensive insights into team progress and potential bottlenecks.",
    },
  },
  {
    title: "Result",
    description:
      "Your data-driven approach has helped improve ticket resolution times. Now you want to prevent similar surges in the future.",
    question: "What's the best way to use the Support Readiness Tracker for this purpose?",
    options: [
      { text: "Set up automated alerts for unusual ticket volume increases", correct: true },
      { text: "Manually check ticket volumes daily", correct: false },
      { text: "Wait for customers to complain about long wait times", correct: false },
    ],
    feedback: {
      correct:
        "Perfect! Automated alerts will help you proactively identify and address potential surges before they become major issues.",
      incorrect:
        "Proactive measures are key in preventing future surges. Setting up automated alerts for unusual ticket volume increases would be the most effective approach.",
    },
  },
]

export default function CaseStudy() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const { markActivityCompleted } = useActivities()

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index)
    setShowFeedback(true)
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
        {currentStep < caseStudySteps.length - 1 && showFeedback && (
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
        {currentStep === caseStudySteps.length - 1 && showFeedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 p-4 bg-teal-100 rounded-lg"
          >
            <h4 className="text-xl font-semibold mb-2 text-teal-800">Case Study Complete!</h4>
            <p className="text-teal-700">
              Congratulations! You've successfully applied advanced Support Readiness Tracker techniques to optimize the
              support process. Remember to continually analyze data, automate where possible, and stay proactive in your
              approach to customer support.
            </p>
            {markActivityCompleted("module3_caseStudy")}
          </motion.div>
        )}
      </div>
    </section>
  )
}

