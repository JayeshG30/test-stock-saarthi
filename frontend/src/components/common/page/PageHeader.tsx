import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface PageHeaderProps {
  title: string
  description?: string
  actions?: ReactNode
  className?: string
}

export const PageHeader = ({
  title,
  description,
  actions,
  className,
}: PageHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6",
        className
      )}
    >
      <div className="space-y-1 md:space-y-1.5">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary">
          {title}
        </h1>
        {description && (
          <p className="text-sm text-text-secondary md:text-base">
            {description}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-3 sm:self-center shrink-0">
          {actions}
        </div>
      )}
    </div>
  )
}