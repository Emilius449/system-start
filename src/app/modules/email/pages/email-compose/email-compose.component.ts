import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-email-compose',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './email-compose.component.html',
  styleUrl: './email-compose.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailComposeComponent { }
