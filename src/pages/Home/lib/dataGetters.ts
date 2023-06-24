import { http } from 'shared/lib/http';

export function getStores() {
  return http.get('http://localhost:3005/comments');
}

export function getDiscounts() {
  return http.get('http://localhost:3005/posts')
}
