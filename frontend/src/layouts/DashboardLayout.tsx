import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Sidebar, MobileSidebar } from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-background">
        <Sidebar />
        <MobileSidebar />
        <SidebarInset className="flex flex-1 flex-col overflow-hidden"> {/* h-full to flex-1 */}
          <div className="sticky top-0 z-40 shrink-0">
            <Navbar />
          </div>
          <main className="flex-1 overflow-y-auto p-4 md:p-8">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

