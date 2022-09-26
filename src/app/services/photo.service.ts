import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getBaseUrl } from './utils';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = getBaseUrl();
  }

  getPresignedUrls(image: any) {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams()
      .set('name', image.name)
      .set('mime', image.type);
    const url = `${this.baseUrl}/image-sign`;
    return this.http.get(url, { params, headers });
  }

  uploadfileAWSS3(fileUploadUrl: string, contentType: string, file: any) {
    const headers = new HttpHeaders({
      'Content-Type': contentType,
      'x-amz-acl': 'public-read',
    });
    const req = new HttpRequest('PUT', fileUploadUrl, file, {
      headers: headers,
    });
    return this.http.request(req);
  }

  deleteFileAWSS3(name: string) {
    const url = `${this.baseUrl}/image/` + name;
    return this.http.delete(url);
  }
}
