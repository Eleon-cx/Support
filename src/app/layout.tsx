import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ActivityProvider } from "@/contexts/ActivityContext"
import ProgressTracker from "@/components/ProgressTracker"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Support Readiness Tracker",
  description: "Master CX project management and learn how to effectively use the Support Readiness Tracker",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActivityProvider>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100">
            <div className="max-w-6xl mx-auto">
              <ProgressTracker />
              {children}
            </div>
          </div>
        </ActivityProvider>
      </body>
    </html>
  )
}

