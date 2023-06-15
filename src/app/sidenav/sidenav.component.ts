import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavToggle } from './sidenav.model';
import { SidenavLinkComponent } from './sidenav-link/sidenav-link.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, SidenavLinkComponent],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
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
  navData = [
    {
      routerLink: '/home',
      icon: 'ri-dashboard-line',
      label: 'Dashboard',
    },
    {
      routerLink: '/',
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
          routerLink: '/forms/form-array',
          icon: 'ri-dashboard-line',
          label: 'Form Array',
        },
      ],
    },
    {
      routerLink: '/user',
      icon: 'ri-dashboard-line',
      label: 'User',
    },
  ];

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
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
}
