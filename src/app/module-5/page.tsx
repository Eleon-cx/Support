"use client"

import Welcome from "@/components/WelcomeModule5"
import LearningObjectives from "@/components/LearningObjectivesModule5"
import ProjectSimulation from "@/components/ProjectSimulationModule5"
import MiniQuiz from "@/components/MiniQuizModule5"
import RecapNextSteps from "@/components/RecapNextStepsModule5"
import EndOfModule from "@/components/EndOfModuleModule5"
import ModuleLayout from "@/components/ModuleLayout"

export default function Module5() {
  return (
    <ModuleLayout>
      <Welcome />
      <LearningObjectives />
      <ProjectSimulation />
      <MiniQuiz />
      <RecapNextSteps />
      <EndOfModule />
    </ModuleLayout>
  )
}

