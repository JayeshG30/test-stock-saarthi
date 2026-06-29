import React from "react"
import { SidebarGroup as SidebarGroupPrimitive, SidebarGroupLabel } from "@/components/ui/sidebar"

interface SidebarGroupProps {
  title: string
  collapsed: boolean
  children: React.ReactNode
}

export const SidebarGroup = ({
  title,
  collapsed,
  children,
} : SidebarGroupProps) => {
  return (
    <SidebarGroupPrimitive className="px-2">
      {!collapsed && (
        <SidebarGroupLabel className="text-[11px] font-semibold tracking-wider text-text-muted)] uppercase px-3 mb-2">
          {title}
        </SidebarGroupLabel>
      )}
      <div className="space-y-1">{children}</div>
    </SidebarGroupPrimitive>
  )
}

export default SidebarGroup
