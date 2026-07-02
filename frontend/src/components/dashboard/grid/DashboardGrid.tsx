import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface DashboardGridProps {
  children: ReactNode
  className?: string
}

export const DashboardGrid = ({ children, className }: DashboardGridProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", className)}>
      {children}
    </div>
  )
}
