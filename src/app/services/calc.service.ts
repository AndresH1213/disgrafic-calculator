import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class CalcService {
  get headers() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Accept: '*/*',
      }),
    };
  }

  constructor(private http: HttpClient) {}

  getMaterials() {
    const url = `${baseUrl}/products`;
    return this.http.get(url, this.headers);
  }

  getClients() {
    const url = `${baseUrl}/clients`;
    return this.http.get(url, this.headers);
  }
}
