import { Fragment } from "react"
import {
  Breadcrumb as BreadcrumbRoot,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"

interface BreadcrumbProps {
  className?: string
}

const breadcrumbItems = [
  { label: "Dashboard" },
  { label: "Overview" },
] as const

export const Breadcrumb = ({ className }: BreadcrumbProps) => {
  return (
    <BreadcrumbRoot className={cn("hidden md:block", className)} aria-label="Breadcrumb">
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1
          return (
            <Fragment key={item.label}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="font-sans text-[13px] font-medium text-foreground">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                    // for now only later BreadcrumbLink
                  <BreadcrumbPage className="font-sans text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator className="text-muted-foreground" />}
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </BreadcrumbRoot>
  )
}

