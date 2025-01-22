"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { motion } from "framer-motion"

export default function ProgressTracker() {
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const trackLength = documentHeight - windowHeight
    const percentage = Math.floor((scrollTop / trackLength) * 100)
    setProgress(percentage)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const progressStyle = useMemo(() => ({ width: `${progress}%` }), [progress])

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-gray-200 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
        style={progressStyle}
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}

