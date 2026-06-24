import type { LucideIcon } from 'lucide-react';
import { ROUTES } from '@/constants/routes';

/**
 * Represents the available user roles for role-based access control (RBAC).
 * Kept minimal until the authentication module is fully designed.
 */
export type UserRole = 'user' | 'admin';

/**
 * Type helper mapping to valid routes defined in the application constants.
 * Prevents hardcoding of route paths.
 */
export type RoutePath = typeof ROUTES[keyof typeof ROUTES];

/**
 * Represents a single navigation item in the system.
 * Designed to be consumed by Sidebar, Mobile Sidebar, Breadcrumbs, Command Palette, etc.
 */
export interface NavigationItem {
  /**
   * Stable, persistent unique identifier (lowercase, kebab-case).
   * Used for DOM keys, tracking active state, analytics, and command palette actions.
   */
  readonly id: string;

  /**
   * User-facing display text for the navigation item.
   */
  readonly label: string;

  /**
   * The route path associated with the item, referencing routes in routes.ts.
   */
  readonly path: RoutePath;

  /**
   * Lucide React icon component type for visual representation.
   */
  readonly icon: LucideIcon;

  /**
   * Optional nested child items for multi-level navigation.
   */
  readonly children?: readonly NavigationItem[];

  /**
   * Optional status badge (e.g. "New", "Beta").
   * Intentionally kept as a simple string for now (YAGNI principle).
   * May evolve into a richer object (label + variant) if the UI requires different styles in the future.
   */
  readonly badge?: string;

  /**
   * If true, the item is visually disabled but remains visible in the layout.
   */
  readonly disabled?: boolean;

  /**
   * If true, the item is hidden from the sidebar/navbar rendering but is
   * still available for routing, breadcrumbs, and command palette navigation.
   */
  readonly hidden?: boolean;

  /**
   * The required user role(s) to access this item (RBAC compatibility).
   */
  readonly requiredRole?: UserRole | readonly UserRole[];

  /**
   * Explanatory text for tooltips, search indexing, and the Command Palette.
   * Not intended for visual navigation rendering.
   */
  readonly description?: string;
}

/**
 * Represents a user-facing product area group containing related navigation items.
 */
export interface NavigationGroup {
  /**
   * Unique identifier for the navigation group (lowercase, kebab-case).
   */
  readonly id: string;

  /**
   * User-facing title for the group.
   */
  readonly title: string;

  /**
   * Immutably defined navigation items within this group.
   */
  readonly items: readonly NavigationItem[];
}

export type NavigationConfig = readonly NavigationGroup[];