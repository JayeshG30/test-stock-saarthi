import React from "react"
import { Sidebar as SidebarPrimitive, useSidebar } from "@/components/ui/sidebar"
import { SidebarHeader } from "./SidebarHeader"
import { SidebarContent } from "./SidebarContent"
import { SidebarFooter } from "./SidebarFooter"
import { SidebarToggle } from "./SidebarToggle"
import { cn } from "@/lib/utils"

export const Sidebar = () => {
  const { state, isMobile, toggleSidebar } = useSidebar()
  const collapsed = state === "collapsed"

  // Only render desktop/tablet sidebar here. Mobile uses MobileSidebar.
  if (isMobile) return null

  return (
    <SidebarPrimitive
      collapsible="icon"
      className="border-r border-border-subtle bg-bg-surface transition-all duration-200"
      style={{
        "--sidebar-width": "256px",
        "--sidebar-width-icon": "64px",
      } as React.CSSProperties}
    >
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex flex-col flex-1 min-h-0">
          <SidebarHeader collapsed={collapsed} />
          <SidebarContent />
        </div>
        <div className={cn(
          "flex flex-col gap-2 border-t border-border-subtle bg-bg-surface transition-all duration-200",
          collapsed ? "p-3 items-center" : "p-4"
        )}>
          <SidebarFooter collapsed={collapsed} />
          <div className={cn("flex w-full", collapsed ? "justify-center" : "justify-end")}>
            <SidebarToggle collapsed={collapsed} onToggle={toggleSidebar} />
          </div>
        </div>
      </div>
    </SidebarPrimitive>
  )
}

