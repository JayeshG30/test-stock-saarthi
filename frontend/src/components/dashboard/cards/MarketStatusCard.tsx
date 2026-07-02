import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export interface MarketStatusCardProps {
  className?: string
}

export const MarketStatusCard = ({ className }: MarketStatusCardProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Market Status</CardTitle>
        <CardDescription>Overview of Indian market indices</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground py-2">
          Market data will appear once live market integration is configured.
        </p>
      </CardContent>
    </Card>
  )
}
