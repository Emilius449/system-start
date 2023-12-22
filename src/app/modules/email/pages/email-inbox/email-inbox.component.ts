import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-email-inbox',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './email-inbox.component.html',
  styleUrl: './email-inbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailInboxComponent { }
