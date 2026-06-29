import { SidebarTrigger as SidebarTriggerPrimitive, useSidebar } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

interface SidebarTriggerProps {
  className?: string
}

export const SidebarTrigger = ({ className }: SidebarTriggerProps) => {
    const { isMobile } = useSidebar()

    if(!isMobile) return null;
    
  return (
    <SidebarTriggerPrimitive
      className={cn(
        "h-8 w-8 text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shrink-0",
        className
      )}
      aria-label="Toggle sidebar"
    />
  )
}

