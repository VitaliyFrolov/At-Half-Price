import { HTTP } from 'shared/lib/http';

export function getDiscounts() {
  return HTTP.get('http://localhost:3005/discounts')
}
