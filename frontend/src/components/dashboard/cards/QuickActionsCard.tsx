import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export interface QuickActionsCardProps {
  className?: string
}

export const QuickActionsCard = ({ className }: QuickActionsCardProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Quickly access common features</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <Button variant="outline" className="w-full justify-start ">
            Upload Report
          </Button>
          <Button variant="outline" className="w-full justify-start ">
            Browse Companies
          </Button>
          <Button variant="outline" className="w-full justify-start ">
            Ask AI
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
