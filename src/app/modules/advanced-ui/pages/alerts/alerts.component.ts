import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  NotificationService,
  NotificationType,
} from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertsComponent {
  notificationService = inject(NotificationService);
  notificationType: NotificationType = null;
  openSnackBar(notificationType: NotificationType = null) {
    switch (notificationType) {
      case 'success':
        this.notificationService.success('Open success notification');
        break;
      case 'error':
        this.notificationService.error('Open error notification');
        break;
      case 'warn':
        this.notificationService.warn('Open warn notification');
        break;
      case 'info':
        this.notificationService.info('Open info notification');
        break;
      default:
        this.notificationService.onOpenSnackBar('Open default notification');
        break;
    }
  }
}
