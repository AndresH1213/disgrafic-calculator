import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getHeaders, getBaseUrl } from './utils';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  headers: any;
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.headers = getHeaders();
    this.baseUrl = getBaseUrl();
  }

  getProducts() {
    const url = `${this.baseUrl}/products`;
    return this.http.get(url, this.headers);
  }
}
