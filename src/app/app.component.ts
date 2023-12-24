import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { SvgIconService } from './modules/icons/svg-icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'system-start';

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
