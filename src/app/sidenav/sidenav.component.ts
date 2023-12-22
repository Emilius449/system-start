import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavLink, SideNavToggle } from './sidenav.model';
import { SidenavLinkComponent } from './sidenav-link/sidenav-link.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, SidenavLinkComponent],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  collapsed = false;
  screenWidth = 0;
  @Output() onToggleSidenav = new EventEmitter<SideNavToggle>();
  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = true;
      this.onToggleSidenav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }
  navData = signal<SideNavLink[]>([
    {
      routerLink: '/home',
      icon: 'ri-dashboard-line',
      label: 'Dashboard',
    },
    {
      routerLink: '/email/#',
      icon: 'ri-dashboard-line',
      label: 'Email',
      children: [
        {
          routerLink: '/email/inbox',
          icon: '',
          label: 'Inbox',
        },
        {
          routerLink: '/email/read',
          icon: '',
          label: 'Read',
        },
        {
          routerLink: '/email/compose',
          icon: '',
          label: 'Compose',
        },
      ],
    },
    {
      routerLink: '/chat',
      icon: 'ri-dashboard-line',
      label: 'Chat',
    },
    {
      routerLink: '/advanced-ui/#',
      icon: 'ri-dashboard-line',
      label: 'Advanced UI',
      children: [
        {
          routerLink: '/advanced-ui/carousel',
          icon: '',
          label: 'Carousel',
        },
        {
          routerLink: '/advanced-ui/alert',
          icon: '',
          label: 'Alert',
        },
      ],
    },
    {
      routerLink: '/forms',
      icon: 'ri-dashboard-line',
      label: 'Form',
      children: [
        {
          routerLink: '/forms/form-group',
          icon: 'ri-dashboard-line',
          label: 'Form Group',
        },
        {
          routerLink: '/forms/form-group-nested',
          icon: 'ri-dashboard-line',
          label: 'Form Group Nested',
        },
        {
          routerLink: '/forms/form-array',
          icon: 'ri-dashboard-line',
          label: 'Form Array',
        },
        {
          routerLink: '/forms/form-wizard',
          icon: 'ri-dashboard-line',
          label: 'Form Wizard',
        },
        {
          routerLink: '/forms/form-validation',
          icon: 'ri-dashboard-line',
          label: 'Form Validation',
        },
        {
          routerLink: '/forms/form-mask',
          icon: 'ri-dashboard-line',
          label: 'Form Mask',
        },
      ],
    },
    {
      routerLink: '/editors',
      icon: 'ri-dashboard-line',
      label: 'Editors',
    },
    {
      routerLink: '/charts-graphs/#',
      icon: 'ri-dashboard-line',
      label: 'Charts & Graphs',
      children: [
        {
          routerLink: '/charts-graphs/apexcharts',
          icon: '',
          label: 'Apex Charts',
        },
        {
          routerLink: '/charts-graphs/chartjs',
          icon: '',
          label: 'Chart Js',
        },
      ],
    },
    {
      routerLink: '/tables/#',
      icon: 'ri-dashboard-line',
      label: 'Tables',
      children: [
        {
          routerLink: '/tables/basic',
          icon: '',
          label: 'Basic',
        },
        {
          routerLink: '/tables/server-side',
          icon: '',
          label: 'Server Side',
        },
      ],
    },
    {
      routerLink: '/icons',
      icon: 'ri-dashboard-line',
      label: 'Icons',
    },
    {
      routerLink: '/special-pages/#',
      icon: 'ri-dashboard-line',
      label: 'Special Pages',
      children: [
        {
          routerLink: '/special-pages/invoice',
          icon: '',
          label: 'Invoice',
        },
        {
          routerLink: '/special-pages/profile',
          icon: '',
          label: 'Profile',
        },
        {
          routerLink: '/special-pages/timeline',
          icon: '',
          label: 'Timeline',
        },
      ],
    },
    {
      routerLink: '/authentication/#',
      icon: 'ri-dashboard-line',
      label: 'Authentication',
      children: [
        {
          routerLink: '/authentication/login',
          icon: '',
          label: 'Login',
        },
        {
          routerLink: '/authentication/register',
          icon: '',
          label: 'Register',
        },
      ],
    },
    {
      routerLink: '/error-page/#',
      icon: 'ri-dashboard-line',
      label: 'Error Page',
      children: [
        {
          routerLink: '/error-page/404',
          icon: '',
          label: '404',
        },
        {
          routerLink: '/error-page/500',
          icon: '',
          label: '500',
        },
      ],
    },
    {
      routerLink: '/user',
      icon: 'ri-dashboard-line',
      label: 'User',
    },
  ]);
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
  closeSidenav(): void {
    this.collapsed = true;
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
  itemSelected(item: SideNavLink): void {
    this.navData.update((value) =>
      value.map((element) => ({
        ...element,
        expanded: item?.routerLink != element?.routerLink ? false : true,
      }))
    );
  }
}
