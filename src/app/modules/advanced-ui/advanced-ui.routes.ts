import { Route } from '@angular/router';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { AlertsComponent } from './pages/alerts/alerts.component';

export default [
  {
    path: 'carousel',
    component: CarouselComponent,
  },
  {
    path: 'alerts',
    component: AlertsComponent,
  },
] as Route[];
