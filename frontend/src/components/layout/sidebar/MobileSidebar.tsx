import { useCallback, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useSidebar } from "@/components/ui/sidebar"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import SidebarHeader from "./SidebarHeader"
import SidebarContent from "./SidebarContent"
import SidebarFooter from "./SidebarFooter"

export const MobileSidebar = () => {
  const { openMobile, setOpenMobile, isMobile } = useSidebar()
  const location = useLocation()

  // Auto-close mobile sidebar when path changes
  useEffect(() => {
    if (openMobile) {
      setOpenMobile(false)
    }
  }, [location.pathname, openMobile, setOpenMobile])

  const handleClose = useCallback(() => {
    setOpenMobile(false)
  }, [setOpenMobile])

  if (!isMobile) return null

  return (
    <Sheet open={openMobile} onOpenChange={setOpenMobile}>
      <SheetContent
        side="left"
        className="w-70 bg-sidebar p-0 text-sidebar-foreground border-r border-sidebar-border [&>button]:text-sidebar-foreground/50 [&>button]:hover:text-sidebar-accent-foreground"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>Mobile navigation sidebar links</SheetDescription>
        </SheetHeader>
        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex flex-col flex-1 min-h-0">
            <SidebarHeader collapsed={false} />
            <SidebarContent onItemClick={handleClose} />
          </div>
          <div className="flex flex-col gap-2 p-4 border-t border-sidebar-border bg-sidebar">
            <SidebarFooter collapsed={false} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
