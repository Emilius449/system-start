import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-email-read',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './email-read.component.html',
  styleUrl: './email-read.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailReadComponent { }
