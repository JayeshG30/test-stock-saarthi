import { PageContainer, PageHeader, PageSection } from "@/components/common/page"
import {
  DashboardGrid,
  QuickActionsCard,
  MarketStatusCard,
  WatchlistSummaryCard,
  RecentReportsCard,
  ActivityCard,
} from "@/components/dashboard"

export const DashboardOverviewPage = () => {
  return (
    <PageContainer>
      <PageHeader
        title="Dashboard"
        description="Welcome to StockSaarthi AI. Your intelligent stock research co-pilot."
      />
      <PageSection>
        <DashboardGrid>
          <QuickActionsCard />
          <MarketStatusCard />
          <WatchlistSummaryCard />
          <RecentReportsCard />
          <div className="md:col-span-2">
            <ActivityCard />
          </div>
        </DashboardGrid>
      </PageSection>
    </PageContainer>
  )
}
