export interface SideNavToggle {
  collapsed: boolean;
  screenWidth: number;
}
export interface SideNavLink {
  routerLink?: string;
  icon?: string;
  label: string;
  children?: SideNavLink[];
  expanded?: boolean;
}
