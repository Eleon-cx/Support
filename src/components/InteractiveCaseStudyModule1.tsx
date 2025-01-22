"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle, ArrowRight, RefreshCw } from "lucide-react"
import { useActivities } from "@/contexts/ActivityContext"

const questions = [
  {
    title: "Stakeholder Communication",
    description: "Multiple teams are involved in the launch. How do you ensure everyone stays informed?",
    options: [
      { text: "Send daily email updates to all teams", correct: false },
      { text: "Set up a dedicated Slack channel for launch updates", correct: true },
      { text: "Rely on word-of-mouth communication", correct: false },
    ],
    feedback: {
      correct:
        "Excellent! A dedicated Slack channel provides real-time, centralized communication that all stakeholders can access.",
      incorrect:
        "Consider a more centralized and real-time communication approach that allows for easy access to information.",
    },
  },
  // Add more questions as needed
  {
    title: "Project Initiation",
    description: "A new product feature is being launched, and the CX team needs to prepare for customer inquiries.",
    options: [
      { text: "Wait for the product team to provide information", correct: false },
      { text: "Proactively reach out to stakeholders for details", correct: true },
      { text: "Assume it's similar to a previous feature and use old documentation", correct: false },
    ],
    feedback: {
      correct: "Great choice! Proactive communication ensures the CX team is well-prepared and avoids delays.",
      incorrect: "Waiting passively or relying on assumptions can lead to missed information and delays.",
    },
  },
  {
    title: "Task Planning",
    description: "You need to organize tasks for the CX team to prepare for the launch.",
    options: [
      { text: "Create a detailed task list with owners and deadlines", correct: true },
      { text: "Verbally assign tasks during a team meeting", correct: false },
      { text: "Let team members choose their own tasks", correct: false },
    ],
    feedback: {
      correct: "A detailed task list ensures clarity, accountability, and efficient task completion.",
      incorrect:
        "Verbal assignments or letting team members self-select tasks can lead to confusion and missed deadlines.",
    },
  },
]

export default function InteractiveCaseStudy() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [questionsCompleted, setQuestionsCompleted] = useState<boolean[]>(Array(questions.length).fill(false))
  const { markActivityCompleted } = useActivities()

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    setShowFeedback(true)
    const isCorrect = questions[currentQuestion].options[index].correct

    if (isCorrect) {
      const newQuestionsCompleted = [...questionsCompleted]
      newQuestionsCompleted[currentQuestion] = true
      setQuestionsCompleted(newQuestionsCompleted)
    }
  }

  const handleRetry = () => {
    setSelectedAnswer(null)
    setShowFeedback(false)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    }
  }

  const isCurrentQuestionCorrect = selectedAnswer !== null && questions[currentQuestion].options[selectedAnswer].correct

  useEffect(() => {
    if (questionsCompleted.every((step) => step)) {
      markActivityCompleted("module1_interactiveCaseStudy")
    }
  }, [questionsCompleted, markActivityCompleted])

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-indigo-100">
      <h2 className="text-4xl font-bold mb-10 text-center">Interactive Case Study</h2>

      {/* Progress indicators */}
      <div className="max-w-3xl mx-auto mb-8 flex justify-center gap-2">
        {questionsCompleted.map((completed, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              completed ? "bg-green-500" : index === currentQuestion ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">{questions[currentQuestion].title}</h3>
        <p className="text-lg mb-6">{questions[currentQuestion].description}</p>

        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showFeedback && handleAnswer(index)}
              className={`w-full text-left p-4 rounded-lg border transition-colors duration-300 ${
                showFeedback && selectedAnswer === index
                  ? option.correct
                    ? "bg-green-100 border-green-500"
                    : "bg-red-100 border-red-500"
                  : "bg-gray-100 border-gray-300 hover:bg-gray-200"
              }`}
              disabled={showFeedback}
            >
              {option.text}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6"
            >
              <div
                className={`p-4 rounded-lg flex items-start ${
                  isCurrentQuestionCorrect ? "bg-green-100" : "bg-red-100"
                }`}
              >
                {isCurrentQuestionCorrect ? (
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={24} />
                ) : (
                  <XCircle className="text-red-500 mr-2 flex-shrink-0" size={24} />
                )}
                <p className={isCurrentQuestionCorrect ? "text-green-700" : "text-red-700"}>
                  {isCurrentQuestionCorrect
                    ? questions[currentQuestion].feedback.correct
                    : questions[currentQuestion].feedback.incorrect}
                </p>
              </div>

              <div className="mt-6 flex justify-between">
                {!isCurrentQuestionCorrect && (
                  <button
                    onClick={handleRetry}
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
                  >
                    <RefreshCw className="mr-2" size={20} />
                    Try Again
                  </button>
                )}
                {isCurrentQuestionCorrect && currentQuestion < questions.length - 1 && (
                  <button
                    onClick={handleNext}
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 ml-auto"
                  >
                    Next Question
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {questionsCompleted.every((q) => q) && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 p-4 bg-green-100 rounded-lg">
            <h4 className="text-xl font-semibold mb-2 text-green-800">Case Study Complete!</h4>
            <p className="text-green-700">
              Congratulations! You've successfully completed all questions and demonstrated your understanding of
              project management principles.
            </p>
            {questionsCompleted.every((q) => q) && markActivityCompleted("module1_interactiveCaseStudy")}
          </motion.div>
        )}
      </div>
    </section>
  )
}

