import { IPagedFetchOptions, IUsePagedFetchResult, usePagedFetch } from 'shared/hooks/usePagedFetch';
import StoreModel from './StoreModel';
import { IStoreData } from '../types/Data';
import { useMemo } from 'react';

interface IStoresFetchOptions extends IPagedFetchOptions {
  category?: string;
}

/**
 * Hook for fetching collection of stores
 * @param options options of fetching
 * @returns stores models
 */
const useStores = (options?: IStoresFetchOptions): IUsePagedFetchResult<StoreModel> => {
  const state = usePagedFetch<IStoreData>(
    // fixme: when change category new data add to prev, for some filter need to prevent cached items
    (context) => `http://localhost:3005/stores?page=${context.page}&limit=${context.limit}&category=${options?.category}`,
    options
  );

  const data = useMemo(() => state.data?.map((store) => new StoreModel(store)), [state.data]);

  return {
    ...state,
    data
  };
};

export default useStores;
