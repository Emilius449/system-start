import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-internal-server-error',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './internal-server-error.component.html',
  styleUrl: './internal-server-error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InternalServerErrorComponent { }
