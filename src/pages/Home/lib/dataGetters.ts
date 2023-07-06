import { http } from 'shared/lib/http';

export function getDiscounts() {
  return http.get('http://localhost:3005/discounts')
}

export function getStores(url: string = 'http://localhost:3005/stores') {
  return http.get(`${url}`)
}
