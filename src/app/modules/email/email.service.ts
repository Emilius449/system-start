import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
export type Email = {
  email: string;
  name: string;
  header: string;
  body: string;
  date: string;
  hasAttachment: boolean;
};
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private http = inject(HttpClient);
  getEmails() {
    return this.http.get<Email[]>('/assets/data/email.json');
  }

  emails = toSignal(this.getEmails());
}
