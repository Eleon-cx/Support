"use client"

import Welcome from "@/components/WelcomeModule1"
import LearningObjectives from "@/components/LearningObjectivesModule1"
import WhyProjectManagement from "@/components/WhyProjectManagementModule1"
import KeyTerms from "@/components/KeyTermsModule1"
import ProjectLifecycle from "@/components/ProjectLifecycleModule1"
import RealWorldExample from "@/components/RealWorldExampleModule1"
import InteractiveCaseStudy from "@/components/InteractiveCaseStudyModule1"
import MiniQuiz from "@/components/MiniQuizModule1"
import RecapNextSteps from "@/components/RecapNextStepsModule1"
import EndOfModule from "@/components/EndOfModuleModule1"
import ModuleLayout from "@/components/ModuleLayout"

export default function Module1() {
  return (
    <ModuleLayout>
      <Welcome />
      <LearningObjectives />
      <WhyProjectManagement />
      <KeyTerms />
      <ProjectLifecycle />
      <RealWorldExample />
      <InteractiveCaseStudy />
      <MiniQuiz />
      <RecapNextSteps />
      <EndOfModule />
    </ModuleLayout>
  )
}

