import { environment } from 'src/environments/environment';

export function getHeaders() {
  return {
    headers: {},
  };
}

export function getBaseUrl() {
  return environment.baseUrl;
}
