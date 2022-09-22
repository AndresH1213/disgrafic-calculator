import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getHeaders, getBaseUrl } from './utils';
import { Product } from '../interfaces/Product';
import { listClients } from '../interfaces/Client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  headers: any;
  baseUrl: string;
  constructor(private http: HttpClient) {
    // this.headers = getHeaders();
    this.baseUrl = getBaseUrl();
  }

  getProducts() {
    const url = `${this.baseUrl}/product`;
    return this.http.get(url);
  }

  getProduct(id: string) {
    const url = `${this.baseUrl}/product/` + id;
    return this.http.get(url);
  }

  createProduct(product: Product) {
    const url = `${this.baseUrl}/product`;
    return this.http.post(url, { ...product });
  }

  updateProduct(id: string, attrs: any) {
    const url = `${this.baseUrl}/product/` + id;
    return this.http.put(url, attrs);
  }

  deleteProduct(id: string) {
    const url = `${this.baseUrl}/product/` + id;
    return this.http.delete(url);
  }
}
