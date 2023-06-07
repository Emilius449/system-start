import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavToggle } from './sidenav.model';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
      routerLink: 'home',
      icon: 'ri-dashboard-line',
      label: 'Dashboard',
    },
    {
      routerLink: 'development',
      icon: 'ri-dashboard-line',
      label: 'Development',
    },
    {
      routerLink: 'test',
      icon: 'ri-dashboard-line',
      label: 'Test',
    },
    {
      routerLink: 'production',
      icon: 'ri-dashboard-line',
      label: 'Production',
    },
    {
      routerLink: 'setting',
      icon: 'ri-dashboard-line',
      label: 'Setting',
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
