import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const base_url = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get token() {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        Authorization: this.token,
      },
    };
  }

  saveLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  constructor(private http: HttpClient) {}

  validateToken(token: string): Observable<boolean> {
    return this.http
      .get(`${base_url}/confirm/?token=${token}`, {
        headers: {
          'x-token': this.token,
        },
      })
      .pipe(
        map((data: any) => {
          this.saveLocalStorage(data.token);

          return true;
        }),
        catchError((err) => of(false))
      );
  }
}
