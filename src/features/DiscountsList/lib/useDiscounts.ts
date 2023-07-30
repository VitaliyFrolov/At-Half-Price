import { IPagedFetchOptions, usePagedFetch } from 'shared/hooks/usePagedFetch'
import { IDiscountData } from '../types/Data';
import { useMemo } from 'react';
import { DiscountModel } from './DiscountModel';

enum DiscountsSortType {
  MostValueableFirst = 'mvf',
}

interface IDiscountsFetchOptions extends IPagedFetchOptions {
  sort?: DiscountsSortType;
}

export const useDiscounts = (options?: IDiscountsFetchOptions) => {
  const {
    sort = DiscountsSortType.MostValueableFirst
  } = options ?? {};
  const state = usePagedFetch<IDiscountData>(
    (context) => `http://localhost:3005/discounts?page=${context.page}&limit=${context.limit}&sort=${sort}`,
    options
  );

  const data = useMemo(() => state.data?.map((discount) => new DiscountModel(discount)), [state.data]);

  return {
    ...state,
    data
  };
}