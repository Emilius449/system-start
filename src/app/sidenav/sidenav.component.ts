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
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, SidenavLinkComponent, MatIconModule],
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
      icon: 'm_tech_dashboard',
      label: 'Dashboard',
    },
    {
      routerLink: '/email/#',
      icon: 'm_tech_mail',
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
      routerLink: '/chats',
      icon: 'm_tech_chat',
      label: 'Chat',
    },
    {
      routerLink: '/advanced-ui/#',
      icon: 'm_tech_stack',
      label: 'Advanced UI',
      children: [
        {
          routerLink: '/advanced-ui/carousel',
          icon: '',
          label: 'Carousel',
        },
        {
          routerLink: '/advanced-ui/alerts',
          icon: '',
          label: 'Alerts',
        },
      ],
    },
    {
      routerLink: '/forms',
      icon: 'm_tech_file_text',
      label: 'Form',
      children: [
        {
          routerLink: '/forms/form-group',
          icon: '',
          label: 'Form Group',
        },
        {
          routerLink: '/forms/form-group-nested',
          icon: '',
          label: 'Form Group Nested',
        },
        {
          routerLink: '/forms/form-array',
          icon: '',
          label: 'Form Array',
        },
        {
          routerLink: '/forms/form-wizard',
          icon: '',
          label: 'Form Wizard',
        },
        {
          routerLink: '/forms/form-validation',
          icon: '',
          label: 'Form Validation',
        },
        {
          routerLink: '/forms/form-mask',
          icon: '',
          label: 'Form Mask',
        },
      ],
    },
    {
      routerLink: '/editor',
      icon: 'm_tech_text_block',
      label: 'Editor',
    },
    {
      routerLink: '/charts-graphs/#',
      icon: 'm_tech_pie_chart',
      label: 'Charts & Graphs',
      children: [
        {
          routerLink: '/charts-graphs/apex-charts',
          icon: '',
          label: 'Apex Charts',
        },
        {
          routerLink: '/charts-graphs/chart-js',
          icon: '',
          label: 'Chart Js',
        },
      ],
    },
    {
      routerLink: '/tables/#',
      icon: 'm_tech_table',
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
      icon: 'm_tech_location',
      label: 'Icons',
    },
    {
      routerLink: '/special-pages/#',
      icon: 'm_tech_pages',
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
      icon: 'm_tech_lock',
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
      icon: 'm_tech_spam',
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
      icon: 'm_tech_profile',
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
