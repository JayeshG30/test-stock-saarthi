import { ChevronLeft, ChevronRight } from "lucide-react"

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
      className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] border border-[var(--sidebar-border)] bg-[var(--sidebar)] text-[var(--sidebar-foreground)]/70 hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sidebar-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sidebar)] transition-colors cursor-pointer"
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

export default SidebarToggle
