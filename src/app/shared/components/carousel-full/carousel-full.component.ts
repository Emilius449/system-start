import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Subject, interval, takeUntil } from 'rxjs';
export interface CarouselImage {
  imageSrc: string;
  imageAlt?: string;
}
@Component({
  selector: 'app-carousel-full',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './carousel-full.component.html',
  styleUrl: './carousel-full.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselFullComponent implements OnChanges, OnDestroy {
  unsubscribe$: Subject<void> = new Subject();

  @Input({ required: true }) carouselImage: CarouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3500;
  selectedIndex = signal(0);
  images = signal<CarouselImage[]>([]);

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    if (changes?.['autoSlide']) {
      this.onAutoSlide();
    }
    if (changes?.['slideInterval'] && changes?.['autoSlide'].currentValue) {
      this.onAutoSlide();
    }
    if (changes?.['carouselImage'].currentValue) {
      this.images.set(this.carouselImage);
    }
  }
  changeIndex(index: number) {
    this.selectedIndex.set(index);
  }
  onPrevClick() {
    switch (this.selectedIndex()) {
      case 0:
        this.selectedIndex.set(this.images().length - 1);
        break;
      default:
        this.selectedIndex.update((value) => value - 1);
        break;
    }
  }
  onNextClick() {
    const lastImageIndex = this.images().length - 1;
    switch (this.selectedIndex()) {
      case lastImageIndex:
        this.selectedIndex.set(0);
        break;
      default:
        this.selectedIndex.update((value) => value + 1);
        break;
    }
  }
  onAutoSlide() {
    interval(this.slideInterval)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => {
          this.onNextClick();
        },
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
