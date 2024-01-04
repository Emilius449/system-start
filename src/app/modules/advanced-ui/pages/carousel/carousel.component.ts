import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  CarouselFullComponent,
  CarouselImage,
} from 'src/app/shared/components/carousel-full/carousel-full.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselFullComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  carouselImage = signal<CarouselImage[]>([
    {
      imageSrc: 'https://picsum.photos/seed/picsum/900/300',
    },
    {
      imageSrc: 'https://picsum.photos/900/300?random=1',
    },
    {
      imageSrc: 'https://picsum.photos/900/300',
    },
  ]);
}
