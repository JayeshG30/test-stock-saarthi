import { ThemeToggle } from "./ThemeToggle"
import { NotificationBell } from "./NotificationBell"
import { UserMenu } from "./UserMenu"
import { cn } from "@/lib/utils"

interface NavbarActionsProps {
  className?: string
}

export const NavbarActions = ({ className }: NavbarActionsProps) => {
  return (
    <div className={cn("flex items-center gap-3 shrink-0", className)}>
      <ThemeToggle />
      <NotificationBell />
      <UserMenu />
    </div>
  )
}
