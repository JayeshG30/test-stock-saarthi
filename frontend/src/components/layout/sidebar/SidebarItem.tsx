import { NavLink } from "react-router-dom"
import type { LucideIcon } from "lucide-react"
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

interface SidebarItemProps {
  label: string
  icon: LucideIcon
  path: string
  isActive: boolean
  disabled?: boolean
  badge?: string
  collapsed: boolean
  onClick?: () => void
}

export const SidebarItem = ({
  label,
  icon: Icon,
  path,
  isActive,
  disabled,
  badge,
  collapsed,
  onClick,
} : SidebarItemProps) => {
  return (
    <SidebarMenuItem className="list-none relative group/item">
      <SidebarMenuButton
        asChild
        isActive={isActive}
        tooltip={collapsed ? label : undefined}
        disabled={disabled}
        className={cn(
          "relative flex items-center w-full gap-3 py-2.5 pl-2.5 pr-3 rounded-md transition-all duration-200",
          isActive
            ? "bg-primary-brand-glow text-text-primary border-l-[3.5px] border-primary-brand rounded-l-none"
            : "text-text-secondary hover:bg-bg-elevated hover:text-text-primary border-l-[3px] border-transparent",
          disabled && "opacity-40 cursor-not-allowed pointer-events-none",
          !disabled && "cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
        )}
      >
        <NavLink
          to={path}
          onClick={(event) => {
            if (disabled) {
              event.preventDefault()
              return
            }

            onClick?.()
          }}
          className="flex w-full items-center gap-3"
          aria-current={isActive ? "page" : undefined}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : undefined}
        >
          <Icon
            className={cn(
              "h-5 w-5 shrink-0 transition-colors duration-200",
              isActive
                ? "text-primary-brand"
                : "text-text-muted group-hover/item:text-text-primary"
            )}
            aria-hidden="true"
          />

          {!collapsed && (
            <span className={cn(
              "flex-1 text-sm truncate",
              isActive ? "font-semibold" : "font-medium"
            )}>{label}</span>
          )}

          {!collapsed && badge && (
            <span className="rounded-full bg-primary-brand-glow px-2.5 py-0.5 text-[10px] font-semibold text-primary-brand uppercase tracking-wider">
              {badge}
            </span>
          )}
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

