import { Route } from '@angular/router';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';

export default [
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'timeline',
    component: TimelineComponent,
  },
] as Route[];
