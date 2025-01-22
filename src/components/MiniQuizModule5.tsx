"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle, RefreshCw } from "lucide-react"
import { useActivities } from "@/contexts/ActivityContext"

const questions = [
  {
    question: "Which tool is central to managing CX projects effectively?",
    options: ["Email", "Support Readiness Tracker", "Spreadsheets", "Post-it notes"],
    correctAnswer: "Support Readiness Tracker",
  },
  {
    question: "What's a key benefit of organizing tasks into milestones?",
    options: [
      "It makes the project look more complex",
      "It helps track project progress more effectively",
      "It allows for more meetings",
      "It increases the project budget",
    ],
    correctAnswer: "It helps track project progress more effectively",
  },
  {
    question: "How should you handle a potential project risk?",
    options: [
      "Ignore it and hope it goes away",
      "Immediately inform all stakeholders",
      "Update the risk register and develop a mitigation plan",
      "Extend the project timeline",
    ],
    correctAnswer: "Update the risk register and develop a mitigation plan",
  },
]

export default function MiniQuiz() {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""))
  const [submitted, setSubmitted] = useState(false)
  const [allCorrect, setAllCorrect] = useState(false)
  const { markActivityCompleted } = useActivities()

  const handleAnswer = (questionIndex: number, answer: string) => {
    const newAnswers = [...answers]
    newAnswers[questionIndex] = answer
    setAnswers(newAnswers)
  }

  const handleSubmit = () => {
    setSubmitted(true)
    const correct = answers.every((answer, index) => answer === questions[index].correctAnswer)
    setAllCorrect(correct)
    if (correct) {
      markActivityCompleted("module5_miniQuiz")
    }
  }

  const handleRetry = () => {
    setAnswers(Array(questions.length).fill(""))
    setSubmitted(false)
    setAllCorrect(false)
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-100">
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
        Knowledge Check: Project Simulation Recap
      </h2>
      <div className="max-w-3xl mx-auto">
        {questions.map((q, index) => (
          <motion.div
            key={index}
            className="mb-8 bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-700">
              {index + 1}. {q.question}
            </h3>
            <div className="space-y-2">
              {q.options.map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleAnswer(index, option)}
                    className="form-radio text-purple-600"
                    disabled={submitted}
                  />
                  <span className={submitted && option === q.correctAnswer ? "text-green-600 font-semibold" : ""}>
                    {option}
                  </span>
                  {submitted &&
                    (option === q.correctAnswer ? (
                      <CheckCircle className="text-green-500 ml-2" size={20} />
                    ) : (
                      answers[index] === option && <XCircle className="text-red-500 ml-2" size={20} />
                    ))}
                </label>
              ))}
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          {!submitted ? (
            <motion.button
              onClick={handleSubmit}
              disabled={answers.some((a) => a === "")}
              className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Check Answers
            </motion.button>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <p className="text-xl mb-4">
                {allCorrect
                  ? "Congratulations! You've mastered the key concepts from the project simulation."
                  : "Good effort! Review the correct answers above and try again."}
              </p>
              {!allCorrect && (
                <motion.button
                  onClick={handleRetry}
                  className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition duration-300 text-lg font-semibold inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RefreshCw className="mr-2" size={20} />
                  Retry Quiz
                </motion.button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

