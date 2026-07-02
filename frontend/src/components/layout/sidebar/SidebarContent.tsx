import { useMemo } from "react"
import { useLocation } from "react-router-dom"
import { NAVIGATION_CONFIG } from "@/config/navigation"
import { useSidebar, SidebarMenu, SidebarContent as SidebarContentPrimitive } from "@/components/ui/sidebar"
import { SidebarGroup } from "./SidebarGroup"
import { SidebarItem } from "./SidebarItem"
import type { NavigationConfig, NavigationGroup } from "@/types/navigation.types"

interface SidebarContentProps {
  onItemClick?: () => void
}

/**
 * Filter function to separate filtering concerns (like hidden items, future RBAC,
 * licensing, or feature flags) from visual rendering logic.
 */
const filterNavigation = (config: NavigationConfig): NavigationGroup[] => {
  return config
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        // Filter out hidden items
        if (item.hidden) return false

        // Future RBAC, licensing, and feature flag rules can be added here
        
        return true
      }),
    }))
    .filter((group) => group.items.length > 0)
}

export const SidebarContent = ({ onItemClick }: SidebarContentProps) => {
  const { state } = useSidebar()
  const location = useLocation()
  const pathname = location.pathname
  const collapsed = state === "collapsed"

  // Computes active state for a given path
  const isPathActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname === path || pathname.startsWith(path + "/")
  }

  // Pure filtering phase before rendering
  const filteredGroups = useMemo(
    () => filterNavigation(NAVIGATION_CONFIG),
    []
  )

  return (
    <SidebarContentPrimitive className="no-scrollbar">
      <nav role="navigation" aria-label="Main Navigation" className="flex flex-col gap-2 py-4">
        {filteredGroups.map((group) => (
          <SidebarGroup key={group.id} title={group.title} collapsed={collapsed}>
            <SidebarMenu className="space-y-1">
              {group.items.map((item) => {
                const isActive = isPathActive(item.path)
                return (
                  <SidebarItem
                    key={item.id}
                    label={item.label}
                    icon={item.icon}
                    path={item.path}
                    isActive={isActive}
                    disabled={item.disabled}
                    badge={item.badge}
                    collapsed={collapsed}
                    onClick={onItemClick}
                  />
                )
              })}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </nav>
    </SidebarContentPrimitive>
  )
}

