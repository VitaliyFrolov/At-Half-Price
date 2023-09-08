import { Reducer, useCallback, useEffect, useReducer } from 'react';
import { useFetch, IFetchOptions, IState as IUseFetchState } from 'shared/hooks/useFetch';

export interface IPagedResponse<T> {
  data: T[];
  totalPages: number;
}

export interface IUsePagedFetchResult<T, F = {}> extends IUseFetchState<T[]> {
  hasMore: boolean;
  getNextPage: () => void;
  getPrevPage: () => void;
  getSpecPage: (page: number) => void;
  filter?: F;
  changeFilter: (filter: Partial<F>) => void;
  totalPages?: number;
}

export interface IPagedFetchOptions<F = {}> extends IFetchOptions {
  limit?: number;
  page?: number;
  filter?: F;
}

export interface IState<T, F> {
  currentPage: number;
  limit: number;
  filter?: F;
  data: T[];
}

const enum ActionType {
  ChangeFilter = 'change-filter',
  ChangePage = 'change-page',
  AppendData = 'append-data'
}

interface IChangeFilterAction<F> {
  type: ActionType.ChangeFilter;
  payload: Partial<F>;
}

interface IChangePageAction {
  type: ActionType.ChangePage;
  payload: number;
}

interface IAppendDataAction<T> {
  type: ActionType.AppendData;
  payload: T;
}

type TActions<T, F> = IChangeFilterAction<F> | IChangePageAction | IAppendDataAction<T[]>;

function constructURL(url: string, params: Record<string, unknown> = {}) {
  const queryParams = Object.keys(params)
    .map((paramName) => `${paramName}=${params[paramName]}`)
    .join('&');

  if (!queryParams) {
    return url;
  }

  return `${url}?${queryParams}`;
}

function reducer<T, F>(state: IState<T, F>, action: TActions<T, F>): IState<T, F> {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
    case ActionType.ChangeFilter:
      // fixme: try to avoid using as
      return { ...state, filter: { ...state.filter, ...payload } as F, currentPage: 1, data: [] };
    case ActionType.ChangePage:
      return { ...state, currentPage: payload };
    case ActionType.AppendData:
      return { ...state, data: [...state.data, ...payload]}
  }
}

export const usePagedFetch = <TData, F extends {} = {}>(
  endpoint: string,
  options?: IPagedFetchOptions<F>
): IUsePagedFetchResult<TData, F> => {
  const {
    limit = 10,
    page = 1,
    filter
  } = options ?? {};
  const [state, dispatch] = useReducer<Reducer<IState<TData, F>, TActions<TData, F>>>(reducer<TData, F>, {
    limit, 
    currentPage: page,
    filter,
    data: []
  });
  
  const {
    data: fetched,
    status,
    error
  } = useFetch<IPagedResponse<TData>>(
    constructURL(endpoint, { ...state.filter, page: state.currentPage, limit: state.limit }),
    options
  );

  useEffect(() => {
    if (fetched?.data) {
      dispatch({ type: ActionType.AppendData, payload: fetched.data });
    }
  }, [fetched?.data]);

  const getNextPage = useCallback(
    () => dispatch({ type: ActionType.ChangePage, payload: state.currentPage + 1 }),
    [state.currentPage]
  );

  const getPrevPage = useCallback(
    () => dispatch({ type: ActionType.ChangePage, payload: state.currentPage - 1 }),
    [state.currentPage]
  );

  const getSpecPage = useCallback(
    (page: number) => dispatch({ type: ActionType.ChangePage, payload: page }),
    []
  );

  const changeFilter = useCallback(
    (filter: Partial<F>) => dispatch({ type: ActionType.ChangeFilter, payload: filter }),
    []
  );

  return {
    data: state.data,
    filter: state.filter,
    status,
    error,
    hasMore: Number(fetched?.totalPages) > state.currentPage,
    totalPages: fetched?.totalPages,
    getNextPage,
    getPrevPage,
    getSpecPage,
    changeFilter
  };
};
