import { HTTP } from 'shared/lib/http'

export function getStores(filter?: object) {
  return HTTP.get('http://localhost:3005/stores');
}

export function getStoresCategories() {
  return HTTP.get('http://localhost:3005/stores_categories');
}
