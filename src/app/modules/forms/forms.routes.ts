import { Route } from '@angular/router';
import { FormsComponent } from './forms.component';
import { FormGroupComponent } from './pages/form-group/form-group.component';
import { FormArrayComponent } from './pages/form-array/form-array.component';
import { FormGroupNestedComponent } from './pages/form-group-nested/form-group-nested.component';
import { FormWizardComponent } from './pages/form-wizard/form-wizard.component';
import { FormMaskComponent } from './pages/form-mask/form-mask.component';
import { FormValidationComponent } from './pages/form-validation/form-validation.component';

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
      {
        path: 'form-wizard',
        component: FormWizardComponent,
      },
      {
        path: 'form-validation',
        component: FormValidationComponent,
      },
      {
        path: 'form-mask',
        component: FormMaskComponent,
      },
    ],
  },
];
