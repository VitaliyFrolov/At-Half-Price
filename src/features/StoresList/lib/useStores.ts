import { IPagedFetchOptions, IUsePagedFetchResult, usePagedFetch } from 'shared/hooks/usePagedFetch';
import StoreModel from './StoreModel';
import { IStoreData } from '../types/Data';
import { useMemo } from 'react';

/**
 * Hook for fetching collection of stores
 * @param options options of fetching
 * @returns stores models
 */
const useStores = (options?: IPagedFetchOptions): IUsePagedFetchResult<StoreModel> => {
  const state = usePagedFetch<IStoreData>(
    (context) => `http://localhost:3005/stores?page=${context.page}&limit=${context.limit}`,
    options
  );

  const data = useMemo(() => state.data?.map((store) => new StoreModel(store)), [state.data]);

  return {
    ...state,
    data
  };
};

export default useStores;
