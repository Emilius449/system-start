import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  /*  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  }, */
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./modules/dashboard/dashboard.component').then(
            (mod) => mod.DashboardComponent
          ),
      },
      {
        path: 'tables',
        loadChildren: () => import('./modules/tables/tables.routes'),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./modules/forms/forms.routes').then(
            (mod) => mod.ROUTES_FORMS
          ),
      },
      {
        path: 'user',
        loadChildren: () => import('./modules/user/user.routes'),
      },
    ],
  },
  // Export as default route
  // Exported as const
  // {
  //   path: 'tables',
  //   component: LayoutComponent,
  //   children: [],
  // },
  // {
  //   path: 'forms',
  //   component: LayoutComponent,
  //   children: [],
  // },
  // {
  //   path: 'user',
  //   component: LayoutComponent,
  //   children: [],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
