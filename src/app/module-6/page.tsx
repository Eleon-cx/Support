"use client"

import Welcome from "@/components/WelcomeModule6"
import LearningObjectives from "@/components/LearningObjectivesModule6"
import RetrospectiveTechniques from "@/components/RetrospectiveTechniquesModule6"
import LessonsLearnedModule6 from "@/components/LessonsLearnedModule6"
import MiniQuiz from "@/components/MiniQuizModule6"
import RecapNextSteps from "@/components/RecapNextStepsModule6"
import EndOfModule from "@/components/EndOfModuleModule6"
import ModuleLayout from "@/components/ModuleLayout"

export default function Module6() {
  return (
    <ModuleLayout>
      <Welcome />
      <LearningObjectives />
      <RetrospectiveTechniques />
      <LessonsLearnedModule6 />
      <MiniQuiz />
      <RecapNextSteps />
      <EndOfModule />
    </ModuleLayout>
  )
}

