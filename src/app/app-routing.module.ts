import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./modules/dashboard/dashboard.component').then(
            (mod) => mod.DashboardComponent
          ),
      },
    ],
  },
  // Export as default route
  {
    path: 'tables',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/tables/tables.routes'),
      },
    ],
  },
  // Exported as const
  {
    path: 'forms',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/forms/forms.routes').then(
            (mod) => mod.ROUTES_FORMS
          ),
      },
    ],
  },
  {
    path: 'user',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/user/user.routes'),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
