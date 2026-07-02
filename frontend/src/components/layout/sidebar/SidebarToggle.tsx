import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarToggleProps {
  collapsed: boolean
  onToggle: () => void
}

export const SidebarToggle = ({
  collapsed,
  onToggle,
}: SidebarToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-md border border-border-default bg-bg-surface text-text-muted transition-all duration-200 cursor-pointer",
        "hover:bg-bg-elevated hover:text-text-primary hover:border-border-strong",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
      )}
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      aria-expanded={!collapsed}
    >
      {collapsed ? (
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      ) : (
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  )
}

