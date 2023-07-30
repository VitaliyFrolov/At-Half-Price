import { useMemo } from 'react';
import { usePagedFetch, IPagedFetchOptions, IUsePagedFetchResult } from 'shared/hooks/usePagedFetch'
import { ProductModel } from '../lib/Model';
import { IProductData } from '../types/Data';

export enum ProductsSortType {
  DiscountsFirst = 'df',
}

interface IProductsFilter {
  sort?: ProductsSortType | null;
}

export const useProducts = (options?: IPagedFetchOptions<IProductsFilter>): IUsePagedFetchResult<ProductModel, IProductsFilter> => {
  const state = usePagedFetch<IProductData>(
    'http://localhost:3005/discounts',
    options
  );

  const data = useMemo(() => state.data?.map((discount) => new ProductModel(discount)), [state.data]);

  return {
    ...state,
    data
  };
}