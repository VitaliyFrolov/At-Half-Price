import axios from 'axios';

export const http = {
  get<T>(url: string): Promise<T> {
    return axios.get(url).then((response) => response.data);
  },
  post<T, R>(url: string, data: T): Promise<R> {
    return axios.post(url, data).then((response) => response.data)
  }
};
