import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-carousel-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-snap.component.html',
  styleUrl: './carousel-snap.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselSnapComponent implements OnChanges, OnDestroy {
  @ViewChild('slider') slider!: ElementRef;
  unsubscribe$: Subject<void> = new Subject();
  @Input() autoSlide = true;
  @Input() slideInterval = 4500;
  otherInstitution = [
    {
      imageSrc: './assets/images/emblem.png',
      acronym: 'RUWASA',
      isDuplicate: false,
    },
    {
      imageSrc: './assets/images/emblem.png',
      acronym: 'EWURA',
      isDuplicate: false,
    },
    {
      imageSrc: './assets/images/emblem.png',
      acronym: 'NAME',
      isDuplicate: false,
    },
    {
      imageSrc: './assets/images/emblem.png',
      acronym: 'INSTITUTION',
      isDuplicate: false,
    },
    {
      imageSrc: './assets/images/emblem.png',
      acronym: 'KUWASA',
      isDuplicate: false,
    },
    {
      imageSrc: './assets/images/emblem.png',
      acronym: 'MINISTRY OF WATER',
      isDuplicate: false,
    },
  ];
  dublicateList = [
    ...this.otherInstitution,
    ...this.otherInstitution.map((item) => ({
      ...item,
      isDuplicate: true,
    })),
  ];
  ngOnChanges(changes: SimpleChanges): void {
    this.onAutoSlide();
    // if (changes?.['autoSlide'].currentValue) {
    //   this.onAutoSlide();
    // }
    // if (
    //   changes?.['slideInterval']?.currentValue &&
    //   changes?.['autoSlide'].currentValue
    // ) {
    //   this.onAutoSlide();
    // }
  }
  scrollNext(): void {
    const slider = this.slider.nativeElement;
    const itemWidth = slider.querySelector('.slider-card').offsetWidth + 24; // Include gap
    slider.scrollBy({ left: itemWidth, behavior: 'smooth' });
  }

  scrollPrev(): void {
    const slider = this.slider.nativeElement;
    const itemWidth = slider.querySelector('.slider-card').offsetWidth + 24; // Include gap
    slider.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  }
  onScroll() {
    const slider = this.slider.nativeElement;

    if (slider.scrollLeft === 0) {
      // Reset scroll position to the end of the list
      slider.classList.add('no-transition');
      slider.scrollLeft = slider.scrollWidth - 2 * slider.offsetWidth;
      slider.classList.remove('no-transition');
    } else if (
      Math.ceil(slider.scrollLeft) ===
      slider.scrollWidth - slider.offsetWidth
    ) {
      // Reset scroll position to the beginning of the list
      slider.classList.add('no-transition');
      slider.scrollLeft = slider.offsetWidth;
      slider.classList.remove('no-transition');
    }
  }
  onAutoSlide() {
    interval(this.slideInterval)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => {
          this.scrollNext();
        },
      });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
