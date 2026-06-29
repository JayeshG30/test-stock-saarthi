import React from "react"
import { Sidebar as SidebarPrimitive, useSidebar } from "@/components/ui/sidebar"
import SidebarHeader from "./SidebarHeader"
import SidebarContent from "./SidebarContent"
import SidebarFooter from "./SidebarFooter"
import SidebarToggle from "./SidebarToggle"

export const Sidebar = () => {
  const { state, isMobile, toggleSidebar } = useSidebar()
  const collapsed = state === "collapsed"

  // Only render desktop/tablet sidebar here. Mobile uses MobileSidebar.
  if (isMobile) return null

  return (
    <SidebarPrimitive
      collapsible="icon"
      className="border-r border-sidebar-border bg-sidebar transition-all duration-200"
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
        <div className="flex flex-col gap-2 p-4 border-t border-sidebar-border bg-sidebar">
          <SidebarFooter collapsed={collapsed} />
          <div className="flex justify-end">
            <SidebarToggle collapsed={collapsed} onToggle={toggleSidebar} />
          </div>
        </div>
      </div>
    </SidebarPrimitive>
  )
}

export default Sidebar
