import { Route } from '@angular/router';
import { TablesComponent } from './tables.component';
import { TableBasicComponent } from './pages/table-basic/table-basic.component';
import { TableServerSideComponent } from './pages/table-server-side/table-server-side.component';

export default [
  {
    path: '',
    component: TablesComponent,
    children: [
      {
        path: '',
        redirectTo: 'basic',
        pathMatch: 'full',
      },
      {
        path: 'basic',
        component: TableBasicComponent,
      },
      {
        path: 'server-side',
        component: TableServerSideComponent,
      },
    ],
  },
] as Route[];
