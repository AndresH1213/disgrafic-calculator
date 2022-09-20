import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export function getHeaders() {
  const headersMap = new HttpHeaders();
  headersMap.set('Content-Type', 'application/json');
  headersMap.set('Access-Control-Allow-Methods', '*');
  headersMap.set('Access-Control-Allow-Methods', '*');
  headersMap.set('Access-Control-Allow-Credentials', 'true');
  return {
    headers: headersMap,
  };
}

export function getBaseUrl() {
  return environment.baseUrl;
}
