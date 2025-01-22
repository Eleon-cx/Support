"use client"

import Welcome from "@/components/WelcomeModule3"
import LearningObjectives from "@/components/LearningObjectivesModule3"
import AdvancedTrackerTechniques from "@/components/AdvancedTrackerTechniquesModule3"
import AutomationStrategies from "@/components/AutomationStrategiesModule3"
import IntegrationWithOtherTools from "@/components/IntegrationWithOtherToolsModule3"
import DataDrivenDecisionMaking from "@/components/DataDrivenDecisionMakingModule3"
import CaseStudy from "@/components/CaseStudyModule3"
import MiniQuiz from "@/components/MiniQuizModule3"
import RecapNextSteps from "@/components/RecapNextStepsModule3"
import EndOfModule from "@/components/EndOfModuleModule3"
import ModuleLayout from "@/components/ModuleLayout"

export default function Module3() {
  return (
    <ModuleLayout>
      <Welcome />
      <LearningObjectives />
      <AdvancedTrackerTechniques />
      <AutomationStrategies />
      <IntegrationWithOtherTools />
      <DataDrivenDecisionMaking />
      <CaseStudy />
      <MiniQuiz />
      <RecapNextSteps />
      <EndOfModule />
    </ModuleLayout>
  )
}

