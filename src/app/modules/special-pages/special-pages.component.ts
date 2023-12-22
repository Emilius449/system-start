import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-special-pages',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './special-pages.component.html',
  styleUrl: './special-pages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialPagesComponent { }
