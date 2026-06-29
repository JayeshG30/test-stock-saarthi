
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'

import { RootLayout } from '@/layouts/RootLayout'
import { AuthLayout } from '@/layouts/AuthLayout'
import { DashboardLayout } from '@/layouts/DashboardLayout'

import { ProtectedRoute } from './ProtectedRoute'
import { PublicRoute } from './PublicRoute'

import { LandingPage } from '@/pages/LandingPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { LoginPage } from '@/pages/auth/LoginPage'
import { RegisterPage } from '@/pages/auth/RegisterPage'
import { DashboardOverviewPage } from '@/pages/dashboard/DashboardOverviewPage'
import { CompaniesPage } from '@/pages/companies/CompaniesPage'
import { CompanyDetailsPage } from '@/pages/companies/CompanyDetailsPage'
import { WatchlistsPage } from '@/pages/watchlists/WatchlistsPage'
import { ReportsPage } from '@/pages/reports/ReportsPage'
import { AIPage } from '@/pages/ai/AIPage'
import { ProfilePage } from '@/pages/profile/ProfilePage'

const router = createBrowserRouter([
  {
    path: ROUTES.LANDING,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
    ]
  },
  {
    element: <PublicRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: ROUTES.LOGIN,
            element: <LoginPage />
          },
          {
            path: ROUTES.REGISTER,
            element: <RegisterPage />
          }
        ]
      }
    ]
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: ROUTES.DASHBOARD,
            element: <DashboardOverviewPage />
          },
          {
            path: ROUTES.COMPANIES,
            element: <CompaniesPage />
          },
          {
            path: ROUTES.COMPANY_DETAILS,
            element: <CompanyDetailsPage />
          },
          {
            path: ROUTES.WATCHLISTS,
            element: <WatchlistsPage />
          },
          {
            path: ROUTES.REPORTS,
            element: <ReportsPage />
          },
          {
            path: ROUTES.AI,
            element: <AIPage />
          },
          {
            path: ROUTES.PROFILE,
            element: <ProfilePage />
          }
        ]
      }
    ]
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFoundPage />
  }
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}

