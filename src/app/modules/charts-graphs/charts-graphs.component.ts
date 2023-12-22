import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-charts-graphs',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './charts-graphs.component.html',
  styleUrl: './charts-graphs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartsGraphsComponent {}
