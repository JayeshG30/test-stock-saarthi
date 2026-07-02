import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export interface WatchlistSummaryCardProps {
  className?: string
}

export const WatchlistSummaryCard = ({ className }: WatchlistSummaryCardProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Watchlist Summary</CardTitle>
        <CardDescription>Track companies you're interested in</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground py-2">
          Create your first watchlist to start tracking companies.
        </p>
      </CardContent>
    </Card>
  )
}
