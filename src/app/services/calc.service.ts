import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormObject } from '../models/Form';
import { getBaseUrl, getHeaders } from './utils';

@Injectable({
  providedIn: 'root',
})
export class CalcService {
  headers: any;
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.headers = getHeaders();
    this.baseUrl = getBaseUrl();
  }

  calculate(form: FormObject) {
    const url = `${this.baseUrl}/calculate`;
    let object = { form };
    return this.http.post(url, object, this.headers);
  }

  getMaterials() {
    return this.http.get(this.baseUrl);
  }

  getSizes() {
    let sizes = [
      { label: 'No aplica', divider: 0 },
      { label: '17.5x12.5 cms (1/32)', divider: 32 },
      { label: '20x14 cms (1/25)', divider: 25 },
      { label: '22x14 cms (1/22)', divider: 22 },
      { label: '25x14 cms (1/20)', divider: 20 },
      { label: '23x16.5 cms (1/18)', divider: 18 },
      { label: '25x17.5 cms (1/16)', divider: 16 },
      { label: '20x23 cms (1/15)', divider: 15 },
      { label: '25x23 cms (1/12)', divider: 12 },
      { label: '30x20 cms (1/11)', divider: 11 },
      { label: '22x28 cms (1/10)', divider: 10 },
      { label: '23x33 cms (1/9)', divider: 9 },
      { label: '25x35 cms (1/8)', divider: 8 },
      { label: '35x33 cms (1/6)', divider: 6 },
      { label: '48x28 cms (1/5)', divider: 5 },
      { label: '50x35 cms (1/4)', divider: 4 },
      { label: '70x33 cms (1/3)', divider: 3 },
      { label: '70x50 cms (1/2)', divider: 2 },
      { label: '70x100 cms (1)', divider: 1 },
    ];
    return sizes;
  }
}
