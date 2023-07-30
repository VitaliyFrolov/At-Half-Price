import { Reducer, useEffect, useReducer, useRef } from 'react';
import { HTTP } from 'shared/lib/http';

/**
 * Cache store
 */
interface ICache {
  [url: string]: unknown;
}

/**
 * Statuses fetches
 */
export enum FetchStatus {
  Loading = 'loading',
  Error = 'error',
  Success = 'success'
}

/**
 * State of hook
 */
export interface IState<T> {
  data?: T;
  status?: FetchStatus;
  error?: Error;
}

/**
 * Type for action for reducer
 */
enum ActionType {
  Load = 'load',
  Error = 'error',
  Success = 'success'
}

/**
 * Action of loading
 */
interface ILoadAction {
  type: ActionType.Load;
}

/**
 * Action success of loading
 */
interface ISuccessAction {
  type: ActionType.Success;
  payload: unknown;
}

/**
 * Action error of loading
 */
interface IErrorAction {
  type: ActionType.Error;
  payload: Error;
}

/**
 * Actions for state reducer
 */
type TActions = ILoadAction | ISuccessAction | IErrorAction;

/**
 * Options for fetching 
 */
export interface IFetchOptions {
  /**
   * Flag for using cash on time of hook living
   */
  useCache?: boolean;
}

/**
 * Reducer for chanding state of hook
 * @param state previos state
 * @param action dispatched action
 * @returns new state
 */
function reducer<T>(state: IState<T>, action: TActions): IState<T> {
  switch (action.type) {
    default:
    case ActionType.Load:
      return { ...state, status: FetchStatus.Loading}
    case ActionType.Success:
      return { ...state, data: action.payload as T, status: FetchStatus.Success }
    case ActionType.Error:
      return { ...state, status: FetchStatus.Error, error: action.payload }
  }
}

export const useFetch = <TData>(url: string, options?: IFetchOptions): IState<TData> => {
  const {
    useCache = true
  } = options ?? {};
  const cache = useRef<ICache>({});
  const [state, dispatch] = useReducer<Reducer<IState<TData>, TActions>>(reducer<TData>, {});

  useEffect(() => {
    dispatch({ type: ActionType.Load });

    if (useCache && cache.current[url]) {
      dispatch({ type: ActionType.Success, payload: cache.current[url] });
      return;
    }

    const controller = new AbortController();

    HTTP.get<TData>(url, { signal: controller.signal })
      .then((response) => {
        cache.current[url] = response;
        if (controller.signal.aborted) {
          return;
        }
        dispatch({ type: ActionType.Success, payload: response });
      })
      .catch((e) => {
        if (controller.signal.aborted) {
          return;
        }
        dispatch({ type: ActionType.Error, payload: e })
      });

    return () => controller.abort();
  }, [useCache, url]);

  return state;
};
