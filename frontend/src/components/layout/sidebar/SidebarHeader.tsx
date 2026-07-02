import { ChartCandlestick } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarHeaderProps {
  collapsed: boolean
}

export const SidebarHeader = ({ collapsed }: SidebarHeaderProps) => {
  return (
    <div className={cn(
      "flex h-16 shrink-0 items-center border-b border-border-subtle bg-bg-surface transition-all duration-200",
      collapsed ? "justify-center px-2" : "px-4"
    )}>
      <div className="flex items-center gap-3">
        <ChartCandlestick className="h-6 w-6 text-primary-brand shrink-0" />
        {!collapsed && (
          <span className="font-sans text-base font-semibold text-text-primary tracking-wide">
            StockSaarthi AI
          </span>
        )}
      </div>
    </div>
  )
}


