"use client"

import Welcome from "@/components/WelcomeModule2"
import LearningObjectives from "@/components/LearningObjectivesModule2"
import TrackerOverview from "@/components/TrackerOverviewModule2"
import TaskOrganization from "@/components/TaskOrganizationModule2"
import DeadlineManagement from "@/components/DeadlineManagementModule2"
import OwnershipAssignment from "@/components/OwnershipAssignmentModule2"
import InteractiveDemo from "@/components/InteractiveDemoModule2"
import MiniQuiz from "@/components/MiniQuizModule2"
import RecapNextSteps from "@/components/RecapNextStepsModule2"
import EndOfModule from "@/components/EndOfModuleModule2"
import ModuleLayout from "@/components/ModuleLayout"

export default function Module2() {
  return (
    <ModuleLayout>
      <Welcome />
      <LearningObjectives />
      <TrackerOverview />
      <TaskOrganization />
      <DeadlineManagement />
      <OwnershipAssignment />
      <InteractiveDemo />
      <MiniQuiz />
      <RecapNextSteps />
      <EndOfModule />
    </ModuleLayout>
  )
}

