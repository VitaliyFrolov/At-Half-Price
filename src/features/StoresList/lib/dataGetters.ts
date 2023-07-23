import { AxiosRequestConfig } from 'axios';
import { HTTP } from 'shared/lib/http'
import { IStoreData } from '../types/Data';


export function getStores(page: number = 1, config?: AxiosRequestConfig) {
  return HTTP.get<IStoreData[]>(`http://localhost:3005/stores?page=${page}`, config);
}

export function getStoresCategories() {
  return HTTP.get('http://localhost:3005/stores_categories');
}
