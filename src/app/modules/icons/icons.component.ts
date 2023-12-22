import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { SvgIconService } from './svg-icon.service';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsComponent {
  icons = this.svgIconService.customIcons.map((item) => item.name);
  constructor(
    private matIconRegistry: MatIconRegistry,
    private svgIconService: SvgIconService,
    private domSanitizer: DomSanitizer
  ) {
    for (const iterator of this.svgIconService.customIcons) {
      this.matIconRegistry.addSvgIcon(
        iterator.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(iterator.url)
      );
    }
  }
}
