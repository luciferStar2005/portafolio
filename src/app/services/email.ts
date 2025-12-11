import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Email {
  private apiUrl = 'http://localhost:8080/api/email';

  constructor(private http: HttpClient) { }

  sendEmail(to: string, subject: string, message: string): Observable<string> {
    return this.http.post(`${this.apiUrl}/send`, null, {
      
      params: {
        to,
        subject,
        message
      },
      responseType: 'text'
    }) as Observable<string>;
  }
}
