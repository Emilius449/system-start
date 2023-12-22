import { Route } from '@angular/router';
import { EmailInboxComponent } from './pages/email-inbox/email-inbox.component';
import { EmailComposeComponent } from './pages/email-compose/email-compose.component';
import { EmailReadComponent } from './pages/email-read/email-read.component';

export default [
  {
    path: 'inbox',
    component: EmailInboxComponent,
  },
  {
    path: 'compose',
    component: EmailComposeComponent,
  },
  {
    path: 'read',
    component: EmailReadComponent,
  },
] as Route[];
