import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-chart-js',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './chart-js.component.html',
  styleUrl: './chart-js.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartJsComponent { }
