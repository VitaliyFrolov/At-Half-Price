import axios, { AxiosPromise } from 'axios';

export class HTTP {
  static get<T>(url: string): Promise<T> {
    return HTTP._handleRequest(axios.get(url));
  }

  static post<T, R>(url: string, data: T): Promise<R> {
    return HTTP._handleRequest(axios.post(url, data));
  }

  private static _handleRequest(request: AxiosPromise) {
    return request
      .then((response) => response.data)
      .catch((error) => error)
  }
};
