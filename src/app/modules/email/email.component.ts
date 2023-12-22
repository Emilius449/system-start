import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailComponent {}
