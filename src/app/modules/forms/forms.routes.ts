import { Route } from '@angular/router';
import { FormsComponent } from './forms.component';
import { FormGroupComponent } from './pages/form-group/form-group.component';
import { FormArrayComponent } from './pages/form-array/form-array.component';
import { FormGroupNestedComponent } from './pages/form-group-nested/form-group-nested.component';

export const ROUTES_FORMS: Route[] = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: '',
        redirectTo: 'form-group',
        pathMatch: 'full',
      },
      {
        path: 'form-group',
        component: FormGroupComponent,
      },
      {
        path: 'form-group-nested',
        component: FormGroupNestedComponent,
      },
      {
        path: 'form-array',
        component: FormArrayComponent,
      },
    ],
  },
];
