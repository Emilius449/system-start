import { Route } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InternalServerErrorComponent } from './pages/internal-server-error/internal-server-error.component';

export default [
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '500',
    component: InternalServerErrorComponent,
  },
] as Route[];
