import { useCallback, useEffect, useState } from 'react';
import { useFetch, IFetchOptions, IState } from 'shared/hooks/useFetch';

export interface IPagedResponse<T> {
  data: T[];
  totalPages: number;
}

export interface IUsePagedFetchResult<T> extends IState<T[]> {
  hasMore: boolean;
  getNextPage: () => void;
  getPrevPage: () => void;
  getSpecPage: (page: number) => void;
  totalPages?: number;
}

export interface IPagedFetchOptions extends IFetchOptions {
  limit?: number;
  page?: number
}

export interface IPagedFetchContext {
  page: number;
  limit: number;
}

export const usePagedFetch = <TData>(
  urlConstructor: (context: IPagedFetchContext) => string,
  options?: IPagedFetchOptions
): IUsePagedFetchResult<TData> => {
  const {
    limit = 10,
    page = 1
  } = options ?? {};
  const [data, setData] = useState<TData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(page);
  const {
    data: fetched,
    status,
    error
  } = useFetch<IPagedResponse<TData>>(urlConstructor({ limit, page: currentPage }), options);

  useEffect(() => {
    // fixme: one extra render
    setData((prev) => [
      ...prev,
      ...fetched?.data ?? []
    ]);
  }, [fetched?.data]);

  const getNextPage = useCallback(() => setCurrentPage((prev) => prev + 1), []);
  const getPrevPage = useCallback(() => setCurrentPage((prev) => prev - 1), []);
  const getSpecPage = useCallback((page: number) => setCurrentPage(page), []);

  return {
    data,
    status,
    error,
    hasMore: Number(fetched?.totalPages) > currentPage,
    totalPages: fetched?.totalPages,
    getNextPage,
    getPrevPage,
    getSpecPage
  };
}