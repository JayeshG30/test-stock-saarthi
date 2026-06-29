import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NotificationBellProps {
  className?: string
}

export const NotificationBell = ({ className }: NotificationBellProps) => {
  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className={cn("text-muted-foreground hover:text-foreground shrink-0", className)}
      aria-label="View notifications"
    >
      <Bell className="h-5 w-5" strokeWidth={1.5} />
    </Button>
  )
}

