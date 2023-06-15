import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
export const slideInOut = trigger('slideInOutAnimation', [
  state('void', style({ height: 0, opacity: 0 })),
  state('*', style({ height: '*', opacity: 1 })),
  transition('void <=> *', [animate('0.25s')]),
]);
