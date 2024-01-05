import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export type SnackBarConfig = {
  duration?: number;
  horizontalPosition?: 'start' | 'center' | 'end' | 'left' | 'right';
  verticalPosition?: 'top' | 'bottom';
  panelClass?: string;
};
export type NotificationType = 'success' | 'error' | 'warn' | 'info' | null;

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  defaultConfig: SnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  };
  constructor(private readonly snackBar: MatSnackBar) {}

  onOpenSnackBar(
    message: string,
    panelClass: string | null = null,
    config = this.defaultConfig
  ) {
    if (panelClass) {
      config = { ...config, panelClass };
    }
    this.snackBar.open(message, undefined, config);
  }

  success(message: string, panelClass = 'notification-success') {
    this.onOpenSnackBar(message, panelClass);
  }
  error(message: string, panelClass = 'notification-error') {
    this.onOpenSnackBar(message, panelClass);
  }
  warn(message: string, panelClass = 'notification-warn') {
    this.onOpenSnackBar(message, panelClass);
  }
  info(message: string, panelClass = 'notification-info') {
    this.onOpenSnackBar(message, panelClass);
  }
}
