import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut, Settings, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface UserMenuProps {
  className?: string
}

export const UserMenu = ({ className }: UserMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer shrink-0",
            className
          )}
          aria-label="User menu"
        >
          <Avatar size="default">
            <AvatarImage alt="User avatar" />
            <AvatarFallback className="bg-muted text-muted-foreground">
              <User className="h-4 w-4" strokeWidth={1.5} />
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-popover border border-border text-foreground">
        <DropdownMenuItem className="cursor-pointer gap-2 py-2 focus:bg-accent focus:text-accent-foreground">
          <User className="h-4 w-4" strokeWidth={1.5} />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer gap-2 py-2 focus:bg-accent focus:text-accent-foreground">
          <Settings className="h-4 w-4" strokeWidth={1.5} />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-border" />
        <DropdownMenuItem className="cursor-pointer gap-2 py-2 text-destructive focus:bg-destructive/10 focus:text-destructive dark:focus:bg-destructive/20">
          <LogOut className="h-4 w-4" strokeWidth={1.5} />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

