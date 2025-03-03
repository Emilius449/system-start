import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-carousel-multi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-multi.component.html',
  styleUrl: './carousel-multi.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselMultiComponent {
  otherInstitution = [
    { imageSrc: './assets/images/emblem.png', name: '', acronym: 'RUWASA' },
    { imageSrc: './assets/images/emblem.png', name: '', acronym: 'EWURA' },
    { imageSrc: './assets/images/emblem.png', name: '', acronym: 'NAME' },
    {
      imageSrc: './assets/images/emblem.png',
      name: '',
      acronym: 'INSTITUTION',
    },
    { imageSrc: './assets/images/emblem.png', name: '', acronym: 'KUWASA' },
    {
      imageSrc: './assets/images/emblem.png',
      name: '',
      acronym: 'MINISTRY OF WATER',
    },
  ];
}
