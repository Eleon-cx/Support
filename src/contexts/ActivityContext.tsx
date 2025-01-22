"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback, useMemo } from "react"

type ActivityContextType = {
  completedActivities: string[]
  markActivityCompleted: (activityId: string) => void
  isAllActivitiesCompleted: (requiredActivities: string[]) => boolean
  areActivitiesCompleted: (activityIds: string[]) => boolean
}

const ActivityContext = createContext<ActivityContextType | undefined>(undefined)

export const useActivities = () => {
  const context = useContext(ActivityContext)
  if (!context) {
    throw new Error("useActivities must be used within an ActivityProvider")
  }
  return context
}

export const ActivityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedActivities, setCompletedActivities] = useState<string[]>([])

  const markActivityCompleted = useCallback((activityId: string) => {
    setCompletedActivities((prev) => {
      if (!prev.includes(activityId)) {
        return [...prev, activityId]
      }
      return prev
    })
  }, [])

  const isAllActivitiesCompleted = useCallback(
    (requiredActivities: string[]) => {
      return requiredActivities.every((activity) => completedActivities.includes(activity))
    },
    [completedActivities],
  )

  const areActivitiesCompleted = useCallback(
    (activityIds: string[]) => {
      return activityIds.every((activityId) => completedActivities.includes(activityId))
    },
    [completedActivities],
  )

  const value = useMemo(
    () => ({ completedActivities, markActivityCompleted, isAllActivitiesCompleted, areActivitiesCompleted }),
    [completedActivities, markActivityCompleted, isAllActivitiesCompleted, areActivitiesCompleted],
  )

  return <ActivityContext.Provider value={value}>{children}</ActivityContext.Provider>
}

