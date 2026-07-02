import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export interface RecentReportsCardProps {
  className?: string
}

export const RecentReportsCard = ({ className }: RecentReportsCardProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Reports</CardTitle>
        <CardDescription>Latest annual reports uploaded for analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground py-2">
          No reports uploaded yet.
        </p>
      </CardContent>
    </Card>
  )
}
