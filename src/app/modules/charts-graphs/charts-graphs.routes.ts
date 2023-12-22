import { Route } from '@angular/router';
import { ChartJsComponent } from './pages/chart-js/chart-js.component';
import { ApexChartsComponent } from './pages/apex-charts/apex-charts.component';

export default [
  {
    path: 'apex-charts',
    component: ApexChartsComponent,
  },
  {
    path: 'chart-js',
    component: ChartJsComponent,
  },
] as Route[];
