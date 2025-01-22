"use client"

import Welcome from "@/components/WelcomeModule4"
import LearningObjectives from "@/components/LearningObjectivesModule4"
import KPIDefinition from "@/components/KPIDefinitionModule4"
import ReportCreation from "@/components/ReportCreationModule4"
import MiniQuiz from "@/components/MiniQuizModule4"
import RecapNextSteps from "@/components/RecapNextStepsModule4"
import EndOfModule from "@/components/EndOfModuleModule4"
import ModuleLayout from "@/components/ModuleLayout"

export default function Module4() {
  return (
    <ModuleLayout>
      <Welcome />
      <LearningObjectives />
      <KPIDefinition />
      <ReportCreation />
      <MiniQuiz />
      <RecapNextSteps />
      <EndOfModule />
    </ModuleLayout>
  )
}

