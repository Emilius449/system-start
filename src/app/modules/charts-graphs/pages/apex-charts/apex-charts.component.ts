import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-apex-charts',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './apex-charts.component.html',
  styleUrl: './apex-charts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApexChartsComponent { }
