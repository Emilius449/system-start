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
        path: 'email',
        loadChildren: () => import('./modules/email/email.routes'),
      },
      {
        path: 'chats',
        loadComponent: () =>
          import('./modules/chats/chats.component').then(
            (comp) => comp.ChatsComponent
          ),
      },
      {
        path: 'advanced-ui',
        loadChildren: () => import('./modules/advanced-ui/advanced-ui.routes'),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./modules/forms/forms.routes').then(
            (mod) => mod.ROUTES_FORMS
          ),
      },
      {
        path: 'editor',
        loadComponent: () =>
          import('./modules/editor/editor.component').then(
            (comp) => comp.EditorComponent
          ),
      },
      {
        path: 'charts-graphs',
        loadChildren: () =>
          import('./modules/charts-graphs/charts-graphs.routes'),
      },
      {
        path: 'tables',
        loadChildren: () => import('./modules/tables/tables.routes'),
      },
      {
        path: 'icons',
        loadComponent: () =>
          import('./modules/icons/icons.component').then(
            (comp) => comp.IconsComponent
          ),
      },
      {
        path: 'special-pages',
        loadChildren: () =>
          import('./modules/special-pages/special-pages.routes'),
      },
      {
        path: 'authentication',
        loadChildren: () =>
          import('./modules/authentication/authentication.routes'),
      },
      {
        path: 'error-page',
        loadChildren: () => import('./modules/error-page/error-page.routes'),
      },
      {
        path: 'user',
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
