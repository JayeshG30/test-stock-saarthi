import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface PageSectionProps {
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export const PageSection = ({
  title,
  description,
  children,
  className,
}: PageSectionProps) => {
  return (
    <section className={cn("flex flex-col gap-4 md:gap-6", className)}>
      {(title || description) && (
        <div className="flex flex-col gap-1 md:gap-1.5">
          {title && (
            <h2 className="text-xl font-bold tracking-tight text-text-primary md:text-2xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm text-text-secondary">
              {description}
            </p>
          )}
        </div>
      )}
      {/* <div className="w-full"> */}
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </section>
  )
}