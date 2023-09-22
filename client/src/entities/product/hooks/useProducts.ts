import { useMemo } from 'react';
import { usePagedFetch, IPagedFetchOptions, IUsePagedFetchResult } from 'shared/hooks/usePagedFetch'
import { ProductModel } from '../lib/Model';
import { IProductData } from '../types/Data';

export enum ProductsSortType {
  DiscountsFirst = 'df',
}

interface IProductsFilter {
  sort?: ProductsSortType | null;
  storeID?: string;
}

export const useProducts = (options?: IPagedFetchOptions<IProductsFilter>): IUsePagedFetchResult<ProductModel, IProductsFilter> => {
  const state = usePagedFetch<IProductData>(
    'http://localhost:5050/products',
    options
  );

  const data = useMemo(() => state.data?.map((product) => new ProductModel(product)), [state.data]);

  return {
    ...state,
    data
  };
}