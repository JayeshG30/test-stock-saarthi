import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export const DashboardOverviewPage = () => {
  return (
    <div className="mx-auto max-w-5xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Dashboard
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm">
            Welcome to StockSaarthi AI. Your intelligent stock research co-pilot.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

