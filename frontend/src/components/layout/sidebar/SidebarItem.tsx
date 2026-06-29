import { NavLink } from "react-router-dom"
import type { LucideIcon } from "lucide-react"
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

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
      {/* Active accent bar on the left edge */}
      {isActive && (
        <span
          className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-0.75 rounded-r bg-sidebar-primary z-10 transition-all duration-200"
          aria-hidden="true"
        />
      )}

      <SidebarMenuButton
        asChild
        isActive={isActive}
        tooltip={collapsed ? label : undefined}
        disabled={disabled}
        className={`relative flex items-center w-full gap-3 px-3 py-2.5 rounded-md)] transition-all duration-100 
          ${isActive
            ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
            : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          } 
          ${disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : "cursor-pointer"}
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar
        `}
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
            className={`h-5 w-5 shrink-0 transition-colors duration-100 
              ${isActive ? "text-sidebar-primary" : "text-sidebar-foreground/50 group-hover/item:text-sidebar-accent-foreground"}
            `}
            aria-hidden="true"
          />

          {!collapsed && (
            <span className="flex-1 text-[13px] tracking-wide truncate">{label}</span>
          )}

          {!collapsed && badge && (
            <span className="rounded-full bg-sidebar-primary/15 px-2 py-0.5 text-[10px] font-semibold text-sidebar-primary uppercase tracking-wider">
              {badge}
            </span>
          )}
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

export default SidebarItem
