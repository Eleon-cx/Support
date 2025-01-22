"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Send } from "lucide-react"

type Rating = 1 | 2 | 3 | 4 | 5

interface SurveyData {
  email: string
  moduleProgress: Record<string, Rating>
  materialUnderstanding: Record<string, Rating>
  knowledgeGain: Rating
  satisfactionRating: Rating
  contentRelevanceRating: Rating
  presentationQualityRating: Rating
  easeOfNavigationRating: Rating
  openEndedFeedback: string
  netPromoterScore: number
}

const initialSurveyData: SurveyData = {
  email: "",
  moduleProgress: {},
  materialUnderstanding: {},
  knowledgeGain: 0,
  satisfactionRating: 0,
  contentRelevanceRating: 0,
  presentationQualityRating: 0,
  easeOfNavigationRating: 0,
  openEndedFeedback: "",
  netPromoterScore: 5,
}

const modules = [
  "Fundamentals of CX Project Management",
  "Mastering the Support Readiness Tracker",
  "Advanced Support Readiness Techniques",
  "Measuring Success and Continuous Improvement",
  "End-to-End Project Simulation",
  "Post-Project Review & Future Applications",
]

export default function FeedbackSurvey() {
  const [surveyData, setSurveyData] = useState<SurveyData>(initialSurveyData)
  const [isCompleted, setIsCompleted] = useState(false)
  const [hoveredStar, setHoveredStar] = useState<{ field: string; value: number } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof SurveyData) => {
    setSurveyData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleRatingChange = (value: Rating, field: keyof SurveyData, moduleIndex?: number) => {
    console.log(`Updating rating for ${field}:`, value)
    setSurveyData((prev) => {
      const newData = { ...prev }
      if (moduleIndex !== undefined) {
        newData[field] = {
          ...newData[field as keyof typeof newData],
          [moduleIndex]: value,
        }
      } else {
        newData[field] = value
      }
      console.log("New survey data:", newData)
      return newData
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Survey data submitted:", surveyData)
    // Here you would typically send the data to your backend or Supabase
    setIsCompleted(true)
  }

  const StarRating = ({
    field,
    value,
    onChange,
  }: { field: string; value: number; onChange: (value: Rating) => void }) => {
    const [hover, setHover] = useState<number | null>(null)

    return (
      <div className="flex items-center mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.div
            key={star}
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
            onClick={() => onChange(star as Rating)}
          >
            <Star
              size={28}
              className={`transition-colors duration-200 ${
                star <= (hover ?? value) ? (star <= value ? "text-yellow-400" : "text-green-300") : "text-gray-300"
              }`}
            />
          </motion.div>
        ))}
      </div>
    )
  }

  console.log("Current survey data:", surveyData)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg"
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">
        Support Readiness Tracker Training Feedback Survey
      </h1>
      {isCompleted ? (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Thank You for Your Feedback! 😊</h2>
          <p className="text-lg text-gray-700">
            Thank you for your valuable feedback! Your input helps us improve our training program.
          </p>
        </motion.div>
      ) : (
        <>
          <p className="mb-8 text-gray-600 text-center">
            Your feedback is invaluable in helping us improve the training experience. Please take a few moments to
            complete this survey.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={surveyData.email}
                onChange={(e) => handleInputChange(e, "email")}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Module Progress and Engagement</h3>
              {modules.map((module, index) => (
                <div key={index} className="mb-6 bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-700 mb-2">{module}</p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        How confident do you feel about your progress in this module?
                      </p>
                      <StarRating
                        field={`moduleProgress-${index}`}
                        value={surveyData.moduleProgress[index] || 0}
                        onChange={(value) => handleRatingChange(value, "moduleProgress", index)}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        How well do you feel you understood the material presented in this module?
                      </p>
                      <StarRating
                        field={`materialUnderstanding-${index}`}
                        value={surveyData.materialUnderstanding[index] || 0}
                        onChange={(value) => handleRatingChange(value, "materialUnderstanding", index)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Assessments and Performance</h3>
              <p className="font-medium text-gray-700 mb-2">
                To what extent do you feel your project management skills have improved after completing the training?
              </p>
              <StarRating
                field="knowledgeGain"
                value={surveyData.knowledgeGain}
                onChange={(value) => handleRatingChange(value, "knowledgeGain")}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Feedback and Satisfaction</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-700 mb-2">
                    How satisfied are you with the "Support Readiness Tracker" training course?
                  </p>
                  <StarRating
                    field="satisfactionRating"
                    value={surveyData.satisfactionRating}
                    onChange={(value) => handleRatingChange(value, "satisfactionRating")}
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-700 mb-2">
                    How relevant was the course content to your role as a CX Analyst?
                  </p>
                  <StarRating
                    field="contentRelevanceRating"
                    value={surveyData.contentRelevanceRating}
                    onChange={(value) => handleRatingChange(value, "contentRelevanceRating")}
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-700 mb-2">
                    How would you rate the quality of the content presentation (e.g., clarity, organization)?
                  </p>
                  <StarRating
                    field="presentationQualityRating"
                    value={surveyData.presentationQualityRating}
                    onChange={(value) => handleRatingChange(value, "presentationQualityRating")}
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-700 mb-2">
                    How easy was it to navigate the training website and access the materials?
                  </p>
                  <StarRating
                    field="easeOfNavigationRating"
                    value={surveyData.easeOfNavigationRating}
                    onChange={(value) => handleRatingChange(value, "easeOfNavigationRating")}
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="openEndedFeedback" className="block text-sm font-medium text-gray-700 mb-2">
                Please share any additional feedback or suggestions to help us improve the training course:
              </label>
              <textarea
                id="openEndedFeedback"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={surveyData.openEndedFeedback}
                onChange={(e) => handleInputChange(e, "openEndedFeedback")}
              ></textarea>
            </div>

            <div>
              <label htmlFor="netPromoterScore" className="block text-sm font-medium text-gray-700 mb-2">
                On a scale of 0 to 10, how likely are you to recommend the "Support Readiness Tracker" training course
                to a colleague?
              </label>
              <input
                type="range"
                id="netPromoterScore"
                min="0"
                max="10"
                className="w-full"
                value={surveyData.netPromoterScore}
                onChange={(e) => handleInputChange(e, "netPromoterScore")}
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>Not at all likely</span>
                <span>Extremely likely</span>
              </div>
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="mr-2" size={20} />
                Submit Feedback
              </motion.button>
            </div>
          </form>
        </>
      )}
    </motion.div>
  )
}

