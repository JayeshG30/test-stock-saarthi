import { SidebarTrigger } from "./SidebarTrigger"
import { Breadcrumb } from "./Breadcrumb"
import { NavbarActions } from "./NavbarActions"
import { cn } from "@/lib/utils"

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <header
      className={cn(
        "flex h-16 w-full items-center justify-between border-b border-border bg-background px-4 md:px-8 backdrop-blur-md",
        className
      )}
    >
      <div className="flex min-w-0 items-center gap-4">
        <SidebarTrigger />
        <Breadcrumb />
      </div>
      <div className="ml-auto">
        <NavbarActions />
      </div>
    </header>
  )
}


