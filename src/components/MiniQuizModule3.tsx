"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle, ArrowRight } from "lucide-react"
import { useActivities } from "@/contexts/ActivityContext"

const questions = [
  {
    question: "Which of the following is NOT a benefit of integrating your Support Readiness Tracker with other tools?",
    options: [
      "Improved communication between team members",
      "Automated task assignment based on workload",
      "Elimination of all manual data entry",
      "Enhanced data visualization and reporting",
    ],
    correctAnswer: "Elimination of all manual data entry",
  },
  {
    question: "What is a key advantage of using data-driven decision making in CX project management?",
    options: [
      "It completely removes the need for human judgment",
      "It allows for more accurate predictions and proactive problem-solving",
      "It guarantees 100% customer satisfaction",
      "It eliminates the need for project planning",
    ],
    correctAnswer: "It allows for more accurate predictions and proactive problem-solving",
  },
  {
    question: "Which advanced tracker technique involves setting up automated workflows triggered by specific events?",
    options: ["Custom Dashboards", "Advanced Filtering", "Workflow Automation", "Version Control"],
    correctAnswer: "Workflow Automation",
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
      markActivityCompleted("module3_miniQuiz")
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
        Knowledge Check: Advanced Support Readiness Techniques
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
                  ? "Congratulations! You've mastered the advanced concepts of the Support Readiness Tracker."
                  : "Good effort! Review the correct answers above and consider revisiting the relevant sections."}
              </p>
              {!allCorrect && (
                <motion.button
                  onClick={handleRetry}
                  className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition duration-300 text-lg font-semibold inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
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

