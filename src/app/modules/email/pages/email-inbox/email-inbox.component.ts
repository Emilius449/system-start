import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { Email, EmailService } from '../../email.service';

@Component({
  selector: 'app-email-inbox',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    DatePipe,
    JsonPipe,
  ],
  templateUrl: './email-inbox.component.html',
  styleUrl: './email-inbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailInboxComponent {
  emailService = inject(EmailService);
  emails = this.emailService.emails;
  selectedMail = signal<Email | undefined>(undefined);
  folders: any[] = [
    {
      name: 'Inbox',
    },
    {
      name: 'Sent Mail',
    },
    {
      name: 'Important',
    },
    {
      name: 'Drafts',
    },
    {
      name: 'Tags',
    },
    {
      name: 'Trush',
    },
  ];
  labels: any[] = [
    {
      name: 'Important',
    },
    {
      name: 'Business',
    },
    {
      name: 'Insparation',
    },
  ];

  selectionChange(data: MatSelectionListChange) {
    this.selectedMail.set(data.options[0].value);
  }
}
