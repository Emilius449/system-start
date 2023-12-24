import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SvgIconService } from './svg-icon.service';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [NgFor, MatIconModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsComponent {
  private svgIconService = inject(SvgIconService);
  icons = this.svgIconService.customIcons.map((item) => item.name);
}
