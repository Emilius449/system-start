import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SideNavToggle } from '../sidenav/sidenav.model';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SidenavComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  collapsed = false;
  screenWidth = 0;
  bodyMdScreenClass = false;
  currentYear = new Date().getFullYear();
  onToggleSidenav(data: SideNavToggle) {
    this.collapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
    this.getBodyClass();
  }

  getBodyClass(): void {
    if (this.collapsed || this.screenWidth <= 768) {
      this.bodyMdScreenClass = true;
    } else {
      this.bodyMdScreenClass = false;
    }
  }
}
