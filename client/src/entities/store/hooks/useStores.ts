import { useMemo } from 'react';
import { usePagedFetch, IPagedFetchOptions, IUsePagedFetchResult } from 'shared/hooks/usePagedFetch';
import StoreModel from '../lib/Model';
import { IStoreData } from '../types/Data';

interface IStoresFilter {
  category?: string;
}

/**
 * Hook for fetching collection of stores
 * @param options options of fetching
 * @returns stores models
 */
export const useStores = (options?: IPagedFetchOptions<IStoresFilter>): IUsePagedFetchResult<StoreModel, IStoresFilter> => {
  const state = usePagedFetch<IStoreData, IStoresFilter>('http://localhost:5050/stores', options);

  const data = useMemo(() => state.data?.map((store) => new StoreModel(store)), [state.data]);

  return {
    ...state,
    data
  };
};

