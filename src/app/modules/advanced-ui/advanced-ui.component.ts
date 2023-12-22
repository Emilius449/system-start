import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-advanced-ui',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './advanced-ui.component.html',
  styleUrl: './advanced-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedUiComponent { }
