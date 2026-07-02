import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export interface ActivityCardProps {
  className?: string
}

export const ActivityCard = ({ className }: ActivityCardProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your recent activity across StockSaarthi AI</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground py-2">
          Recent activity will appear here.
        </p>
      </CardContent>
    </Card>
  )
}
