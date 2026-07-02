import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface PageContainerProps {
  children: ReactNode
  className?: string
}

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-[1440px] mx-auto flex flex-col gap-6 md:gap-8",
        className
      )}
    >
      {children}
    </div>
  )
}