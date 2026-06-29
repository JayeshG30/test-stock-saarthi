import { Building2 } from "lucide-react"

interface SidebarHeaderProps {
  collapsed: boolean
}

export const SidebarHeader = ({ collapsed }: SidebarHeaderProps) => {
  return (
    <div className="flex h-16 shrink-0 items-center px-4 border-b border-border-subtle)] bg-bg-surface)]">
      <div className="flex items-center gap-3">
        <Building2 className="h-6 w-6 text-primary-brand)] shrink-0" />
        {!collapsed && (
          <span className="font-sans text-[16px] font-semibold text-text-primary)]">
            StockSaarthi
          </span>
        )}
      </div>
    </div>
  )
}

export default SidebarHeader
