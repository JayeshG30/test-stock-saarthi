import { 
  LayoutDashboard, 
  Building2, 
  FileText, 
  Bot, 
  Bookmark, 
  User 
} from 'lucide-react';
import { ROUTES } from '@/constants/routes';
import type { NavigationConfig } from '@/types/navigation.types';

/**
 * The single source of truth for the application's navigation structure.
 * Organizes navigation items into logical, user-facing groups.
 * Designed to support Sidebar, Mobile Sidebar, Breadcrumbs, Command Palette,
 * Route Search, Analytics, and RBAC without data model modifications.
 * 
 * Implements strict immutability for application configuration safety.
 */
export const NAVIGATION_CONFIG = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        path: ROUTES.DASHBOARD,
        icon: LayoutDashboard,
        description: 'View investment metrics, market summaries, and portfolio performance overview.',
      },
    ],
  },
  {
    id: 'research',
    title: 'Research',
    items: [
      {
        id: 'companies',
        label: 'Companies',
        path: ROUTES.COMPANIES,
        icon: Building2,
        description: 'Search, filter, and inspect financial metrics of listed companies.',
      },
      {
        id: 'company-details',
        label: 'Company Details',
        path: ROUTES.COMPANY_DETAILS,
        icon: Building2,
        hidden: true,
        description: 'View comprehensive insights, charts, and uploaded reports for a selected company.',
      },
      {
        id: 'annual-reports',
        label: 'Annual Reports',
        path: ROUTES.REPORTS,
        icon: FileText,
        description: 'Upload and extract risk summaries and opportunities from company financial PDFs.',
      },
    ],
  },
  {
    id: 'ai',
    title: 'AI',
    items: [
      {
        id: 'ai-assistant',
        label: 'AI Assistant',
        path: ROUTES.AI,
        icon: Bot,
        description: 'Ask deep financial questions, simplify concepts, and get chat-based stock insights.',
      },
    ],
  },
  {
    id: 'personal',
    title: 'Personal',
    items: [
      {
        id: 'watchlists',
        label: 'Watchlists',
        path: ROUTES.WATCHLISTS,
        icon: Bookmark,
        description: 'Monitor stock prices, sentiment trends, and performance updates of bookmarked companies.',
      },
      {
        id: 'profile',
        label: 'User Profile',
        path: ROUTES.PROFILE,
        icon: User,
        description: 'Manage your account settings and personal preferences.',
      },
    ],
  },
] as const satisfies NavigationConfig;
