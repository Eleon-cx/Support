import type { ReactNode } from "react"

interface ModuleLayoutProps {
  children: ReactNode
}

export default function ModuleLayout({ children }: ModuleLayoutProps) {
  return (
    <div className="relative">
      <div className="divide-y divide-gray-200">{children}</div>
    </div>
  )
}

